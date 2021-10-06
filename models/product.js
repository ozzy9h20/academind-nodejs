const db = require('../util/database');
const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, price, description) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    const { title, price, description, imageUrl } = this;
    const qs = `INSERT INTO products 
                VALUES (null, ?, ?, ?, ?)`;
    return db.execute(qs, [title, price, description, imageUrl]);
  }

  static fetchAll() {
    const qs = `SELECT * 
                FROM products`;
    return db.execute(qs);
  }

  static findById(id) {
    const qs = `SELECT * 
                FROM products 
                WHERE products.id = ?`;
    return db.execute(qs, [id]);
  }

  static deleteById(id) {
    const qs = `DELETE
                FROM products 
                WHERE id = ?`;
    return db.execute(qs, [id]);
  }
}
