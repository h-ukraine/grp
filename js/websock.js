// loadcnt++;
// firther();

var url; // = "ws://192.168.0.177:48710/"; 
let websocket;


class WebSocketBinary extends WebSocket {
    sendBinary(buf) {
        this.send(new Uint8Array(buf));
    }

    sendBinary16(buf16) {
        this.send(new Uint16Array(buf16));
    }

    isOpen() {
        if (this.readyState = 1) // OPEN
            return true;
        else return true;
    }
}




// Call this to connect to the WebSocket server
// function wsConnect(url) {
function wsConnect() {

    // let force_addr = "192.168.0.115";
    let force_addr = "192.168.0.142"; //   "onserver.site"; //              "192.168.0.177"; //129"; //177";
    // Connect to WebSocket server
    let addr = location.host.length > 0 ? location.host : force_addr; //"192.168.0.115";

    if ((location.port == 49200) || (location.port == 49020))
        addr = force_addr; //"192.168.0.177";

    // let addr = location.host.length > 0 ? location.host : "192.168.1.116:80";

    // exclude ":port" from real url
    var ind = addr.indexOf(':');
    if (ind > 0) {
        addr = addr.substr(0, ind);
    }


    // let wstarg = "ws://" + addr + '/chat '; // + (ws_pass ? ws_pass : 'nopassw'); // + ":48710";
    let wstarg = "ws://" + "onserver.site:50700" + '/chat=gena'; //   
    // let wstarg = "ws://" + "onserver.site:80" + '/chat=gena '; //  '/chat ';
    // wstarg = "ws://" + "192.168.1.133:80" + '/chat=gena';
    // let wstarg = "ws://" + "vps.onserver.site:60080" + '/chat=gena '; //  '/chat ';
    // let wstarg = "ws://" + "192.168.1.16" + '/chat=gena'; //      '/chat ';

    if ((!websocket) || (websocket.readyState != 1))
        websocket = new WebSocketBinary(wstarg); //, "arduino");




    // websocket = new WebSocketBinary("ws://" + addr + ":48710/");

    websocket.binaryType = 'arraybuffer';
    // Assign callbacks
    websocket.onopen = function(evt) {
        onOpen(evt)
    };
    websocket.onclose = function(evt) {
        onClose(evt)
    };
    websocket.onmessage = function(evt) {
        onAnyMessage(evt)
    };
    websocket.onerror = function(evt) {
        onError(evt)
    };
};

// wsConnect(url);



// Called when a WebSocket connection is established with the server
function onOpen(evt) {

    // Log connection state
    console.log("[onOpen]: Connected");
    lastrcvtime = new Date().getTime();
    // Enable button
    // button.disabled = false;
    // pressbutton.disabled = false;

    // Get the current state of the LED
    // doSend("getLEDState");

    // Get saved preferences
    // let w = "$_ getsaved : " + editables.map(x => x.name).toString();
    // doSend(w);
}

// Called when the WebSocket connection is closed
function onClose(evt) {

    // Log disconnection state
    console.log("[onClose]: Disconnected");

    // Disable button
    // button.disabled = true;

    // Try to reconnect after a few seconds
    setTimeout(function() {

        wsConnect(url)
    }, 4000);
}


// Called when a WebSocket error occurs
function onError(evt) {
    if (div = document.getElementById('rightheader')) //("status_right"))
        div.innerText = "помилка з'єднання: ERROR";
    console.log("ERROR: " + evt.data);
}


// Callback on get string text 
callback_GetText = (evt) => {

    var msg = evt.data;
    // console.log("[callback_GetText]:  " + evt.data);
    console.log("get data...");

    //try json...
    myGetJson(evt.data);

    // let cmdtype = null;
    // let result = null;

    // try {
    //     cmdobj = JSON.parse(evt.data); //, [reviver]);
    //     if (cmdobj.ObjectType == CmdType.SomeText) {

    //         result = JSON.parse(cmdobj.Text);

    //     }
    // } catch (e) {


    // }




    //for each item from editables get value saved in esp32, for example from:  "ssid = TP-LINK"
    // editables.forEach(item => {
    //     var name = item.name;
    //     if (evt.data.substr(0, name.length) == name) {
    //         let value = evt.data.substr(evt.data.indexOf('=') + 1).trim();
    //         if (div = document.getElementById(name)) {
    //             div.innerText = value;
    //         }
    //     }
    // });

    // Update circle graphic with LED state  and led0
    // if (evt.data.includes("white")) {
    //     // context.fillStyle = "white";
    //     context.fillStyle = "dimgray";
    //     context.fill();
    //     if (div = document.getElementById("led0")) {
    //         div.style.background = 'white';
    //     }
    // } else if (evt.data.includes("gray")) {
    //     setTimeout(() => {
    //         context.fillStyle = "dimgray";
    //         context.fill();
    //         if (div = document.getElementById("led0")) {
    //             div.style.background = 'dimgray';
    //         }
    //     }, 30);
    // }
}


let lastrcvtime = new Date().getTime(); //0;

// Called from WebSocketServer event on any message is received 
// function onAnyMessage(evt) {
onAnyMessage = (evt) => {
    // var buffer = new Uint8Array(evt.data);
    // var lnn = buffer.length;

    let typ = typeof(evt.data);

    // var s = new String(evt.data);
    // if (s.includes("ArrayBuffer]")) {
    if (typ == "object") {
        var b = new Uint8Array(evt.data);
        callback_GetBinary(b);
    } else if (typ == "string") {
        callback_GetText(evt);
        // console.log("[AnyMessage]: Received: " + evt.data);
    }
    lastrcvtime = new Date().getTime();
}




//  #somebinary 
function onPressBinary(div, mode) {
    console.log("Sending: binary mode= " + mode.toString());

    //    var array = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    var buf = [9, 8, 1, 1, 2, 3];
    var array = new Uint8Array(buf);

    // let buffer = new Uint8Array([255, 255, 255, 255]).buffer;
    if (mode)
        array.set(buf, 0, buf.length)

    // websocket.send(new Uint8Array([1, 1, 3, 3, 9, 9]));
    if (mode)
        websocket.sendBinary([7, 7, 5, 5]);
    else websocket.sendBinary([0]);
}


// check status of websocket connection
setInterval(() => {
    var msg = "з'єднання з сервером: "
    if (websocket) {

        if ((new Date().getTime() - lastrcvtime) > 59000) {
            console.log("превышено время ожидания keep_alive - disconnecting...")
            if (websocket)
                if (websocket.readyState != 3) {
                    websocket.close(); //1000, "превышено время ожидания keep_alive");
                    lastrcvtime = new Date().getTime();
                }
        }

        let div = document.getElementById('rightheader'); //         ("status_right");
        if (div != null) {
            var tttddd = div.id;

            switch (websocket.readyState) {
                // case WebSocket.OPEN:
                case 0:
                    div.innerText = msg + "CONNECTING";
                    div.style.color = 'lightgreen';
                    div.style.background = 'navy';
                    break;
                case 1:
                    // var st = websocket.send("!");
                    div.innerText = msg + "OPEN";
                    div.style.color = 'lightgreen';
                    // if (vvv = document.getElementById('rightheader')) {
                    div.style.background = 'linear-gradient( to right, rgba(255, 238, 0, 0.267), rgb(27, 27, 71) 1%)';

                    // }
                    websocket.send("check");

                    break;
                case 2:
                    div.innerText = msg + "CLOSING";
                    div.style.color = 'red';
                    div.style.background = 'black';

                    break;
                case 3:
                    div.innerText = msg + "CLOSED";
                    div.style.color = 'red';
                    div.style.background = 'black';
                    break;
                default:
                    div.innerText = msg + websocket.readyState.toString();
                    break;

            }
        }
    }

}, 2500);

console.log("3. websock.js обработан!");
// loadcnt++;