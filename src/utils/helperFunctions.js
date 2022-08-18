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

export const saveToLocalStorage = (data) => {
  for (const key in data) {
    localStorage.setItem(key, data[key]);
  }
};

export const removeItemFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
