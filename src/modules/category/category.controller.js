const { default: slugify } = require("slugify");
const CategoryService = require("./category.service");
const { isValidObjectId } = require("mongoose");

class CategroyController {
  async find(req, res, next) {
    try {
      const result = await CategoryService.find();
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      const { name, slug, icon, parent } = req.body;
      const result = await CategoryService.create({
        name,
        slug: slugify(slug),
        icon,
        parent: parent !== "" ? parent : null,
      });
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const { name, slug, icon, parent } = req.body;
      const result = await CategoryService.update({
        name,
        slug: slugify(slug),
        icon,
        parent: parent !== "" ? parent : null,
      });
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id))
        return res.send({ statusCode: 400, message: "id not valid" });
      const result = await CategoryService.delete(id);
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const result = await CategoryService.getBySlug(slug);
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getByParentSlug(req, res, next) {
    try {
      const { slug } = req.params;
      const result = await CategoryService.getByParentSlug(slug);
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async search(req, res, next) {
    try {
      const { q } = req.params;
      const result = await CategoryService.search(q);
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new CategroyController();
