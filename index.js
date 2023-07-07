const collectUserInput = require('./lib/userInput').default;
const { Triangle, Circle, Square } = require('./lib/shapes');
const { saveToFile } = require('./lib/fileUtils');

const generateLogo = async () => {
  const userInput = await collectUserInput();
  let shape;

  switch (userInput.shape) {
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Circle':
      shape = new Circle();
      break;
    case 'Square':
      shape = new Square();
      break;
    default:
      // Handle default case
      break;
  }

  shape.setColor(userInput.shapeColor);

  if (shape.setText) {
    shape.setText(userInput.text);
  }

  const svgLogo = shape.render();

  saveToFile('logo.svg', svgLogo);

  console.log('Generated logo.svg');
};

generateLogo();