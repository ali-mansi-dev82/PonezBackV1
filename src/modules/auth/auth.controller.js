// import autoBind from "auto-bind"
const CookieNames = require("../../common/constant/cookieNames.enum")
const messages = require("../messages")
const AuthService = require("./auth.service")

class AuthController{
    async sendOTP(req, res, next){
        try {
            const {mobile} = req.body
            const result = await AuthService.sendOTP(mobile)
            res.status(result.statusCode ?? 201).send(result)
        } catch (error) {
            next(error)
        }
    }
    async checkOTP(req, res, next){
        try {
            const { mobile, code } = req.body
            const result = await AuthService.checkOTP(mobile, code, res)
            res.status(result.statusCode ?? 201).send(result)
        } catch (error) {
            next(error)
        }
    }
    async logout(req, res, next){
        try {
            return res.clearCookie(CookieNames.accessToken).status(200).send({
                statusCode: 200
            })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = new AuthController