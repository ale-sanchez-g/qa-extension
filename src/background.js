chrome.runtime.onInstalled.addListener(() => {
  const tips = require("./tips");

  chrome.storage.local.set({
    tips: getRandomTip(),
  });
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ tips });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getRandomTip") {
    const tip = getRandomTip();
    sendResponse({ tip });
  }
});

function getRandomTip() {
  const randomIndex = Math.floor(Math.random() * tips.length);
  return tips[randomIndex];
}
