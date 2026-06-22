const pool = require("./pool");

async function getDbAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories")
    return rows;
}

module.exports = {
    getDbAllCategories,
}