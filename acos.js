const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const resultingPromises = urls.map((url) => makHttpRequest(url));