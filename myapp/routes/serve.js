var express = require('express');
var router = express.Router();
const { uploadFile } = require("../util/upload.js");
let {addPet,getPetsByPage,removePetById,updatePetById,searchPets}=require("../service/servePetSer");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//宠物新增
router.post('/addServePet', async function (req, res, next) {
  console.log(1);
  
  res.send(await addPet(req.body));
});
//文件上传
router.post('/addServePImage', async function (req, res, next) {
  let result = await uploadFile(req, res, {
    fileType: "imgags",//图片保存的文件名
    path: "./public/images/petImg"//图片保存的文件路径
  })
  res.send(result);
})
 //通过页数找宠物
 router.get('/getServePetsByPage',async function(req,res,next){
    res.send(await getPetsByPage(req.query));
  })
//删除宠物
router.post('/removeServePetById',async function(req, res, next) {
  res.send(await removePetById(req.body));
});
//修改宠物
router.post('/updateServePetById',async function(req,res,next){
  res.send(await updatePetById(req.body));
})
//搜索
router.get('/searchServePets', async function(req, res, next) {
  res.send(await searchPets(req.query));
});

module.exports = router;
