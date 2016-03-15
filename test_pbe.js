var express = require('express');
var etcd = require("node-etcd");

etcd = new etcd();

etcd.set("first", "test");
etcd.get("first", console.log);

function server(){
var app = express();


app.get('/', function (req, res) {
  res.send('WELCOME!');
});

function ensure(res){
  console.log("res ",res);
  if (res.node.value == "ready"){
    var server = app.listen(3001, function () {
      console.log('PBE listening on port 3001!');
    });
  };
};

ensure_watcher = etcd.watcher("pbe");
ensure_watcher.on("change",ensure);



};

server();
