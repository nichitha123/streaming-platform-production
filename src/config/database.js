
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const dbFile = path.join(__dirname,'../../',process.env.DB_FILE);
const db = new sqlite3.Database(dbFile,(err)=>{
 if(err) console.log(err);
 else console.log('Connected to SQLite database');
});

const schema = fs.readFileSync(path.join(__dirname,'../../database/schema.sql')).toString();
db.exec(schema,()=>{
 const seeds = fs.readFileSync(path.join(__dirname,'../../database/seeds.sql')).toString();
 db.exec(seeds);
});

module.exports = db;
