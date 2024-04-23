const isTrue = (value) => ['true' , 1 , true].includes(value)
const isEmpty = (value) => ['',' ', "", [''], []].includes(value)

module.exports = {
    isTrue,
    isEmpty
}