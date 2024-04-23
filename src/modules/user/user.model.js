const { default: mongoose } = require("mongoose");

const OTPSchema = new mongoose.Schema({
    code: {type: String, required: true, default: undefined, maxlength: 6, minlength: 6},
    expiresIn: {type: Number, required: false, default: 0}
})

const UserSchema = new mongoose.Schema({
    fullname: { type : String, required : false } ,
    mobile: {type: String, required: true, unique: true},
    otp: {type: OTPSchema},
    verfiedMobile: {type: Boolean, default: false, required: true},
    accessToken: {type: String, default: ''}
}, {
    timestamps: true
})

const userModel = mongoose.model('verification_user', UserSchema)

module.exports = userModel