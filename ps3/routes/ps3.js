const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/oneB', function(req, res, next) {
  const data = {value:"Successful GET request"};
  res.render('oneB', { data: data});
});
router.post('/oneC',(req,res)=>{
  const data = {
    string:"Hey you!",
    length:"Hey you!".length.toString()
  };
  res.render('oneC',{data:data});
});
router.get('/oneD/:name',(req,res)=>{
  const param = req.params.name ; //  Bob
  const data = {
    param:param
  };
  res.render('oneD',{data:data});
});
module.exports = router;
