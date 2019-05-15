let { addShoppingCart, getShoppingCartByPage, removeShoppingCart,upDataShoppingCart} = require("../dao/shoppingCartDao");
module.exports.addShoppingCart = async function (pram) {
    return await addShoppingCart(pram);
}

module.exports.getShoppingCartByPage = async function (pram) {
    return await getShoppingCartByPage(pram);
}
module.exports.removeShoppingCart = async function (pram) {
    return await removeShoppingCart(pram);
}
module.exports.upDataShoppingCart = async function (pram) {
    return await upDataShoppingCart(pram);
}