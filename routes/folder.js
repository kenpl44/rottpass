const express = require('express');
const router = express.Router();




router.get('/',(req,res,next)=>{
  return res.send('Folder routes')
})






















module.exports = router;
