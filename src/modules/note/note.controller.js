const { default: slugify } = require("slugify");
const Service = require("./note.service");
const { isTrue, isEmpty } = require("../utils/functions");

class NoteController {
  async get(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Service.checkExist(res?.user?._id, id);
      res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async save(req, res, next) {
    try {
      const { id } = req.params;
      const { content } = req.body;
      const result = await Service.save(res?.user?._id, id, content);
      return res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      // if (res?.user?._id !== id) return res.status(401).send({message:'you cant delete another notes'});
      const result = await Service.remove(id);
      return res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new NoteController();
