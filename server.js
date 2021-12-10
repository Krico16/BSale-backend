const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ROUTE FILES
const product = require('./app/modules/product/product.routes')

// Default Route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Bienvenido al backend' });
})

app.use('/api/products',product)



const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
    console.info('Server started on port ', PORT)
})
