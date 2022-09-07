const express=require("express");
const app=express();
const path=require("path");
const cors=require("cors");
const ErrorMiddleware = require("./middlewares/commonErrorHandler");

app.use(cors());
let adharData=[{
    name:"Rajkumar",
    adhar:101
  },
            {
    name:"Sweta",
    adhar:102
  },
            {
    name:"Girish",
    adhar:103
  },
            {
    name:"Pranjali",
    adhar:104
  }
           
           
           ]

app.get("/getAdharAndNames",function(req,res){

    res.json({
        message:"Success",
        data:adharData
    })

})



app.use(ErrorMiddleware)

app.listen(8080,function(){
    console.log(`Server Running `);
})