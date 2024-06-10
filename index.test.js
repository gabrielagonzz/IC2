const holaMundo = require('./index');

test('holaMundo returns "Hola Mundo"', () => {
    expect(holaMundo()).toBe("Hola Mundo");
});
