const Product = require('../model/product.model')

class ProductController {
    getAllProducts = async (req, res, next) => {
        console.log('get all');
        const page = (!isNaN(req.params.id)) ? req.params.id : 1;
        await Product.getAll(page, (data) => {
            return res.json({ done: true, data: data })
        })
    }

    getProductsByCategory = async (req, res, next) => {
        const idCategory = (!isNaN(req.params.id)) ?? req.params.id;

        await Product.getByCategory(idCategory, (data) => {
            return res.json({ done: true, data: { result: data } })
        })

    }

    getProductsByName = async (req, res, next) => {
        const ProductName = req.params.name;

        await Product.getByName(ProductName, (data) => {
            return res.json({ done: true, data: { result: data } });
        })
    }

    getByParams = async (req, res, next) => {
        const { page = 1, category, name } = req.query;
        await Product.getWithParams(page, category, name, (data) => {
            return res.json({ done: true, data: data })
        })
    }
}

module.exports = new ProductController;