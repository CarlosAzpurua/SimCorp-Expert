import separator from '../exercise.2';

describe('Function separator:', () => {
  test('returns an array with the separator that yields the longest possible substring', () => {
    expect(separator('supercalifragilistic')).toEqual(['s']);
    expect(separator('laboratory')).toEqual(['a', 'o', 'r']);
    expect(separator('candle')).toEqual([]);
  });
});
