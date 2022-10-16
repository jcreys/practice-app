const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const { User, Task, sequelize } = require("./db");

app.listen(port, console.log(`listening on port ${port}`));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/api/tasks', async(req,res,next)=>{
    try{
        res.send(await Task.findAll());
    }catch(ex){
        next(ex)
    }

})

app.get('/api/users', async(req,res,next)=>{
    try{
        res.send(await User.findAll());
    }catch(ex){
        next(ex)
    }

})


const init = async()=> {
    console.log('calling init');
    await sequelize.sync({ force: true });
    await Promise.all([
      User.create({ firstName: 'lucy' }),
      User.create({ firstName: 'moe' }),
      User.create({ firstName: 'ethyl' }),
    ]);
  
    await Promise.all([
      Task.create({ name: 'buy milk'}),
      Task.create({ name: 'walk dog'}),
      Task.create({ name: 'work out'}),
      Task.create({ name: 'call Fred'}),
    ]);
  };

init();
