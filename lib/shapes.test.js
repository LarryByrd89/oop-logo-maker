const { Circle, Triangle, Square, Shape } = require("./shapes.js");
describe('Circle', () => {
    describe('render', () => {
        it('should return an SVG circle element', () => {
            const shape = new Circle();
            const shapeColor = "blue";
            shape.setColor(shapeColor);
            expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="${shapeColor}" />`);
        });
    });
});

describe('Triangle', () => {
    describe('render', () => {
        it('should return an SVG triangle element', () => {
            const shape = new Triangle();
            const shapeColor = "red";
            shape.setColor(shapeColor);
            expect(shape.render()).toEqual(`<polygon points="150,0 0,200 300,200" fill="${shapeColor}" />`);
        });
    });
});

describe('Square', () => {
        it('should return an SVG square element', () => {
            const shape = new Square();
            const shapeColor = "green";
            shape.setColor(shapeColor);
            expect(shape.render()).toEqual(`<rect width="300" height="200" fill="${shapeColor}" />`);
        });
    });