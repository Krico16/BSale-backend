const express = require('express');
const router = express.Router();
const CategoryController = require('./controller/category.controller')

router.get('/', CategoryController.getAllCategories);

module.exports = router;