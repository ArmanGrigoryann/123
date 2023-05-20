var LivingCreature = require("./living");

module.exports = class Cannibal extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 10;
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
            var newCannibal = new Cannibal(newCell[0], newCell[1], this.index);
            cannibalArr.push(newCannibal);
            matrix[newCell[1]][newCell[0]] = 5;
            this.energy = 10
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
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }

    }
    eat() {
        let foods = this.chooseCell(4)
        let food = random(foods)
        if (food) {
            this.energy++
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 5
            this.x = newX
            this.y = newY
            for (var i in humanArr) {
                if (newX == humanArr[i].x && newY == humanArr) {
                    humanArr.splice(i, 1);
                }
            }
            if (this.energy >= 13) {
                this.mul()
            }
        }
        else {
            this.move
        }
    }

}   