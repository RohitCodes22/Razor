document.addEventListener("mouseup", () => {
    let selectedText = window.getSelection().toString().trim();
    if (selectedText) {
        chrome.runtime.sendMessage({ action: "textSelected", text: selectedText });
    }
});
