const Model = require("./post.model");
const { isValidObjectId, Types } = require("mongoose");
const { HttpError } = require("http-error");
const OptionModel = require("../option/option.model");
const { isEmpty } = require("../utils/functions");
const imageService = require("../image/image.service");

class PostService {
  async create(data) {
    if (!data?.title || isEmpty(data?.title))
      return { statusCode: 400, message: "category not valid" };
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
  async update(id, optionDto) {
    await this.checkExistById(id);
    if (isEmpty(optionDto.name)) delete optionDto.name;
    if (isEmpty(optionDto.slug)) delete optionDto.slug;
    if (isEmpty(optionDto.icon)) delete optionDto.icon;
    if (isEmpty(optionDto.parent) || isValidObjectId(optionDto.parent))
      delete optionDto.parent;
    if (isEmpty(optionDto.parents)) delete optionDto.parents;

    Model.updateOne();
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
