const messages = require("../../modules/messages");
const { verifyToken } = require("../../modules/auth/auth.utils");
const userModel = require("../../modules/user/user.model");

const Authorization = async (req, res, next) => {
  try {
    const authorization =
      req?.cookies?.access_token || req?.headers?.authorization;
    if (
      !authorization ||
      authorization === undefined ||
      authorization.length < 1
    ) {
      return res.status(401).send({
        statusCode: 401,
        message: messages.Auth.Unauthorization,
      });
    }

    const splitedAuth = await authorization?.split(" ");
    const token = splitedAuth.length === 1 ? splitedAuth[0] : splitedAuth[1];

    if (!token || token === undefined || token.length < 1) {
      return res.status(401).send({
        statusCode: 401,
        message: "unauthorization",
      });
    }

    const data = verifyToken(token);
    if (typeof data === "object" && "id" in data) {
      const user = await userModel
        .findOne({ _id: data?.id }, { otp: 0 })
        .lean();
      if (!user) {
        return res.send({
          statusCode: 404,
          message: messages.User.NotFound,
        });
      }
      if (user.accessToken !== token) {
        return res.send({
          statusCode: 401,
          message: "your token not valid!",
        });
      }
      res.user = user;
      return next();
    }
    return res.status(401).send({
      statusCode: 400,
      message: messages.Auth.TokenNotValid,
    });
  } catch (error) {}
};
module.exports = Authorization;
