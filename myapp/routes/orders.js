var express = require('express');
var router = express.Router();

const { addOrders, getOrdersByPage, removeOrders, upDataOrders } = require("../service/ordersSer.js");

/* GET home page. */
router.post('/addOrders', async function (req, res, next) {
  res.send(await addOrders(req.body));
});
router.get('/getOrdersByPage', async function (req, res, next) {
  res.send(await getOrdersByPage(req.query));
});
router.post('/removeOrders', async function (req, res, next) {
  res.send(await removeOrders(req.body));
});
router.post('/upDataOrders', async function (req, res, next) {
  res.send(await upDataOrders(req.body));
});
module.exports = router;
