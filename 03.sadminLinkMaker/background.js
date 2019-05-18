chrome.contextMenus.create({
  title   : "sadminLinkMaker",
  id      : "hikkoshi",
  contexts: ["selection"]
});

/*
chrome.contextMenus.create({
title     : "一括へ遷移",
type      : "normal",
contexts  : ["selection"],
parentId  : "hikkoshi",
id        : "move"
});


chrome.contextMenus.create({
title     : "予約へ遷移",
type      : "normal",
contexts  : ["selection"],
parentId  : "hikkoshi",
id        : "reserve"
});
*/

chrome.runtime.onMessage.addListener(
  function(request, sender, callback) {  // 1
    console.log("リクエストはきている");
      chrome.contextMenus.create({
        title     : request.title,
        type      : "normal",
        contexts  : ["selection"],
        parentId  : "hikkoshi",
        id        : "hogehoge",
        });
      // 3
      return true;
  }
);

// グローバル変数
var baseUrl = "";

chrome.contextMenus.onClicked.addListener(function jumpUrl (info){ // click検知
  var menu = info.menuItemId;             // 右クリックID取得
  var userText = info.selectionText;     // テキスト確保

  getUserData(menu).then(function(){
    console.log(baseUrl);
    if(baseUrl != ""){
      var userUrl = baseUrl + userText;
      window.open(userUrl);
    } else {
      console.log("ポップアップからurlを設定してください。");
    }
  });
});


var getUserData = function(key){
  return new Promise(function(resolve){
    // local storage から取得
    chrome.storage.local.get(function(items){
      console.log(items["hogehoge"]);
      baseUrl = items[key];
      resolve();
    });
  });
};

