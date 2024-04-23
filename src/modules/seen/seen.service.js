const Model = require("./seen.model");

class SeenService {
  async save(user, post) {
    const seen = await Model.findOne({ user, post });
    if (seen?._id) {
      seen.updatedAt = Date.now();
      seen.save();
      return seen;
    }
    const data = await Model.create({
      user,
      post,
    });
    return data;
  }
  async mySeens(user) {
    return await Model.find({ user }, {}, { sort: { updatedAt: -1 } }).populate("post");
  }
}
module.exports = new SeenService();
