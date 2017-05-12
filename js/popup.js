function getword(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "https://www.youtube.com/results?search_query=" + info.selectionText,
  });           
}
chrome.contextMenus.create({
  title: "Поиск youtube: %s", 
  contexts:["selection"], 
  onclick: getword,
});