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


           let status=[
            {
              adhar:101,
              vaccinated:true
            },
            {
              adhar:102,
              vaccinated:false
            },
            {
              adhar:103,
              vaccinated:true
            },
            {
              adhar:104,
              vaccinated:false
            }
          ]

app.get("/getAdharAndNames",function(req,res){

    res.json({
        message:"Success",
        data:adharData
    })

})


app.get("/checkVaccinationStatus",function(req,res){
    let statusOfAdhar=false;
    //
    let adharId=parseInt(req.query.adharId);

    if(adharId)
    {
        for(let i=0;i<status.length;i++){
        if(status[i].adhar==adharId)
        {
          statusOfAdhar=status[i].vaccinated
        }
      
      
      }
      
      res.json({
          message:"Success",
          isVaccinated:statusOfAdhar
      
      })
        
    }
    else{
        res.json({
            message:"Failed,Adhar Id Required",
            
        
        })
    }



})

app.get("/getCertificate",function(req,res){
  let statusOfAdhar=false;
  let certificate;
  //
  let adharId=parseInt(req.query.adharId);
  let certificates=[{
    adhar:101,
    certificate:"Vaccinated",
    isVaccinated:true
  },
  {
    adhar:102,
    certificate:"Not Vaccinated",
    isVaccinated:false
  },
  {
    adhar:103,
    certificate:"Vaccinated",
    isVaccinated:true
  },
  {
    adhar:104,
    certificate:"Not Vaccinated",
    isVaccinated:false
  }



  ]

  if(adharId)
  {
      for(let i=0;i<status.length;i++){
      if(certificates[i].adhar==adharId)
      {
        certificate=certificates[i].certificate;
        statusOfAdhar=certificates[i].isVaccinated;
      }
    
    
    }

    if(statusOfAdhar){
      res.json({
        message:"Success",
         certificate:certificate
    
    })
    }
    else{
      res.json({
        message:"Failed,Sorry Not vaccinated",
       
    
    })
    }
    
   
      
  }
  else{
      res.json({
          message:"Failed,Adhar Id Required",
          
      
      })
  }



})

app.use(ErrorMiddleware)

app.listen(8080,function(){
    console.log(`Server Running `);
})