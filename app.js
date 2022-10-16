const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  

  


app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/users', require('./routes/users'));
  module.exports = app;