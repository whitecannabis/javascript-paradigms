const allResults = await Promise.all(items.map(async (item) => {}));
const removeDuplicates = (arr) => [...new Set(arr)];
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;