let { goodsModel } = require("./models/goodsModel.js");
let { usersModel } = require("./models/usersModel.js");

module.exports.addCommodity = async function ({ userId,
    name, // 名称
    category, // 品类
    texture, // 材质
    specification, //适用规格
    exclusive, //专属规格
    pack, //包装规格
    taste, //口味
    special, //特殊功用
    origin, //产地
    production, //出厂日期
    expiration, //保质期
    supplier, //供应商
    feature, //特色说明
    price,
    images }) {
    const { _id } = await goodsModel.create({
        name, // 名称
        category, // 品类
        texture, // 材质
        specification, //适用规格
        exclusive, //专属规格
        pack, //包装规格
        taste, //口味
        special, //特殊功用
        origin, //产地
        production, //出厂日期
        expiration, //保质期
        supplier, //供应商
        feature, //特色说明
        price,
        images,
        userId
    });
    const user = await usersModel.find({ _id: userId });
    let goodsId = user[0].goodsId.map(item => item + "");
    goodsId.push(_id + "")
    await usersModel.updateOne({ _id: userId }, { goodsId });
    return await usersModel.find({ _id: userId }).populate("goodsId")
}
module.exports.getcommoditysByPage = async function ({ eachPage, currentPage, type, text, userId }) {
    let count = await goodsModel.countDocuments();//求总条数
    let i = await goodsModel.find({ [type]: text, userId }, (err, data) => {
        return data
    });
    let commoditys = await goodsModel
        .find({ [type]: text, userId })
        //关联
        //跳过的条数
        .skip((currentPage - 1) * eachPage)
        //指定从跳过之后的数量，有多少条数
        .limit(eachPage - 0)
    let totalPage = Math.ceil(i.length / eachPage);//总页数
    let pageDate = {
        currentPage: currentPage - 0,//当前页码
        eachPage: eachPage - 0,//每页显示的条数
        totalPage,//总页数
        count: i.length,//总条数
        commoditys//电影数据
    };
    return pageDate;
}
//修改
module.exports.upDataCommodity = async function ({ _id, name,
    category,
    texture,
    specification,
    exclusive,
    pack,
    taste,
    special,
    origin,
    production,
    expiration,
    supplier,
    feature,
    price, images }) {
    return await goodsModel.update({ _id }, {
        name,
        category,
        texture,
        specification,
        exclusive,
        pack,
        taste,
        special,
        origin,
        production,
        expiration,
        supplier,
        feature,
        price, images
    }, (err, data) => {
        return data
    });
}
//删除
module.exports.removeCommodity = async function (commodityId) {
    return await goodsModel.remove(commodityId);

}