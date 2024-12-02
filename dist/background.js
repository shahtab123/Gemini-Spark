chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.tabs.onActivated.addListener((activeInfo) => {
  showSummary(activeInfo.tabId);
});
chrome.tabs.onUpdated.addListener(async (tabId) => {
  showSummary(tabId);
});

async function showSummary(tabId) {
  const tab = await chrome.tabs.get(tabId);
  if (!tab.url.startsWith('http')) {
    return;
  }
  const injection = await chrome.scripting.executeScript({
    target: { tabId },
    files: ['scripts/extract-content.js']
  });
  chrome.storage.session.set({ pageContent: injection[0].result });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'generateContent') {
    try {
      // Use Chrome's Generative API directly
      const generativeAPI = chrome.runtime.getManifest().permissions.includes('generativeContent');
      if (!generativeAPI) {
        throw new Error('Generative API not available');
      }

      // Use the generative language model
      chrome.generativeLanguageAPI.generateText({
        model: 'gemini-pro',
        prompt: message.prompt
      }).then(response => {
        // Format the response
        const markdown = `# ${message.topic}\n\n${response.text}`;
        sendResponse({ result: markdown });
      }).catch(error => {
        console.error('Generation error:', error);
        sendResponse({ error: error.message });
      });

      return true; // Required for async response
    } catch (error) {
      console.error('API error:', error);
      sendResponse({ error: error.message });
      return true;
    }
  }
});

// Initialize context menu when extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  // Create the context menu item
  chrome.contextMenus.create({
    id: 'summarizeText',
    title: 'Summarize Selection',
    contexts: ['selection']
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'summarizeText') {
    chrome.runtime.sendMessage({
      action: 'summaryComplete',
      originalText: info.selectionText
    });
  }
});

// Open side panel when extension icon is clicked
chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open({ windowId: tab.windowId });
});
