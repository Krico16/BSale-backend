const Category = require('../model/category.model')

class CategoryController {
    getAllCategories = async (req, res, next) => {
        await Category.getAll(data => {
            return res.json({ done: true, data: data })
        })
    }
}

module.exports = new CategoryController;