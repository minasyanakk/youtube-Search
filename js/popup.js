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
 
function soudocould(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "https://soundcloud.com/search?q="+info.selectionText,
  });           
}
function lastfm(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "https://www.last.fm/ru/search?q="+info.selectionText,
  });           
}
function yandex(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "https://music.yandex.ua/search?text="+info.selectionText,
  });           
}


chrome.contextMenus.create({
  title: "Поиск youtube: %s", 
  contexts:["selection"], 
  onclick: getword,
});
chrome.contextMenus.create({
  title: "Поиск Яндекс Музыка: %s", 
  contexts:["selection"], 
  onclick: yandex,
});
chrome.contextMenus.create({
  title: "Поиск bandcamp: %s", 
  contexts:["selection"], 
  onclick: bandcamp,
});
chrome.contextMenus.create({
  title: "Поиск soudocould: %s", 
  contexts:["selection"], 
  onclick: soudocould,
});
chrome.contextMenus.create({
  title: "Поиск Last fm: %s", 
  contexts:["selection"], 
  onclick: lastfm,
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: "https://github.com/minasyanakk/youtube-Search" });
});