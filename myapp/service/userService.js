const {
    addUser
} = require('../dao/userDao');

//申请门店
module.exports.addUser = async function (pram) {
    return await addUser(pram);
}