const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());