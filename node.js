var http = require("http");    // HTTPモジュールの読み込み

http.createServer(function(request, response) {    //  HTTPサーバを作成
   response.writeHead(200, {'Content-Type': 'text/plain'});    // レスポンスHTTPヘッダーを設定
   response.end('Hello, Node\n');    // レスポンスボディを送信
}).listen(8000);    // ポート8000でリクエストを行う

console.log("server was started.");