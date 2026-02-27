
const router=require('express').Router();
const auth=require('../middleware/auth');
const c=require('../controllers/watchlistController');
router.post('/add',auth,c.add);
router.get('/',auth,c.get);
module.exports=router;
