const save = (key, item) => {
  const json = JSON.stringify(item);
  localStorage.setItem(key, json);
};

const load = key => {
  const item = JSON.parse(localStorage.getItem(key));
  if (item && (item.length || Object.keys(item).length)) {
    return item;
  }
  return false;
};

export { save, load };
