const errorHandler = (err, req, res, next) => {
    return res.json({
        statusCode: err.status ?? 500,
        error : {
            message : err.message ?? 'Internal Server Error'
        }
    })
}
module.exports = errorHandler