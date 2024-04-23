const { Router } = require("express");
const { AuthRouters } = require("./auth/auth.routes");
const { UserRouters } = require("./user/user.routes");
const { PostRouters } = require("./post/post.routes");

const router = Router();

router.use("/auth", AuthRouters);
router.use("/user", UserRouters);
router.use("/post", PostRouters);

module.exports = {
  MainRouters: router,
};
