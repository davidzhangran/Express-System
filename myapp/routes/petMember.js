var express = require('express');
var router = express.Router();
const { uploadFile } = require("../util/upload.js");//上传图片的文件

const {
    addPetMaster,getPetMasterByPage
} = require('../service/petMarstSer');

//添加新宠主
router.post('/addPetMaster', async function (req, res, next) {
    res.send(await addPetMaster(req.body)); //send 后面是我新增过后的结果
});

// 上传图片
router.post('/addPetMasterPicture', async function (req, res, next) {
    let result = await uploadFile(req, res, {
        fileType: "imgags",//图片保存的文件名
        path: "./public/imgags/petMasterImgags"//图片保存的文件路径
    })
    res.send(result);
})

// 获取数据
router.get('/getPetMasterByPage', async function (req, res, next) {
    res.send(await getPetMasterByPage(req.query));
});


module.exports = router;
