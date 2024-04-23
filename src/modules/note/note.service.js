const Model = require("./note.model");

class NoteService {
  async save(user, post, content) {
    const note = await Model.findOne({ user, post });
    if (note?._id) {
      if (content.trim().length <= 0) {
        return await Model.deleteOne({ _id: note?._id });
      }
      note.content = content;
      note.save();
      return note;
    }
    const data = await Model.create({
      user,
      post,
      content,
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
    const result = await Model.findOne({ user, post });
    if (!result) return undefined;
    return result;
  }
  async myNotes(user) {
    return await Model.find({ user }, {}, { sort: { _id: -1 } }).populate(
      "post"
    );
  }
}
module.exports = new NoteService();
