const { addCommodity, getcommoditysByPage, upDataCommodity, removeCommodity } = require("../dao/goodsDao.js");

module.exports.addCommodity = async function (commodity) {
    return await addCommodity(commodity);
}
module.exports.getcommoditysByPage = async function (commodity) {
    return await getcommoditysByPage(commodity);
}

module.exports.upDataCommodity = async function (commodity) {
    return await upDataCommodity(commodity);
}
module.exports.removeCommodity = async function (commodityId) {
    return await removeCommodity(commodityId);
}