export const calculatePoints = async (data) => {
  const counter = data.reduce((acc, curr) => {
    const points = curr.is_redemption ? -curr.points : curr.points;
    return acc + points;
  }, 0);
  return counter;
};

export const filterByRedemptionFalse = objectsArray => objectsArray.filter(object => !object.is_redemption);

export const filterByRedemptionTrue = objectsArray => objectsArray.filter(object => object.is_redemption);
