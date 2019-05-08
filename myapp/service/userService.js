const {
    addUser,
    getUserByPage,
    loging,
    upDataUser,
    deleteUser
} = require('../dao/userDao');

//申请用户
module.exports.addUser = async function (pram) {
    return await addUser(pram);
}
//获取用户
module.exports.getUserByPage = async function (pram) {
    return await getUserByPage(pram);
}
//用户登录
module.exports.loging = async function (pram) {
    return await loging(pram);
}
//修改用户
module.exports.upDataUser = async function (pram) {
    return await upDataUser(pram);
}
//删除用户
module.exports.deleteUser = async function (pram) {
    return await deleteUser(pram);
}

