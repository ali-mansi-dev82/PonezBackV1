const multer = require("multer");
const path = require("path");
const { makeRandomeStr } = require("../modules/utils/random");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/"));
  },
  filename: (req, file, cb) => {
    cb(null, makeRandomeStr(10) + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });
module.exports = upload;
