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
export default async function DeckCartaCRUD(operation, DeckId, CartaId) {
  try {
    const sqlMap = {
      create: "INSERT INTO `Deck_Carta` (`DeckId`, `CartaId`) VALUES (?, ?);",
      read: "SELECT * FROM `Deck_Carta` WHERE `DeckId` = ? AND `CartaId` = ?;",
      delete: "DELETE FROM `Deck_Carta` WHERE `DeckId` = ? AND `CartaId` = ?;",
    };

    if (!sqlMap[operation]) throw new Error("Invalid operation type");

    let sql = sqlMap[operation];
    let values = [DeckId, CartaId];

    const [result] = await pool.execute(sql, values);
    console.log(`${operation} operation successful.`);
    return result;
  } catch (error) {
    console.error(`Error executing ${operation} operation:`, error.message);
    throw error;
  }
}
