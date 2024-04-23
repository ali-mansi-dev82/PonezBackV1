const { Schema, model, Types } = require("mongoose");

const ModelSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "verification_user", required: true },
    post: { type: Types.ObjectId, ref: "post", required: true },
  },
  { timestamps: true }
);
const SeenModel = model("seen", ModelSchema);
module.exports = SeenModel;
