var express = require('express');
var router = express.Router();
const { addCommodity } = require("../service/goodsSer.js");
/* GET home page. */
router.post('/addCommodity', async function (req, res, next) {
    console.log(req.body)
    res.send(await addCommodity(req.body));
});

module.exports = router;
