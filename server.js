const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const { User, Task, sequelize } = require("./db");

app.listen(port, console.log(`listening on port ${port}`));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/task', async(req,res,next)=>{
    try{
        const task = await Task.findAll();
        res.send(task);
    }catch(ex){
        next(ex)
    }

})

app.get('/user', (req,res,next)=>{
    try{
        const user = await User.findAll();
        res.send(user);
    }catch(ex){
        next(ex)
    }

})


const init = async () => {
  console.log("calling init");
  await sequelize.sync({ force: true });
  await Promise.all([
    User.create({ firstName: 'Joshua' }),
    User.create({ firstName: 'Lucy' }),
    User.create({ firstName: 'Ethyl' }),
    Task.create({ name: 'Buy juice' }),
    Task.create({ name: 'Go to gym' }),
    Task.create({ name: 'Get that bread' }),
    Task.create({ name: 'Code more' }),
])
};

init();
