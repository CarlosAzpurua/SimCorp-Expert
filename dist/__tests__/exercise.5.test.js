"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercise_5_1 = require("../exercise.5");
describe('Function getLength:', () => {
    test('gets the total number of non nested items in an array', () => {
        expect((0, exercise_5_1.getLength)([1, [2, 3]])).toBe(3);
        expect((0, exercise_5_1.getLength)([1, [2, [3, 4]]])).toBe(4);
        expect((0, exercise_5_1.getLength)([1, [2, [3, [4, [5, 6]]]]])).toBe(6);
        expect((0, exercise_5_1.getLength)([1, [2], 1, [2], 1])).toBe(5);
        expect((0, exercise_5_1.getLength)([])).toBe(0);
        expect((0, exercise_5_1.getLength)([[], []])).toBe(0);
        expect((0, exercise_5_1.getLength)([[1], [2, [3, 4], 5], 6])).toBe(6);
    });
});
