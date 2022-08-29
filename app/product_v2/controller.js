const connection = require('../../config/mysql');
const Product = require("./model");
const path = require('path');
const fs = require('fs');

const index = async (req, res) => {
    try {
        await Product.sync();
        const result = await Product.findAll();
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

const view = async (req, res) => {
    try {
        await Product.sync();
        const result = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

const destroy = async (req, res) => {
    try {
        await Product.sync();
        const result = await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

const post = async (req, res) => {
    const { users_id, name, price, stock, status } = req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        try {
            await Product.sync();
            const result = await Product.create({ users_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}` });
            res.send(result)
        } catch (e) {
            res.send(e)
        }
    }

}

const update = async (req, res) => {
    const { users_id, name, price, stock, status } = req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        try {
            await Product.sync();
            const result = await Product.update({ users_id, name, price, stock, status, Image_url: `http://localhost:3000/public/${image.originalname}` }, {
                where: {
                    id: req.params.id
                }
            });
            res.send(result)
        } catch (e) {
            res.send(e)
        }
    } else {
        try {
            await Product.sync();
            const result = await Product.update({ users_id, name, price, stock, status }, {
                where: {
                    id: req.params.id
                }
            });
            res.send(result)
        } catch (e) {
            res.send(e)
        }
    }

}



module.exports = {
    index,
    view,
    post,
    update,
    destroy
}