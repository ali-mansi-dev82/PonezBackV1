const CityModel = require("../city/city.model");
const Model = require("./state.model");

class StateService {
  async find() {
    const data = await Model.aggregate([
      {
        $lookup: {
          localField: "_id",
          from: "cities",
          foreignField: "state",
          as: "cities",
        },
      },
    ]);
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
module.exports = new StateService();
