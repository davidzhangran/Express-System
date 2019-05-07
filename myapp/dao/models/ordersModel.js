// 订单
const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    petMemberId: {//用户id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'petMemberModel'
    },
    goodsId: [{//商品id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'goodsModel'
    }],
    storefrontId: {//门店id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'storefrontModel'
    },
    serveId: [{//服务id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'serveModel'
    }],
    petId: [{//宠物id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'petModel'
    }],
    price: Number,//价格
})

mongoose.model('ordersModel', ordersSchema, "orders");

module.exports.ordersModel = mongoose.model('ordersModel');