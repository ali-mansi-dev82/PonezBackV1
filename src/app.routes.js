const { Router } = require("express");
const { AuthRouters } = require("./modules/auth/auth.routes");
const { UserRouters } = require("./modules/user/user.routes");
const { CategoryRouters } = require("./modules/category/category.routes");
const { OptionRouter } = require("./modules/option/option.routes");
const { PostRouters } = require("./modules/post/post.routes");
const { ImageRouter } = require("./modules/image/image.routes");
const { StateRouter } = require("./modules/state/state.routes");
const { CityRouter } = require("./modules/city/city.routes");
const { BookmarkRouter } = require("./modules/bookmark/bookmark.routes");
const { NoteRouter } = require("./modules/note/note.routes");
const { SpecialRouter } = require("./modules/specials/specials.routes");

const router = Router();

router.use("/auth", AuthRouters);
router.use("/user", UserRouters);
router.use("/post", PostRouters);
router.use("/category", CategoryRouters);
router.use("/option", OptionRouter);
router.use("/image", ImageRouter);
router.use("/state", StateRouter);
router.use("/city", CityRouter);
router.use("/bookmark", BookmarkRouter);
router.use("/note", NoteRouter);
router.use("/special", SpecialRouter);

module.exports = {
  MainRouters: router,
};
