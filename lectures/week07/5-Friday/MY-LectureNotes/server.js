const http =require('http')
const superheroes = require('superheroes');

const server =http.createServer((request, response)=>{
    switch(request.url){
        case '/':
            response.setHeader('content-Type', "text/html")

            response.end(`<h1> hellow </h1>`)
            break;
            case'/Aboutus':
            response.end(`<h1> Aboutus</h1>`)
            break;
            case'/api':
            response.setHeader('Content-Type','application/json')
            let studentsJson
    }
})

superheroes.all;


server.listen(3000, ()=>{
    console.log(`server is running on port 3000`);
})