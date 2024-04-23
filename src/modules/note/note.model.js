const { Schema, model, Types } = require("mongoose");

const ModelSchema = new Schema({
  user: { type: Types.ObjectId, ref: "verification_user", required: true },
  post: { type: Types.ObjectId, ref: "post", required: true },
  content: { type: String, required: false, default: "" },
});
const NoteModel = model("note", ModelSchema);
module.exports = NoteModel;
