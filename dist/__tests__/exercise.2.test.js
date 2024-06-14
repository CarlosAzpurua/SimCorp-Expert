"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercise_2_1 = require("../exercise.2");
describe('Function separator:', () => {
    test('returns an array with the separator that yields the longest possible substring', () => {
        expect((0, exercise_2_1.separator)('supercalifragilistic')).toEqual(['s']);
        expect((0, exercise_2_1.separator)('laboratory')).toEqual(['a', 'o', 'r']);
        expect((0, exercise_2_1.separator)('candle')).toEqual([]);
    });
});
