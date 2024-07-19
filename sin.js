const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isEven = (num) => num % 2 === 0;
const timeFromDate = date => date.toTimeString().slice(0, 8);