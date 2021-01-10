const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//creating employess schema & model

const employeeSchema = new Schema({
    name:{
        type: String,
        required: [true,'*Name field is required!']
    },
    id:{
        type: String,
        required: [true, '*ID field is required!']
    },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;