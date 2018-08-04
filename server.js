var http = require("http");

var PORT = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
    response.end("Good, it works! " + request.url);
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT, function (){
    console.log("Positive Port: http://localhost:" + PORT)
});

server2.listen(PORT2, function () {
    console.log("Negative Port: http://localhost:" + PORT2)
});

//display positive phrase when PORT is used
var goodPhrase = ["Good", "Better", "The Best"];

randomGoodPhrase = Math.floor(Math.random() * goodPhrase.length);
console.log(randomGoodPhrase);

var negativePhrase = ["Bad", "Worse", "The Worse"];

//display negative phrase when PORT2 is used
randomBadPhrase = Math.floor(Math.random() * negativePhrase.length);
console.log(randomBadPhrase);

function handleRequest(request, response) {
    response.end(goodPhrase[randomGoodPhrase]);
}

function handleRequest2(request, response) {
    response.end(negativePhrase[randomBadPhrase]);
}
