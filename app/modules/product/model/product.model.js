const db = require('../../../config/database')

const Product = function (product) {
    this.id = product.id;
    this.name = product.name;
    this.url_image = product.url_image;
    this.price = product.price;
    this.discount = product.discount;
    this.category = product.category;
}

Product.getAll = (nPage = 1, result) => {
    const itemsPerPage = 5;
    let total = "SELECT COUNT(id) as itemCount from product";
    db.query(total, (e, r) => {
        if (e) handleError(result, e);
        const totalCount = r[0].itemCount;
        const numPages = Math.ceil(totalCount / itemsPerPage)

        const start = (nPage - 1) * 5;
        let query = `SELECT * FROM product LIMIT ${itemsPerPage} OFFSET ${start}`;

        db.query(query, (err, res) => {
            if (err) handleError(result, err);
            result({ result: res, totalItems: totalCount, totalPages: numPages, currentPage: nPage });
        })
    })
}

Product.getByCategory = (idCategory, result) => {
    let query = "SELECT * FROM product WHERE category = ?";

    db.query(query, idCategory, (err, res) => {
        if (err) handleError(result, err);
        result(res)
    })
}

Product.getByName = (name, result) => {
    let query = "SELECT * FROM product WHERE name LIKE ?";

    db.query(query, '%' + name + '%', (err, res) => {
        if (err) handleError(result, err);
        result(res)
    })
}


function handleError(result, err) {
    console.log(err);
    result(null, err);
    return;
}

module.exports = Product;