console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
var DELIM_SIZE = 4;
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;