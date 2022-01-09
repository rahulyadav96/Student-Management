const Product = require("../models/product.model");
const verifyUser = async(req,res,next)=>{

    try{
        const user = req.user;
        //check if user is admin
        let isAdmin = false;
        user.roles.map(role=>{
            if(role == "admin"){
               
              isAdmin = true;
            }
        });
        // if yes allow

        if(!isAdmin) return res.status(400).send({meassage:"Only admin can do this action."})
        return next();

        //if not then throw the error


    }catch(err){

        return res.status(500).send("something went wrong")
    }
}
module.exports =verifyUser;