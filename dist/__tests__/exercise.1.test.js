"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercise_1_1 = require("../exercise.1");
describe('Function counter: ', () => {
    test('counts the number of boomerangs correctly', () => {
        // Arrange
        const input0 = [1, 4, 1];
        const input1 = [9, 5, 9, 5, 1, 1, 1];
        const input2 = [5, 6, 6, 7, 6, 3, 9];
        const input3 = [4, 4, 4, 9, 9, 9, 9];
        const input4 = [4, '4', 4, '9', 9, 9, 9];
        const input5 = ['2', 1, '2'];
        const input6 = [1, 1, 1];
        const input7 = ['example'];
        // Act and Assert
        expect((0, exercise_1_1.counter)(input0)).toBe(1);
        expect((0, exercise_1_1.counter)(input1)).toBe(2);
        expect((0, exercise_1_1.counter)(input2)).toBe(1);
        expect((0, exercise_1_1.counter)(input3)).toBe(0);
        expect((0, exercise_1_1.counter)(input4)).toBe(1);
        expect((0, exercise_1_1.counter)(input5)).toBe(1);
        expect((0, exercise_1_1.counter)(input6)).toBe(0);
        expect((0, exercise_1_1.counter)(input7)).toBe(0);
    });
    test('throws error for invalid input', () => {
        // Arrange
        const input8 = 'randomString';
        const input9 = 1234;
        const input10 = {};
        // Act and Assert
        expect(() => (0, exercise_1_1.counter)(input8)).toThrow(Error);
        expect(() => (0, exercise_1_1.counter)(input9)).toThrow(Error);
        expect(() => (0, exercise_1_1.counter)(input10)).toThrow(Error);
    });
});
