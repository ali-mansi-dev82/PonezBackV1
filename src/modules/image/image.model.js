const { Schema, Types, model } = require("mongoose");

const ImageSchema = new Schema({
  name: { type: String, unique: true, required: true },
  expire: { type: Number, required: false, default: -1 /* infinity */ },
});

const ImageModel = model("image", ImageSchema);
module.exports = ImageModel;
