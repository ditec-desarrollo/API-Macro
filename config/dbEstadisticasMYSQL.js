const mysql = require("mysql2/promise");

const conectarBDEstadisticasMySql = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.HOST_CIU_DIGITAL,
      port: process.env.PORT_CIU_DIGITAL,
      user: process.env.USER_CIU_DIGITAL,
      password: process.env.PASSWORD_CIU_DIGITAL,
      database: process.env.DB_CIU_DIGITAL,
      // host: "209.126.107.166",
      // host: "localhost",
      // port: "3306",
      // user: "admin_db",
      // password: "Mun1SMTucu24",
      // database: "ciudadano_digital",
    });
    return connection;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  conectarBDEstadisticasMySql,
 };
