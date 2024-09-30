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
export default async function UsuarioContaDeckCRUD(
  operation,
  UsuarioContaId,
  DeckId
) {
  try {
    const sqlMap = {
      create:
        "INSERT INTO `UsuarioConta_Deck` (`UsuarioContaId`, `DeckId`) VALUES (?, ?);",
      read: "SELECT * FROM `UsuarioConta_Deck` WHERE `UsuarioContaId` = ? AND `DeckId` = ?;",
      delete:
        "DELETE FROM `UsuarioConta_Deck` WHERE `UsuarioContaId` = ? AND `DeckId` = ?;",
    };

    if (!sqlMap[operation]) throw new Error("Invalid operation type");

    let sql = sqlMap[operation];
    let values = [UsuarioContaId, DeckId];

    const [result] = await pool.execute(sql, values);
    console.log(`${operation} operation successful.`);
    console.log(result);
    return result;
  } catch (error) {
    console.error(`Error executing ${operation} operation:`, error.message);
    throw error;
  }
}
