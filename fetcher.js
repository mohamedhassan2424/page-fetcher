const request= require("request");
const fs=require("fs");

// path location is ./index.html (ignore the first three phrases) and the http://www.example.edu/ ./index.html is the website domain page ignore the first two. using process.argv
const websiteDomain = process.argv[2];
const pathLocation = process.argv[3];

// we can request the domain and the path and pass it through certain edge cases as provided on compass
request(websiteDomain, function(error, response ,body){
    if(error){
        console.error('error: ', error);
    }
    fs.writeFile(`${pathLocation}`, body, function(error){
        if(error){
            console.error('error: ', error);
        }else {
            console.log(`Downloaded and saved ${body.length} bytes to ${pathLocation}`);
        }
    });
});