import React from "react";

function saveItemToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorageItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

function useLocalStorage(key, initialValue = null) {
  const localStorageItem = getLocalStorageItem(key);
  const [storageItem, setStorageItem] = React.useState(
    localStorageItem || initialValue
  );

  React.useEffect(() => {
    saveItemToLocalStorage(key, storageItem);
  }, [key, storageItem]);

  React.useEffect(() => {
    const saveUpItem = () => {
      const items = getLocalStorageItem(key);
      setStorageItem(items);
    };

    window.addEventListener("storage", saveUpItem);

    return () => window.removeEventListener("storage", saveUpItem);
  }, [key]);

  return [storageItem, setStorageItem];
}

export default useLocalStorage;
