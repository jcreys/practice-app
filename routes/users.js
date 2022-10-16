const app = require("express").Router();
const { User } = require("../db");

app.get("/api/users", async (req, res, next) => {
  try {
    res.send(await User.findAll());
  } catch (ex) {
    next(ex);
  }
});

app.delete("api/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    task.destroy();
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
