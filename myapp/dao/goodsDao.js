let { goodsModel } = require("./models/goodsModel.js");


module.exports.addCommodity = async function (classes) {
    await goodsModel.create(classes);
}
module.exports.getcommoditysByPage = async function ({ eachPage, currentPage }) {
    let count = await goodsModel.countDocuments();//求总条数
    let totalPage = Math.ceil(count / eachPage);//总页数
    let commoditys = await goodsModel
        .find()
        //关联
        //跳过的条数
        .skip((currentPage - 1) * eachPage)
        //指定从跳过之后的数量，有多少条数
        .limit(eachPage - 0)
    let pageDate = {
        currentPage,//当前页码
        eachPage,//每页显示的条数
        totalPage,//总页数
        count,//总条数
        commoditys//电影数据
    };
    console.log(commoditys)
    return pageDate;
}