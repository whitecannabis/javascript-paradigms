const buildOutputPath = path.join(repositoryRootPath, 'out');
const merge = [...new Set([...a, ...b])];
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");