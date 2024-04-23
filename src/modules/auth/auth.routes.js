const { Router } = require("express");
const authController = require("./auth.controller");
const Authorization = require("../../common/guard/authorization.guard");
const router = Router();

router.post("/send-otp", authController.sendOTP);
router.post("/check-otp", authController.checkOTP);
router.post("/logout", Authorization, authController.logout);

module.exports = {
  AuthRouters: router,
};
