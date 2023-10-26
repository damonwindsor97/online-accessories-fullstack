const { db } = require('../config/db');
const ApiError = require('../utils/ApiError')

module.exports = {
    async getAllProducts(req, res, next){
        try {
            const productRef = db.collection('products')
            const snapshot = await productRef.get();

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
                    description: docs.data().description,
                    category: docs.data().category,
                    manufacturer: docs.data().manufacturer,
                    price: docs.data().price,
                    onSale: docs.data().onSale,
                    isAvailable: docs.data().isAvailable,
                    image: docs.data().image
                });
            })
            res.send(docs);
            
        } catch (error) {
            return next(ApiError.internal('The products could not be found, we lost our map', error))
        }
    }
} 