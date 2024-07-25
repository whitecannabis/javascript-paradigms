const shuffledArray = array.sort(() => Math.random() - 0.5); 
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const results = await Promise.all(resultingPromises);