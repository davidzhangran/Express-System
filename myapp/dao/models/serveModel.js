// 服务
const mongoose = require('mongoose');

const serveSchema = new mongoose.Schema({
    name: String,    // 名称
    category: String, // 品类
    schedule: String,  // 排期
    specification: String,//适用规格
    service: String,//服务规格
    consuming: String,//耗时
    grade: String,//服务员等级
    price: Number//价格
})

mongoose.model('serveModel', serveSchema, "serve");

module.exports.serveModel = mongoose.model('serveModel');