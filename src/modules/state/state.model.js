const { Schema, model } = require("mongoose");

const ModelSchema = new Schema({
  name: { type: String, required: true },
});
const StateModel = model("state", ModelSchema);
module.exports = StateModel;
