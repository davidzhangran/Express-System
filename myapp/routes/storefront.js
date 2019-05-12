var express = require('express');
var router = express.Router();
const { uploadFile } = require("../util/upload.js");

const {
  addStorefront,
  getStorefrontByPage,
  addStaff,
  updateStorefront,
  addGoods,
  addServe,
  addPet,
  remove,
  removeStaff
} = require('../service/storefrontSer');

//申请门店
router.post('/addStorefront', async function (req, res, next) {
  console.log(req.body);
  
  res.send(await addStorefront(req.body));
});

// 上传图片
router.post('/addLicense2', async function (req, res, next) {
  let result = await uploadFile(req, res, {
    fileType: "imgags",//图片保存的文件名
    path: "./public/imgags/licenseImg"//图片保存的文件路径
  })
  res.send(result);
})

// 获取门店
router.get('/getStorefrontByPage', async function (req, res, next) {
  res.send(await getStorefrontByPage(req.query));
});

// 增加员工
router.post('/addStaff', async function (req, res, next) {
  res.send(await addStaff(req.body));

})
// 修改门店
router.post('/updateStorefront', async function (req, res, next) {
  res.send(await updateStorefront(req.body));
});

// 添加商品
router.get('/addGoods', async function (req, res, next) {
  res.send(await addGoods(req.query));
});

// 添加服务
router.get('/addServe', async function (req, res, next) {
  res.send(await addServe(req.query));
});

// 添加宠物
router.get('/addPet', async function (req, res, next) {
  
  res.send(await addPet(req.query));
});


// 删除
router.get('/remove', async function (req, res, next) {
  res.send(await remove(req.query));
});
// 删除
router.get('/removeStaff', async function (req, res, next) {
  res.send(await removeStaff(req.query));
});

module.exports = router;
