const express=require('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;

var { employee }=require('./employee.js');

router.get('/', (req, res)=>{
    employee.find((err, docs)=>{
        if(!err)
            res.send(docs);
        else
            console.log("error in retriving data: "+JSON.stringify(err));
    })
});

router.get('/:id', (req, res)=> {
    if(!ObjectId.isValid(req.param.id))
        return res.send('No record found');

    employee.findById(req.params.id, (err, docs)=>{
        if(!err)
            res.send(docs);
        else
            console.log("error in retriving data: "+JSON.stringify(err));
    });
});

router.post('/', (req, res)=>{
    var emp=new employee({
        id: req.body.id,
        name: req.body.name,
        position: req.body.position,
        location: req.body.location,
        salary: req.body.salary
    });
    emp.save((err, docs)=>{
        if(!err)
            res.send(docs);
        else
            console.log("error in saving record: "+JSON.stringify(err));
    });
});

router.put('/:id', (req, res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.send('no record found');
    
    var emp={
        id: req.body.id,
        name: req.body.name,
        position: req.body.position,
        location: req.body.location,
        salary: req.body.salary
    };
    employee.findByIdAndUpdate(req.params.id, {$set: emp }, { new: true }, (err, docs)=>{
        if(!err)
            res.send(docs);
        else
            console.log('error in updating record: '+JSON.stringify(err));
    });
});

router.delete('/:id', (req, res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.send('no record found');
    
    employee.findByIdAndRemove(req.params.id, (err, docs)=>{
        if(!err)
            res.send(docs);
        else
            console.log('error in deleting record: '+JSON.stringify(err));
    });
});

module.exports=router;