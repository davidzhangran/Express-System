const {petModel}=require("../dao/models/petModel")
module.exports.addPet=async function(parm){
    let result = await petModel.find(parm)
    if (result.length != 0) {
        return false;
    }
    await petModel.create(parm); //增加
    let info = await petModel.find();
    return info
}
module.exports.getPetsByPage=async function({eachPage,currentPage,type,text}){
    //求总条数,也就是需要的学生人数
    let total=await petModel.countDocuments();//求总条数
    let maxPage=Math.ceil(total/eachPage);//总页数
    let pets=await petModel
    .find({
        [type]:text
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
        total,//总条数
        pets//学生数据
    };
    return pageDate;

}
//删除宠物
module.exports.removePetById=async function(id){
    return await petModel.deleteMany({_id:id._id});
}
//修改宠物
module.exports.updatePetById=async function(updateStudent){
    let {_id}=updateStudent;
   return await petModel.update({_id},updateStudent);
}
//搜索
module.exports.searchPets= async function(stuFind){
    let {type,text}=stuFind;
   let data=await petModel.find({
       [type]:text
   });
   return data;
}