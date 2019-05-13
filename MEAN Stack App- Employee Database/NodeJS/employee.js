const mongoose=require('mongoose')

var employee=mongoose.model('Employee', {
    id: { type: Number },
    name: { type: String },
    position: { type: String },
    location: { type: String },
    salary: { type: Number }
});

module.exports={
    employee
};