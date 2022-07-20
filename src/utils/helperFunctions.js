export const getLatLongFromObject = (obj) => {
  const arrOfLat = Object.keys(obj).map((key) => obj[key]);
  return arrOfLat;
};

export const getImageFromFile = (filePath) => {
  const fileReader = new FileReader();
  const promise = new Promise((resolve, reject) => {
    fileReader.onload = (e) => resolve(e.target.result);
    fileReader.onerror = (err) => reject(err);
  });

  fileReader.readAsDataURL(filePath);
  return promise;
};
