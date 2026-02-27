
const router=require('express').Router();
const c=require('../controllers/contentController');
router.get('/movies',c.movies);
router.get('/:id',c.details);
module.exports=router;
