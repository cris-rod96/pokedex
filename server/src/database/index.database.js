const mongoose = require("mongoose");
const { DB_URI } = require("../config/index.config");
const connection = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Base de datos online");
  } catch (error) {
    throw new Error("Error al iniciar la base de datos");
  }
};

module.exports = {
  connection,
};
