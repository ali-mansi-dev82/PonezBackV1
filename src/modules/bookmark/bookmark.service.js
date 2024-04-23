const autoBind = require("auto-bind");
const Model = require("./bookmark.model");

class BookmarkService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = Model;
  }
  async checkExistByPostId(id) {
    const data = await this.#model.findOne({ post: id });
    return data;
  }
  async save(user, post) {
    const data = await this.#model.create({
      user,
      post,
    });
    return data;
  }
  async remove(user, post) {
    const data = await this.#model.deleteOne({
      user,
      post,
    });
    return data;
  }
  async checkExist(user, post) {
    const result = await this.#model.find({ user, post });
    if (!result) return undefined;
    return result;
  }
  async myBookmarks(user) {
    return await this.#model
      .find({ user }, {}, { sort: { updatedAt: -1 } })
      .populate("post");
  }
}
module.exports = new BookmarkService();
