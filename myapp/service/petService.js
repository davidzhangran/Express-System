let { addPet, getPetsByPage, removePetById, updatePetById, searchPets } = require("../dao/petDao");
module.exports.addPet = async function (pram) {
    return await addPet(pram);
}
module.exports.getPetsByPage = async function (page) {
    let data = await getPetsByPage(page);
    return data;
}
module.exports.removePetById = async function (id) {
    let result = await removePetById(id);
    if (result) {
        return true;
    } else {
        return false;
    }
}
//确认修改
module.exports.updatePetById = async function (updateStudent) {
    let data = await updatePetById(updateStudent);
    if (data.ok > 0) {
        return true;
    } else {
        return false;
    }
}
//搜索
module.exports.searchPets = async function (stuFind) {
    let result = await searchPets(stuFind);
    return result;
}
