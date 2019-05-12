const {
    usersModel,
} = require("./models/usersModel");
const {
    petModel,
} = require("./models/petModel");

//新增用户
module.exports.addUser = async (parm) => {
    console.log(parm);
    return await usersModel.create(parm);
}
//获取用户
module.exports.getUserByPage = async ({ eachPage, currentPage }) => {

    // console.log(eachPage, currentPage);
    let count = await usersModel.countDocuments(); //总条数
    let totalPage = Math.ceil((count / eachPage)); //总页数
    let users = await usersModel  //获取数据
        .find()
        .skip((currentPage - 1) * eachPage) //通过当前页码来判断从第几个数开始往后显示数据
        .limit(eachPage - 0) //通过每页显示的条数 来给出需要显示多少个数据
    // .populate({ path: 'classId'})    
    let pageData = {
        currentPage: currentPage - 0, //当前页码
        eachPage: eachPage - 0, //每页显示的条数
        totalPage, //总页数
        count, //总条数
        users,//数据
    };
    return pageData;
}
//用户登录
module.exports.loging = async (parm) => {
    
    // console.log(parm);
    // const data = await usersModel.find({ _id: "5cd24a9abdd86d6cb86dae95" })
    // const pet = await petModel.find({ _id: "5cd265a05fba2c5898ed5cbb" })
    // console.log(data[0].petId);
    // const petId = data[0].petId.map(item => item + "")
    // console.log(petId);
    // petId.push("5cd2664939b7b34f0cc9017b")
    // console.log(petId);
    // const newData = await usersModel.updateOne({ _id: "5cd24a9abdd86d6cb86dae95" }, { petId})
    // console.log(newData);

    return await usersModel.find(parm);
}
//修改用户
module.exports.upDataUser = async ({_id, state}) => {
    return await usersModel.updateOne({_id},{state});
}
//删除用户
module.exports.deleteUser = async (_id) => {
    return await usersModel.deleteOne({_id})
}