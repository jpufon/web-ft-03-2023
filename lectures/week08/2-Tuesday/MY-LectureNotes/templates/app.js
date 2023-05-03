const express = require('express');
let app = express()

app.use(express.static('public'))// hold all of our static 


app.set('view engine','ejs')

app.use(require('./routes/index'))
app.use(require('./routes/city'))
app.use(require('./routes/aboutus'))
app.use(require('./routes/faq'))




app.listen(3000,()=>{
    console.log(`listening to ${3000}`)
})