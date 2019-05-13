const {serveModel}=require("../dao/models/serveModel")
const {usersModel}=require("./models/usersModel");
module.exports.addPet=async function({name,category,schedule,specification,service,consuming,grade,price,userId}){
    let result = await serveModel.find({name,category,schedule,specification,service,consuming,grade,price,userId})
    if (result.length != 0) {
        return false;
    }
    const {_id}=await serveModel.create({name,category,schedule,specification,service,consuming,grade,price,userId}); //增加
    const data=await usersModel.find({_id:userId});
    const serveId = data[0].serveId.map(item => item +"")
    serveId.push(_id+"")
    const date =  await usersModel.updateOne({_id:userId},{serveId})
    const user = await usersModel.find({_id:userId}).populate("serveId")
    return user;
}
module.exports.getPetsByPage=async function({eachPage,currentPage,type,text,userId}){
    //求总条数,也就是需要的学生人数
    let total=await serveModel.find({
        [type]:text,userId
    })
    // .countDocuments();//求总条数
    let maxPage=Math.ceil(total/eachPage);//总页数
    let serves=await serveModel
    .find({
        [type]:text,userId
    })
    //关联
    // .populate("classId")
    //跳过的条数
    .skip((currentPage-1)*eachPage)
    //指定从跳过之后的数量，有多少条数
    .limit(eachPage-0)
    let pageDate={
        currentPage:currentPage - 0,//当前页码
        eachPage: eachPage - 0,//每页显示的条数
        maxPage,//总页数
        total:total.length,//总条数
        serves//学生数据
    };
    return pageDate;

}
//删除宠物
module.exports.removePetById=async function(id){
    return await serveModel.deleteMany({_id:id._id});
}
//修改宠物
module.exports.updatePetById=async function(updateStudent){
    let {_id}=updateStudent;
   return await serveModel.update({_id},updateStudent);
}
//搜索
module.exports.searchPets= async function(stuFind){
    let {type,text}=stuFind;
   let data=await serveModel.find({
       [type]:text
   });
   return data;
}