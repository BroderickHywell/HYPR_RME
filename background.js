// background.js or popup.js
async function getActiveTabId() {
  try {
    const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (activeTab) {
      console.log("Active Tab ID:", activeTab.id)
      return activeTab.id
    } else {
      console.log("No active tab found in the current window.")
      return null
    }
  } catch (error) {
    console.error("Error getting active tab:", error)
    return null

  }
}

chrome.scripting
    .executeScript({
      target : {tabId : getActiveTabId(), allFrames : true},
      files : [ "HYPR_RME.js" ],
    })
    .then(() => console.log("script injected in all frames"))
