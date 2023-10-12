var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log('Admin panel')
  productHelpers.getAllProducts().then((products) => {
    console.log(products)
    res.render('admin/view-products', { admin: true, products });
  })
});

router.get('/add-product', function (req, res) {
  res.render('admin/add-products', { admin: true })
})

router.post('/add-product', function (req, res) {
  productHelpers.addProduct(req.body, (id) => {

    console.log(id)

    let img = req.files.image
    console.log(img)

    img.mv('./public/product-images/' + id + '.jpg', (err) => {
      if (!err) {
        // console.log('Result : ' + result)
        console.log('Product : ' + JSON.stringify(req.body));
        // console.log(result)
        res.render('admin/add-products', { admin: true })
      } else {
        console.log(err);
      }
    })
  });
});

router.get('/delete-product/:id', (req,res)=>{

  let id = req.params.id

  productHelpers.deleteProducts(id).then((data)=>{
    res.redirect('/admin')
  })
})






module.exports = router;
