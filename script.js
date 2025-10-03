async function getCurrentTabId() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will be the first tab matching the query, or undefined if none found.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab?.id; // Return the ID, or undefined if no tab was found
}

function helloWorld(){
	console.log('function ran!')
}


chrome.scripting
    .executeScript({
      target : {tabId : getCurrentTabId()},
      func: helloWorld,
    })
    .then(() => console.log("script injected"));
