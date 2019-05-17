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


$('#btn_id').on('click', function setUrl(){
    var url = $('#text').val()
    chrome.storage.sync.set(
        {
          "value1": url
        }
    );
})

function setUrl(title, url, id) {
    // background.jsに保存内容を送る
    chrome.runtime.sendMessage({
        title: title,
        url  : url,
        id   : id
    }, function(response) {
        console.log(response);
        alert(response);
    });
}