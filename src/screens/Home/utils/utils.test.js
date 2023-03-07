import { calculatePoints, filterByRedemptionFalse, filterByRedemptionTrue } from './utils'

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
