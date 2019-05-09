// 商品
const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
    name: String,    // 名称
    category: String, // 品类
    texture: String,  // 材质
    specification: String,//适用规格
    exclusive: String,//专属规格
    pack: String,//包装规格
    taste: String,//口味
    special: String,//特殊功用
    origin: String,//产地
    production: String,//出厂日期
    expiration: String,//保质期
    supplier: String,//供应商
    feature: String,//特色说明
    price: Number,//价格
    images: Array,//图片,
    //关联用户Id
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usersModel'
    }

})

mongoose.model('goodsModel', goodsSchema, "goods");

module.exports.goodsModel = mongoose.model('goodsModel');