const fs = require('fs');
const inquirer = require('inquirer');
const SVG = require('svg.js');
const {Circle, Square, Triangle} = require('./lib/shape');



const questions = [
    {
        type: 'input',
        message: 'What 3 letters do you want to use?',
        name: 'initials',
        validate:(value)=>{if(value){return true} else {return 'Input required'}}
    },
    {
        type: 'input',
        message: 'What color do you want the text? (enter any color or hexdecimal code)',
        name: 'initialColor',
        validate:(value)=>{if(value){return true} else {return 'Input required'}}
    },
    {
        type: 'list',
        message: 'What shape would you  like?',
        name: 'shape',
        choices: ['circle', 'square', 'triangle'],
        validate:(value)=>{if(value){return true} else {return 'Input required'}}
    },
    {
        type: 'input',
        message: 'What color do you want your shape? (enter any color or hexdecimal code)',
        name: 'shapeColor',
        validate:(value)=>{if(value){return true} else {return 'Input required'}}
    },
];

class Svg{
    constructor(){
        this.initialE1 = ''
        this.shapeE1 = ''
    }
    render(){

        return `<svg width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
}

function writeToFile(fileName, data) {
   console.log(typeof(data)); 

    fs.writeFile(fileName, data, err => {
        console.log(fileName)
        console.log(data)
       err? console.log(err) : console.log('sucess!')
    });
}

function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        switch (`$(data.shape)`) {
            case 'Circle':
                const circle = new Circle(data.initals, data.initialColor, data.shape, data.shapeColor)
                writeToFile("examples/logo.svg", Circle(data));
                break;
            case 'Square':
                const square = new Square(data.initals, data.initialColor, data.shape, data.shapeColor)
                writeToFile("examples/logo.svg", Square(data));
                break;
            case 'Triangle':
                const triangle = new Triangle(data.initals, data.initialColor, data.shape, data.shapeColor)
                writeToFile("examples/logo.svg", Triangle(data));
                break;
        }

    });
}

init();