function getword(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "https://www.youtube.com/results?search_query=" + info.selectionText,
  });           
}
function bandcamp(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "https://bandcamp.com/search?q=" + info.selectionText,
  });           
}
function link(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "https://www.youtube.com",
  });           
}


chrome.contextMenus.create({
  title: "Поиск youtube: %s", 
  contexts:["selection"], 
  onclick: getword,
});
chrome.contextMenus.create({
  title: "Поиск bandcamp: %s", 
  contexts:["selection"], 
  onclick: bandcamp,
});

chrome.contextMenus.create({
  title: "Youtube", 
  contexts:["all"], 
  onclick: link,
});
