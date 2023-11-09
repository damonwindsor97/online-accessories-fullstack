const express = require('express');
const router = express.Router();

const fileServerUpload = require('../middleware/fileServerUpload')
const ProductPolicy = require('../policies/productPolicy')
const FilePolicy = require('../policies/filePolicy')
const ProductController = require('../controllers/productController')


module.exports = () => {
    // GET ALL PRODUCTS
    router.get('/', ProductController.getAllProducts);

    // GET onSale PRODUCTS

    // ADD/POST PRODUCTS
    router.post('/', 
    [ProductPolicy.validateProduct, 
    FilePolicy.filePayloadExists, 
    FilePolicy.fileSizeLimiter, 
    FilePolicy.fileExtLimiter(['.png', '.jpg', '.jpeg', '.gif']), 
    fileServerUpload], 
    ProductController.postProduct)

    // GET BY ID PRODUCT
    router.get('/:id', ProductController.getProductById);
    // UPDATE BY ID PRODUCT

    // DELETE BY ID PRODUCT

    return router
}