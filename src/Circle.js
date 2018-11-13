export default class Circle {
    constructor(radius, center) {
        this.radius = radius;
        this.center = center;
    }
    draw() {
        console.log(`Let's draw with radius: ${this.radius} center: ${this.center.toStr()}`);
        this.center.print();
    }
}
