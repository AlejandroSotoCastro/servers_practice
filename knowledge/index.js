const express = require('express');

const app =express();



function rerender(favorite){


    const cosa = `<html>
  <head>
    <title>Home</title>
  </head>

  <body>
    <h1>I know ${favorite}</h1>
    <p> VIVA</p>
  </body>

  <style>background:black </style>
</html>`

return cosa
}

app.get("/know/:subject",(request,response)=>response.send(rerender(request.params.subject)))
app.listen(3000,()=>{console.log("listening...")})

