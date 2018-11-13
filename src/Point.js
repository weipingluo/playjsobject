 export default class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toStr() {
        return "("+ this.x + ", " + this.y + ")";
    }
    print() {
        console.log(this.toStr());
    }
}