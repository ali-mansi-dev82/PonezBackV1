const Service = require("./specials.service");
const autoBind = require("auto-bind");

class SpecialController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = Service;
  }
  async find(req, res, next) {
    try {
      const result = await this.#service.find();
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async myPost(req, res, next) {
    try {
      const result = await this.#service.findMany({
        user: res.user._id,
      });
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      const { postId } = req.body;
      const result = await this.#service.create({
        post: postId,
        user: res.user._id,
      });
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async deleteById(req, res, next) {
    try {
      const { postId } = req.params;
      const result = await this.#service.delete(postId);
      return result.deletedCount >= 1
        ? res.send({
            statusCode: 201,
            message: "post delete sucessfully",
          })
        : res.send({
            statusCode: 500,
            message: "no post deleted",
          });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new SpecialController();
