const { Client } = require("pg");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const SQL = `
    INSERT INTO categories (name) VALUES ('Smartphones'), ('Tablets'), ('Laptops'), ('Earpods'), ('Keyboards'), ('Mouses');

    INSERT INTO brands (name) VALUES ('Apple'), ('Samsung'), ('Google'), ('Huawei'), ('Redmi'), ('Microsoft'), ('Logitech'), ('Corsair'), ('Razer');

    INSERT INTO products (
    name,
    description,
    price,
    stock_quantity,
    category_id,
    brand_id
    )
    VALUES (
    'iPhone 17',
    'Apple''s new generation mobile phones arrive to the public with an innovative full-width camera and colorful designs',
    1500,
    20,
    1,
    1
    ),
    (
    'Galaxy S30',
    'Samsung flagship smartphone with advanced AI capabilities',
    1400,
    15,
    1,
    2
    ),
    (
    'iPad Pro',
    'Apple tablet designed for professional users',
    1200,
    10,
    2,
    1
    ),
    (
    'Pixel 10',
    'Google''s most advanced smartphones with Gemini''s most potent AI models included.',
    600,
    12,
    1,
    3
    ),
    (
    'G Pro X2 Superstrike',
    'The most potent gaming mouse in the markets. It''s haptic inductive trigger surpasses all it''s competitors with abismal difference',
    200,
    9,
    6,
    7
    );
`;

async function main() {
  console.log("Populating tables");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Success");
}

main();
