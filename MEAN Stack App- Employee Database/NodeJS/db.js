const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/EmpDB", (err)=>{
    if(!err)
        console.log("Connected to mongoDB...");
    else
        console.log("Error connecting mongoDB: "+JSON.stringify(err));
});

module.exports=mongoose;