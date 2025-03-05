class ErrorHandler extends Error {
    constructor (
        status = 500,
        message ="",
        error =[],
        stack =""
    ){
        super(message);
        this.status = status;
        this.error = error;
        this.stack = stack;
        Error.captureStackTrace(this, this.constructor);
    }

}

export default ErrorHandler