const express = require('express');
let app = express()

//hello world 
app.get('/',(req,res)=>{
    res.send('<h1> hello world! </h1>')

})


//number 2 
app.get('/cats', (req, res) => {
    res.send('Meow');
  });
  
  app.get('/dogs', (req, res) => {
    res.send('Woof');
  });
  
  app.get('/cats_and_dogs', (req, res) => {
    res.send('Living together');
  });

//number 3 

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
  });

// number 4 
app.get('/age', function(req, res) {
    const age = req.query.age;
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
  
    res.send(`You were born in ${birthYear}.`);
  });

app.listen(3000,()=>{
    console.log(`listening to ${3000}`)
})
