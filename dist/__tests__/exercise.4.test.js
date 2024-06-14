"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercise_4_1 = require("../exercise.4");
describe('Function sizeParentheses:', () => {
    test('calculates the size of the longest substring of balanced parentheses', () => {
        expect((0, exercise_4_1.sizeParentheses)("(()")).toBe(2);
        expect((0, exercise_4_1.sizeParentheses)(")()())")).toBe(4);
        expect((0, exercise_4_1.sizeParentheses)("()))))(()())(")).toBe(6);
    });
});
