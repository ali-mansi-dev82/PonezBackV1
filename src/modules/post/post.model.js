const { Schema, Types, model } = require("mongoose");

const PostSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "verification_user", required: true },
    title: { type: String, required: true },
    content: { type: String, required: false },
    slug: { type: String, required: true },
    amount: { type: Number, required: true, default: 0 },
    category: { type: Types.ObjectId, ref: "category", required: true },
    province: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    cordinate: { type: [Number], required: true }, //51.1111112 31.658971111
    images: { type: [String], required: false, default: [] },
    options: { type: Object, required: false, default: [] },
    status: { type: Number, require: false, default: 0 }, // { 0 : wating accept admin, 1 : need some changes, 2 : accept by admin, 3 : rejected by admin }
    isDelete: { type: Boolean, require: false, default: false },
  },
  {
    timestamps: true,
  }
);
const postModel = model("post", PostSchema);
module.exports = postModel;
