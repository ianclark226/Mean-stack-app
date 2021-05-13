var express= require('express');
var mongoose = require('mongoose');
var User = require('../DB/User');
var route = express.Router();

route.post('/', async(req, res)=> {
    const{title,isDone} = req.body;
    let task = {};
    task.title = title;
    task.isDone =  isDone;
    let taskModel = new Task(task);
    await taskModel.save();
    res.json(taskModel);
});

module.exports = route;


