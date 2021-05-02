const express = require('express');

const app =express();

app.get("/know/:subject",(request,response)=>response.send(`I know${request.params.subject}...`))
app.listen(3000,()=>{console.log("listening...")})

