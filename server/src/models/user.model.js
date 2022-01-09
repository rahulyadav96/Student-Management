const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema({   //create a new user
    name:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true,minlength:8},
    roles:[{type:String, required:true, default:"user"}]
},{
    versionKey:false,
    timestamps:true
})

//is case of creating a new user or update a existing user
userSchema.pre('save',function(next){
    if(!this.isModified('password')) return next();

    const hash = bcryptjs.hashSync(this.password,8);  //hash the password
    this.password = hash;

    return next();
})

userSchema.methods.checkPassword = function(password){

    return bcryptjs.compareSync(password,this.password)
}



//connext this userSchema with user collection
module.exports = mongoose.model("user",userSchema)