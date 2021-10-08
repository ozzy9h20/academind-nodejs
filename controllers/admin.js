const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
  });
}

exports.postAddProduct = (req, res) => {
  const { title, imageUrl, price, description } = req.body;
  Product.create({
    title,
    imageUrl,
    price,
    description,
  })
  .then(result => {
    console.log('Created a product');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
}

exports.getEditProduct = (req, res, next) => {
  const { edit: editMode } = req.query;
  if (!editMode) {
    return res.redirect('/');
  }

  const { productId: prodId } = req.params;
  Product.findByPk(prodId)
    .then(({ dataValues: product }) => {
      if (!product) {
        return res.redirect("/");
      }

      res.render("admin/edit-product", {
        product: product,
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
      });
    })
    .catch((err) => console.log(err));
}

exports.postEditProduct = (req, res) => {
  const { productId, title, imageUrl, price, description } = req.body;

  Product.findByPk(productId)
    .then((product) => {
      for (let key of Object.keys(req.body)) {
        product[key] = req.body[key];
      }

      console.table(product);
      return product.save();
    })
    .then((result) => {
      console.log("UPDATED PRODUCT!");
      res.redirect('/admin/products');
    })
    .catch((err) => console.log(err));
}

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch(err => console.log(err));
  }

exports.postDeleteProduct = (req, res, next) => {
  const {productId: prodId} = req.body;
  Product.findByPk(prodId)
    .then(product => {
      return product.destroy();
    })
    .then(result => {
      console.log("DESTROYED PRODUCT");
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
}
