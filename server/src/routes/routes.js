const express = require('express')
const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
        res.send('Welcome to the Online Accessories API')
    })




    return router;
}
