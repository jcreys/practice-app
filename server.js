const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const { User, Task, sequelize } = require("./db");

app.listen(port, console.log(`listening on port ${port}`));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const init = async () => {
  console.log("calling init");
  await sequelize.sync({ force: true });
};

init();