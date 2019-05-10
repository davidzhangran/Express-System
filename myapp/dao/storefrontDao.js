const {
    storefrontModel,
} = require("./models/storefrontModel"); //门店模型

const {
    usersModel,
} = require("./models/usersModel"); //用户模型

module.exports.addStorefront = async (parm) => {
    const { userId } = parm;
    
    // let result = await storefrontModel.find(parm)
    // if (result.length != 0) {
    //     return false;
    // }
    const a = await storefrontModel.create(parm); //增加到门店申请里去
    // console.log(a);

    const { _id } = a;
    const user = await usersModel.find({ _id: userId });
    let storefrontId = user[0].storefrontId.map(item => item + "");
    storefrontId.push(_id + "");
    await usersModel.updateOne({ _id: userId }, { storefrontId });
    let info = await usersModel.find({ _id: userId }).populate("storefrontId");
    return info

}
//同过分页获取
module.exports.getStorefrontByPage = async (parm) => {
    let {
        currentPage,
        eachPage,
        userId
    } = parm;
    let storefrontInfo = await storefrontModel
        .find({
            userId
        })
        .skip((currentPage - 1) * eachPage) //跳过多少个
        .limit(eachPage - 0) //查询多少个
        .populate("goodsId")
        .populate("serveId")
        .populate("petId")

    let count = await storefrontModel.find({
        userId
    });//总条数
    let totalPage = Math.ceil(count.length / eachPage); //总页数

    const [user] = await usersModel
        .find({ _id: userId })
        .populate("goodsId")
        .populate("serveId")
        .populate("petId")
        .populate("storefrontId")


    return {
        count: count.length,
        totalPage: totalPage,
        currentPage: currentPage - 0,
        eachPage: eachPage - 0,
        storefrontInfo,
        user
    }

}

module.exports.addStaff = async ({ _id, staff }) => {
    let [data] = await storefrontModel.find({ _id });
    staff.date = staff.date.slice(0, 10)
    data.clerk.push(staff);
    await storefrontModel.updateMany({ _id }, { clerk: data.clerk });
    let [info] = await storefrontModel.find({ _id })
        .populate("goodsId")
        .populate("serveId")
        .populate("petId")
    return info;
}
//修改门店
module.exports.updateStorefront = async (parm) => {
    console.log(parm);
    let data = await storefrontModel.updateMany({ _id: parm._id }, parm);
    return data;
}

// 添加商品
module.exports.addGoods = async ({ _id, goodsId }) => {
    let [data] = await storefrontModel.find({ _id });
    data.goodsId.push(goodsId)
    // 更新数据
    await storefrontModel.updateMany({ _id }, data);
    return await storefrontModel.find({ _id })
        .populate("goodsId")
        .populate("serveId")
        .populate("petId")
}


// 添加服务
module.exports.addServe = async ({ _id, serveId }) => {
    let [data] = await storefrontModel.find({ _id });
    data.serveId.push(serveId)
    // // 更新数据
    await storefrontModel.updateMany({ _id }, data);
    return await storefrontModel.find({ _id })
        .populate("goodsId")
        .populate("serveId")
        .populate("petId")
}

// 添加宠物
module.exports.addPet = async ({ _id, petId }) => {
    let [data] = await storefrontModel.find({ _id });
    data.petId.push(petId)
    // 更新数据
    await storefrontModel.updateMany({ _id }, data);
    return await storefrontModel.find({ _id })
        .populate("serveId")
        .populate("goodsId")
        .populate("petId")
}
// 移除
module.exports.remove = async ({ _id, typeId, type }) => {
    let [data] = await storefrontModel.find({ _id });//查找到当前门店的信息
    // 通过filter删除商品
    let newData = data[type].filter(item => item != typeId);
    data[type] = newData;
    // // 更新数据
    await storefrontModel.updateMany({ _id }, data);
    return await storefrontModel.find({ _id })
        .populate("serveId")
        .populate("goodsId")
        .populate("petId")
}

// 移除员工（通过电话号码）
module.exports.removeStaff = async ({ _id, phone }) => {
    let [data] = await storefrontModel.find({ _id });//查找到当前门店的信息
    // 通过filter删除
    
    let newData = data.clerk.filter(item => item.phone != phone);
    data.clerk = newData;
    // 更新数据
    await storefrontModel.updateMany({ _id }, data);
    return await storefrontModel.find({ _id })
        .populate("serveId")
        .populate("goodsId")
        .populate("petId")
}