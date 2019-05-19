// 右クリック作成処理
$('#set').on('click', function rightClick() {
    // local_storageを確認 既にあったらreload
    // フロントでバリデートどうするか
    var title = "おはよう";
    setUrl(title);
    console.log("保存しようとはしている");
    /*
    if(){
        // local にない
        // setUrl(title, url, id)
    } else {
        // lcoalにある
        // reload url
    }*/
})


function setUrl(title, url) {
    // background.jsに保存内容を送る
    chrome.runtime.sendMessage({
        title : title,
    }, function(response) {
        console.log(response);
        alert(response);
    });
    console.log("seturlも呼ばれている");
}

// storageへURL保存
$('#save').on('click', function () {
    var theValue = "https://qiita.com/";
    chrome.storage.local.set({'おはよう': theValue}, function(){
        console.log('Settings saved');
    });
})

/*
$('#btn_id').on('click', function(){
    var item = $('[name=menuItemId]').val();
    var title = $('#title').val();
    var url = $('#url').val();
    alert(item + title + url);
})
*/

    // 1. テキストエリアから保存内容の取得 
    // 2. 変数へ格納
    // 3. +on 3つまでの制限 テキストエリアに番号を振って、それをidとするとか            

$('#btn_id').on('click', function(){
    // タイトルを配列として取得
    var inputTitle = $(".titleBox").map(function (index, el) {
        return $(this).val();
    });
    // URLを取得
    var inputUrl = $(".urlBox").map(function (index, el) {
        return $(this).val();
    });


    showtext = "";
    for (i = 0; i < inputTitle.length; i++) {
        showtext += inputTitle[i];
    }
    showurl = "";
    for (i = 0; i < inputUrl.length; i++) {
        showurl += inputUrl[i];
    }
    alert(showtext);
    alert(showurl);
})