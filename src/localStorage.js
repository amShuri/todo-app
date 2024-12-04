export function storeInLocalStorage(key, list) {
  localStorage.setItem(key, JSON.stringify(list));
}

export function loadFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
