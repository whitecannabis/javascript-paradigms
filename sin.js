const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const uniqueArray = arr => [...new Set(arr)];