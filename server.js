const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ROUTE FILES
const product = require('./app/modules/product/product.routes')
const category = require('./app/modules/category/category.routes')

// Default Route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Bienvenido al backend' });
})

app.use('/api/products', product)
app.use('/api/categories', category)



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.info('Server started on port ', PORT)
})
