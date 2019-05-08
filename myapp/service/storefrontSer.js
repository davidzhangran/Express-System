

const {
    addStorefront,
    getStorefrontByPage,
    addStaff,
    updateStorefront
} = require('../dao/storefrontDao');

//申请门店
module.exports.addStorefront = async function (pram) {
    return await addStorefront(pram);
}
//获取门店
module.exports.getStorefrontByPage = async function (pram) {
    return await getStorefrontByPage(pram);
}


module.exports.addStaff = async function (pram) {
        return await addStaff(pram);
}
//门店
module.exports.updateStorefront = async function (pram) {
    let data = await updateStorefront(pram);
    if (data.ok > 0) {
        return true;
    }
    return false;
}