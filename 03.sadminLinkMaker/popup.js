// ポップアップ展開時にstorageからデータ取得
// ★要リファクタリング for文2つもいらん気がする
window.onload = function checkStorage(){
    chrome.storage.local.get(function(items){
        for (i =1; i<4; i++) {
            if(items["title"+i]){   // DOMのIDと連動して同時に操作
                $('#title'+i).val(items["title"+i]);
                $('#title'+i).prop('disabled', true);
            }
        }
        for (i =1; i<4; i++){
            if(items["url"+i]){   // DOMのIDと連動して同時に操作
                $('#url'+i).val(items["url"+i]);
                $('#url'+i).prop('disabled', true);
            }
        }
    });
};

// storageへURL保存
$('#save').on('click', function () {
    // ★要リファクタリング（配列→連想配列ではなく、直接連想配列に突っ込む）
    // タイトルとURLを配列として取得
    var inputTitle = $(".titleBox").map(function (index, el) {
        return $(this).val();
    });
    var inputUrl = $(".urlBox").map(function (index, el) {
        return $(this).val();
    });

    // 連想配列に格納
    var titleAndUrl = {};
    for(i=0; i<3; i++){
        n = i +1;
        titleAndUrl["title"+ n] = inputTitle[i];
        titleAndUrl["url"+ n] = inputUrl[i];
    }

    chrome.storage.local.set(titleAndUrl, function(){
        console.log('Settings saved');
    });
    location.reload()
    // 
    for(i=0; i<inputTitle.length; i++){
        if(inputTitle[i]){ // 要素が存在すれば右クリック作成
            id = i+1
            setUrl(inputTitle[i], id);
            console.log("保存しようとはしている");
        }
    }
})

function setUrl(title, id) {
    // background.jsに保存内容を送る
    chrome.runtime.sendMessage({
        title : title,
        id    : "url"+id
    }, function(response) {
        console.log(response);
        alert(response);
    });
    console.log("seturlも呼ばれている");
}

// DELETEボタンの処理
$('#delete').on('click', function(){
    //storage削除
    chrome.storage.local.clear();
    location.reload()
    // menu削除
    for (i=1; i<4; i++){
        chrome.contextMenus.remove("url"+i, function(){
        });
    }
})