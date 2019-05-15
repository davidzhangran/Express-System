let { shoppingCartModel } = require("./models/shoppingCartModel.js");

module.exports.addShoppingCart = async function (orders) {

    return await shoppingCartModel.create(orders);

}

module.exports.getShoppingCartByPage = async function ({ petMemberId }) {
    let shoppingCart = await shoppingCartModel
        .find({ petMemberId: petMemberId })
        .populate("goodsId")
        .populate("serveId")
        .populate("petId")


    return shoppingCart;
}

module.exports.removeShoppingCart = async function (orders) {

    return await shoppingCartModel.remove(orders);

}