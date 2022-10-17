const app = require("express").Router();
const { Task } = require("../db");
app.get("/tasks", async (req, res, next) => {
  try {
    res.send(await Task.findAll());
  } catch (ex) {
    next(ex);
  }
});

app.delete("/:id", async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    task.destroy();
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});

app.post("/tasks/:id", async (req, res, next) => {
  try {
    res.status(201).send(await Task.create(req.body));
  } catch (ex) {

  }
});
module.exports = app;
