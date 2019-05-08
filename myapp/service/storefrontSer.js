

const {
    addStorefront,
    getStorefrontByPage,
    addStaff
} = require('../dao/storefrontDao');

//申请门店
module.exports.addStorefront = async function (pram) {
    return await addStorefront(pram);
}
module.exports.getStorefrontByPage = async function (pram) {
    return await getStorefrontByPage(pram);
}


module.exports.addStaff = async function (pram) {
    return await addStaff(pram);
}