var express = require('express');
var router = express.Router();

// fs文件系统模块,负责读写文件
var fs = require('fs')
//AipFace 百度人脸对比sdk
var AipFace = require('baidu-aip-sdk').face;


// npm i baidu-aip-sdk //百度sdk
// npm i body-parser //文件超过限制

var APP_ID = "16196249";
var API_KEY = "bsYO41BE8wUXE5IeIOQwRvpR";
var SECRET_KEY = "ZF67KtF59Qe054fAQGlgeyVNgrCZ3IDq";
var client = new AipFace(APP_ID, API_KEY, SECRET_KEY);

router.post('/face', async function (req, res) {
    // console.log(123);
    // 需要对比的图片，转换成base64格式
    var image1 = fs.readFileSync("./public/images/ran.jpg");
    var base64Img1 = new Buffer(image1).toString('base64');
    // 前台传过来的图片
    var image2 = req.body.img.replace(/\s/g, "+").replace(/^data:image\/\w+\Wbase64,/, "");
    client.match([
        { image: base64Img1, image_type: 'BASE64' },
        { image: image2, image_type: 'BASE64' }
    ]).then(function (result) {
        let info = JSON.stringify(result);
        res.send(info);
    });
});


module.exports = router;