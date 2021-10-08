const Cart = require("../models/cart");
const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
}

exports.getProduct = (req, res, next) => {
  const { productId } = req.params;
  // Product.findAll({ where: { id: productId } })
  //   .then(([product]) => {
  Product.findByPk(productId)
    .then(product => {
      res.render("shop/product-detail", {
        product,
        pageTitle: `Details of ${product.title}`,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
}

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => console.log(err));
}

exports.getCart = (req, res, next) => {
  Cart.getProducts(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];

      for (let product of products) {
        const cartItem = cart.products.find(prod => prod.id === product.id);
        cartItem && cartProducts.push({ productData: product, qty: cartItem.qty });
      }

      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts,
      });
    });
  });
}

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
}

exports.postCartDeleteProduct = (req, res, next) => {
  const { productId: prodId} = req.body;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders',
  });
}

exports.getCheckout = (req, res, next) => {
  res.render('/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout',
  });
}
