const results = await Promise.all(resultingPromises);
const merge = [...new Set(a.concat(b))];
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};