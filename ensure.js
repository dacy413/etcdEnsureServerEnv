var Promise = require("bluebird");
var etcd = require("node-etcd");

etcd = new etcd();


function ensure_env(){
  console.log("doing...");
  return Promise.delay(5000);
};

function start_server(){
  Promise.resolve()
  .then(ensure_env)
  .then(function (){
    console.log("do ensure over...");
    etcd.set("first","ready");
  })
};

start_server();
