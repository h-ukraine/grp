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

    if (diff > 99) {
        mode = Math.min(6, ++mode);
    } else if (diff < -99) {
        mode = Math.max(0, --mode);
    } else
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
                window.dispatchEvent(new Event('resize'));
                if (first_mode4) {
                    first_mode4 = false;
                    toMaxZoom();
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

    setmode(-1);
    // setmode(1);
    setmode(4);
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




//*****************************/ BROADCASTING AND WORKER

const bc = new BroadcastChannel('test_channel');
bc.onmessage = function (ev) {

    // console.log(ev);
    // var msg = ev.data;
    // if (ev.data.type && (ev.data.type != "sync1000")) {
    //     var proba = myGetJson(ev.data);
    // }

    msg = ev.data;
    var proba = null
    if (!msg.type) {
        msg = JSON.parse(msg); //                    myGetJson(ev.data);
    }

    // if (!ev.data.includes('sync1000')) {
    //     var proba = myGetJson(ev.data);
    // }


    switch (msg.type) {
        case "sync400":
            console.log("received: sync400");
            // if (lastsavedDevicesObject != null)
            //     bc.postMessage(lastsavedDevicesObject);

            break;

        case "sync1000":

            // console.log("received: sync1000");
            askSkzData();
            break;

        case "answer":
            if (msg.caller == 'main') {
                wrapCmd(msg);



            }

            break;

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














var tbl3 = null;

function onready() {

    var subm = document.getElementById('subm');
    subm.addEventListener('click', come_in);
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
    startup_touch('vertslider2');



    // if (div = document.getElementById('subm')) //авто переход на главную
    //     subm.click();


    if (tabl = document.getElementById('some-table')) {
        setwheel(tabl);
    }

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

    // создаем таблицу в div 'fl_table1'
    {

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

    // var worker = new Worker("js/wsworker.js");
    // worker.postMessage({ hello: 'world' });
    // worker.onmessage = function(e) {
    //     // console.log('main received - : ' + e.data);
    //     // askSkzData();
    //     // if (send_broadcast)
    //     //     send_broadcast();
    // };
    // window.dispatchEvent(new Event('resize'));
    // init_myorion();
    // refresh_objects_on_map();

}

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

var t333_cnt = 0;
var t333 = setInterval(() => {

    var dd = document.getElementById('tm300');
    if (dd) {
        dd.innerText = 10 - t333_cnt;
    }


    if ((t333_cnt++ >= 10) || docLoaded) {
        onready();
        clearInterval(t333);
        dd.innerText = '';
    }


}, 500);








let browserSendTime;
let browserSend_ms;


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



function askSkzData() {
    cmdobj = new Object({ //   jsonCommand({
        ObjectType: CmdType.GetLastSkzData,
        Text: "eee",
        // dateleft: new Date(),
        // dateright: new Date(),
        lastnmb: 4
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
    bc.postMessage(cmdobj);
}






//
function send_periodically_websocketText____old_function() {
    try {
        var txtobj = null;
        if (websocket.readyState == 1) {

            //     txtobj = new simpleTextCommand();
            //     txtobj.Text += " ... добавлено еще";
            //     txtobj.dateleft = new Date();
            //     txtobj.dateright = new Date();
            //     var str = JSON.stringify(txtobj);
            //     websocket.send(str);

            txtobj = new Object({ //   jsonCommand({
                ObjectType: CmdType.GetLastSkzData,
                Text: "eee",
                dateleft: new Date(),
                dateright: new Date(),
                lastnmb: 4
            });


            // txtobj.ObjectType = CmdType.GetLastSkzData;
            // txtobj.Text = "eee";
            // txtobj.dateleft = new Date();
            // txtobj.dateright = new Date();
            // txtobj.lastnmb = 4;

            var str = JSON.stringify(txtobj);
            browserSendTime = new Date();
            browserSend_ms = performance.now(); //    new Date().getTime();
            websocket.send(str);
        }
    } catch (ccc) {

        var d = ccc;
    }

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




function setGlobalProp(prop, val) {
    var root = document.querySelector(':root');
    // var rootStyles = getComputedStyle(root);

    root.style.setProperty(prop, val);
    // var mainColor = rootStyles.getPropertyValue('--main-color');

    // console.log(mainColor); // '#ffeead'

    // Для обновления переменной CSS, просто вызовите метод setProperty на элементе, в котором была объявлена переменная, и передайте имя переменной в качестве первого параметра и новое значение — вторым.

    // root.style.setProperty('--main-color', '#88d8b0');
}

function getGlobalProp(prop, val) {
    var root = document.querySelector(':root');
    // var rootStyles = getComputedStyle(root);
    return root.style.getPropertyValue(prop);
}



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