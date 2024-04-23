const { Router } = require("express");
const UserController = require("./user.controller");
const Authorization = require("../../common/guard/authorization.guard");
const router = Router();

router.get("/info", Authorization, UserController.information);

module.exports = {
  UserRouters: router,
};
