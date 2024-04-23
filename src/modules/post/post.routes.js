const { Router } = require("express");
const Controller = require("./post.controller");
const Authorization = require("../../common/guard/authorization.guard");
const router = Router();

router.post("/", Controller.find);
router.get("/:slug", Controller.findbySlug);
router.post("/create", Authorization, Controller.create);
router.put("/update/:id", Authorization, Controller.update);
router.delete("/:id", Controller.delete);

module.exports = {
  PostRouters: router,
};
