const inquirer = require("inquirer");
const fs = require("fs");
const Logo = require("./lib/file")

const svgDir          =  "./lib";
const svgFileName     =  "svgLogo.svg";
const logoText        =  "logoText";
const logoTextColor   =  "logoTextColor";
const logoShape       =  "logoShape";
const logoShapeColor  =  "logoShapeColor";

const questions = [
  {
      type: "input",
      message: "Type in logo text (three letter maximum):",
      name: logoText
  },
  {
      type: "input",
      message: "Type in desired color to logo text (hex number or color keyword):",
      name: logoTextColor
  },
  {
      type: "list",
      message: "Select a shape for the logo:",
      name: logoShape,
      choices: [
          "Circle",
          "Triangle",
          "Square",
      ]
  },
  {
      type: "input",
      message: "Type in desired color for logo shape (hex number of color keyword)",
      name: logoShapeColor
  }
];

/**
 * Generates SVG file using the rendered logo.
 * @param {string} renderedLogo rendered logo according to user specifications
 */
function createSvgFile(renderedLogo) {

fs.writeFileSync(`${svgDir}/${svgFileName}`, renderedLogo, (error) => {
error ? console.log(error) : console.log("Success!");
});
}

function generateSvgLogo(userInput) {
let renderedLogo = ""
try {
const svgLogo = new Logo(userInput);
renderedLogo = svgLogo.render();
} catch (error) {
console.log(error);
}

createSvgFile(renderedLogo);
}

function init() {
inquirer
.prompt(questions)
.then(response => generateSvgLogo(response));
}

init();