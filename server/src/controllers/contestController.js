const express = require("express");
const router = express.Router();
const Contest = require("../models/contest.model");
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

router.get('/', async (req,res)=>{

    try{

        const contests = await Contest.find().lean().exec();
        return res.status(200).send({contests})
    }catch(err){
        return res.status(500).send({message:"Somthing wrong! Unable to access contest details.."});
    }
})
router.post('/',authenticate,authorize(["admin"]), async (req,res)=>{

    try{

        const contest = await Contest.create(req.body);
        return res.status(200).send({contest})
    }catch(err){
        return res.status(500).send({message:"Somthing wrong! can't add a new contest"});
    }
})

router.patch("/:id", authenticate, authorize(["admin"]),async (req,res)=>{
    try{

        const contest = await Contest.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send({contest})
    }catch(err){
        return res.status(500).send({message:"Somthing wrong!"});

    }
})

router.delete("/:id",authenticate, authorize(["admin"]), async(req,res)=>{
    try{

        const contest = await Contest.findByIdAndDelete(req.params.id);
        return res.status(200).send({contest});

    }catch(err){
        return res.status(500).send({message:"Somthing wrong!"});
    }
})

module.exports = router;