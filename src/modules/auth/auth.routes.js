const { Router } = require("express");
const Controller = require("./auth.controller");
const router = Router();

router.post("/login", Controller.login);

module.exports = {
  AuthRouters: router,
};
