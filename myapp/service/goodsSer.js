const { addCommodity } = require("../dao/goodsDao.js");

module.exports.addCommodity = async function (classes) {
    return await addCommodity(classes);

}