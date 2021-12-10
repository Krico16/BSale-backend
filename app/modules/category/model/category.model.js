const db = require('../../../config/database')

const Category = function(category) {
    this.id = category.id;
    this.name = category.name;
}

Category.getAll = (result) => {
    let query = "SELECT * FROM category";
    db.query(query, (err, res) => {
        if (err) { result(null, err); return; }
        result(res)
    })
}

Category.getByName = (name, result) => {
    let query = "SELECT * FROM category";
    if (name) query += ` WHERE name LIKE '%${name}%'`;

    db.query(query, (err, res) => {
        if (err) { result(null, err); return; }
        result(res)
    })
}

module.exports = Category;