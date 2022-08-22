const express = require("express");
const path = require('path')
const app = express();
const router = require('./routes');
const log = require('./middlewares/logger')

app.use(log);
app.use(express.urlencoded({ extended: true })); //menangani body dgn middleware
app.use(express.json())//menangani body dgn middleware
app.use('/public', express.static(path.join(__dirname, 'uploads'))); //menangani file static
app.use(router);
app.use((req, res, next) => {
    res.status(404);
    res.send({
        status: 'failed',
        message: 'Resourse ' + req.originalUrl + ' Not Found'
    })
})
// app.listen(3000, () => console.log('Server: http://localhost:3000'))
app.listen(3000, () => console.log('Server: https://dwi-expressjs.herokuapp.com'))