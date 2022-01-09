const jwt = require("jsonwebtoken");
require('dotenv').config();

function verifyToken(token){

    return new Promise(function(resolve,reject){

        jwt.verify(token, process.env.JWT_SECRETE_KEY, function(err,res){
            
            if(err) return reject(err);
            return resolve(res)
        })
    })
}

const authenticate = async (req,res,next)=>{

    try{

        //if we receive bearer token in header
        const bktn = req.headers.authorization;

        if(!bktn || !bktn.startWith("Bearer ")) return res.status(400).send({message: "please provide a Bearer token"});

        const tkn = bktn.split(" ")[1];

        //extract the user from token
        const {user} = await verifyToken(token);

        //if user not found thrown an error
        if(!user) return res.status(400).json({message:"provide a valid token"})

        //else attach the user to req
        req.user = user;
        
        //return next
        return next();
        
    }catch(err){
        return res.status(400).send({message:"provide a valid token"});
    }
}

module.exports = authenticate;