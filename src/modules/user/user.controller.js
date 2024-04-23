const bookmarkService = require("../bookmark/bookmark.service");
const noteService = require("../note/note.service");
const postService = require("../post/post.service");
const seenService = require("../seen/seen.service");

class UserController {
  async information(req, res, next) {
    try {
      res.status(201).send({
        statusCode: 201,
        user: res.user,
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new UserController();
