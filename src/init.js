const options = require('./options.js');
const Api = require('./api.js');
const Peer = require('./peer.js');

const Init = {};

Init.initP;

Init.init = (mainNet) => {
  Init.initP =  new Promise((resolve, reject) => {
    options.url += mainNet ? ":4001" : ":4002";
    
    Peer.getPeersList({state: 2, version: "1.0.1", limit: 20}, (err, success, response) => {
      if(response != null && response.success)
      {
        options.peers = response.peers.filter((peer) => peer.status == "OK" && peer.delay <= 100);
        resolve();
      }
      else
        reject("Error getting peers");
    })
  });
}

module.exports = Init;