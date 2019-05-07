var express = require('express');
var router = express.Router();

let { addUser
} = require('../service/userService');


//添加用户
router.post('/addUser', async function (req, res, next) {
    res.send(await addUser(req.body));
});

module.exports = router;
