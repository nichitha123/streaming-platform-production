
const db = require('../config/database');
exports.movies=(req,res)=>{
 db.all('SELECT * FROM content WHERE type="movie"',(e,rows)=>res.json({success:true,movies:rows}));
};
exports.details=(req,res)=>{
 db.get('SELECT * FROM content WHERE id=?',[req.params.id],(e,row)=>res.json({success:true,content:row}));
};
