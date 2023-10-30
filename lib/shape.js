class Shape {
    constructor(initials, initialColor, shape, shapeColor) {
    this.initials = this.initials;
    this.initialColor = initialColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.works = function () {
        console.log('He is Alive');
    }
}}

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}"/>`
    }
}

class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.shapeColor}">`
    }
}

class Triangle extends Shape{
    render(){
        //return `<polygon height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.shapeColor}">'
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}">`
    }
};

module.exports = {Circle, Square, Triangle}