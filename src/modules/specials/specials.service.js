const { HttpError } = require("http-error");
const Model = require("./specials.model");
const autoBind = require("auto-bind");

class SpecialService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = Model;
  }
  async create(data) {
    await this.checkExist(data);
    return await this.#model.create(data);
  }
  async find() {
    return await this.#model.find().populate([{ path: "post" }]);
  }
  async findMany(data) {
    return await this.#model.find(data);
  }
  async delete(postId) {
    await this.checkExist({ post: postId });
    return await this.#model.deleteOne({ post: postId });
  }
  async checkExist(data) {
    const result = this.#model.findOne(data);
    if (!result) throw new HttpError("special exist not found");
    return result;
  }
}
module.exports = new SpecialService();
