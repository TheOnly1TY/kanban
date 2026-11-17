class AppError extends Error {

    public statusCode: number
    public status: string
    public isOperational: true
    public errors: { field: string; message: string }[] | undefined

    constructor(message: string, statusCode: number, errors?: { field: string; message: string }[] | undefined) {
        super(message)
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        this.errors = errors

        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError

