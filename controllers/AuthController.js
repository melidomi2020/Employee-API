const User= require("../model/User");
const bcrypt=require('bcryptjs')
const jwt=require("jsonwebtoken")
const register =  (req, res) => {
    let hashPass= bcrypt.hash(req.body.password,10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }
        let  user = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass
          });
           user.save().then(user=>{res.json({
            
            message:"User Added Successfully"})}, res.status(201)).catch(error=>{
            res.json({message:"An Error Occur"})
            
           })
    })
    
     
    
     
}

const login=(req,res)=>{
    var username=req.body.username
    var password=req.body.password
    User.findOne({$or:[{email:username}]}).then(user=>{
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token =jwt.sign({username:user.username},'verySecretValue',{expiresIn:'1h'})
                    res.json({
                       "username": username,
                        message:"Login Successfully",
                        "Jwt_token":token
                    })
                } else{
                    res.json({
                        message:"password does not matched "
                    })
                }
            })
        } else{
            res.json({message:"No user found"})
        }
    })
}

module.exports={
    register,
    login
}