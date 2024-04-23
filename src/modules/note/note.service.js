const autoBind = require("auto-bind");
const Model = require("./note.model");

class NoteService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = Model;
  }
  async save(user, post, content) {
    const note = await this.#model.findOne({ user, post });
    if (note?._id) {
      if (content.trim().length <= 0) {
        return await this.#model.deleteOne({ _id: note?._id });
      }
      note.content = content;
      note.save();
      return note;
    }
    const data = await this.#model.create({
      user,
      post,
      content,
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
    const result = await this.#model.findOne({ user, post });
    if (!result) return undefined;
    return result;
  }
  async myNotes(user) {
    return await this.#model.find({ user }, {}, { sort: { _id: -1 } }).populate(
      "post"
    );
  }
}
module.exports = new NoteService();
