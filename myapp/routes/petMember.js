var express = require('express');
var request = require('request');
var router = express.Router();
const { uploadFile } = require("../util/upload.js");//上传图片的文件

const {
    addPetMaster, getPetMasterByPage, updatePetMaster, removePetMaster, getID
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

// 获取宠主数据
router.get('/getPetMasterByPage', async function (req, res, next) {
    res.send(await getPetMasterByPage(req.query));
});

// 修改宠主数据
router.post('/updatePetMaster', async function (req, res, next) {
    console.log(req.body);

    res.send(await updatePetMaster(req.body));
});

// 删除宠主
router.post('/removePetMaster', async function (req, res, next) {
    res.send(await removePetMaster(req.body));
});


//验证前台code

router.get('/getID', async function (req, res, next) {
    await request(`https://api.weixin.qq.com/sns/jscode2session?appid=wx7d68bec474632ecf&secret=8a799c425b0088accc66e018b3dbecf7&js_code=${req.query.code}&grant_type=authorization_code`, async function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(await getID({ body, data: req.query }));
        }
    })
});



module.exports = router;
