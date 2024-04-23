const { Router } = require("express");
const Controller = require("./bookmark.controller");
const Authorization = require("../../common/guard/authorization.guard");

const router = Router();
router.get("/:id", Authorization, Controller.isBookmark);
router.post("/save/:id", Authorization, Controller.saveBookmark);

module.exports = {
  BookmarkRouter: router,
};
