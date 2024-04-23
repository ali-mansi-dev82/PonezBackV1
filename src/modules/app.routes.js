const { Router } = require("express");
const { AuthRouters } = require("./auth/auth.routes");
const { UserRouters } = require("./user/user.routes");
const { PostRouters } = require("./post/post.routes");
const { CategoryRouters } = require("./category/category.routes");
const { StateRouter } = require("./modules/state/state.routes");
const { CityRouter } = require("./modules/city/city.routes");

const router = Router();

router.use("/auth", AuthRouters);
router.use("/user", UserRouters);
router.use("/post", PostRouters);
router.use("/category", CategoryRouters);
router.use("/state", StateRouter);
router.use("/city", CityRouter);

module.exports = {
  MainRouters: router,
};
