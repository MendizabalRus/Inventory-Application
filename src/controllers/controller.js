const database = require("../database/queries.js");

async function getAllCategories(req, res) {
  const categories = await database.getDbAllCategories();
  res.render("index", {
    title: "Categories",
    categories: categories,
  });
}

module.exports = {
    getAllCategories,
}