const { addCommodity,getcommoditysByPage } = require("../dao/goodsDao.js");

module.exports.addCommodity = async function (classes) {
    return await addCommodity(classes);
}
module.exports.getcommoditysByPage = async function (classes) {
    return await getcommoditysByPage(classes);
}