

const {
    addStorefront,
    getStorefrontByPage
} = require('../dao/storefrontDao');

//申请门店
module.exports.addStorefront = async function (pram) {
    return await addStorefront(pram);
}
module.exports.getStorefrontByPage = async function (pram) {
    return await getStorefrontByPage(pram);
}