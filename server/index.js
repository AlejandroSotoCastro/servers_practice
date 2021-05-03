const express = require('express');

const app = express()

const port = 3000;
const onListen =()=> console.log(`Listening on :${port}`)


const onRequest = () => console.log("after request")


// HTML string
function render (favorite){

    const document = `<html>
    <head>
      <title>My favorite movie</title>
    </head>

    <body>
      <h1>${favorite}</h1>
    </body>
  </html>`
 return document

}

function rerender(favorite){


    const cosa = `<html>
  <head>
    <title>Home</title>
  </head>

  <body>
    <h1>${favorite}Welcome</h1>
    <p> VIVA</p>
  </body>
</html>`

return cosa
}



app.get(

    "/",
    onRequest
)

app.get("/data/capitals", (request,response)=>{

  const anObject={

    Spain:"madrid",
    France:"Paris",
    USA:"Washington"
  }
  console.log('someone requested the data')
  response.send(anObject)
})

/*Test*/
app.get("/test",onTest=(request,response)=>response.send(document))
/**Hello to see the request.method */
app.get("/hello",(request,response)=>console.log(response.send(request.path)))

app.get("/",(request,response)=>response.send(page))

app.get(
    '/movie/:title', // declares a parameter named title
    (request, response) => { // handler callback
        const favorite = `My favorite movie is ${request.params.title}`

        const page = rerender(favorite)
        response.send(page)
    }
  )

app.get('/user/taca/:name',(request,response)=>response.send(`Welcome ${request.params.name}`))

app.listen(port,onListen)