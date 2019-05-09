
const { addOrders } = require("../dao/ordersDao.js");


module.exports.addOrders = async function (orders) {
    return await addOrders(orders);
}