const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;