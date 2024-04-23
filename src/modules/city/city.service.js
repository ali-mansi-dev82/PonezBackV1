const autoBind = require("auto-bind");
const Model = require("./city.model");

class CityService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = Model;
  }
  async find() {
    const data = await this.#model.find();
    return data;
  }
  async checkExistById(id) {
    const data = await this.#model.findOne({ _id: id });
    return data;
  }
  async search(query) {
    const data = await this.#model.find({
      name: { $regex: new RegExp(query, "i") },
    });
    return data;
  }
}
module.exports = new CityService();
