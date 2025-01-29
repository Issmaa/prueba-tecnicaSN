import Calculator from '../components/Calculator';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('Cálcular con el número 1', () => {
        expect(calculator.serie(1)).toBe(5); 
    });

    test('Cálcular con el número 2', () => {
        expect(calculator.serie(2)).toBe(7); 
    });

    test('Cálcular con el número 3', () => {
        expect(calculator.serie(3)).toBe(7); 
    });

    test('CCálcular con el número 4', () => {
        expect(calculator.serie(4)).toBe(6);
    });

    test('CCálcular con el número 5', () => {
        expect(calculator.serie(5)).toBe(0);
    });

    test('CCálcular con el número 6', () => {
        expect(calculator.serie(6)).toBe(-17);
    });

    test('CCálcular con el número 7', () => {
        expect(calculator.serie(7)).toBe(-40);
    });

    test('CCálcular con el número 8', () => {
        expect(calculator.serie(8)).toBe(-88);
    });

    test('CCálcular con el número 9', () => {
        expect(calculator.serie(9)).toBe(-163);
    });

    test('CCálcular con el número 10', () => {
        expect(calculator.serie(10)).toBe(-298);
    });

    test('Arroja un error cuando el valor es 0, lo cual es inválido', () => {
        expect(() => calculator.serie(0)).toThrow('n debe ser un número positivo.');
    });
});
