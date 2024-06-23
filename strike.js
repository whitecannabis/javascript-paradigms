const maxNumber = arr => Math.max(...arr);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const lastElement = arr => arr[arr.length - 1];