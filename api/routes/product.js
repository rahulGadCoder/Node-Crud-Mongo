const router = require('express').Router();
const product = require('../controllers/product');

router.post("/", product.addProduct);
router.get("/", product.getProducts);
router.get("/:productId", product.getSingleProduct);
router.put("/:productId", product.updateProduct);
router.delete("/:productId", product.deleteProduct);

module.exports = router;