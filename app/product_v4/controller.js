const Product = require('./model')
const fs = require('fs')
const path = require('path')
const { ObjectId } = require('mongodb')

const index = (req, res) => {
    Product.find()
        .then(result => res.send(result))
        .catch(error => res.send(error))

}
const view = (req, res) => {
    Product.findOne({ _id: ObjectId(`${req.params.id}`) })
        .then(result => res.send(result))
        .catch(error => res.send(error))

}

const post = (req, res) => {
    const { name, price, stock, status } = req.body;
    const image = req.file
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        Product.create({ name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}` })
            .then(result => res.send(result))
            .catch(error => res.send(error))
    } else {
        Product.create({ name, price, stock, status })
            .then(result => res.send(result))
            .catch(error => res.send(error))
    }
}

const update = (req, res) => {
    const { name, price, stock, status } = req.body;
    const image = req.file
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        Product.updateOne({ _id: ObjectId(`${req.params.id}`) }, { $set: { name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}` } })
            .then(result => res.send(result))
            .catch(error => res.send(error))
    } else {
        Product.updateOne({ _id: ObjectId(`${req.params.id}`) }, { $set: { name, price, stock, status } })
            .then(result => res.send(result))
            .catch(error => res.send(error))
    }
}

const destroy = (req, res) => {
    Product.deleteOne({ _id: ObjectId(`${req.params.id}`) })
        .then(result => res.send(result))
        .catch(error => res.send(error))

}

module.exports = {
    index,
    post,
    view,
    update,
    destroy
}