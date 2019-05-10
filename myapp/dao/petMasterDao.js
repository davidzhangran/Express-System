const {
    petMemberModel,
} = require("./models/petMemberModel"); //宠物模型

// 新增宠主数据
module.exports.addPetMaster = async (parm) => {
    console.log(parm);
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
    console.log(pageData)
    return pageData;
}

//修改宠主
module.exports.updatePetMasterById=async function(updateMaster){
    let {_id}=updateMaster;
   return await petModel.update({_id},updateMaster);
}


