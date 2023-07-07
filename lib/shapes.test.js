const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('render method should return correct svg string', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Circle', () => {
    test('render method should return correct svg string', () => {
        const circle = new Circle();
        circle.setColor('blue');
        expect(circle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Square', () => {
    test('render method should return correct svg string', () => {
        const square = new Square();
        square.setColor('blue');
        expect(square.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});