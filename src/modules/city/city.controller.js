const { default: slugify } = require("slugify");
const Service = require("./city.service");
const { isTrue, isEmpty } = require("../utils/functions");

class StateController {
  async find(req, res, next) {
    try {
      const result = await Service.find();
      res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async findById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Service.checkExistById(id);
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async search(req, res, next) {
    try {
      const { query } = req.params;
      const result = await Service.search(query);
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new StateController();
