const app = require('express').Router();
const { User } = require('../db')
app.get('/api/tasks', async(req,res,next)=>{
    try{
        res.send(await Task.findAll());
    }catch(ex){
        next(ex)
    }

});
module.exports = app;