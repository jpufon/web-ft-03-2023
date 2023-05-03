const express = require('express');
const router = express.Router()//sub routing 

router.get('/',(req, res)=>{
    //res.send('home page')

    res.render('index',{
        greeting: "Tell me why",
        firstName: 'Jordan',
        lastName: 'pufon',
        year:'2023',
        nums:[1,2,3],
        contact:{
            cell: '6282828282'
        }
    })
})
module.exports = router 