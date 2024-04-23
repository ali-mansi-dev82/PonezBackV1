const express = require("express");
const { MainRouters } = require("./src/modules/app.routes");
require("dotenv").config();
const cors = require("cors");

async function app() {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.json());
  app.use(MainRouters);
  require("./src/config/mongoose.config");
  app.listen(process.env.PORT, () => {
    console.log(`server run in port ${process.env.PORT}`);
  });
}
app();
