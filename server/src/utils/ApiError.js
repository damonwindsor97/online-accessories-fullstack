class ApiError {
    constructor(code, message, err){
        this.code = code;
        this.message = message;
        this.err = err;
    }

    // [400] Bad Request Dummy
    static badRequest(msg){
        return new ApiError(400, `Bad Request: ${msg}`)
    }

    // [404] Not found
    static notFound(){
        return new ApiError(404, 'Resource Not Found')
    }
    // [500] Oopsy, our bad
    static internal(msg, err){
        console.log(err)
        return new ApiError(500, `Internal Server Error ${msg}`)
    }
}

module.exports = ApiError;