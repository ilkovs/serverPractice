var http = require("http");

var PORT = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
    response.end("Good, it works! " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function good() {
    console.log("Positive Port: http://localhost:" + PORT)
});

server.listen(PORT2, function bad() {
    console.log("Negative Port: http://localhost:" + PORT2)
});


var goodPhrase = ["Good", "Better", "The best"];

randomGoodPhrase = Math.floor(Math.Random() * goodPhrase.length);

var negativePhrase = ["Bad", "worse", "The worse"];

randomBadPhrase = Math.floor(Math.Random() * negativePhrase.length);

if ( good() == true ) {
    console.log(randomGoodPhrase);
} else {
    console.log(randomBadPhrase);
};
