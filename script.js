var matrix = [];
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

var side = 120;
let grassArr = []
let grassEaterArr = []
let predatorArr = []
let humanArr = []
let cannibalArr = []
function setup() {

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
    kerparne(13,5)
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


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
            else if (matrix[y][x] == 5){
                let cannibal = new Cannibal(x,y, 1)
                cannibalArr.push(cannibal)
            }
            
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("Navy");
            }
            else if (matrix[y][x] == 4) {
                fill("Beige");
            }
            else if(matrix[y][x] == 5){
            fill("black")
            }

            rect(x * side, y * side, side, side);


            fill("Black")
           

        }
    }
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
    
}