// 宠主
const mongoose = require('mongoose');

const petMemberSchema = new mongoose.Schema({
    phone: String,    // 电话号码
    username: String, // 昵称
    name: String,  // 真实姓名
    card: String,//会员卡
    banner: Array,//头图
    site: String,//送货地址
    area: String,//区域
    city:String,//城市
    integral: String,//积分
    owned: Array,//拥有的宠物
    ordersId: [{//订单id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ordersModel'
    }],
})

mongoose.model('petMemberModel', petMemberSchema, "petMember");

module.exports.petMemberModel = mongoose.model('petMemberModel');