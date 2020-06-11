import { multiply, divide } from '../reducers/auth';

test('First test!', () => {
    expect(true).toBeTruthy();
});

test('multiply', () => {
    const value = multiply(2,4);
    expect(value).toBe(8);
});

test('divide', () => {
    const value = divide(100,5);
    expect(value).toBe(20);
});