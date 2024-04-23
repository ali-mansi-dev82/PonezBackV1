const { Router } = require("express");
const { AuthRouters } = require("./auth/auth.routes");

const router = Router();

router.use("/auth", AuthRouters);

module.exports = {
  MainRouters: router,
};
