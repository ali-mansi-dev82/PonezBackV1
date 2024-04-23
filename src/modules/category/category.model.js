const { Schema, Types, default: mongoose } = require("mongoose");

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    icon: { type: String },
    parent: {
      type: Types.ObjectId,
      ref: "category",
      required: false,
      default: null,
    },
    parents: {
      type: [Types.ObjectId],
      ref: "category",
      required: false,
      default: [],
    },
  },
  { versionKey: false, id: false, toJSON: { virtuals: true } }
);

CategorySchema.virtual("children", {
  ref: "category",
  localField: "_id",
  foreignField: "parent",
});

function AutoPopultate(next) {
  this.populate(["children"]);
  next();
}
CategorySchema.pre("find", AutoPopultate).pre("findOne", AutoPopultate);
const CategoryModel = mongoose.model("category", CategorySchema);
module.exports = CategoryModel;
