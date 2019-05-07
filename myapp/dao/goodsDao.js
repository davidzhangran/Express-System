let { goodsModel } = require("./models/goodsModel.js");


module.exports.addCommodity = async function (courses) {
    return await goodsModel.create(courses);
}
