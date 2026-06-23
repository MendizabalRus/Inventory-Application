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

async function getAddProduct(req, res) {
  res.render("addProduct", {
    title: "ADD NEW PRODUCT",
  });
}

async function getUpdateProduct(req, res) {
  const id = req.params.id;
  const product = await database.getDbProduct(id)
  const categories = await database.getDbAllCategories();
  const brands = await database.getDbAllBrands();
  res.render("updateProduct", {
    title: "UPDATE PRODUCT",
    product: product,
    categories: categories,
    brands: brands,
  })
}

async function postUpdateProduct(req, res) {
  const product = req.body;
  const id = req.params.id;
  await database.postDbUpdateProduct(id, product.name, product.description, product.price, product.stock, product.category, product.brand, product.image, );
  res.redirect(`/products/${id}`);
}

async function postDeleteProduct(req, res) {
  const id = req.params.id;
  await database.postDbDeleteProduct(id);
  res.redirect("/products");
}

async function postAddProduct(req, res) {
  const body = req.body;
  console.log(body);
  const addProduct = await database.postDbAddProduct(body.name, body.description, body.price, body.stock, body.category, body.brand, body.image);
  res.redirect("/products");
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
  getUpdateProduct,
  postUpdateProduct,
  postDeleteProduct,
  getAddProduct,
  postAddProduct,
  getAllBrands,
};
