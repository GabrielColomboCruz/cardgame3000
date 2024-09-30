const mysql = require("mysql2/promise");
const envConfig = require("@/config/envConfig");
envConfig();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default async function UsuarioCRUD(
  operation,
  Id,
  Usuario,
  Email,
  Senha,
  Diamante,
  Ip,
  Vitorias,
  Partidas,
  OuroMaximo,
  nSaves
) {
  try {
    const sqlMap = {
      create:
        "INSERT INTO `Usuario` ( `Usuario`, `Email`, `Senha`, `Diamante`, `Ip`, `Vitorias`, `Partidas`, `OuroMaximo`, `nSaves`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?);",
      emailread: "SELECT * FROM `Usuario` WHERE `Email` = ?;",
      idread: "SELECT * FROM `Usuario` WHERE `Id` = ?;",
      read: "SELECT * FROM `Usuario` WHERE `Usuario` = ?;",
      update:
        "UPDATE `Usuario` SET `Usuario` = ?, `Email` = ?, `Senha` = ?, `Diamante` = ?, `Ip` = ?, `Vitorias` = ?, `Partidas` = ?, `OuroMaximo` = ?, `nSaves` = ? WHERE `Id` = ?;",
      delete: "DELETE FROM `Usuario` WHERE `Id` = ?;",
    };

    if (!sqlMap[operation]) throw new Error("Invalid operation type");

    let sql = sqlMap[operation];
    let values;

    const sanitizeValue = (value) => (value === undefined ? null : value);

    switch (operation) {
      case "create":
        values = [
          sanitizeValue(Usuario),
          sanitizeValue(Email),
          sanitizeValue(Senha),
          sanitizeValue(Diamante),
          sanitizeValue(Ip),
          sanitizeValue(Vitorias),
          sanitizeValue(Partidas),
          sanitizeValue(OuroMaximo),
          sanitizeValue(nSaves),
        ];
        break;
      case "emailread":
        values = [sanitizeValue(Email)];
        break;
      case "idread":
        values = [sanitizeValue(Id)];
        break;
      case "read":
        values = [sanitizeValue(Usuario)];
        break;
      case "update":
        values = [
          sanitizeValue(Usuario),
          sanitizeValue(Email),
          sanitizeValue(Senha),
          sanitizeValue(Diamante),
          sanitizeValue(Ip),
          sanitizeValue(Vitorias),
          sanitizeValue(Partidas),
          sanitizeValue(OuroMaximo),
          sanitizeValue(nSaves),
          sanitizeValue(Id),
        ];
        break;
      case "delete":
        values = [sanitizeValue(Id)];
        break;
    }

    const [result] = await pool.execute(sql, values);

    console.log(`${operation} operation successful.`);
    return result[0];
  } catch (error) {
    console.error(`Error executing ${operation} operation:`, error.message);
    throw error;
  }
}
