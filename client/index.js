const axios = require("axios");

const me = require("./me.json")

 const googleUrl = "yahoo.com";

const people = {

    Spain:"sara",
    USA:"Mallory",
    Netherlands:"Merlijn"
}

console.log(people["Spain"])


const json=JSON.stringify(people, null, 2)
const parsedObject= JSON.parse(json);



// console.log(parsedObject)
// console.log(people);
// console.log(json);
//  console.log(me.likes);

// console.log(me.age);
async function getUrl(url) {


  try{
      const response = await axios.get(url);
      console.log(response.data);

} 
catch(error){
    console.log(`This ${error} SUCKS`);

}

}

getUrl(googleUrl);

async function getcapital(country){
 try{
  const url ="http://localhost:3000/data/capitals"
  const response = await axios.get(url);

  const {data}=response
  console.log(data[country])
  


 }

catch(error){
    console.log(error);

}
}


getcapital("Spain")
