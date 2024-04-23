const Model = require("./bookmark.model");

class BookmarkService {
  async checkExistByPostId(id) {
    const data = await Model.findOne({ post: id });
    return data;
  }
  async save(user, post) {
    const data = await Model.create({
      user,
      post,
    });
    return data;
  }
  async remove(user, post) {
    const data = await Model.deleteOne({
      user,
      post,
    });
    return data;
  }
  async checkExist(user, post) {
    const result = await Model.find({ user, post });
    if (!result) return undefined;
    return result;
  }
  async myBookmarks(user) {
    return await Model.find({ user }, {}, { sort: { updatedAt: -1 } }).populate("post");
  }
}
module.exports = new BookmarkService();
