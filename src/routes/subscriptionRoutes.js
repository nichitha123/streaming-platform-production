
const router=require('express').Router();
const c=require('../controllers/subscriptionController');
router.get('/plans',c.plans);
module.exports=router;
