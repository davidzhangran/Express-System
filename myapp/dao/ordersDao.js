let { ordersModel } = require("./models/ordersModel.js");

module.exports.addOrders = async function (orders) {
    console.log(orders)
    let data = await ordersModel.create(orders);
    console.log(data)
}

module.exports.getOrdersByPage = async function ({ eachPage, currentPage, type, text, userId }) {
    let count = await ordersModel.countDocuments();//求总条数
    let i = await ordersModel.find({ [type]: text, userId }, (err, data) => {
        return data
    });
    let orders = await ordersModel
        .find()
        .populate("goodsId")
        .populate("petMemberId")
        .populate("storefrontId")
        .populate("serveId")
        .populate("petId")
        //关联
        //跳过的条数
        .skip((currentPage - 1) * eachPage)
        //指定从跳过之后的数量，有多少条数
        .limit(eachPage - 0)

    // [{
    //     petMemberId:{
    //         name:
    //     }
    // }]


    let totalPage = Math.ceil(count - 0 / eachPage);//总页数
    let pageDate = {
        currentPage: currentPage - 0,//当前页码
        eachPage: eachPage - 0,//每页显示的条数
        totalPage,//总页数
        count,//总条数
        orders//电影数据
    };
    return pageDate;
}
module.exports.removeOrders = async function (commodityId) {
    return await ordersModel.remove(commodityId);

}
//修改
module.exports.upDataOrders = async function ({ _id, petMemberId,
    goodsId,
    storefrontId,
    serveId,
    petId,
    price }) {
    return await ordersModel.update({ _id }, {
        petMemberId,
        goodsId,
        storefrontId,
        serveId,
        petId,
        price
    }, (err, data) => {
        return data
    });
}