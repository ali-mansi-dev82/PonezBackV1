const autoBind = require("auto-bind");
const CookieNames = require("../../common/constant/cookieNames.enum");
const AuthService = require("./auth.service");
const authService = require("./auth.service");

class AuthController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = authService;
  }
  async sendOTP(req, res, next) {
    try {
      const { mobile } = req.body;
      const result = await this.#service.sendOTP(mobile);
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async checkOTP(req, res, next) {
    try {
      const { mobile, code } = req.body;
      const result = await this.#service.checkOTP(mobile, code, res);
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new AuthController();
