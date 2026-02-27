
const express=require('express');
const cors=require('cors');
require('dotenv').config();
require('./config/database');

const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/authRoutes'));
app.use('/api/profiles',require('./routes/profileRoutes'));
app.use('/api/content',require('./routes/contentRoutes'));
app.use('/api/watchlist',require('./routes/watchlistRoutes'));
app.use('/api/subscription',require('./routes/subscriptionRoutes'));

app.get('/',(req,res)=>res.send('Streaming Platform API Running'));

app.listen(process.env.PORT,()=>console.log('Server running on http://localhost:'+process.env.PORT));
