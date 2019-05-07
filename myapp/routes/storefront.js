var express = require('express');
var router = express.Router();
const { uploadFile } = require("../util/upload.js");

const {
  addStorefront
} = require('../service/storefrontSer');

//申请门店
router.post('/addStorefront', async function (req, res, next) {
  res.send(await addStorefront(req.body));
});


router.post('/addLicense2', async function (req, res, next) {
  let result = await uploadFile(req, res, {
    fileType: "imgags",//图片保存的文件名
    path: "./public/imgags/licenseImg"//图片保存的文件路径
  })
  res.send(result);
})

module.exports = router;
