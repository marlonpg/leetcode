import { calculateMinimumHP } from '../solution';

describe('calculateMinimumHP', () => {
  it('handles example 1', () => {
    const dungeon = [
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5]
    ];
    expect(calculateMinimumHP(dungeon)).toBe(7);
  });

  it('handles all positive values', () => {
    const dungeon = [
      [2, 3, 1],
      [1, 2, 1],
      [1, 1, 1]
    ];
    expect(calculateMinimumHP(dungeon)).toBe(1);
  });

  it('handles all negative values', () => {
    const dungeon = [
      [-2, -3, -3],
      [-5, -10, -1],
      [-10, -30, -5]
    ];
    expect(calculateMinimumHP(dungeon)).toBe(15);
  });

  it('handles single cell', () => {
    expect(calculateMinimumHP([[0]])).toBe(1);
    expect(calculateMinimumHP([[-5]])).toBe(6);
    expect(calculateMinimumHP([[5]])).toBe(1);
  });
});