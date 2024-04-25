const Service = require("./post.service");
const { isValidObjectId } = require("mongoose");
const { makeRandomeStr } = require("../utils/random");
const categoryService = require("../category/category.service");
const { verifyToken } = require("../auth/auth.utils");
const seenService = require("../seen/seen.service");
const Controller = require("../../common/base/controller");

class PostController extends Controller {
  async find(req, res, next) {
    try {
      const { city, slug } = req.body;
      const query = {};
      if (city) query["city"] = city;

      if (slug) {
        const data = await categoryService.getChildrenBySlug(slug);
        query["category"] = {
          $in: data.map((value) => value._id),
        };
      }
      const result = await Service.find(query);
      res.status(result.statusCode ?? 201).send({ result });
    } catch (error) {
      next(error);
    }
  }
  async findbySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const result = await Service.findbySlug(slug);
      const parents = await categoryService.allParents(result.category.slug);
      const bread_crumb = parents.reverse();
      res.status(result.statusCode ?? 201).send({ data: result, bread_crumb });
      //seen post
      const authorization =
        req?.cookies?.access_token || req?.headers?.authorization;
      const [_, token] = authorization.split(" ");
      if (token && token !== "token" && verifyToken(token)) {
        const user = verifyToken(token);
        seenService.save(user.id, result._id);
      }
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      const {
        category,
        title,
        images,
        province,
        content,
        city,
        district,
        cordinate,
        amount,
        options,
      } = req.body;
      const result = await Service.create({
        category,
        title,
        images,
        province,
        content,
        city,
        district,
        cordinate,
        amount,
        options,
        slug: makeRandomeStr(8),
        user: res.user._id,
      });
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const post = await Service.checkExistById(id);
      // console.log(res?.user?._id, post.user, res?.user?._id === post.user);
      // if (res?.user?._id !== post.user)
      //   return res
      //     .status(401)
      //     .send({ message: "you cant delete another notes" });
      const {
        title,
        images,
        province,
        content,
        city,
        district,
        cordinate,
        amount,
        options,
      } = req.body;
      const result = await Service.update(id, {
        title,
        images,
        province,
        content,
        city,
        district,
        cordinate,
        amount,
        options,
      });
      res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id))
        return res.send({ statusCode: 400, message: "id not valid" });
      const result = await Service.delete(id);
      res.status(result.statusCode ?? 201).send(result);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new PostController();
