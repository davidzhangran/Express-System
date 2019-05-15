let { addShoppingCart, getShoppingCartByPage, removeShoppingCart} = require("../dao/shoppingCartDao");
module.exports.addShoppingCart = async function (pram) {
    return await addShoppingCart(pram);
}

module.exports.getShoppingCartByPage = async function (pram) {
    return await getShoppingCartByPage(pram);
}
module.exports.removeShoppingCart = async function (pram) {
    return await removeShoppingCart(pram);
}