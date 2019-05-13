const {
    storefrontModel,
} = require("./models/storefrontModel"); //门店模型

module.exports.addStorefront = async (parm) => {
    let result = await storefrontModel.find(parm)
    if (result.length != 0) {
        return false;
    }
    await storefrontModel.create(parm); //增加
    let info = await storefrontModel.find();
    return info

}
//同过分页获取
module.exports.getStorefrontByPage = async (parm) => {
    let {
        currentPage,
        eachPage,
        value,
        inputText,
        state
    } = parm;
    let storefrontInfo = await storefrontModel
        .find({
            [value]: inputText,
            state
        })
        .skip((currentPage - 1) * eachPage) //跳过多少个
        .limit(eachPage - 0) //查询多少个
    let count = await storefrontModel.find({
        [value]: inputText,
        state
    });//总条数
    let totalPage = Math.ceil(count.length / eachPage); //总页数
    return {
        count: count.length,
        totalPage: totalPage,
        currentPage: currentPage - 0,
        eachPage: eachPage - 0,
        storefrontInfo
    }

}

//修改门店
module.exports.updateStorefront = async (parm) => {
    console.log(parm);
    let data = await storefrontModel.updateMany({ _id: parm._id }, parm);
    return data;
}