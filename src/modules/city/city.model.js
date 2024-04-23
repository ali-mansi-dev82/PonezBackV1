const { Schema, model, Types } = require("mongoose");

const ModelSchema = new Schema({
  name: { type: String, required: true },
  state: { type: Types.ObjectId, required: true },
  lat: { type: Number, required: false },
  long: { type: Number, required: false },
});
const CityModel = model("city", ModelSchema);
module.exports = CityModel;
