const express = require("express");
const router = express.Router();
const Student = require("../models/student.model");
router.get('/',async (req,res)=>{

    try{

        const students = await Student.find().lean().exec();
        return res.status(200).send({students})
    }catch(err){
        return res.status(500).send({message:"Somthing wrong! Unable to access students details.."});
    }
})
router.post('/',async (req,res)=>{

    try{

        const student = await Student.create(req.body);
        return res.status(200).send({student})
    }catch(err){
        return res.status(500).send({message:"Somthing wrong! can't add a new student"});
    }
})

router.patch("/:id", async (req,res)=>{
    try{

        const student = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send({student})
    }catch(err){
        return res.status(500).send({message:"Somthing wrong!"});

    }
})

router.delete(":/id", async(req,res)=>{
    try{

        const student = await Student.findByIdAndDelete(req.params.id);
        return res.status(200).send({student});

    }catch(err){
        return res.status(500).send({message:"Somthing wrong!"});
    }
})

module.exports = router;