const { Router } = require("express");
const Controller = require("./city.controller");

const router = Router();
router.get('/', Controller.find)
router.get('/:id', Controller.findById)
router.get('/search/:query', Controller.search)

module.exports = {
    CityRouter: router
}