require('./config/mongoose')
const express = require("express");
const path = require('path')
const app = express();
// const productRouter = require('./app/products/routes');
// const productRouterV2 = require('./app/product_v2/routes');
const productRouterV3 = require('./app/product_v3/routes')
const productRouterV4 = require('./app/product_v4/routes')
const logger = require('morgan');


app.use(logger('dev'));
app.use(express.urlencoded({ extended: true })); //menangani body dgn middleware
app.use(express.json());//menangani body dgn middleware
// app.use(productRouter)
app.use('/public', express.static(path.join(__dirname, 'uploads'))); //menangani file static
// app.use('/api/v1', productRouter);
// app.use('/api/v2', productRouterV2);
app.use('/api/V3', productRouterV3);
app.use('/api/V4', productRouterV4);
app.use((req, res, next) => {
    res.status(404);
    res.send({
        status: 'failed',
        message: 'Resource ' + req.originalUrl + ' Not Found'
    })
})
app.listen(process.env.PORT || 3000, () => console.log('Server: http://localhost:3000'))
// app.listen(3000, () => console.log('Server: https://dwi-expressjs.herokuapp.com'))