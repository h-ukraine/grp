/* A page or script is accessing at least one of navigator.userAgent, navigator.appVersion, and navigator.platform. 
Starting in Chrome 101, the amount of information available in the User Agent string will be reduced.
    To fix this issue, replace the usage of navigator.userAgent, navigator.appVersion, and navigator.platform with feature detection, 
progressive enhancement, or migrate to navigator.userAgentData.
    Note that for performance reasons, only the first access to one of the properties is shown.
*/


var vbnav = navigator.userAgentData;
var hisry = window.history;
var rr987 = 987;
// Проверка активна ли в настоящий момент вкладка браузера
var isActive = true;

function onBlur() { // окно теряет фокус
    isActive = false;
    // что-то делаем
}

function onFocus() { // окно получает фокус
    isActive = true;
    // что-то делаем
}
if ( /*@cc_on!@*/ false) { // для Internet Explorer
    document.onfocusin = onFocus;
    document.onfocusout = onBlur;
} else {
    window.onfocus = onFocus;
    window.onblur = onBlur;
}



function setGlobalProp(prop, val) {
    var root = document.querySelector(':root');
    // var rootStyles = getComputedStyle(root);

    root.style.setProperty(prop, val);
    // var mainColor = rootStyles.getPropertyValue('--main-color');

    // console.log(mainColor); // '#ffeead'

    // Для обновления переменной CSS, просто вызовите метод setProperty на элементе, в котором была объявлена переменная, и передайте имя переменной в качестве первого параметра и новое значение — вторым.

    // root.style.setProperty('--main-color', '#88d8b0');
}



function getGlobalProp(prop) {
    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root, null);

    var bbb = root.style.getPropertyValue(prop);
    return rootStyles.getPropertyValue(prop);
}


function setelemProp(elem, prop, val) {
    var item = document.querySelector(elem);
    item.style.setProperty(prop, val);
}



function getelemProp(elem, prop) {
    var item = document.querySelector(elem);
    var itemStyles = getComputedStyle(item, null);

    // var bbb = root.style.getPropertyValue(prop);
    return itemStyles.getPropertyValue(prop);
}











let mode;

function switch_to_subpage(n) {

    var ss = '.formcontainer';
    for (i = 1; i < 10; i++) {
        var sss = '.formcontainer' + i;
        if (pg = document.querySelector(sss)) {
            if (i != n)
                pg.style.display = 'none';
            else {
                if ((n == 4) || (n == 2) || (n == 3))
                    pg.style.display = 'block';
                else
                    pg.style.display = 'flex';
            }

        }
    }

    var sel = document.querySelector('.myselect');
    sel.selectedIndex = n;
    var tnmvb = sel.options[n];
    // var chld = sel.children;
    // sel.innerText = chld[n].innerText;

    for (i = 0; i < 10; i++) {
        var rr = 'radio' + n;
        if (rbtn = document.getElementById(rr)) {
            if (i == n)
                rbtn.checked = true;
            else
                rbtn.unchecked = true;
        }


    }


}

var first_mode4 = true;

function setmode(diff) {

    // if (diff > 99) {
    //     mode = Math.min(6, ++mode);
    // } else if (diff < -99) {
    //     mode = Math.max(0, --mode);
    // } else
    mode = diff;
    switch_to_subpage(mode);
    if (mode == 5) {
        // var pg1 = document.querySelector('.subpage1');

        // pg1.style.display = 'none';
        // var pg2 = document.querySelector('.subpage2').style.display = '';
        // switch_to_subpage(mode);

    } else
    if (mode == 4) {
        {
            init_myorion();
            console.log('dispatchEvent: resize');
            window.dispatchEvent(new Event('resize'));
            if (first_mode4) {
                first_mode4 = false;
                // if (!location.search.includes('?map=force'))
                //     toMaxZoom();
            }
        }

        /*
        if (!mymap) {
            init_leaf();
        }
        */

        // init_realworld();
        // init_myorion();




        // init_leaf();
        // var pg1 = document.querySelector('.subpage1');

        // pg1.style.display = 'none';
        // var pg2 = document.querySelector('.subpage2').style.display = '';
        // switch_to_subpage(mode);

    } else if (mode == 3) {
        window.dispatchEvent(new Event('resize'));
        // var pg1 = document.querySelector('.subpage1');

        // pg1.style.display = 'none';
        // var pg2 = document.querySelector('.subpage2').style.display = '';
        // switch_to_subpage(mode);

    } else if (mode == 2) {
        // var pg1 = document.querySelector('.subpage1');

        // pg1.style.display = 'none';
        // var pg2 = document.querySelector('.subpage2').style.display = '';
        // switch_to_subpage(mode);

    } else if (mode == 1) {
        // switch_to_subpage(mode);
        // evt.preventDefault();
        // var a = "http://onserver.site:49020/data/select.html";

        // var a = window.location.origin + '/data/select.html';
        // window.location.href = a;

        // window.location.replace(a);
        // var c = document.getElementsByClassName('container');
        // c[0].children[0].style.display = 'none';

        var div = document.getElementById('maindiv');
        div.style.display = 'none';

        var element = document.getElementById('mainmain');
        element.classList.remove("container");

        var p = document.getElementsByClassName('mypage1');
        var maincont = p[0];
        p[0].style.display = 'block';

        var p = document.getElementsByClassName('leftright');
        if (p) {
            var lr = p[0];
            if (lr)
                lr.style.display = 'flex';
        }




        // maincont.style.background = 'linear-gradient(to bottom, black 1% , rgba(250,0,0,0.4), black 80%)';
        // maincont.style.background = 'linear-gradient(to bottom, black 1% , rgba(220,0,0,0.2), black 80%)';
        maincont.style.border = '1px solid black';
        maincont.style.borderRadius = '10px';

        setstyle.display('endfooter', 'none');
    } else if (mode == 0) {
        if (div = document.getElementById('maindiv'))
            div.style.display = '';
        if (element = document.getElementById('mainmain'))
            element.classList.add("container");

        if (p = document.getElementsByClassName('mypage1')) {
            var maincont = p[0];
            p[0].style.display = 'none';
        }

        setstyle.display('endfooter', 'block');
    } else if (mode < 0) {
        var div = document.getElementById('maindiv');
        div.style.display = 'none';

        var element = document.getElementById('mainmain');
        element.classList.remove("container");

        var p = document.getElementsByClassName('mypage1');
        p[0].style.display = 'block';

        var p = document.getElementsByClassName('leftright');
        if (p) {
            var lr = p[0];
            if (lr)
                lr.style.display = 'flex';
        }




        // maincont.style.background = 'linear-gradient(to bottom, black 1% , rgba(250,0,0,0.4), black 80%)';
        // maincont.style.background = 'linear-gradient(to bottom, black 1% , rgba(220,0,0,0.2), black 80%)';
        // maincont.style.border = '1px solid black';
        // maincont.style.borderRadius = '10px';

        setstyle.display('endfooter', 'none');
    }



}



function come_in(evt) {

    // setmode(-1);
    // setmode(1);
    // setmode(4);
    return;

    if (diff > 0) {
        mode = Math.min(1, ++mode);

    }


    if (mode == 1) {

        // evt.preventDefault();
        // var a = "http://onserver.site:49020/data/select.html";

        // var a = window.location.origin + '/data/select.html';
        // window.location.href = a;

        // window.location.replace(a);
        // var c = document.getElementsByClassName('container');
        // c[0].children[0].style.display = 'none';

        var div = document.getElementById('maindiv');
        div.style.display = 'none';

        var element = document.getElementById('mainmain');
        element.classList.remove("container");

        var p = document.getElementsByClassName('mypage1');
        var maincont = p[0];
        p[0].style.display = 'block';

        var p = document.getElementsByClassName('leftright');
        if (p) {
            var lr = p[0];
            if (lr)
                lr.style.display = 'flex';
        }




        maincont.style.background = 'linear-gradient(to bottom, black 1% , rgba(250,0,0,0.4), black 80%)';
        maincont.style.border = '1px solid black';
        maincont.style.borderRadius = '10px';
    }

    // setstyle.display(c, 'hidden');
}

function click_h(ev) {
    ddd = this.innerText;
    ev.currentTarget.style.background = 'red';
    this.innerText = 'Аварія';
    var row = this.parentNode;


    var rowIndex = ev.target.parentElement.rowIndex;
    var cellIndex = ev.target.cellIndex;
    // alert('Row = ' + rowIndex + ', Column = ' + cellIndex);

    if (div = document.getElementById('kham')) {
        if (div.style.display != 'none') {
            div.style.display = "none";
        } else
            div.style.display = "";
        console.log(div.style.display);

    }

}


var iopener = window.opener;
var betrytuib = 99;

//*****************************/ BROADCASTING AND WORKER
function real_windowClose() {
    if (map != null) {
        var _zoom = map.getZoom();
        var _center = map.getCenter();

        obj = new Object({

            zoom: _zoom,
            center: _center

        });
        localStorage.setItem('map_params', JSON.stringify(obj));

    }
    var oper = window.opener;
    var ttt = window.open('pagealarms/alarms.html', 'mapwindow');
    var nm = window.name;
    // window.open('', '_self');
    ttt.close();
    // window.close();
    // window.top.close();
    // closeWindow();
}

const bc = new BroadcastChannel('test_channel');
console.log("[main2]:  BroadcastChannel started " + myperf());
bc.onmessage = function(ev) {

    // console.log(ev);
    // var msg = ev.data;
    // if (ev.data.type && (ev.data.type != "sync1000")) {
    //     var proba = myGetJson(ev.data);
    // }


    if (ev.data == 'map=close()') {
        var e = 0;
    }

    if (ev.data == 'all=close()') {
        window.top.close();
    }

    // if (ev.data.includes('all=close()'))
    //     window.top.close();




    msg = ev.data;
    var proba = null
    if (!msg.type) {
        if (isJSON(msg))
            msg = JSON.parse(msg); //                    myGetJson(ev.data);
    }

    // if (!ev.data.includes('sync1000')) {
    //     var proba = myGetJson(ev.data);
    // }


    switch (msg.type) {

        case 'wsopened':
            {
                isWsOpened = true;
                console.log('---------main2: wsopened! ' + performance.now().toFixed(1));
                console.log('---------main2: wsopened! ' + myperf());

            }
            break;


        case "map=close()":
            {

                // if (map != null) {
                //     var _zoom = map.getZoom();
                //     var _center = map.getCenter();

                //     obj = new Object({

                //         zoom: _zoom,
                //         center: _center

                //     });
                //     localStorage.setItem('map_params', JSON.stringify(obj));

                // }

                window.top.close();
                // real_windowClose();

                break;
            }


        case "sync400":
            console.log("received: sync400");
            // if (lastsavedDevicesObject != null)
            //     bc.postMessage(lastsavedDevicesObject);

            break;

        case "sync1000":

            // console.log("received: sync1000");
            // askSkzData();
            break;

        case "answer":
            if (msg.caller == 'main') {
                wrapCmd(msg);


                break;
            }
        case 'nodedata':
            {
                wrapNodeData(msg);
                break;
            }
        case 'alarm':
            {
                wrapAlarmData(msg);
                break;
            }



    }
}


vvv = ['red', 'green', 'yellow', 'blue'];
var vcnt = 0;

function send_broadcast() {
    // var dt = new Date();
    // console.log(dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds() + '.' + dt.getMilliseconds());

    // bc.postMessage(vvv[(vcnt++) & 3]);
    var o1 = new Object({ type: "complex" });

    var obj = new Object({
        type: "proba",
        //----------------
        param1: "123",
        param2: 456
    });

    o1.object = obj;

    bc.postMessage(o1);
}


// var div = a.document.getElementById('a1');
// if (div) {
//     div.style.background = 'red';
// }

// setInterval(() => {
// bc.postMessage(vvv[(vcnt++) & 3]);

// }, 1000);





function on_resize() {
    w = screen.width;
    h = screen.height;
    ww = document.documentElement.clientWidth;
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    // rect.w = ww;
    // rect.h = scrollHeight;
    var dmap = document.getElementById('map');
    var top = dmap.offsetTop;
    var start = getGlobalProp('--map-topstart');
    var clientheight = document.documentElement.clientHeight;
    var bbb = 'calc(' + clientheight.toString() + 'px - ' + top + "px - 2px)";
    // setGlobalProp('--map-height', bbb);

}





function hidecontrols() {
    var arr = document.getElementsByClassName('alldivcentered');
    Array.from(arr).forEach(x => {
        x.style.display = 'none';
    });
    var div = document.getElementById('map');
    if (div)
        div.style.display = 'none';

    div = document.querySelector('.instead-of-map');
    if (div) {
        div.style.display = 'block';
        setTimeout(() => { div.style.opacity = 1; }, 100);

    }
    // if (div)
    //     div.innerText = 'Ви не ідентифіковані!\n Введіть логін та пароль';
}

function gotoLogin(e) {

    var t = document.getElementById('toskz2');
    // t.href = 'http://skz.onserver.site:49020/data/login.html';
    t.href = 'http://' + location.host + '/data/login.html';

    // t.href += '?map=force&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"';
    // t.href += '?map=force&pw="' + msg.sertif + '"';
    t.click();
}



var tbl3 = null;

function onready() {
    window.name = 'mapwindow';

    var tmp = localStorage.getItem('tmppw');



    if (!tmp) {
        hidecontrols();
        return;
    }
    var sert = '';
    if (tmp)
        if (isJSON(tmp)) {
            sert = JSON.parse(tmp);
        }


    if (sert.totalid) {
        var obj = new Object();
        obj.type = 'totalid';
        obj.totalid = sert.totalid;
        bc.postMessage(obj);


    }


    if ((!location.search.includes('map=force&pw=')) ||
        (!location.search.includes('uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t'))) {
        // sert = '';
        localStorage.removeItem('tmppw');
        hidecontrols();
        return;
    }


    var div = document.getElementById('map');
    div.style.display = 'block';


    var dv = document.querySelector('.username'); //('.user1');
    if (dv && sert)
        if (sert.iuser) {
            // dv.innerText = sert.iuser.login + ': ' + sert.iuser.name + '  ' + sert.iuser.lastname;
            dv.children[1].innerText = sert.iuser.name + '  ' + sert.iuser.lastname;
        }

    var arr = document.getElementsByClassName('alldivcentered');
    Array.from(arr).forEach(x => {
        if (x.id != 'eee')
            x.style.display = 'block';
        else {
            var user = sert.iuser;
            if ((user.login == 'user1') || (user.login == 'user5') || (user.login == 'priv')) {
                x.style.display = 'block';
            }

        }
    });
    // var subm = document.getElementById('subm');
    // subm.addEventListener('click', come_in);
    // var md = localStorage.getItem('picomode');
    mode = 0;


    if (false) {
        // var importedDoc = null;

        // var link = document.querySelector('link[rel="import"]');
        // link.addEventListener('load', function(e) {
        //     var importedDoc = link.import;
        //     // importedDoc points to the document under component.html
        // });

        // var importedDoc = document.querySelector('link[rel="import"]').import;
    }

    // var ooo = document.getElementById('obj1').data;
    // Grab DOM from doc.html's document.
    // var text = doc.querySelector('.doc');
    // document.body.appendChild(text.cloneNode(true));
    //
    //
    //
    // var cls = document.getElementsByClassName("formcontainer1");

    // document.getElementById('some-table').rows[3].cells[4].innerHTML = "Техт";
    // document.getElementById('some-table').rows[3].cells[4].addEventListener('click', click_h, false);

    // document.getElementById('some-table').rows[1].cells[1].style.background = 'red';
    // document.getElementById('some-table').rows[1].cells[1].style.background = '';
    // document.getElementById('some-table').rows[3].cells[4].addEventListener('click', click_h, { once: true });


    // let r2 = document.getElementById('some-table').rows[3];

    if (false) { // Slider and Table
        startup_touch('vertslider2');
        if (tabl = document.getElementById('some-table')) {
            setwheel(tabl);
        }
    }

    // if (div = document.getElementById('subm')) //авто переход на главную
    //     subm.click();




    // init_leaf();

    //
    //Заполним formcontainer2
    if (false) {

        var tb = document.createElement('div');
        tb.id = 'tb';
        tb.style.display = 'flex';
        // var fm2 = document.getElementsByClassName('formcontainer2')[0];
        // fm2.appendChild(tb);
        // fm2.id = 'fm2';
        document.getElementsByClassName('formcontainer2').item(0).appendChild(tb);



        var tbl = new jsTable("alarmtable", 7, 1, 'tb');
        tbl.setProperty('width', '30%');
        // tbl.style.width = '100%';
        var hr = document.createElement('hr');
        hr.style.borderColor = 'green';
        tb.appendChild(hr);

        var tbl2 = new jsTable("currtable", 7, 5, 'tb');
        tbl2.style.width = '100%';
    }

    //пробуем таблицу в textbox2
    {
        // tbl3 = new jsTable("tabl3", 6, 11, 'textbox2');
        // tbl3.style.width = '100%';
    }



    // создаем таблицу  отладки во вкладке "Прилади"
    if (false) {

        //tbl3 = new jsTable("tabl3", 15, 16, 'fl_table1');

        var tabl_to_alarms = document.createElement('div');
        tabl_to_alarms.id = 'tabl_to_alarms_id';
        document.getElementsByClassName('formcontainer3').item(0).appendChild(tabl_to_alarms);
        // tbl3 = new jsTable("tabl3", 15, 16, 'tabl_to_alarms_id');
        tbl3 = new jsTable("tabl3", 40, 17, 'tablmap');

        for (i = 0; i < tbl3.rowCount; i++) {
            var icell = tbl3.cell(i, 0);
            icell.addEventListener("click", gotoTab);
            icell.style.textDecorationLine = "underline";
            //tbl3.cell[i, 0].addEventListener('click', gotoTab);
            tbl3.row(0).style.marginBottom = '6px';
            if ((i % 5 == 0) && i > 0)
                for (k = 0; k < tbl3.row(i).childElementCount; k++)
                    tbl3.row(i).children[k].style.background = 'rgb(23,26,30)';


            // cell.style.marginBottom = '8px';
        }
        // tbl3.setMinWidth([0, 0, 0, 0, 0, 80, 100]);
        // tbl3.style.width = '100%';
    }

    // wsConnect();

    // askSkzData();
    // setInterval(askSkzData, 200);

    // var sharedWorker = new SharedWorker("js/shworker.js");

    // sharedWorker.port.postMessage({ hello: 'world' });
    // // sharedWorker.port.start();

    // sharedWorker.port.onmessage = function(e) {
    //     console.log('main received - : ' + e.data);
    //     askSkzData();
    // };







    // setTimeout(() => {


    // setmode(4)
    // setmode(-1);
    // setmode(4);


    // window.onblur = function() {
    //         console.log("Ушли мы с этой вкладки. Либо вообще сернули все");
    //         setTimeout(() =>
    //             window.focus(), 500);
    //     }
    // var myctrl = L.Control({


    // })

    // window.dispatchEvent(new Event('resize'));
    // init_myorion();
    // refresh_objects_on_map();
    // if (div = document.getElementById('subm')) //авто переход на главную
    //     subm.click();
    init_myorion();


    // убираем дублирование вкладки "карта"
    // var mapcloseobj = new Object({
    //     type: "map=close()"
    // });
    // bc.postMessage(mapcloseobj);
    //
    // if (confirm('Вы действительно хотите закрыть страницу?')) {
    // if (confirm('Вы успешно зарегистрировались')) {

    // window.top.close();

    // }

    // window.onunload = function() {

    //     var t = 890;

    // }
    let _zoom_900 = 0;
    let _center_900 = 0;
    setInterval(() => {
        var z = map.getZoom();
        var c = map.getCenter();
        if ((z != _zoom_900) || (c.lat != _center_900.lat) || (c.lng != _center_900.lng)) {
            _zoom_900 = z;
            _center_900 = c;

            obj = new Object({

                zoom: z,
                center: c

            });
            localStorage.setItem('map_params', JSON.stringify(obj));

        }
    }, 300);

}


function sendCmd(cmdobj) {
    try {
        if (websocket.readyState == 1) {
            var str = JSON.stringify(cmdobj);
            browserSendTime = new Date();
            browserSend_ms = performance.now(); //    new Date().getTime();
            websocket.send(str);

        }
    } catch (ccc) {
        var d = ccc;
    }

}



function askSkzData(len = 1) {

    var tmp = localStorage.getItem('tmppw');
    var sert = '';
    if (tmp)
        if (isJSON(tmp)) {
            sert = JSON.parse(tmp);
        }
    if ((!location.search.includes('map=force&pw=')) ||
        (!location.search.includes('uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t'))) {
        sert = '';
    }
    cmdobj = new Object({ //   jsonCommand({
        ObjectType: CmdType.GetLastSkzData,
        Text: "eee",
        // dateleft: new Date(),
        // dateright: new Date(),
        lastnmb: len,
        sertif: sert.sertif
    });

    // sendCmd(cmdobj);


    // var cmd = new Object();
    // cmd.type = "_wsocket";
    // cmd.caller = "main";
    // cmd.message = cmdobj;

    // send to websocket via worker
    cmdobj.type = "_wsocket";
    cmdobj.caller = "main";
    browserSendTime = new Date();
    browserSend_ms = performance.now(); //    new Date().getTime();
    console.log("main2 askskz: postMessage " + performance.now().toFixed(1)); //  + new Date().getMilliseconds().toFixed(1));
    bc.postMessage(cmdobj);
    console.log("main2 askskz: after postMessage " + performance.now().toFixed(1));


}


function askGrpData(len = 1) {

    var tmp = localStorage.getItem('tmppw');
    var sert = '';
    if (tmp)
        if (isJSON(tmp)) {
            sert = JSON.parse(tmp);
        }
    if ((!location.search.includes('map=force&pw=')) ||
        (!location.search.includes('uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t'))) {
        sert = '';
    }
    cmdobj = new Object({ //   jsonCommand({
        ObjectType: CmdType.GetLastGrpData,
        Text: "eee",
        dateleft: new Date(),
        dateright: new Date(),
        lastnmb: len,
        sertif: sert.sertif
    });

    // sendCmd(cmdobj);


    // var cmd = new Object();
    // cmd.type = "_wsocket";
    // cmd.caller = "main";
    // cmd.message = cmdobj;

    // send to websocket via worker
    cmdobj.type = "_wsocket";
    cmdobj.caller = "main";
    browserSendTime = new Date();
    browserSend_ms = performance.now(); //    new Date().getTime();
    console.log("main2 askgrp: postMessage " + performance.now().toFixed(1)); //  + new Date().getMilliseconds().toFixed(1));
    bc.postMessage(cmdobj);
    console.log("main2 askgrp: after postMessage " + performance.now().toFixed(1));


}




// ------------ подключение обработчика к тэгу Select:
// obsolete
// function mySelectFunction(name) {
//     var x = document.getElementById(name);
//     x.blur();
// }

function mySelectHandler(evt) {
    // var ddd = this.innerText;
    evt.blur();


    setmode(evt.selectedIndex);

}
//---------------------------


var e = document.documentElement;


// document.addEventListener("DOMContentLoaded", onready);


// setInterval(() => {
//     var width = document.documentElement.clientWidth; //            screen.availWidth;
//     var height = document.documentElement.clientHeight;;
//     var w_h = document.getElementById('ori');

//     // if (DEBUG)
//     if (w_h) {
//         w_h.innerText = 'w=' + width + ' h=' + height;
//     }
// }, 300);




// function setGlobalProp(prop, val) {
//     var root = document.querySelector(':root');
//     // var rootStyles = getComputedStyle(root);

//     root.style.setProperty(prop, val);
//     // var mainColor = rootStyles.getPropertyValue('--main-color');

//     // console.log(mainColor); // '#ffeead'

//     // Для обновления переменной CSS, просто вызовите метод setProperty на элементе, в котором была объявлена переменная, и передайте имя переменной в качестве первого параметра и новое значение — вторым.

//     // root.style.setProperty('--main-color', '#88d8b0');
// }

// function getGlobalProp(prop, val) {
//     var root = document.querySelector(':root');
//     // var rootStyles = getComputedStyle(root);
//     root.style.getProperty(prop);
// }



//Прокрутка wheel
function setwheel(elem) {
    if (elem.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+, Ch31+
            elem.addEventListener("wheel", onWheel);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            elem.addEventListener("mousewheel", onWheel);
        } else {
            // Firefox < 17
            elem.addEventListener("MozMousePixelScroll", onWheel);
        }
    } else { // IE8-
        elem.attachEvent("onmousewheel", onWheel);
    }
}




//  WHEEL  EVENT on 'some-table'
var wcnt = 0;

// function set_wcnt(val) {
// }

function onWheel(e) {
    e = e || window.event;

    // wheelDelta не даёт возможность узнать количество пикселей
    var delta = e.deltaY || e.detail || e.wheelDelta;
    // delta = 0 - delta;

    wcnt += -e.wheelDelta / 120;


    wcnt = wcnt < 0 ? 0 : wcnt;

    setstyle.innerText('info', wcnt);
    correct_table(wcnt);
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    return;

    var info = document.getElementById('info');
    info.innerHTML = +info.innerHTML + delta;
}

// var t_range = 100;

function correct_table(n) {
    n = n;
    var m = Math.max(0, n);

    if (t0 = document.getElementById('table0')) {
        for (i = 1; i < t0.rows.length; i++) {
            t0.rows[i].cells[0].innerText = m + i;
            // if (((i & 1) && !(n & 1)) || (!(i & 1) && (n & 1)))
            //     t0.rows[i].style.background = 'rgba(50,50,50,0.3)';
            // else
            //     t0.rows[i].style.background = '';
        }
    }
    if (t1 = document.getElementById('some-table')) {
        var rr = t1.rows;
        for (i = 1; i < t1.rows.length; i++) {
            var cells = t1.rows[i].cells;
            for (k = 0; k < cells.length; k++) {
                // t0.rows[i].cells[0].innerText = m + i;
                // row.children[]
                cells[k].innerText = 'Cell_' + (i + n).toString() + '_' + k;
            }
        }
    }
    // setstyle.innerText('info', vheight < 100 ? vheight.toFixed(1) : vheight.toFixed(0));
    // setGlobalProp('--slider-value', vheight); // set_slider();
    //
    // setGlobalProp('--slider-value', Math.min(wcnt, 100)); // set_slider();
    // return;


    var t = document.getElementsByClassName('vertslidercontainer');

    // t[0].style.setProperty('--localValue', Math.min(wcnt, 100));
    // t[0].style['--localValue'] = Math.min(wcnt, 100);



    var elem = document.querySelector('.vertslidercontainer');
    var rootStyles = getComputedStyle(elem);
    var mainColor = rootStyles.getPropertyValue('--local-Value');
    // elem.style.setProperty('--local-Value', Math.min(wcnt, 100));
    var _height = parseInt(elem.offsetHeight);
    var _delta = rootStyles.getPropertyValue('--delta-Value');
    _height -= parseInt(_delta);
    // elem.style.setProperty('--localValue', Math.min(wcnt, 100) + 'px');
    elem.style.setProperty('--localValue', Math.min((_height) * wcnt / 100, _height) + 'px');

}


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};


//вызываем в нужном месте isMobile.any() и если вернуло true, то человек пришел с мобильного устройства 

var nv = window.navigator;
var t345 = 345;