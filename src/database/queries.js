const pool = require("./pool");

async function getDbAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getDbAllProducts() {
  const { rows } = await pool.query(
    "SELECT products.id, products.name, products.description, products.price, products.stock_quantity, products.image_url, categories.name AS category, brands.name AS brand FROM products JOIN categories ON products.category_id = categories.id JOIN brands ON products.brand_id = brands.id",
  );
  return rows;
}

async function postDbAddProduct(
  name,
  description,
  price,
  stock,
  category,
  brand,
  image,
) {
  await pool.query(
    `INSERT INTO products (name, description, price, stock_quantity, category_id, brand_id, image_url) VALUES ('${name}', '${description}', '${price}', '${stock}', '${category}', '${brand}', '${image}');`,
  );
}

async function getDbProduct(id) {
  const { rows } = await pool.query(
    "SELECT products.id, products.name, products.description, products.price, products.stock_quantity, products.image_url, categories.name AS category, brands.name AS brand FROM products JOIN categories ON products.category_id = categories.id JOIN brands ON products.brand_id = brands.id WHERE products.id = $1",
    [id],
  );
  return rows[0];
}

async function updateDbProduct() {}

async function postDbDeleteProduct(id) {
  await pool.query(`DELETE FROM products WHERE id = ${id}`);
}

async function getDbAllBrands() {
  const { rows } = await pool.query("SELECT * FROM brands");
  return rows;
}

module.exports = {
  getDbAllCategories,
  getDbAllProducts,
  postDbAddProduct,
  getDbProduct,
  updateDbProduct,
  postDbDeleteProduct,
  getDbAllBrands,
};
