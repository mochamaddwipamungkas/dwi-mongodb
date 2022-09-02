const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads' })
const productController = require("./controller")

router.get('/', (req, res) => {
    const { page, total } = req.query;
    res.send({
        status: 'Successfully',
        message: 'Welcome to Express JS Tutorial',
        nama: 'Mochamad Dwi Pamungkas',
        page,
        total
    })
});
router.get('/product', productController.index);
router.get('/product/:id', productController.view);
router.post('/product/', upload.single('image'), productController.store);
router.put('/product/:id', upload.single('image'), productController.update);
router.delete('/product/:id', upload.single('image'), productController.destroy);



module.exports = router;