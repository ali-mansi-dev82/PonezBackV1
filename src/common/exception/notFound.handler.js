const notFoundError = (req, res, next) => {
    return res.status(404).json({
        statusCode: res.statusCode ?? 404,
        error : {
            type: "NotFound",
            message: `not found ${req.url} route`
        }
    })
}
module.exports = notFoundError