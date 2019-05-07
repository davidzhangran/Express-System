const {
    usersModel,
} = require("./models/usersModel");


module.exports.addUser = async (parm) => {
    console.log(parm);
    return await usersModel.create(parm);
}