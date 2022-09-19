const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads' });
const productController = require('../product_v4/controller')

router.get('/', (req, res) => {
    res.send({
        status: 'Successfully',
        message: 'Welcome to Express JS Tutorial',
        nama: 'Mochamad Dwi Pamungkas'
    })
});
router.get('/product', productController.index)
router.get('/product/:id', productController.view)
router.post('/product', upload.single('image'), productController.post)
router.put('/product/:id', upload.single('image'), productController.update)
router.delete('/product/:id', upload.single('image'), productController.destroy)

module.exports = router;