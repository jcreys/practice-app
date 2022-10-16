const app = require("express").Router();
const { Task } = require("../db");
app.get("/api/tasks", async (req, res, next) => {
  try {
    res.send(await Task.findAll());
  } catch (ex) {
    next(ex);
  }
});

app.delete("api/tasks/:id", async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    user.destroy();
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});
module.exports = app;
