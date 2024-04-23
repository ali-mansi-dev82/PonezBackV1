const Model = require("./city.model");

class CityService {
  async find() {
    const data = await Model.find();
    return data;
  }
  async checkExistById(id) {
    const data = await Model.findOne({ _id: id });
    return data;
  }
  async search(query) {
    const data = await Model.find({
      name: { $regex: new RegExp(query, "i") },
    });
    return data;
  }
}
module.exports = new CityService();
