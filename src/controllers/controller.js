const database = require("../database/queries.js");

function getHomePage(req, res) {
  res.render("index", {
    title: "HOME",
  });
}

async function getAllCategories(req, res) {
  const categories = await database.getDbAllCategories();
  res.render("categories", {
    title: "CATEGORIES",
    categories: categories,
  });
}

async function getAllProducts(req, res) {
  const products = await database.getDbAllProducts();
  res.render("products", {
    title: "PRODUCTS",
    products: products,
  });
}

async function getProduct(req, res) {
  const id = req.params.id;
  const product = await database.getDbProduct(id);
  res.render("product", {
    product: product,
  });
}

async function getAllBrands(req, res) {
  const brands = await database.getDbAllBrands();
  res.render("brands", {
    title: "BRANDS",
    brands: brands,
  });
}

module.exports = {
  getHomePage,
  getAllCategories,
  getAllProducts,
  getProduct,
  getAllBrands,
};
