const { db } = require('../config/db');
const ApiError = require('../utils/ApiError')
const { storageBucketUpload } = require('../utils/bucketServices');
const debugREAD = require('debug')('app:read')
const debugWRITE = require('debug')('app:write')

module.exports = {
    // --------- GET ALL ----------
    async getAllProducts(req, res, next){
        try {
            const productRef = db.collection('products')
            const snapshot = await productRef.orderBy("name", "asc").limit(10).get();

            // 400 ERROR HANDLING - check if the document exists
            if (snapshot.empty){
                return next(ApiError.badRequest('The products you were looking for do not exist'))
            }

            // SUCCESS: push object properties to array and send to client
            let docs = [];
            snapshot.forEach(doc => {
                docs.push({
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    category: doc.data().category,
                    manufacturer: doc.data().manufacturer,
                    price: doc.data().price,
                    onSale: doc.data().onSale,
                    isAvailable: doc.data().isAvailable,
                    image: doc.data().image
                });
            })
            res.send(docs);
            
        } catch (error) {
            return next(ApiError.internal('The products could not be found, we lost our map', error))
        }
    },

    // POST 
    async postProduct(req, res, next){
        debugWRITE(req.body);
        debugWRITE(req.files);
        debugWRITE(res.locals);

        // SAVE TO CLOUD STORAGE ( FILE)
        let downloadURL = null;
        try {
            const filename = res.locals.filename;
            downloadURL= await storageBucketUpload(filename);

        } catch (error) {
            return next(ApiError.internal("An error occured in uploading image", error))
        }


        // SAVE TO FIRESTORE
        try {
            const productRef = db.collection('products');
            const response = await productRef.add({
                name: req.body.name,
                description: req.body.description,
                category: req.body.category,
                manufacturer: req.body.manufacturer,
                price: Number(req.body.price),
                onSale: req.body.onSale,
                isAvailable: req.body.isAvailable,
                image: downloadURL
            })
            console.log(`Added Product ID: ${response.id}`)
            res.send(response.id)
            
        } catch (error) {
            return next(ApiError.internal("Your request could not be fulfilled", error))
        }

    },

    async getProductById(req, res, next){
        debugREAD(req.params.id);
        try {
            // Get this doc within the products collection, store in productRef
            const productRef = db.collection('products').doc(req.params.id);
            const doc = await productRef.get();
            
            if(!doc.exists){
                return next(ApiError.badRequest('Product you are looking for does not exist'))
            } else {
                res.send(doc.data());
            }

        } catch (error) {
            return next(ApiError.internal("Your request couldn't be saved", error))
        }
    }




} 

