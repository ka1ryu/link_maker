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
        id        : request.id,
        onclick   : function (info){
          var jumpUrl = request.url + info.selectionText;
          window.open(jumpUrl);
        }
        });
      // 3
      return true;
  }
);


/*
chrome.contextMenus.onClicked.addListener(function (info){
  var menu = info.menuItemId;
  var sadminNum = info.selectionText;
  if(menu == "move"){
      var sadminUrl = "" + sadminNum;
      window.open(sadminUrl);
    }
    else {
      var sadminUrl = "" + sadminNum;
      window.open(sadminUrl);
    }
  }
);
*/