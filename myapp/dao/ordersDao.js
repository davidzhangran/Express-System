let { ordersModel } = require("./models/ordersModel.js");

module.exports.addOrders = async function (orders) {
    return await ordersModel.create(orders);
}