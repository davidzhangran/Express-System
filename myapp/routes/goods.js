var express = require('express');
var router = express.Router();
const { uploadFile } = require("../util/upload.js");
const { addCommodity, getcommoditysByPage, upDataCommodity, removeCommodity } = require("../service/goodsSer.js");
/* GET home page. */
router.post('/addCommodity', async function (req, res, next) {
  res.send(await addCommodity(req.body));
});
router.get('/getcommoditysByPage', async function (req, res, next) {
  res.send(await getcommoditysByPage(req.query));
});
router.post('/upDataCommodity', async function (req, res, next) {
  res.send(await upDataCommodity(req.body));
});

router.post('/removeCommodity', async function (req, res, next) {
  res.send(await removeCommodity(req.body));
});

router.post('/addCommodityImg', async function (req, res, next) {
  let result = await uploadFile(req, res, {
    fileType: "imgags",//图片保存的文件名
    path: "./public/imgags/goodsImg"//图片保存的文件路径
  })
  res.send(result);
})


module.exports = router;
