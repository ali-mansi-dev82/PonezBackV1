const path = require("path");
const imageService = require("./image.service");

class ImageController {
  async upload(req, res, next) {
    try {
      const files = await req?.files;
      const { name } = await imageService.create(files[0].filename);
      console.log(name);
      res.status(201).send({  name });
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const result = await imageService.deleteById(id);
      res.status(201).send({ result });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new ImageController();
