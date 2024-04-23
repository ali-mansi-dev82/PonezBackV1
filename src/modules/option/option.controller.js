// import autoBind from "auto-bind"
const { default: slugify } = require("slugify");
const Service = require("./option.service");
const CategoryService = require("../category/category.service");
const { isTrue, isEmpty } = require("../utils/functions");

class OptionController {
  async create(req, res, next) {
    try {
      const {
        title,
        key,
        guid,
        enum: list,
        required,
        type,
        category,
      } = req.body;
      const result = await Service.create({
        title,
        key: slugify(key, { trim: true, replacement: "_" }),
        guid,
        enum: list,
        type,
        required: isTrue(required) ? true : false,
        category,
      });
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async findByCategoryId(req, res, next) {
    try {
      const { categoryId } = req.params;
      console.log(req.params);
      const result = await Service.findByCategoryId(categoryId);
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async findById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Service.findById(id);
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async findByCategorySlug(req, res, next) {
    try {
      const { slug } = req.params;
      if (isEmpty(slug)) return res.status(400).send({ message: "no slug" });
      const ids = (await CategoryService.allParents(slug)).map(
        (value) => value._id
      );
      const result = await Service.findByCategoryIds(ids);
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async find(req, res, next) {
    try {
      const result = await Service.find();
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async deleteById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Service.delete(id);
      return result.deletedCount >= 1
        ? res.send({
            statusCode: 201,
            message: "option delete sucessfully",
          })
        : res.send({
            statusCode: 500,
            message: "no option deleted",
          });
    } catch (error) {
      next(error);
    }
  }
  async updateById(req, res, next) {
    try {
      const { id } = req.params;
      const { title, key, type, enum: list, required, category } = req.body;
      const result = await Service.updateById(id, {
        title,
        key,
        type,
        enum: list,
        required,
        category,
      });
      return result.modifiedCount >= 1
        ? res.status(result.statusCode ?? 201).send({
            statusCode: 201,
            message: "option updated sucessfully",
          })
        : res.status(500).send({
            statusCode: 500,
            message: "no option updated",
          });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new OptionController();
