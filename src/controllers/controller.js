const database = require("../database/queries.js");

async function getAllCategories(req, res) {
  const categories = await database.getDbAllCategories();
  res.render("index", {
    title: "CATEGORIES",
    categories: categories,
  });
}

async function getAllProducts(req, res) {
    const products = await database.getDbAllProducts();
    res.render("products", {
        title: "PRODUCTS",
        products: products,
    })
}

module.exports = {
  getAllCategories,
  getAllProducts,
};
