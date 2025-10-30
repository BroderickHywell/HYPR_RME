chrome.action.onClicked.addListener(async (tab) => {
	chrome.scripting
	.executeScript({
      	target : {tabId : tab.id},
      	files : [ "script.js" ],
    })
    .then(() => console.log("script injected"));
});
