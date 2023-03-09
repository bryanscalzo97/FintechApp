import { calculatePoints, filterByRedemptionFalse, filterByRedemptionTrue, formatPoints } from './utils'

describe('calculatePoints', () => {
  it('calculates the points correctly', async () => {
    const data = [
      { points: 5, is_redemption: false },
      { points: 10, is_redemption: true },
      { points: 20, is_redemption: false },
      { points: 15, is_redemption: false }
    ];

    const result = await calculatePoints(data);

    expect(result).toEqual(30);
  });
});

describe('filterByRedemptionFalse', () => {
  it('returns an array of objects where is_redemption is false', () => {
    const objectsArray = [
      { points: 5, is_redemption: false },
      { points: 10, is_redemption: true },
      { points: 20, is_redemption: false },
      { points: 15, is_redemption: false }
    ];

    const result = filterByRedemptionFalse(objectsArray);

    expect(result).toEqual([
      { points: 5, is_redemption: false },
      { points: 20, is_redemption: false },
      { points: 15, is_redemption: false }
    ]);
  });
});

describe('filterByRedemptionTrue', () => {
  it('returns an array of objects where is_redemption is true', () => {
    const objectsArray = [
      { points: 5, is_redemption: false },
      { points: 10, is_redemption: true },
      { points: 20, is_redemption: false },
      { points: 15, is_redemption: false }
    ];

    const result = filterByRedemptionTrue(objectsArray);

    expect(result).toEqual([
      { points: 10, is_redemption: true }
    ]);
  });
});

describe('formatPoints', () => {
  it('should format a number with two decimal places and comma separators for thousands', () => {
    const num = 1234567.89;
    const expected = '1,234,567.89';
    const result = formatPoints(num);
    expect(result).toEqual(expected);
  });

  it('should format a number with no decimal places and comma separators for thousands', () => {
    const num = 1000000;
    const expected = '1,000,000.00';
    const result = formatPoints(num);
    expect(result).toEqual(expected);
  });
});
