const express = require("express");
const app = express();
const path = require("path");

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

  module.exports = app;