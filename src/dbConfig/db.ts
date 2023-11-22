const mysql = require("mysql");
require("dotenv");

const connection = async () => {
  try {
    await mysql
      .createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE,
      })
      .connect();
    console.log("DB connected");
  } catch (er) {
    console.log("Error while connecting db", er);
  }
};

export default connection;
