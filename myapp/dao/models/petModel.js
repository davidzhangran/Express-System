// 宠物
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: String,    // 名称
    category: String, // 宠物品种
    color: String,  // 毛色   
    price: Number,//价格
    images: Array,//图片
    age: String,//年龄
    gender: String,//性别
    describe: String,//描述
    userId:{//用户id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usersModel'
    },
})

mongoose.model('petModel', petSchema, "pet");

module.exports.petModel = mongoose.model('petModel');