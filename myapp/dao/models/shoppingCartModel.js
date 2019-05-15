const mongoose = require('mongoose');

const shoppingCartSchema = new mongoose.Schema({
    petMemberId: {//宠主id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'petMemberModel'
    },
    goodsId: [{//商品id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'goodsModel'
    }],
    serveId: [{//服务id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'serveModel'
    }],
    petId: [{//宠物id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'petModel'
    }],
    count:Number,//数量
    price: Number,//价格
})

mongoose.model('shoppingCartModel', shoppingCartSchema, "shoppingCart");

module.exports.shoppingCartModel = mongoose.model('shoppingCartModel');
