import ErrorHandler from "../Utils/ErrorHandler.js";

const ErrorMiddleware = (err, req, res, next) => {
    if (err instanceof ErrorHandler) {
        return res.status(err.status || 500).json({
            success: false,
            message: err.message || "Internal Server Error",
            error: err.error || [],
        });
    }

    // Handle unexpected errors
    // res.status(500).json({
    //     success: false,
    //     message: "Something went wrong",
    // })
}

export default ErrorMiddleware