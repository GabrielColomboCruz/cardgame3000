const mysql = require("mysql2/promise");
const envConfig = require("../config/envConfig");
envConfig();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default async function CartaCRUD(
  operation,
  Id,
  Nome,
  Atk,
  Vida,
  Raridade,
  Imagem,
  Preco
) {
  try {
    const sqlMap = {
      create:
        "INSERT INTO `Carta` (`Id`, `Nome`, `Atk`, `Vida`, `Raridade`, `Imagem`, `Preco`) VALUES (?, ?, ?, ?, ?, ?, ?);",
      read: "SELECT * FROM `Carta` WHERE `Id` = ?;",
      update:
        "UPDATE `Carta` SET `Nome` = ?, `Atk` = ?, `Vida` = ?, `Raridade` = ?, `Imagem` = ?, `Preco` = ? WHERE `Id` = ?;",
      delete: "DELETE FROM `Carta` WHERE `Id` = ?;",
    };

    if (!sqlMap[operation]) throw new Error("Invalid operation type");

    let sql = sqlMap[operation];
    let values;
    const sanitizeValue = (value) => (value === undefined ? null : value);

    switch (operation) {
      case "create":
        values = [
          sanitizeValue(Id),
          sanitizeValue(Nome),
          sanitizeValue(Atk),
          sanitizeValue(Vida),
          sanitizeValue(Raridade),
          sanitizeValue(Imagem),
          sanitizeValue(Preco),
        ];
        break;
      case "read":
        values = [sanitizeValue(Id)];
        break;
      case "update":
        values = [
          sanitizeValue(Nome),
          sanitizeValue(Atk),
          sanitizeValue(Vida),
          sanitizeValue(Raridade),
          sanitizeValue(Imagem),
          sanitizeValue(Preco),
          sanitizeValue(Id),
        ];
        break;
      case "delete":
        values = [sanitizeValue(Id)];
        break;
    }

    const [result] = await pool.execute(sql, values);
    console.log(`${operation} operation successful.`);
    return result;
  } catch (error) {
    console.error(`Error executing ${operation} operation:`, error.message);
    throw error;
  }
}

module.exports = NomeCRUD;
