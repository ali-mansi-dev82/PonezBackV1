const { Router } = require("express");
const { AuthRouters } = require("./auth/auth.routes");
const { UserRouters } = require("./user/user.routes");
const { PostRouters } = require("./post/post.routes");
const { CategoryRouters } = require("./category/category.routes");
const { ImageRouter } = require("./image/image.routes");
const { OptionRouter } = require("./option/option.routes");

const router = Router();

router.use("/auth", AuthRouters);
router.use("/user", UserRouters);
router.use("/post", PostRouters);
router.use("/category", CategoryRouters);
router.use("/image", ImageRouter);
router.use("/option", OptionRouter);

module.exports = {
  MainRouters: router,
};
