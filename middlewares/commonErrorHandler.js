const ErrorMiddleware=(err, req, res, next)=>{
    
    res.status(400).send(err.message);

}

module.exports=ErrorMiddleware;