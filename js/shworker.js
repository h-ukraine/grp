// let bc = new BroadcastChannel('shared_worker');
// self.onmessage = function(e) {

//   console.log("worker received: " +e.data); 
// };
// shared worker
let port = null;
self.onconnect = function(e) {
    port = e.ports[0];
    port.onmessage = function(e) {
        console.log("worker received: " + e.data);
    };
};

setInterval(() => {

    if (port)
        port.postMessage("ta-dam !!!!")
}, 200);