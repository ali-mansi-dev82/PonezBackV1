const autoBind = require("auto-bind");
const Service = require("./bookmark.service");

class BookmarkController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = Service;
  }
  async isBookmark(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.#service.checkExistByPostId(id);
      res.status(201).send(result ? true : false);
    } catch (error) {
      next(error);
    }
  }
  async saveBookmark(req, res, next) {
    try {
      const { id } = req.params;
      const bookmark = await this.#service.checkExist(res.user._id, id);
      if (bookmark.length > 0) {
        this.#service.remove(res.user._id, id);
        return res.status(201).send({ message: "deleted" });
      }
      const result = await this.#service.save(res.user._id, id);
      if (result._id) {
        res.status(201).send({ message: "saved" });
      }
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new BookmarkController();
