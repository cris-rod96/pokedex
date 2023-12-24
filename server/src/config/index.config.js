require("dotenv").config();

const { HOST_PORT, DB_URI } = process.env;

module.exports = {
  HOST_PORT,
  DB_URI,
};
