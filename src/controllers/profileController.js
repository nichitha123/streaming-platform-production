
const db = require('../config/database');
exports.create=(req,res)=>{
 const {name,avatar,isKids}=req.body;
 db.run('INSERT INTO profiles(user_id,name,avatar,is_kids) VALUES(?,?,?,?)',
 [req.user.id,name,avatar,isKids?1:0],function(){
  res.json({success:true,profileId:this.lastID});
 });
};
exports.get=(req,res)=>{
 db.all('SELECT * FROM profiles WHERE user_id=?',[req.user.id],(e,rows)=>res.json(rows));
};
