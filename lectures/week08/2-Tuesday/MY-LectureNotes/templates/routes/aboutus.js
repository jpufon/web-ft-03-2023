const express = require('express');
const router = express.Router()//sub routing 

router.get('/Aboutus',(req, res)=>{
    //res.send('about us')
    res.render('aboutus')
})
module.exports = router 