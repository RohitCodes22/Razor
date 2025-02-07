chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "textSelected") {
        chrome.action.openPopup();
    }
});
