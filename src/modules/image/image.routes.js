const { Router } = require("express");
const Controller = require("./image.controller");
const upload = require("../../config/multer.config");

const router = Router();
router.post("/upload", upload.any("image"), Controller.upload);
router.delete("/delete/:id", Controller.delete);

module.exports = {
  ImageRouter: router,
};
