const {
    addUser,
    getUserByPage
} = require('../dao/userDao');

//申请用户
module.exports.addUser = async function (pram) {
    return await addUser(pram);
}
//获取用户
module.exports.getUserByPage = async function (pram) {
    return await getUserByPage(pram);
}
