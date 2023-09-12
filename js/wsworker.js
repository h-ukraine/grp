// import { _get_wshost } from "./_.js";
// import { HostEndpoint } from "./_.js";

let HostEndpoint = "sof.onserver.space:50730";

// let yyy789 = _get_wshost();



//enumeration
var CmdType = {
    None: 0,
    SomeText: 1,
    GetLastSkzData: 2,
    GetDevices: 3,
    SaveLatLng: 4,
    Login: 5,
    LoginAnswer: 6,
    Refresh: 7,
    GetNodeData: 8,
    GetLastGrpData: 9,
    GetNodeParams: 10,
    GetUserParams: 11,
    GetDataArchive: 12,
    GetUsers: 13
}


function CmdTypeToString(fff) {
    var text = '?';
    switch (fff) {
        case CmdType.None:
            text = 'None';
            break;
        case CmdType.SomeText:
            text = 'SomeText';
            break;
        case CmdType.GetLastSkzData:
            text = 'GetLastSkzData';
            break;
        case CmdType.GetDevices:
            text = 'GetDevices';
            break;
        case CmdType.SaveLatLng:
            text = 'SaveLatLng';
            break;
        case CmdType.Login:
            text = 'Login';
            break;
        case CmdType.LoginAnswer:
            text = 'LoginAnswer';
            break;
        case CmdType.Refresh:
            text = 'Refresh';
            break;

        case CmdType.GetNodeData:
            text = 'GetNodeData';
            break;
        case CmdType.GetLastGrpData:
            text = 'GetLastGrpData';
            break;
        case CmdType.GetUserParams:
            text = 'GetUserParams';
            break;
        case CmdType.GetDataArchive:
            text = 'GetDataArchive';
            break;
    }

    return text;

}


//----------------------------------------------
function isJSON(str) {
    if (/^\s*$/.test(str)) return false;
    str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
    str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
    str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
    return (/^[\],:{}\s]*$/).test(str);
}

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
    // let wstarg = "ws://" + "skz.onserver.site:49009" + '/chat=gena'; // route to 192.168.0.141:80
    // let wstarg = "ws://" + "skz.onserver.site:49010" + '/chat=gena'; // route to 192.168.0.142:50700
    /////// let wstarg = "ws://" + "vps.onserver.site:50700" + '/chat=gena'; // route to 192.168.0.133:50700

    // let wstarg = "ws://" + "develop.onserver.site:50730" + '/chat=gena'; // route to 192.168.0.133:50700
    let wstarg = "ws://" + "odessaconnector.onserver.space:50730" + '/chat=gena'; // route to 192.168.0.133:50700
    // wstarg = "ws://" + "localhost:50730" + '/chat=gena';
    // wstarg = "ws://" + "192.168.1.4:50730" + '/chat=gena';

    // ods
    // wstarg = "ws://" + "od.onserver.space:50730" + '/chat=gena';
    //ck
    // wstarg = "ws://" + "192.168.1.4:50730" + '/chat=gena';
    // wstarg = "ws://" + "79.100.217.232:50730" + '/chat=gena';
    // wstarg = "ws://" + _get_wshost() + '/chat=gena'; //"ws://" + "sofia.onserver.space:50730" + '/chat=gena';
    wstarg = "ws://" + HostEndpoint + '/chat=gena'; //"ws://" + "sofia.onserver.space:50730" + '/chat=gena';



    // wstarg = "ws://" + "31.131.18.107:50730" + '/chat=gena'; // route to 192.168.0.133:50700
    // wstarg = "ws://" + "myvps.onserver.site:50730" + '/chat=gena'; // route to 192.168.0.133:50700


    // let wstarg = "ws://" + "onserver.site:50700" + '/chat=gena'; // route to 192.168.0.133:50700
    // wstarg = "ws://" + "192.168.0.124:50700" + '/chat=gena';
    // wstarg = "ws://" + "31.148.150.251:50700" + '/chat=gena';
    // wstarg = "ws://" + "192.168.0.113:50710" + '/chat=gena';
    ///////   wstarg = "ws://" + "192.168.0.134:50700" + '/chat=gena';    //i3-msata on J1900   local
    // wstarg = "ws://" + "192.168.0.103:50700" + '/chat=gena';  //i7-msata local
    //
    // wstarg = "ws://" + "192.168.1.157:50700" + '/chat=gena';
    //////////
    // let wstarg = "ws://" + "onserver.site:80" + '/chat=gena '; //  '/chat ';
    // wstarg = "ws://" + "192.168.1.133:80" + '/chat=gena';
    // let wstarg = "ws://" + "vps.onserver.site:60080" + '/chat=gena '; //  '/chat ';
    // let wstarg = "ws://" + "192.168.1.16" + '/chat=gena'; //      '/chat ';

    if ((!websocket) || (websocket.readyState != 1))
        websocket = new WebSocketBinary(wstarg + '/' + totalid); //, "arduino");
    // websocket = new WebSocketBinary(wstarg, ["protocol", "pro2"]); //, "arduino");




    // websocket = new WebSocketBinary("ws://" + addr + ":48710/");

    websocket.binaryType = 'arraybuffer';
    // Assign callbacks
    websocket.onopen = function (evt) {
        onOpen(evt)
    };
    websocket.onclose = function (evt) {
        onClose(evt)
    };
    websocket.onmessage = function (evt) {
        onAnyMessage(evt)
    };
    websocket.onerror = function (evt) {
        onError(evt)
    };
};



let wsopenAcked = false;
let wsopcnt = 0;
// Called when a WebSocket connection is established with the server
function onOpen(evt) {
    // Log connection state
    //console.log("[onOpen]: Connected " + myperf()); // + performance.now().toFixed(1));
    console.log("[onOpen]: Connected " + performance.now().toFixed(1));
    lastrcvtime = new Date().getTime();


    var rrr = setInterval(() => {
        var obj = new Object({ type: 'wsopened' });
        // obj.type = 'wsopened';
        bc.postMessage(obj);
        // if (cnt++ >= 20)
        wsopcnt++;
        if (wsopenAcked) {
            clearInterval(rrr);
            setTimeout(() => {
                var obj = new Object({ ObjectType: CmdType.Refresh, comment: 'keep_alive, wsopenAcked' });
                obj.totalid = totalid;
                var str = JSON.stringify(obj);
                websocket.send(str);
            }, 30);

        }
    }, 150);

    // bc.postMessage
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
    setTimeout(function () {

        wsConnect(url)
    }, 4000);
}


// Called when a WebSocket error occurs
function onError(evt) {
    // if (div = document.getElementById('rightheader')) //("status_right"))
    //     div.innerText = "помилка з'єднання: ERROR";
    if (diag)
        diag.postMessage("помилка з'єднання: ERROR");
    console.log("ERROR: " + evt.data);
}


var savDevansw = null;
var savSkzansw = null;
var savGrpansw = null;

// Callback on get string text from wsserver
// callback_GetText = (evt) => {
function callback_GetText(evt) {
    var msg = evt.data;

    // var wsorig = websocket.url;
    // var ws = wsorig.replace('ws://', '');
    // var ind = ws.indexOf(':');
    // var prt = 0;
    // if (ind > 0) {
    //     var tmp = ws.substring(ind + 1, ind + 1 + 6);
    //     prt = parseInt(tmp);
    // }


    // var ttt = wrapCmd(msg);   // при подключении importScripts
    var obj;
    if (isJSON(msg)) {
        obj = JSON.parse(msg);
        // obj.wsport = prt;
        if (obj) {
            if (obj.type == 'answer') {
                if (obj.ObjectType == CmdType.GetLastSkzData)
                    savSkzansw = evt.data;
                else if (obj.ObjectType == CmdType.GetLastGrpData) {
                    var n = obj.arrgrp.length;
                    if (n > 0)
                        savGrpansw = evt.data;
                    // else if (savGrpansw != null) {
                    //     if (savGrpansw.length > 0)
                    //         evt.data.arrgrp = savGrpansw;

                    // }

                } else if (obj.ObjectType == CmdType.GetDevices) {
                    var n = obj.arrdev.length;
                    if (n > 0) {
                        savDevansw = evt.data;
                        var qwerty = 2;
                    }

                } else if (obj.ObjectType == CmdType.LoginAnswer) {

                } else if (obj.ObjectType == CmdType.GetNodeData) {
                    var qwerty_345 = 2;
                } else if (obj.ObjectType == CmdType.GetUserParams) {
                    var qwerty = 11;
                } else if (obj.ObjectType == CmdType.GetDataArchive) {
                    var t = 0;
                }
                // savDevansw = evt.data;
            }
            var bbbbbb = 8;
        }

    } else {
        var dummy = 0;
    }
    // console.log("[callback_GetText]:  " + evt.data);
    var _typ = (obj ? 'type: ' + obj.type : " ");
    var _cmdtyp = obj ? CmdTypeToString(obj.ObjectType) : ' ';

    // if (obj.type == 'answer') {
    obj.serverevent = true;
    var mss = JSON.stringify(obj);

    // }


    var xxx = "[worker]: get wssocket_data... " + _typ + ', ' + _cmdtyp + ",  tm=" + tm_time;
    console.log(xxx + " t=" + performance.now().toFixed(1) + ' len=' + msg.length);
    // evt.data.type = "answer";
    // evt.data.receivedfromserver = true;
    // bc.postMessage(evt.data); // myGetJson(evt.data); //try json...
    bc.postMessage(mss); // myGetJson(evt.data); //try json...
}


let lastrcvtime = new Date().getTime(); //0;

// Called from WebSocketServer event on any message is received 
function onAnyMessage(evt) {
    // onAnyMessage = (evt) => {
    // var buffer = new Uint8Array(evt.data);
    // var lnn = buffer.length;

    let typ = typeof (evt.data);

    // var s = new String(evt.data);
    // if (s.includes("ArrayBuffer]")) {
    if (typ == "object") {
        var b = new Uint8Array(evt.data);
        // callback_GetBinary(b);
    } else if (typ == "string") {
        callback_GetText(evt);
        // console.log("[AnyMessage]: Received: " + evt.data);
    }
    lastrcvtime = new Date().getTime();
}




//  #somebinary 
// function onPressBinary(div, mode) {
//     console.log("Sending: binary mode= " + mode.toString());

//     //    var array = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//     var buf = [9, 8, 1, 1, 2, 3];
//     var array = new Uint8Array(buf);

//     // let buffer = new Uint8Array([255, 255, 255, 255]).buffer;
//     if (mode)
//         array.set(buf, 0, buf.length)

//     // websocket.send(new Uint8Array([1, 1, 3, 3, 9, 9]));
//     if (mode)
//         websocket.sendBinary([7, 7, 5, 5]);
//     else websocket.sendBinary([0]);
// }


function refreshGrpData(len = 1) {

    let cmdobj = new Object({
        ObjectType: CmdType.GetLastGrpData,
        Text: "eee",
        // dateleft: new Date(),
        // dateright: new Date(),
        lastnmb: len,
        sertif: 'refresh'
    });

    cmdobj.type = "_wsocket";
    cmdobj.caller = "main";

    let str = JSON.stringify(cmdobj);
    websocket.send(str);
}

function refreshSkzData(len = 1) {
    let cmdobj = new Object({
        ObjectType: CmdType.GetLastSkzData,
        Text: "eee",
        // dateleft: new Date(),
        // dateright: new Date(),
        lastnmb: len,
        sertif: 'refresh'
    });

    cmdobj.type = "_wsocket";
    cmdobj.caller = "main";

    let str = JSON.stringify(cmdobj);
    websocket.send(str);
}



// check status of websocket connection
setInterval(() => {
    var msg = "з'єднання з сервером: "
    if (websocket) {

        if ((new Date().getTime() - lastrcvtime) >= 90000) {
            console.log("превышено время ожидания keep_alive - disconnecting...")
            if (websocket)
                if (websocket.readyState != 3) {
                    websocket.close(); //1000, "превышено время ожидания keep_alive");
                    lastrcvtime = new Date().getTime();
                }
        }

        switch (websocket.readyState) {
            // case WebSocket.OPEN:
            case 0:
                diag.postMessage(msg + "CONNECTING");
                break;
            case 1:

                diag.postMessage(msg + "OPEN");
                var obj;
                if (wsopenAcked)
                    var obj = new Object({ ObjectType: CmdType.Refresh, comment: 'login wsworker: refresh' });
                else
                    var obj = new Object({ ObjectType: CmdType.SomeText, comment: 'login wsworker:  keep_alive' });
                obj.totalid = totalid;
                var str = JSON.stringify(obj);
                // websocket.send('_chk_alive'); //           ("check");
                websocket.send(str);

                if (wsopenAcked) {
                    refreshGrpData();
                    // refreshSkzData();
                }
                break;
            case 2:
                diag.postMessage(msg + "CLOSING");

                break;
            case 3:
                diag.postMessage(msg + "CLOSED");
                break;
            default:
                diag.postMessage(msg + websocket.readyState.toString());
                break;

        }
    }

}, 25000);


// wsConnect();


// ++++++++++++++++++++++  worker post channel 
self.onmessage = function (e) {
    console.log("self: worker received: " + e.data);
};

// setInterval(() => {

//     self.postMessage("ta-dam !!!!")
// }, 3000);
///---------------------




// +++++++++++++++++++   diagnostic broadcast_channel
const diag = new BroadcastChannel('diag_channel');
diag.onmessage = function (ev) { }


var msgarr = [];
var totalid = 0;

const bc = new BroadcastChannel('test_channel');
console.log("[worker]: bc receiver started " + performance.now().toFixed(1));
// console.log("[worker]: Connected " + performance.now().toFixed(1));
bc.onmessage = function (ev) {
    // var pf = performance.now();

    // var dt = Date.parse(pf);

    // console.log(dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds() + '.' + dt.getMilliseconds());
    // var r = JSON.stringify(ev.data);
    // var ooo = ev.data.object;

    // var tttt = JSON.stringify(ev.data.obect);
    // console.log("[wsworker]: " + JSON.stringify(ooo));

    switch (ev.data.type) {
        case "totalid":

            if (ev.data.totalid) {
                totalid = ev.data.totalid;

            }
            break;




        case "wsopenack":
            wsopenAcked = true;
            console.log('[worker]: wsopenack! cnt=' + wsopcnt);
            totalid = ev.data.totalid;
            break;
        case "tmax=300":
            tm_time = 250;
            break;

        // case 'node':
        //     {
        //         var descr = ev.data.description;
        //         console.log('[worker] node :  ' + ev.data.description + ',  n=' + ev.data.newcount);
        //         break;
        //     }
        case "_wsocket":
            // sendCmd(ev.data.message);
            if (ev.data.ObjectType == CmdType.SaveLatLng) {
                var ttt = 111;
            } else if (ev.data.ObjectType == CmdType.Login) {
                var ttt = 222;
            } else if (ev.data.ObjectType == CmdType.GetNodeData) {
                var ttt = 222;

            } else if (ev.data.ObjectType == CmdType.GetUserParams) {
                var ttt = 222;
            }
            else if (ev.data.ObjectType == CmdType.GetUsers) {
                var ttt = 222;
            }


            console.log("[worker]: send to websocket,  type= " + CmdTypeToString(ev.data.ObjectType) +
                ' ' + performance.now().toFixed(1));
            sendCmd(ev.data);

            break;
        default:
            // console.log("[worker]: case Not defined!!");
            break;

    }


}



var tm_time = 500;
var _cnt = 0;

function go() {

    const tmax = 850;
    setTimeout(() => go(), tm_time);
    if (tm_time < tmax)
        tm_time = Math.min(tm_time * 1.2, tmax).toFixed();
    var syncobj = new Object({
        type: "sync1000"
    });

    if (savDevansw)
        bc.postMessage(savDevansw);
    if (savGrpansw)
        bc.postMessage(savGrpansw);
    if (savSkzansw)
        bc.postMessage(savSkzansw);


    if (((_cnt % 6) == 0) || tm_time < (tmax * 0.7))
        bc.postMessage(syncobj);
    _cnt++;

}
go();



// setInterval(() => {
//     // var syncobj = new Object();
//     // syncobj.type = "sync400";
//     bc.postMessage(new Object({ type: "sync400" }));
// }, 400);


function sendCmd(cmdobj) {
    if (websocket) {
        try {
            if (websocket.readyState == 1) {

                // browserSendTime = new Date();
                // browserSend_ms = performance.now(); //    new Date().getTime();
                // var str = JSON.stringify(cmdobj);
                // websocket.send(str);
                var hhh = location.search;
                console.log("------------sendCmd " + CmdTypeToString(cmdobj.ObjectType));
                websocket.send(JSON.stringify(cmdobj));

            } else {
                // console.log("------------delay");
                // msgarr.push(JSON.stringify(cmdobj));
                // var tt = setInterval(() => {
                //     if (websocket.readyState == 1) {
                //         msgarr.forEach(msg => {
                //             websocket.send(msg);
                //         });
                //         msgarr = [];
                //         clearInterval(tt);
                //     }


                // }, 100);

            }

        } catch (ccc) {
            var d = ccc;
        }
    }

}

// var rrr = setInterval(() => {


//     if (totalid > 0) {
//         clearInterval(rrr);
wsConnect();
//     }
// }, 15);
