class ResponseHandler {
    constructor(
        status = 200,
        message = 'OK',
        data = null
    ) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

export default ResponseHandler