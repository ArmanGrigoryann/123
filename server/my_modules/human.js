var LivingCreature = require("./living");

module.exports = class Human extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);    
        this.energy = 20;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);

    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newHuman = new Human(newCell[0], newCell[1], this.index);
            humanArr.push(newHuman);
            matrix[newCell[1]][newCell[0]] = 4;
            this.energy = 20
        }
    }
    move() {

        this.energy--

        console.log(this.energy);
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
        }
        if (this.energy <= 0) {
            this.die()
        }
    }
    eat() {
        let foods = this.chooseCell(2,3)
        let food = random(foods)
        if (food) {
            this.energy++
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 4
            this.x = newX
            this.y = newY
            for(var i in grassEaterArr){
                if(newX == grassEaterArr[i].x && newY == grassEaterArr){
                    grassEaterArr.splice(i,1);
                }
            }
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 21) {
                this.mul()
            }
        }
        else {
            this.move()
        }

    }
  die() {
        matrix[this.y][this.x] = 0
        for (var i in humanArr) {
            if (this.x == humanArr[i].x && this.y == humanArr[i].y) {
                humanArr.splice(i, 1);
                break;
            }
        }
    }
}