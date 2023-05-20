var express = require("express");
var app = express();
app.use(express.static("../client"));
app.get("/", function (req, res) {
    res.redirect("index.html");
});
app.listen(3000, function () {
    console.log("Game is running on port 3000");
});
var Grass = require("./my_modules/Grass")
var Cannibal = require("./my_modules/cannibal")
var Human = require("./my_modules/human")
var GrassEater = require("./my_modules/grasseater")
var Predator = require("./my_modules/predator")

var matrix = []
var n = 10; //+prompt("greq x");
var m = 10; //+prompt("greq y");
function kerparne(qanak, kerpar) {
    var a = 0;
    while (a < qanak) {
        var x = Math.floor(random(0, n));
        var y = Math.floor(random(0, m));
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
generateMatrix()