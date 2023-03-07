export const calculatePoints = async (data) => {
  let counter = 0;
  data.forEach(object => {
    counter += object.is_redemption ? -object.points : object.points;
  });
  return counter;
};

export const filterByRedemptionFalse = objectsArray => objectsArray.filter(object => !object.is_redemption);

export const filterByRedemptionTrue = objectsArray => objectsArray.filter(object => object.is_redemption);
  
  