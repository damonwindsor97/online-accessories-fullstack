const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/productController')


module.exports = () => {
    // GET ALL PRODUCTS
    router.get('/', ProductController.getAllProducts);

    // GET onSale PRODUCTS

    // ADD/POST PRODUCTS

    // GET BY ID PRODUCT

    // UPDATE BY ID PRODUCT

    // DELETE BY ID PRODUCT

    return router
}