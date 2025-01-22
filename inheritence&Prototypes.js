class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}


// Add an area method to Rectangle's prototype
Rectangle.prototype.area = function () {
    return this.w * this.h;
};

// Define the Square class as a subclass of Rectangle
class Square extends Rectangle {
    constructor(side) {
        // Call the Rectangle constructor with width and height set to side
        super(side, side);
    }
}
