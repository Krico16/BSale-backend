const  express = require('express');
const { getProductsByCategory, getProductsByName } = require('./controller/product.controller');
const router = express.Router();
const ProductController = require('./controller/product.controller');

router.get('/',ProductController.getByParams)
router.get('',ProductController.getByParams)

router.get('/category/:id',getProductsByCategory)

router.get('/name/:name',getProductsByName)


module.exports = router;