const { HttpError } = require("http-error");
const CategoryModel = require("../category/category.model");
const OptionModel = require("./option.model");
const { isValidObjectId } = require("mongoose");
const { isEmpty } = require("../utils/functions");

class OptionService {
  async create(optionDto) {
    const category = await this.checkExistCategoryById(optionDto.category);
    console.log(category);
    optionDto.category = category._id;
    await this.alreadyExistBy(optionDto.key, optionDto.category);
    if (optionDto?.enum && typeof optionDto.enum === "string") {
      optionDto.enum = optionDto.enum.split(",");
    } else if (Array.isArray(optionDto.enum)) optionDto.enum = [];
    return await OptionModel.create(optionDto);
  }
  async find() {
    return await OptionModel.find(
      {},
      { _v: 0 },
      { sort: { _id: -1 } }
    ).populate([{ path: "category", select: { name: 1, slug: 1 } }]);
  }
  async checkExistCategoryById(id) {
    const category = CategoryModel.findOne({ _id: id });
    if (!category) throw new HttpError("categroy not found");
    return category;
  }
  async alreadyExistBy(key, category) {
    const isExist = OptionModel.findOne({ key, category });
    if (!isExist) throw new HttpError("categroy not found");
    return isExist;
  }
  async alreadyExistById(id) {
    const option = await OptionModel.findOne({ _id: id }, { __v: 0 });
    if (!option) throw new HttpError("categroy not found");
    return option;
  }
  async alreadyExistByCategoryId(category) {
    const option = OptionModel.findOne({ category });
    if (!option) throw new HttpError("categroy not found");
    return option;
  }
  async findById(id) {
    return await this.alreadyExistById(id);
  }
  async findByCategoryId(categoryId) {
    return await this.alreadyExistByCategoryId(categoryId);
  }
  async findByCategorySlug(slug) {
    const options = await OptionModel.aggregate([
      {
        $lookup: {
          localField: "category",
          from: "categories",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $unwind: "$category",
      },
      {
        $addFields: {
          CategoryName: "$category.name",
          CategorySlug: "$category.slug",
          CategoryIcon: "$category.icon",
        },
      },
      {
        $project: {
          category: 0,
          __v: 0,
        },
      },
      {
        $match: {
          CategorySlug: slug,
        },
      },
    ]);
    return options;
  }
  async findByCategoryIds(ids) {
    const options = await OptionModel.find({ category: { $in: ids } });
    return options;
  }
  async updateById(id, optionDto) {
    await this.alreadyExistById(id);

    if (isEmpty(optionDto.title)) delete optionDto.title;
    if (isEmpty(optionDto.key)) delete optionDto.key;
    if (isEmpty(optionDto.type)) delete optionDto.type;
    if (isEmpty(optionDto.enum)) delete optionDto.enum;
    if (isEmpty(optionDto.list)) delete optionDto.list;
    if (isEmpty(optionDto.required)) delete optionDto.required;
    if (isEmpty(optionDto.category) || isValidObjectId(optionDto.category))
      delete optionDto.category;

    if (optionDto?.enum && typeof optionDto.enum === "string") {
      optionDto.enum = optionDto.enum.split(",");
    } else if (Array.isArray(optionDto.enum)) optionDto.enum = [];
    console.log(optionDto);
    return await OptionModel.updateOne({ _id: id }, { $set: optionDto });
  }
  async delete(id) {
    await this.alreadyExistById(id);
    return await OptionModel.deleteOne({ _id: id });
  }
}
module.exports = new OptionService();
