const ApiError = require('../utils/ApiError');

function apiErrorHandler(err, req, res, next){
    // Recognized Error
    if(err instanceof ApiError){
        res.status(err.code).json(err.message)
        return;
    // Unknown Error
    } else {
        console.log(err);
        res.status(500).json({
            message: "Oops! Something went wrong, try again later!"
        })
    }

}

module.exports = apiErrorHandler;