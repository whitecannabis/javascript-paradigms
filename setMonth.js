const removeDuplicates = (arr) => [...new Set(arr)];
const randomBoolean = () => Math.random() >= 0.5;
const isEmptyObject = obj => Object.keys(obj).length === 0;