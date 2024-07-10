const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const isTabInView = () => !document.hidden;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());