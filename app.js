const { Task, User, sequelize } = require("./db");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.use("/api/tasks", require("./routes/tasks"));
app.use("/api/users", require("./routes/users"));
module.exports = app;
