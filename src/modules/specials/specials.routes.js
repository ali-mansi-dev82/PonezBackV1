const { Router } = require("express");
const Controller = require("./specials.controller");
const Authorization = require("../../common/guard/authorization.guard");

const router = Router();
router.get("/", Controller.find);
router.get("/my", Authorization, Controller.myPost);
router.post("/create", Authorization, Controller.create);
router.delete("/delete/:postId", Authorization, Controller.deleteById);

module.exports = {
  SpecialRouter: router,
};
