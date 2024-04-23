const NodeEnv = require("../../common/constant/env.enum");
const userModel = require("../user/user.model");
const { makeCode } = require("../utils/random");
const { signToken } = require("./auth.utils");
const createError = require('http-errors')
class AuthService{
    #model
    constructor(){
        this.#model = userModel
    }
    async sendOTP(mobile){
        try {
            const checkExistByMobile = await this.checkExistByMobile(mobile)
            if (checkExistByMobile) {
                return this.sendCode(mobile)
            }else{
                await userModel.create({
                    mobile,
                    otp: {
                        code: '000000',
                        expiresIn: 0
                    }
                })
                return this.sendCode(mobile)
            }
        } catch (error) {
            return {
                code: error?.code,
                message: error?.message
            }
        }
    }
    async sendCode(mobile){
        const user = await userModel.findOne({mobile})
        if (!user) return
        const now = Date.now()
        if (user?.otp?.expiresIn > now) return { statusCode:400, message: ' last code not expire'}
        const code = await makeCode(6)
        
        const expiresIn = (Date.now() + (60 * 1000 * 2))
        await user.updateOne({
            otp: {
                code,
                expiresIn
            }
        })
        this.sendSMS(code)
        return {
            statusCode: 200,
            message: 'code sended successfull',
            expiresIn
        }
        
    }
    async sendSMS(code){
        console.log(`your code is ${code}`);
    }
    async checkOTP(mobile, code, res){
        try {
            const now = Date.now()
            const user = await userModel.findOne({mobile})
            if (user && typeof user ==='object') {
                if (user.otp.code === code) {
                    if (user?.otp?.expiresIn > now) {
                        const token = await signToken(
                            {mobile, id: user?.id}
                        )
                        user.verfiedMobile = true;
                        user.accessToken = token;
                        user.save();
                        res.cookie('access_token', token, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV === NodeEnv
                        })
            
                        return {
                            token,
                            statusCode: 200,
                            message: "login successful"
                        }
                    }
                    return  {
                        statusCode: 400,
                        message: 'time out of code'
                    }
                }else{
                    return {
                        statusCode: 400,
                        message: "code is  notCorrect"
                    }
                }
            }
            return {
                statusCode: 400,
                message: "mobile not valid"
            }
            
        } catch (error) {
            return {
                code: error?.code,
                message: error?.message
            }
        }
    }
    async checkExistByMobile(mobile){
        const user = await userModel.findOne({mobile})
        if (user === null) {
            return false;
        }
        return true;
    }
}
module.exports = new AuthService()