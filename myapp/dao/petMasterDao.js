const {
    petMemberModel,
} = require("./models/petMemberModel"); //宠物模型

// 新增宠主数据
module.exports.addPetMaster = async (parm) => {
    // console.log(parm);
    return await petMemberModel.create(parm);
}

// 获取宠主数据
module.exports.getPetMasterByPage = async ({ eachPage, currentPage }) => {
    // console.log(eachPage, currentPage);
    let count = await petMemberModel.countDocuments(); //总条数
    let totalPage = Math.ceil((count / eachPage)); //总页数
    let petMasterUsers = await petMemberModel  //获取数据
        .find()
        .skip((currentPage - 1) * eachPage) //通过当前页码来判断从第几个数开始往后显示数据
        .limit(eachPage - 0) //通过每页显示的条数 来给出需要显示多少个数据
    // .populate({ path: 'classId'})    
    let pageData = {
        currentPage: currentPage - 0, //当前页码
        eachPage: eachPage - 0, //每页显示的条数
        totalPage, //总页数
        count, //总条数
        petMasterUsers,//数据
    };
    // console.log(pageData)
    return pageData;
}

//修改宠主
module.exports.updatePetMaster = async function (updateMaster) {
    let { _id } = updateMaster;
    console.log(updateMaster);
    return await petMemberModel.update({ _id }, updateMaster);
}

//删除宠物
module.exports.removePetMaster = async function ({ _id }) {
    return await petMemberModel.deleteOne({ _id });
}

//通过用户唯一标识注册
module.exports.getID = async function ({ body, data }) {
    const info = JSON.parse(body).openid;
    const ISInfo = await petMemberModel.find({ card: info });
    if (ISInfo.length <= 0) {
        const { userInfo } = data;   // 解构用户信息
        const newUserInfo = JSON.parse(userInfo);
        const user = {
            card: info,
            username: newUserInfo.nickName,
            banner: newUserInfo.avatarUrl
        }; // 将用户信息已对象的方式存放到user中
        return await petMemberModel.create(user);
    }else{
        return ISInfo
    }
}


