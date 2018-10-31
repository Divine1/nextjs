const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()



app.prepare()
.then(() => {
  const server = express()
  var pro = express.Router();

  pro.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })
  pro.get('*', (req, res) => {
    // console.log("originalUrl ",req.originalUrl)  
    // console.log("baseUrl ",req.baseUrl)
    console.log("path ",req.path)
    console.log("req.url ",req.url);
    // console.log("req.headers.host ",req.headers.host)
    //return handle(req, res)

    let queryParams = { title: req.query.accountid } 
    let page = "/login";
    
    switch(req.path){
      case "/":
        page = "/";
      break;
      case "/login":
        page = "/login"
      break;
      case "/home":
        page="/home"
      break;
    }
    
    console.log("-----------")
    console.log("queryParams ",queryParams)
    
    app.render(req,res,page,queryParams);
  })

  server.use("/dave",pro)

  pro.use((req,res) => {
console.log("invalid route");
console.log("req " , req.originalUrl);
res.sendStatus(500);
});

  server.listen(3000, (err) => {
    if (err) {
        throw err;
    }
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})