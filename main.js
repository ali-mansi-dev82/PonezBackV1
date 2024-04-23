const express = require("express");
const swaggerConfig = require("./src/config/swagger.config");
const { MainRouters } = require("./src/modules/app.routes");
const notFoundError = require("./src/common/exception/notFound.handler");
const errorHandler = require("./src/common/exception/allError.handler");
require("dotenv").config();
const cors = require("cors");
const deleteExpiredImage = require("./src/common/cron-jobs/deleteExpiredImage");

async function app() {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.json());
  app.use(deleteExpiredImage, MainRouters);
  swaggerConfig(app);
  app.use(notFoundError);
  app.use(errorHandler);
  require("./src/config/mongoose.config");
  app.listen(process.env.PORT, () => {
    console.log(`server run in port ${process.env.PORT}`);
  });
}
app();
