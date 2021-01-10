const express = require('express');
const Employee = require('../models/employees');

const router = express.Router();

//get a list of employees from db
router.get('/employees', function(req,res,next){
    Employee.find({}).then(function(emps){
        res.send(emps);
    }).catch(next);
})

//add a new employee to db
router.post('/employees', function(req,res,next){
    Employee.create(req.body).then(function(emp){
        res.status(200).send({emp});
    }).catch(next);
})

//update an employee details in the db
router.get('/employees/:id', function(req,res,next){
    Employee.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Employee.findOne({_id:req.params.id}).then(function(emp){
            res.send(emp);
        }).catch(next);
    }).catch(next);
})

//delete the employee in the db
router.get('/employees/;id', function(req,res,next){
    Employee.findByIdAndRemove({_id:req.params.id}).then(function(emp){
        res.send(emp);
    }).catch(next);
})

module.exports = router;