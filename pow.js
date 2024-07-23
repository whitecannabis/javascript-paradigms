const arrayContains = (arr, element) => arr.includes(element);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;