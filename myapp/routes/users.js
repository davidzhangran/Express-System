var express = require('express');
var router = express.Router();

let { addUser,
    getUserByPage,
    loging,
    upDataUser,
    deleteUser
} = require('../service/userService');

//获取用户
router.get('/getUserByPage', async function (req, res, next) {
    res.send(await getUserByPage(req.query));
});

//添加用户
router.post('/addUser', async function (req, res, next) {
    res.send(await addUser(req.body));
});

//用户登录
router.post('/loging', async function (req, res, next) {
    console.log(1);
    
    res.send(await loging(req.body));
});

//修改用户
router.post('/upDataUser', async function (req, res, next) {
    res.send(await upDataUser(req.body));
});

//删除用户
router.post('/deleteUser', async function (req, res, next) {
    console.log(1);
    
    res.send(await deleteUser(req.body));
});
module.exports = router;
