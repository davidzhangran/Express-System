const { addPetMaster } = require("../dao/petMasterDao");

module.exports.addPetMaster = async function (event) {
    const data = await addPetMaster(event);
    console.log(data);

    return data;
}
