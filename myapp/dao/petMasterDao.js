const {
    petMemberModel,
} = require("./models/petMemberModel"); //门店模型

module.exports.addPetMaster = async (parm) => {
    console.log(parm);

    // let result = await storefrontModel.find(parm)
    // if (result.length != 0) {
    //     return false;
    // }
    // await petMemberModel.create(parm); //增加
    // let info = await petMemberModel.find(); //查询所有数据
    // return info

    return await petMemberModel.create(parm); 


}
//同过分页获取
// module.exports.getStorefrontByPage = async (parm) => {
//     let {
//         currentPage,
//         eachPage,
//     } = parm;
//     let storefrontInfo = await storefrontModel
//         .find()
//         .skip((currentPage - 1) * eachPage) //跳过多少个
//         .limit(eachPage - 0) //查询多少个
//     let count = await storefrontModel.find();//总条数
//     let totalPage = Math.ceil(count.length / eachPage); //总页数
//     return {
//         count: count.length,
//         totalPage: totalPage,
//         currentPage: currentPage - 0,
//         eachPage: eachPage - 0,
//         storefrontInfo
//     }

// }