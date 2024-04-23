const { Router } = require("express");
const optionController = require("./option.controller");

const router = Router();
router.get('/', optionController.find)
router.post('/create', optionController.create)
router.put('/update/:id', optionController.updateById)
router.delete('/delete/:id', optionController.deleteById)
router.get('/:id', optionController.findById)
router.get('/by-category-id/:categoryId', optionController.findByCategoryId)
router.get('/by-category-slug/:slug', optionController.findByCategorySlug)

module.exports = {
    OptionRouter: router
}