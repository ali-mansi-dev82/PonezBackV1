const { default: slugify } = require("slugify");
const Service = require("./bookmark.service");
const { isTrue, isEmpty } = require("../utils/functions");

class BookmarkController {
  async isBookmark(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Service.checkExistByPostId(id);
      res.status(201).send(result ? true : false);
    } catch (error) {
      next(error);
    }
  }
  async saveBookmark(req, res, next) {
    try {
      const { id } = req.params;
      const bookmark = await Service.checkExist(res.user._id, id);
      if (bookmark.length > 0) {
        Service.remove(res.user._id, id);
        return res.status(201).send({ message: "deleted" });
      }
      const result = await Service.save(res.user._id, id);
      if (result._id) {
        res.status(201).send({ message: "saved" });
      }
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new BookmarkController();
