const express = require('express')
const morgan = require('morgan')
require('dotenv').config();

const { dbPing } = require('./config/db')
const config = require('./config/config')
const routes = require('./routes/routes')
const ApiError = require('./utils/ApiError')
const apiErrorHandler = require('./middleware/apiErrorHandler')


const debugStartup = require('debug')('app:startup')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
debugStartup("parsing middleware on all routes")

// Routes
app.use('/api', routes())

// Error Path 1: Not Found Route
app.use((req, res, next) => {
    next(ApiError.notFound());
})

// Error Path 2: User/Server Error
app.use(apiErrorHandler);


dbPing.then(() => {
    const PORT = config.port;
    app.listen(
        PORT, () => console.log(`Server is running on port: ${PORT}`)
    );
})