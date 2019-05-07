// 评论
const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    graded: String,    // 评分
    comment: String, // 评价内容
    imags: Array,  // 上传图片
    nature: String,//评价性质
    appraiser: String,//评价人
    ordersId: [{//订单
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ordersModel'
    }],
})

mongoose.model('commentModel', commentSchema, "comment");

module.exports.commentModel = mongoose.model('commentModel');