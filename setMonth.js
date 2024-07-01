const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const stringReverse = str => str.split("").reverse().join("");
const goToTop = () => window.scrollTo(0, 0);