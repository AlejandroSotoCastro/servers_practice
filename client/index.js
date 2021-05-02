const axios = require("axios");



const googleUrl = "yahoo.com";

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
