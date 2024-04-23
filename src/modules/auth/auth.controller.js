// const autoBind = require("auto-bind");
const Service = require("./auth.service");

class AuthController {
  //   #service;
  //   constructor() {
  //     this.#service = Service;
  //     autoBind(this);
  //   }
  async sendOTP(req, res, next) {
    try {
      const { mobile } = req.body;
      const result = await Service.sendOTP(mobile);
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async checkOTP(req, res, next) {
    try {
      const { mobile, code } = req.body;
      const result = await Service.checkOTP(mobile, code, res);
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new AuthController();
