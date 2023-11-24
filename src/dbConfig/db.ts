const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});

// const connection = async () => {
// try {
// await mysql
// .createConnection({
// host: process.env.DB_HOST,
// user: process.env.DB_USER,
// password: process.env.DB_PASSWORD,
// database: process.env.DATABASE,
// })
//
// console.log("DB connected");
// } catch (er) {
// console.log("Error while connecting db", er);
// }
// };

export default connection;
