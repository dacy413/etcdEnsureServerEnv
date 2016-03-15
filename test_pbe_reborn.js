var express = require('express');
var etcd = require("node-etcd");

etcd = new etcd();

etcd.set("first", "test");
etcd.get("first", console.log);

function server(){
var app = express();


app.get('/', function (req, res) {
  res.send('WELCOME PBE-REBORN SERVER!');
});

function ensure(res){
  console.log("res ",res);
  if (res.node.value == "ready"){
    var server = app.listen(3000, function () {
      console.log('PBE-REBORN listening on port 3000!');
    });
  };
};

ensure_watcher = etcd.watcher("pbe");
ensure_watcher.on("change",ensure);



};

server();
