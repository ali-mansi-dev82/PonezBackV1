const { Router } = require("express");
const categoryController = require("./category.controller");
const Authorization = require("../../common/guard/authorization.guard");
const router = Router();

router.get('/', categoryController.find)
router.post('/create', categoryController.create)
router.put('/update/:id', categoryController.update)
router.delete('/delete/:id', categoryController.delete)
router.get('/get-by-slug/:slug', categoryController.getBySlug)
router.get('/get-children-by-slug/:slug', categoryController.getByParentSlug)
router.get('/search/:q', categoryController.search)

module.exports = {
    CategoryRouters: router
}