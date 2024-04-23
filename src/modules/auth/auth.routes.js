const { Router } = require("express");
const Controller = require("./auth.controller");
const router = Router();

router.post("/send-otp", Controller.sendOTP);
router.post("/check-otp", Controller.checkOTP);

module.exports = {
  AuthRouters: router,
};
