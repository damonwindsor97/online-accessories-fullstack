const express = require('express');
const router = express.Router()
 
const authController = require('../controllers/authController')


module.exports = () => {
    // ENDPOINTS: GET = /api/auth/users
    router.get('/users', authController.listUsers );

    // AUTH REGISTER
    router.post('/register', authController.register );

    router.post('/login', authController.login )

    // AUTH LOGIN

    return router
}