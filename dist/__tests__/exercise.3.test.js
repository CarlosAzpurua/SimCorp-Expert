"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercise_3_1 = require("../exercise.3");
describe('Function longestSubstring:', () => {
    test('finds the longest substring with no repeated characters', () => {
        expect((0, exercise_3_1.longestSubstring)("aaaaaa")).toBe("a");
        expect((0, exercise_3_1.longestSubstring)("abcde")).toBe("abcde");
        expect((0, exercise_3_1.longestSubstring)("abcda")).toBe("abcd");
        expect((0, exercise_3_1.longestSubstring)("abcdefgabcbb")).toBe("abcdefg");
    });
});
