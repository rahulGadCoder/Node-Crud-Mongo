const Product = require('../models/Product');
const { productSchema } = require('../schema/validation_schema');

//Get All Products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.json({ message: error });
    }
}

//Single Product
const getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
    } catch (error) {
        res.json({ message: error });
    }
};

//Add new product
const addProduct = async (req, res) => {
    const { error, value } = await productSchema.validateAsync(req.body, { abortEarly: false });
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details
    });

    try {
        const addProduct = await product.save();
        res.send(addProduct);
    } catch (err) {
        if (error) {
            res.send(error.details);
        }
    };
}


    //Update Product
    const updateProduct = async (req, res) => {
        try {
            const product = {
                title: req.body.title,
                price: req.body.price,
                image: req.body.image,
                details: req.body.details
            };

            const updatedProduct = await Product.findByIdAndUpdate(
                { _id: req.params.productId },
                product
            );
            res.json(updatedProduct);
        } catch (error) {
            res.json({ message: error });
        }
    };


    //Delete product
    const deleteProduct = async (req, res) => {
        try {
            const deleteProduct = await Product.findByIdAndDelete(req.params.productId);
            res.json(deleteProduct);
        } catch (error) {
            res.json({ message: error });
        }
    };


    module.exports = {
        getProducts,
        getSingleProduct,
        addProduct,
        updateProduct,
        deleteProduct
    }