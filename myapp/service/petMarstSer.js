const { addPetMaster,getPetMasterByPage } = require("../dao/petMasterDao");

// 新增宠主
module.exports.addPetMaster = async function (pram) {
    const data = await addPetMaster(pram);
    return data;
}

// 获取宠主数据
module.exports.getPetMasterByPage = async function (pram) {
    return await getPetMasterByPage(pram);
}

