var express = require('express');
var router = express.Router();

const { addShoppingCart, getShoppingCartByPage, removeShoppingCart, upDataShoppingCart } = require("../service/shoppingCartSer.js");

/* GET home page. */
router.post('/addShoppingCart', async function (req, res, next) {
    res.send(await addShoppingCart(req.body));
});
router.get('/getShoppingCartByPage', async function (req, res, next) {
    res.send(await getShoppingCartByPage(req.query));
});
router.post('/removeShoppingCart', async function (req, res, next) {
    res.send(await removeShoppingCart(req.body));
});
router.post('/upDataShoppingCart', async function (req, res, next) {
    res.send(await upDataShoppingCart(req.body));
});
module.exports = router;