// index.js
const express = require("express");
const router = require("./router");
const config = require("./config");

const PORT = config.PORT;
const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});