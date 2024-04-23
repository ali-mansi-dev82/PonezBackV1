const { Router } = require("express");
const { AuthRouters } = require("./auth/auth.routes");
const { CategoryRouters } = require("./category/category.routes");

const router = Router();

router.use("/auth", AuthRouters);
router.use("/category", CategoryRouters);

module.exports = {
  MainRouters: router,
};
