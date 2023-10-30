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
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.initialColor}">${this.initials}</text></svg>`
    }
}

class Square extends Shape{
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" height="200" width="200" fill="${this.shapeColor}">
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.initialColor}">${this.initials}</text></svg>`
    }
}

class Triangle extends Shape{
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}">
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.initialColor}">${this.initials}</text></svg>`
    }
};

module.exports = {Circle, Square, Triangle}