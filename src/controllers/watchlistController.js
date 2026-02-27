
const db=require('../config/database');
exports.add=(req,res)=>{
 const {contentId}=req.body;
 db.run('INSERT INTO watchlist(user_id,content_id) VALUES(?,?)',[req.user.id,contentId]);
 res.json({success:true});
};
exports.get=(req,res)=>{
 db.all('SELECT c.* FROM watchlist w JOIN content c ON w.content_id=c.id WHERE w.user_id=?',[req.user.id],(e,r)=>res.json(r));
};
