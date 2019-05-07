const {
    storefrontModel,
} = require("./models/storefrontModel"); //门店模型

module.exports.addStorefront = async (parm) => {
    console.log(parm);
    
    let result = await storefrontModel.find(parm)
    if (result.length != 0) {
        return false;
    }
    await storefrontModel.create(parm); //增加
    let info = await storefrontModel.find();
    return info

}