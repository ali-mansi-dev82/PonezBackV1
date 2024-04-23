const CategoryModel = require("./category.model");
const { isValidObjectId, Types } = require("mongoose");
const { HttpError } = require("http-error");
const OptionModel = require("../option/option.model");
const { isEmpty } = require("../utils/functions");

class CategoryService {
  async create(categoryDto) {
    if (categoryDto?.parent && isValidObjectId(categoryDto?.parent)) {
      const existCategory = await this.checkExistById(categoryDto?.parent);
      if (existCategory) {
        categoryDto.parents = [
          ...new Set(
            [existCategory._id.toString()]
              .concat(existCategory.parents.map((id) => id.toString()))
              .map((id) => new Types.ObjectId(id))
          ),
        ];
      }
    }
    const category = await CategoryModel.create({ ...categoryDto });
    return category;
  }
  async find() {
    return await CategoryModel.find({ parent: null }).populate([
      { path: "children" },
    ]);
  }
  async checkExistById(id) {
    const category = CategoryModel.findById(id);
    if (!category) throw new HttpError("Category not found");
    return category;
  }
  async checkExistBySlug(slug) {
    const category = CategoryModel.findOne({ slug });
    if (!category) throw new HttpError("Category not found");
    return category;
  }
  async alreadyExistBySlug(slug) {
    const category = CategoryModel.findOne({ slug });
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

    CategoryModel.updateOne({ _id: id }, optionDto);
  }
  async delete(id) {
    const existCategory = await this.checkExistById(id);
    const data = await CategoryModel.find({
      parents: id,
    });
    data.push(existCategory);
    await data.map(async (item) => {
      await this.checkExistById(item._id);
      await OptionModel.deleteMany({ category: item._id }).then(() => {
        CategoryModel.deleteOne({ _id: item._id });
      });
    });

    return {
      statusCode: 201,
      message: "categories and options deleted successfully",
    };
  }

  async getBySlug(slug) {
    if (isEmpty(slug) || slug === "root") {
      return await CategoryModel.aggregate([
        {
          $match: {
            parent: null,
          },
        },
      ]);
    }
    return await CategoryModel.aggregate([
      {
        $match: {
          slug: slug,
        },
      },
    ]);
  }
  async getChildrenBySlug(slug) {
    if (isEmpty(slug)) return { message: "slug is empty" };
    const targetId = (await CategoryModel.findOne({ slug }))._id;
    const categories = await CategoryModel.find({
      parents: { $in: [targetId] },
    });
    return [...categories, { _id: targetId }];
  }
  async getByParentSlug(slug) {
    if (isEmpty(slug) || slug === "root") {
      return CategoryModel.find({ parent: null }, { parents: 0 }).populate([
        "children",
      ]);
    }

    const categoryTree = await CategoryModel.find(
      { slug },
      { parents: 0 }
    ).populate(["children", "parent"]);

    if (categoryTree.length <= 0)
      return { statusCode: 404, message: "no message" };
    if (categoryTree[0]?.parent !== null) {
      categoryTree[0].parent = await CategoryModel.findOne({
        _id: categoryTree[0]?.parent,
      });
    }
    return categoryTree[0];
  }
  async search(query) {
    if (!query || isEmpty(query) || query === "no") {
      const result = await this.find();
      return result;
    }
    const categoryTree = await CategoryModel.find(
      { name: { $regex: new RegExp(query, "i") } },
      { parents: 0 }
    ).populate(["children", "parent"]);

    return categoryTree;
  }
  async allParents(slug) {
    const parents = [];
    let category = await CategoryModel.findOne({ slug });
    parents.push(category);
    while (category?.parent) {
      category = await CategoryModel.findOne({ _id: category.parent });
      parents.push(category);
    }
    return parents;
  }
}
module.exports = new CategoryService();
