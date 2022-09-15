// show pages/help.html when the extension is first installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: chrome.runtime.getURL("/pages/help.html")});
});
