const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
router.get('/',async (req,res)=>{

    try{

        const users = await User.find().lean().exec();
        return res.status(200).send({users})
    }catch(err){
        return res.status(500).send({message:"Somthing wrong! Unable to access users details.."});
    }
})
// router.post('/',async (req,res)=>{

//     try{

//         const user = await User.create(req.body);
//         return res.status(200).send({user})
//     }catch(err){
//         return res.status(500).send({message:"Somthing wrong! can't add a new user"});
//     }
// })

router.patch("/:id", async (req,res)=>{
    try{

        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send({user})
    }catch(err){
        return res.status(500).send({message:"Somthing wrong!"});

    }
})

router.delete(":/id", async(req,res)=>{
    try{

        const user = await User.findByIdAndDelete(req.params.id);
        return res.status(200).send({user});

    }catch(err){
        return res.status(500).send({message:"Somthing wrong!"});
    }
})

module.exports = router;