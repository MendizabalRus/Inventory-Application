const pool = require("./pool");

async function getDbAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getDbAllProducts() {
  const { rows } = await pool.query("SELECT * FROM products");
  return rows;
}

async function getDbAllBrands() {
    const { rows } = await pool.query("SELECT * FROM brands");
    return rows;
}

module.exports = {
  getDbAllCategories,
  getDbAllProducts,
  getDbAllBrands,
};
