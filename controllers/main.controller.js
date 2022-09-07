const RootRouteController=(req,res)=>{
    const data=req.query.age

    if(parseInt(data)<20){
        throw new Error("Age Cant Be Less Than 20")
    }

    else{
        res.send("Its success");
    }




}

module.exports={
    RootRouteController
}