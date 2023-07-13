const express = require('express');
const router = express.Router();

const {getallproducts, testproducts} = require('../controller/product')

router.route('/').get(getallproducts);    // get all products and test all products are function which will be in controller
router.route('/test').get(testproducts);

module.exports = router;