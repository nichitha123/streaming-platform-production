
const router=require('express').Router();
const auth=require('../middleware/auth');
const c=require('../controllers/profileController');
router.post('/',auth,c.create);
router.get('/',auth,c.get);
module.exports=router;
