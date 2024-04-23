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
  async myPost(req, res, next) {
    try {
      const myPosts = await postService.myPost(res.user._id);
      res.status(201).send(myPosts);
    } catch (error) {
      next(error);
    }
  }
  async mySaved(req, res, next) {
    try {
      const myPosts = (await bookmarkService.myBookmarks(res.user._id)).map(
        (item) => item?.post
      );
      res.status(201).send(myPosts);
    } catch (error) {
      next(error);
    }
  }
  async myNote(req, res, next) {
    try {
      const myPosts = await noteService.myNotes(res.user._id);
      res.status(201).send(myPosts);
    } catch (error) {
      next(error);
    }
  }
  async mySeen(req, res, next) {
    try {
      const myPosts = (await seenService.mySeens(res.user._id)).map(
        (item) => item?.post
      );
      res.status(201).send(myPosts);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new UserController();
