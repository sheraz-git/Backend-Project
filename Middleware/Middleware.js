exports.auth=(req,res,next)=>{
    if(req.headers.token){
    next();
}
else{
    return res.status(401).json({
        message: 'you are not authorized',
         
    })
}}









