const express = require("express");
require("dotenv").config();

async function app() {
  const app = express();
  app.listen(process.env.PORT, () => {
    console.log(`server run in port ${process.env.PORT}`);
  });
}
app();
