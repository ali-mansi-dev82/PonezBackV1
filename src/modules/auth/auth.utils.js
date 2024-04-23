const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const jwt = require('jsonwebtoken')

function hashPassword(password) {
    const salt = genSaltSync(10);
    console.log(salt);

    return hashSync(password, salt)
}
function comparePassword(password, hashed) {
    return compareSync(password, hashed)
}
function signToken(payload) {
    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
            expiresIn: '1y',
            algorithm: 'HS512'
        }
    )
}
function verifyToken(token) {
    return jwt.verify(
        token,
        process.env.JWT_SECRET
    )
}
function decodeToken(token) {
    return jwt.decode(
        token
    )
}
module.exports = {
    hashPassword,
    comparePassword,
    signToken,
    verifyToken,
    decodeToken
}