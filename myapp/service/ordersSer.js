
const { addOrders,getOrdersByPage,removeOrders,upDataOrders } = require("../dao/ordersDao.js");


module.exports.addOrders = async function (orders) {
    return await addOrders(orders);
}

module.exports.getOrdersByPage = async function (orders) {
    return await getOrdersByPage(orders);
}
module.exports.removeOrders = async function (orders) {
    return await removeOrders(orders);
}

module.exports.upDataOrders = async function (orders) {
    return await upDataOrders(orders);
}