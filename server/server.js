var express = require("express");
var app = express();
app.use(express.static("../client"));
app.get("/", function (req, res) {
    res.redirect("index.html");
});
var server = require('http').createServer(app);

var io = require('socket.io')(server);
server.listen(3000, function () {
    console.log("Game is running on port 3000");
});
var Grass = require("./my_modules/Grass")
var Cannibal = require("./my_modules/cannibal")
var Human = require("./my_modules/human")
var GrassEater = require("./my_modules/grasseater")
var Predator = require("./my_modules/predator")

matrix = []
n = 10; //+prompt("greq x");
m = 10; //+prompt("greq y");
grassArr = []
grassEaterArr = []
predatorArr = []
humanArr = []
cannibalArr = []
function kerparne(qanak, kerpar) {
    var a = 0;
    while (a < qanak) {
        var x = Math.floor(Math.random() * n);
        var y = Math.floor(Math.random() * m);
        if (matrix[y][x] == 0) {
            matrix[y][x] = kerpar
        }
        a++
    }
}
function generateMatrix() {

    for (let i = 0; i < n; i++) {
        matrix.push([])
        for (let j = 0; j < m; j++) {
            matrix[i].push(0)
        }
    }
    kerparne(100, 1)
    kerparne(30, 2)
    kerparne(15, 3)
    kerparne(8, 4)
    kerparne(13, 5)
}
function game(){
    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (var i in predatorArr) {
        predatorArr[i].eat()
    }
    for (var i in humanArr) {
        humanArr[i].eat()
    }
    for (var i in cannibalArr){
        cannibalArr[i].eat()
    }
    io.sockets.emit("my_matrix", matrix)
}
function createObject() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y, 1)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y, 1)
                grassEaterArr.push(grassEater)
            }
            else if (matrix[y][x] == 3) {
                let predator = new Predator(x, y, 1)
                predatorArr.push(predator)
            }
            else if (matrix[y][x] == 4) {
                let human = new Human(x, y, 1)
                humanArr.push(human)
            }
            else if (matrix[y][x] == 5) {
                let cannibal = new Cannibal(x, y, 1)
                cannibalArr.push(cannibal)
            }

        }
    }
}
generateMatrix()
createObject()
setInterval(game, 1000)

io.on('connection', function (socket) {
    //socket.emit("my_matrix", matrix);
}
);    
// });
io.sockets.emit("my_matrix", matrix);