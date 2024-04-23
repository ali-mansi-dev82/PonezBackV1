const NodeEnv = require("../../common/constant/env.enum");
const Model = require("../user/user.model");
const { makeCode } = require("../utils/random");
const { signToken } = require("./auth.utils");

class UserService {
  async checkExistByMobile(mobile) {
    const user = await Model.findOne({ mobile });
    if (user === null) {
      return false;
    }
    return true;
  }
}
module.exports = new UserService();
