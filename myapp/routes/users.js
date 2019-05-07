var express = require('express');
var router = express.Router();

let { addUser,
    getUserByPage
} = require('../service/userService');

//获取用户
router.get('/getUserByPage', async function (req, res, next) {
    res.send(await getUserByPage(req.query));
});


//添加用户
router.post('/addUser', async function (req, res, next) {
    res.send(await addUser(req.body));
});


module.exports = router;
