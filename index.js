const fs = require("fs");
const inquirer = require("inquirer");
const SVG = require("svg.js");
const { Circle, Square, Triangle } = require("./lib/shape");

const questions = [
  {
    type: "input",
    message: "What 3 letters do you want to use?",
    name: "initials",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Input required";
      }
    },
  },
  {
    type: "input",
    message:
      "What color do you want the text? (enter any color or hexdecimal code)",
    name: "initialColor",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Input required";
      }
    },
  },
  {
    type: "list",
    message: "What shape would you  like?",
    name: "shape",
    choices: ["Circle", "Square", "Triangle"],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Input required";
      }
    },
  },
  {
    type: "input",
    message:
      "What color do you want your shape? (enter any color or hexdecimal code)",
    name: "shapeColor",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Input required";
      }
    },
  },
];

function writeToFile(fileName, data) {
  console.log(typeof data);

  fs.writeFile(fileName, data, (err) => {
    console.log(fileName);
    console.log(data);
    err ? console.log(err) : console.log("sucess!");
  });
}

function init() {
  inquirer.prompt(questions).then((data) => {
    let shape;
    switch (data.shape) {
      case "Circle":
        shape = new Circle(data.initials, data.initialColor, data.shapeColor);
        break;
      case "Square":
        shape = new Square(data.initials, data.initialColor, data.shapeColor);
        break;
      default:
        shape = new Triangle(data.initials, data.initialColor, data.shapeColor);
        break;
    }
    writeToFile("examples/logo.svg", shape.render());
  });
}

init();
