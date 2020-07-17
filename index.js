/* express: crear un servidor web usando NODE*/

const server = require("./src/server");
const dbConnect = require("./src/lib/db");
const koderModel = require("./src/models/koder");



const PORT = 9876;

dbConnect().then(() => {
  console.log("Connected to DB.");
  server
  .listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
  })
})


  .catch((error) => {
    console.log(`Error:`, error);
  });
