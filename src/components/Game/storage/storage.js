export function setStorage(key, value) {
    const valueString = JSON.stringify(value);
    localStorage.setItem(key, valueString);
}

export function getStorage(key) {
    return localStorage.getItem(key);
}
