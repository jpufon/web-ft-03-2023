const express = require('express');
let app = express()


app.get('/',(req,res)=>{
    res.send('<h1> hello world </h1>')

})
app.get('/menu',(req,res)=>{
    res.send('<h1> frequently ask menu</h1>')

})
app.get('/questions',(req,res)=>{
    res.send('<h1> frequently asked question </h1>')

})

app.listen(3000,()=>{
    console.log(`listening to ${3000}`)
})
