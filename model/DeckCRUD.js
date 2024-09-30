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

export default async function DeckCRUD(operation, Id, Nome, CartaImg, ContaId) {
  try {
    const sqlMap = {
      create:
        "INSERT INTO `Deck` (`Id`, `Nome`, `CartaImg`, `ContaId`) VALUES (?, ?, ?, ?);",
      read: "SELECT * FROM `Deck` WHERE `Id` = ?;",
      update:
        "UPDATE `Deck` SET `Nome` = ?, `CartaImg` = ?, `ContaId` = ? WHERE `Id` = ?;",
      delete: "DELETE FROM `Deck` WHERE `Id` = ?;",
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
          sanitizeValue(CartaImg),
          sanitizeValue(ContaId),
        ];
        break;
      case "read":
        values = [sanitizeValue(Id)];
        break;
      case "update":
        values = [
          sanitizeValue(Nome),
          sanitizeValue(CartaImg),
          sanitizeValue(ContaId),
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
