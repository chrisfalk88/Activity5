// Dependencies
const http = require("http");
const fs = require("fs");

const PORT = 8080; 

function requestHandler(request, response) {

    const path = request.url;
    console.log(path);

    switch(path){
        case "/home":
        case "/":
        case "/index":
            sendHTML("/home", response);
        case "/foods":
            sendHTML("/foods", response);
        case "/movies":
            sendHTML("/movies", response);
        case "/css":
            sendHTML("/css", response);
    }
    sendHTML(path, response);
 
}

function sendHTML(path, response) {

    
    fs.readFile(__dirname + path + ".html", function(err, data) {
        if (err) throw err;

        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
    })
}
const server = http.createServer(requestHandler);

server.listen(PORT, function() {

    console.log(`This is running on local host ${PORT}`);
})