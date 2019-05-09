var express = require('express');
var router = express.Router();

const { addOrders } = require("../service/ordersSer.js");

/* GET home page. */
router.post('/addOrders', async function (req, res, next) {
  res.send(await addOrders(req.body));
});

module.exports = router;
