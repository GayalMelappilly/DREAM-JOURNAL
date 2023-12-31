var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers')
var userHelpers = require('../helpers/user-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  
  productHelpers.getAllProducts().then((products)=>{
    console.log(products)
    res.render('user/index', {products, admin: false});
  })
});

module.exports = router;
