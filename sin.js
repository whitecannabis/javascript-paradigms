const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');