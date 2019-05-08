const {
    usersModel,
} = require("./models/usersModel");

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
    console.log(parm);
    return await usersModel.find(parm);
}