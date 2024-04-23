const { Router } = require("express");
const authController = require("./auth.controller");
const Authorization = require("../../common/guard/authorization.guard");
const router = Router();

router.post('/send-otp', authController.sendOTP)
router.post('/check-otp', authController.checkOTP)

module.exports = {
    AuthRouters: router
}