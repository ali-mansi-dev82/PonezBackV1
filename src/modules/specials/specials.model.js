const { Schema, Types, model } = require("mongoose");

const SpecialsSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "verification_user", required: true },
    post: { type: Types.ObjectId, ref: "post", required: true, unique: true },
  },
  { timestamps: true }
);
const SpecialsModel = model("specials", SpecialsSchema);
module.exports = SpecialsModel;
