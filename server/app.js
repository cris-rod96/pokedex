const server = require("./src/server");
const { HOST_PORT } = require("./src/config/index.config");
const { connection } = require("./src/database/index.database");

connection()
  .then(() => {
    server.listen(HOST_PORT, () => {
      console.log(`Server listening in port: ${HOST_PORT}`);
    });
  })
  .catch((err) => console.log(err));
