// let port = null;
// self.onconnect = function(e) {
//     port = e.ports[0];
self.onmessage = function(e) {
    console.log("worker received: " + e.data);
};
// };

setInterval(() => {

    self.postMessage("ta-dam !!!!")
}, 500);