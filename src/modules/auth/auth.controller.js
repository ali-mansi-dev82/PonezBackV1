class AuthController {
  async login(req, res, next) {
    try {
      res.send("login");
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new AuthController();
