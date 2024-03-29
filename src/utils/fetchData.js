let xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;

function fetchData(url_api) {
  return new Promise((resolve, reject) => {
    const xhttp = new xmlhttprequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = ( ()=> {
      if (xhttp.readyState === 4) {
        (xhttp.status === 200) 
            ? resolve(JSON.parse(xhttp.responseText))
            :reject(new Error('Error'),url_api); 
      }
    });
    xhttp.send();
  });
}

module.exports=fetchData;