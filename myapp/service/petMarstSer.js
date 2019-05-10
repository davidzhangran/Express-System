const { addPetMaster, getPetMasterByPage,updatePetMaster } = require("../dao/petMasterDao");

// 新增宠主
module.exports.addPetMaster = async function (pram) {
    const data = await addPetMaster(pram);
    console.log(data);
    return data;
}

// 获取宠主数据
module.exports.getPetMasterByPage = async function (pram) {
    return await getPetMasterByPage(pram);
}

// 修改宠主数据
module.exports.updatePetMaster = async function (pram) {
    let data = await updatePetMaster(pram);
    if (data.ok > 0) {
        return true;
    }
    return false;
}

