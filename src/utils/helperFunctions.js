export const getLatLongFromObject = (obj) => {
  const arrOfLat = Object.keys(obj).map((key) => obj[key]);
  return arrOfLat;
};
