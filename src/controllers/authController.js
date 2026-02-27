
const db = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = (req,res)=>{
 const {name,email,password,phone,country} = req.body;
 if(!name||!email||!password) return res.status(400).json({error:'Missing fields'});
 const hash = bcrypt.hashSync(password,10);
 db.run('INSERT INTO users(name,email,password,phone,country) VALUES(?,?,?,?,?)',
 [name,email,hash,phone,country],function(err){
   if(err) return res.status(400).json({error:'Email already exists'});
   const token = jwt.sign({id:this.lastID},process.env.JWT_SECRET);
   res.json({success:true,userId:this.lastID,token});
 });
};

exports.login = (req,res)=>{
 const {email,password}=req.body;
 db.get('SELECT * FROM users WHERE email=?',[email],(err,user)=>{
  if(!user) return res.status(400).json({error:'User not found'});
  if(!bcrypt.compareSync(password,user.password)) return res.status(400).json({error:'Wrong password'});
  const token = jwt.sign({id:user.id},process.env.JWT_SECRET);
  res.json({success:true,token,user:{id:user.id,name:user.name,email:user.email}});
 });
};
