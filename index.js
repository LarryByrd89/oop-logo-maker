const { collectUserInput } = require('./lib/userInput');
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
    }

shape.setColor(userInput.shapeColor);
shape.setText(userInput.text);

const svgLogo = shape.render();

saveToFile('logo.svg', svgLogo);

console.log('Generate logo.svg');
};

generateLogo();