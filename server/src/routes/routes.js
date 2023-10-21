const express = require('express')
const router = express.Router();


const authRoutes = require('./authRoutes')

module.exports = () => {
    router.get('/', (req, res, next) => {
        res.send('Welcome to the Online Accessories API')
    })

    // AUTH ROUTES
    router.use('/auth', authRoutes());

    return router;
}
