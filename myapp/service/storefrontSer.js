

const {
    addStorefront
} = require('../dao/storefrontDao');

//申请门店
module.exports.addStorefront = async function (pram) {
    return await addStorefront(pram);
}