// Listen for messages from the injected scrip
chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.executeScript(null, {
      code: "console.log('Wow this works!!');"
    });
  })