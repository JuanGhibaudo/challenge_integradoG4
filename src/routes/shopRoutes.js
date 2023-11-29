const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController')

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.itemget);
router.post('/item/:id/add', shopControllers.itempost);
router.get('/cart', shopControllers.cartget);
router.post('/cart', shopControllers.cartpost);


module.exports = router;