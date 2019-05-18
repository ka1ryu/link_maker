// 右クリック作成処理
$('#set').on('click', function rightClick(title, url, id) {
    // local_storageを確認 既にあったらreload
    // フロントでバリデートどうするか
    var title = "hogehoge";
    var url = "https://qiita.com/";
    var id = "1";
    setUrl(title, url, id);
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


function setUrl(title, url, id) {
    // background.jsに保存内容を送る
    chrome.runtime.sendMessage({
        title : title,
        url : url,
        id : id
    }, function(response) {
        console.log(response);
        alert(response);
    });
    console.log("seturlも呼ばれている");
}

$('#save').on('click', function () {
        var theValue = "https://qiita.com/";
        chrome.storage.local.set({'hogehoge': theValue}, function(){
            console.log('Settings saved');
            });
    })