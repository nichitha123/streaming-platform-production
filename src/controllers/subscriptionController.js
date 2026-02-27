
const db=require('../config/database');
exports.plans=(req,res)=>{
 db.all('SELECT * FROM subscriptions',(e,r)=>res.json({success:true,plans:r}));
};
