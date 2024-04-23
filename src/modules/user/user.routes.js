const { Router } = require("express");
const UserController = require("./user.controller");
const Authorization = require("../../common/guard/authorization.guard");
const router = Router();

router.get("/info", Authorization, UserController.information);
router.get("/my-post", Authorization, UserController.myPost);
router.get("/my-saved", Authorization, UserController.mySaved);
router.get("/my-note", Authorization, UserController.myNote);
router.get("/my-seen", Authorization, UserController.mySeen);

module.exports = {
  UserRouters: router,
};
