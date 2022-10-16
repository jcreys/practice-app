const app = require('express').Router();
const {Task} = require('../db')

app.get('/api/users', async(req,res,next)=>{
    try{
        res.send(await User.findAll());
    }catch(ex){
        next(ex)
    }

})

module.exports = app;