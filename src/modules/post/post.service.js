const Model = require("./post.model");
const { isValidObjectId } = require("mongoose");
const { HttpError } = require("http-error");
const { isEmpty } = require("../utils/functions");
const imageService = require("../image/image.service");

class PostService {
  async create(data) {
    if (!data?.title || isEmpty(data?.title))
      return { statusCode: 400, message: "title not valid" };
    if (!data?.category || !isValidObjectId(data?.category))
      return { statusCode: 400, message: "category not valid" };

    const category = await Model.create({ ...data });

    if (data?.images?.length && data?.images?.length > 0)
      data?.images.map((value) => {
        imageService.infinityUpdate(value); // inifinitive image
      });

    return category;
  }
  async find(filters) {
    return await Model.find(
      { ...filters, isDelete: false },
      {},
      { sort: { updatedAt: -1 } }
    ).populate(["images"]);
  }
  async findbySlug(slug) {
    return await Model.findOne({ slug }).populate([
      "images",
      "user",
      "category",
    ]);
  }
  async checkExistById(id) {
    const category = Model.findById(id);
    if (!category) throw new HttpError("Category not found");
    return category;
  }
  async checkExistBySlug(slug) {
    const category = Model.findOne({ slug });
    if (!category) throw new HttpError("Category not found");
    return category;
  }
  async alreadyExistBySlug(slug) {
    const category = Model.findOne({ slug });
    if (category) throw new HttpError("conflict");
    return category;
  }
  async update(id, data) {
    const reslut = await Model.updateOne({ _id: id }, data);

    if (data?.images?.length && data?.images?.length > 0)
      data?.images.map((value) => {
        imageService.infinityUpdate(value); // inifinitive image
      });

    return reslut.modifiedCount > 0
      ? { message: "update successfuuly" }
      : { message: "update failed" };
  }
  async delete(id) {
    const data = await Model.updateOne(
      {
        _id: id,
      },
      { isDelete: true }
    );

    return {
      statusCode: 201,
      message: "post deleted successfully",
    };
  }
  async myPost(user) {
    const posts = await Model.find({ user }, {}, { sort: { createdAt: -1 } });
    return posts;
  }
}
module.exports = new PostService();
