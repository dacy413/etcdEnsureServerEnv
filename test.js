var express = require('express');
var etcd = require("node-etcd");

etcd = new etcd();

etcd.set("first", "test");
etcd.get("first", console.log);

function fake_server(){
var app = express();


app.get('/', function (req, res) {
  res.send('WAIT!');
});

var server = app.listen(3000, function () {
  console.log('FAKE SERVER listening on port 3000!');
});

function ensure(res){
  console.log("res ",res);
  if (res.node.value == "ready"){
    server.close();
    console.log("ensure over ...");
    etcd.set("pbe","ready");
    setTimeout(function(){
      process.exit();
    },1000);
  };
};

ensure_watcher = etcd.watcher("first");
ensure_watcher.on("change",ensure);



};

fake_server();
