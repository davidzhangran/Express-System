// 门店用户，平台管理用户
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: String,    // 登录名
    password: String, // 密码
    phone: String,  // 手机号
    email: String,//邮箱
    name: String,//姓名
    role: { // 用户状态：
        type: String,
        default: "1"//默认门店管理员，0表示平台管理员
    },
    state: { // 状态：
        type: String,
        default: "1"//默认申请中，2表示可用，0不可用
    },
    goodsId: [{//商品id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'goodsModel'
    }],
    storefrontId: [{//门店id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'storefrontModel'
    }],
    serveId: [{//服务id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'serveModel'
    }],
    petId: [{//宠物id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'petModel'
    }],
})

mongoose.model('usersModel', usersSchema, "users");

module.exports.usersModel = mongoose.model('usersModel');