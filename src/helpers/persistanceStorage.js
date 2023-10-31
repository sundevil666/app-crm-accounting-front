export const getItem = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log('[Local Storage] Error getting data', e);
    return null;
  }
};

export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log('[Local Storage] Error saving data', e);
  }
};
