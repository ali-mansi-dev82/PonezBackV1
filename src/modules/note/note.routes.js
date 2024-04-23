const { Router } = require("express");
const Controller = require("./note.controller");
const Authorization = require("../../common/guard/authorization.guard");

const router = Router();
router.get("/:id", Authorization, Controller.get);
router.post("/save/:id", Authorization, Controller.save);

module.exports = {
  NoteRouter: router,
};
