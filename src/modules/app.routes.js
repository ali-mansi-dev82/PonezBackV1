const { Router } = require("express");
const { AuthRouters } = require("./auth/auth.routes");
const { UserRouters } = require("./user/user.routes");
const { PostRouters } = require("./post/post.routes");
const { CategoryRouters } = require("./category/category.routes");
const { ImageRouter } = require("./image/image.routes");
const { OptionRouter } = require("./option/option.routes");
const { StateRouter } = require("./modules/state/state.routes");
const { CityRouter } = require("./modules/city/city.routes");
const { BookmarkRouter } = require("./modules/bookmark/bookmark.routes");

const router = Router();

router.use("/auth", AuthRouters);
router.use("/user", UserRouters);
router.use("/post", PostRouters);
router.use("/category", CategoryRouters);
router.use("/image", ImageRouter);
router.use("/option", OptionRouter);
router.use("/state", StateRouter);
router.use("/city", CityRouter);
router.use("/bookmark", BookmarkRouter);

module.exports = {
  MainRouters: router,
};
