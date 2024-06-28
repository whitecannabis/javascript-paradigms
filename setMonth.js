const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const isArray = (arr) => Array.isArray(arr);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);