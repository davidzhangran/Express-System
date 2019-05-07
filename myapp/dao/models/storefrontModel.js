// 门店
const mongoose = require('mongoose');

const storefrontSchema = new mongoose.Schema({
    name: String,    // 名称
    licensenumber: String, // 营业执照号码
    license: String,  // 营业执照图片
    site: String,//营业地址
    location: String,//定位,经纬度
    person: String,//法人
    phone: String,//联系电话
    banner: Array,//头图
    feature: String,//特色
    vip: String,//VIP等级
    commission: String,//佣金比例
    clerk: Array,//店员属性
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
    state: { // 审核状态：
        type: String,
        default: "1"//默认申请中，2表示可用，0不可用
    },
})

mongoose.model('storefrontModel', storefrontSchema, "storefront");

module.exports.storefrontModel = mongoose.model('storefrontModel');