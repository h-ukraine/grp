//------------- 1st way  ---   extending Array
Array.prototype.Add = function (element) {
    this.push(element);
};

Array.prototype.Where = function (args) {
    return this.filter(args);
};

Array.prototype.Select = function (args) {
    return this.map(args);
};
//----------------------------------------------
function isJSON(str) {
    if (/^\s*$/.test(str)) return false;
    str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
    str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
    str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
    return (/^[\],:{}\s]*$/).test(str);
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

function getGlobalProp(prop, val) {
    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root, null);

    var bbb = root.style.getPropertyValue(prop);
    return rootStyles.getPropertyValue(prop);
}


function getelemProperty(elem, propname) {
    // var item = document.getElementById(elem);
    var item = document.querySelector(elem);
    // var cls = document.getElementsByClassName(classname)[0];
    var theCSSprop = window.getComputedStyle(item, null).getPropertyValue(propname);
    return theCSSprop;
}

function getrootProp(propname) {
    var root = document.querySelector(':root');
    var theCSSprop = window.getComputedStyle(root, null).getPropertyValue(propname);
    return theCSSprop;
}

function setrootProp(propname, value) {
    var root = document.querySelector(':root');
    // var rootstyle = window.getComputedStyle(root, null);
    root.setProperty(propname, value);
    var t = getrootProp(propname);
    return t;
}
const CmdType = {
    None: 0,
    SomeText: 1,
    GetLastSkzData: 2,
    GetDevices: 3,
    SaveLatLng: 4,
    Login: 5,

    GetNodeData: 8,
    GetLastGrpData: 9
}

let _starttime = new Date().getTime();

function myperf() {
    var t = new Date().getTime() - _starttime;
    // var ss = t.getSeconds();
    // var mm = t.getMilliseconds();
    // return ' ' + ss + '.' + mm;
    return (t / 1000).toFixed(3);
}
//----------------------------------------------


_vvv = ['red', 'green', 'yellow', 'blue'];
var _vcnt = 0;


let rect = new Object({
    w: 0,
    h: 0
});


var sizeinfo_enabled = false;

function toggle_sizeinfo(evt) {
    evt.stopPropagation();
    sizeinfo_enabled = sizeinfo_enabled ? false : true;
    on_resize();

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

    rect.w = ww;
    rect.h = scrollHeight;


    var elem = document.querySelector('.header');
    if (sizeinfo_enabled) {
        var clh = getrootProp('--cell-commonlineheight');
        elem.innerHTML = 'h' + h + ':: ' + document.body.clientHeight + ' ' + document.documentElement.clientHeight +
            'w' + w + ':' + screen.width + ' ' + ww + ' --c-lh=' + clh;
    } else
        elem.innerText = '';


    // if (div = document.getElementById('a4'))
    //     div.innerText = 'width = ' + rect.w + ', height=' + rect.h;

    if (rect.w / rect.h > 1.02) {
        if (tbleft)
            tbleft.style.display = 'none';
        // tbleft ? tbleft.style.display = 'none' : '';
        if (tbfirst)
            tbfirst.style.display = 'block';
        if (tbl) {
            // tbl.tabl.style.width = 'calc(98vw - ' + _firstminwidth + ')';
            tbl.style.width = 'calc(98vw - 238px)';
            // tbl.style.background = 'grey';

            var ht = '24px';
            // setGlobalProp('--cell-commonlineheight', '24px');
            // document.documentElement.style.setProperty('--cell-commonlineheight', ht);

            // tbl.rows.forEach(row => {
            //     Array.from(row.children).forEach(cell => cell.style.lineHeight = ht);
            //     // row.style.width = 'calc(98vw - 280px)';
            //     // row.style.background = 'magenta';
            // });
            // tbleft.rows.forEach(row => {
            //     Array.from(row.children).forEach(cell => cell.style.lineHeight = ht);
            // });
            // tbfirst.rows.forEach(row => {
            //     Array.from(row.children).forEach(cell => cell.style.lineHeight = ht);
            // });
        }
        htbl.row(0).style.gridTemplateColumns = ' 1fr 1fr 0.8fr'; // '242px  1fr 1fr 0.8fr';
        htbl.cell(0, 2).style.width = '';
        htbl.cell(0, 0).style.display = 'none';
        htbl.cell(0, 1).style.display = 'none';
        htbl.row(0).style.gridTemplateColumns = '1fr';
        if (c = document.getElementsByClassName('paramlabel')[0])
            c.style.marginTop = '';

    } else { //if (rect.w / rect.h < 0.98)
        if (tbfirst)
            tbfirst.style.display = 'none';
        if (tbleft)
            tbleft.style.display = 'block';
        if (tbl) {
            tbl.style.width = 'calc(98vw - 90px)';
            // tbl.style.background = 'grey';

            // var xprop = getelemProperty('tbl.cell(0, 0)', 'lineheight');

            // setGlobalProp('--cell-commonlineheight', '36px');
            // setrootProp('--cell-common-lineheight', '36px');
            document.documentElement.style.setProperty('--cell-commonlineheightt', '36px');
            var root = document.querySelector(':root');
            var result = root.getAttribute('var(--cell-common-lineheight)');


            var ee = getGlobalProp('--cell-common-lineheight');


            // var ht = '36px';
            // tbl.rows.forEach(row => {
            //     Array.from(row.children).forEach(cell => cell.style.lineHeight = ht);
            // });
            // tbleft.rows.forEach(row => {
            //     Array.from(row.children).forEach(cell => cell.style.lineHeight = ht);
            // });
            // tbfirst.rows.forEach(row => {
            //     Array.from(row.children).forEach(cell => cell.style.lineHeight = ht);
            // });
        }
        htbl.row(0).style.gridTemplateColumns = '0.5fr 0.5fr';
        htbl.cell(0, 2).style.width = '200%';

        //
        // setGlobalProp('--tbl-background1', 'grey');
        // document.documentElement.style.setProperty('--tbl-background1', 'red');

        var f = document.documentElement.style.getPropertyValue('--tbl-background1');
        var tmpcolor = getrootProp('--tbl-background1');
        var temp = getelemProperty(':root', '--tbl-background1');
        htbl.cell(0, 0).style.background = getGlobalProp('--tbl-background1'); //    
        htbl.cell(0, 1).style.background = getGlobalProp('--tbl-background1'); //    
        // $(':root').css("--tbl-background1", "#000000");
        //
        // get variable from inline style
        // element.style.getPropertyValue("--my-variable");

        // get variable from wherever
        // getComputedStyle(element).getPropertyValue("--my-variable");

        // set variable on inline style
        // element.style.setProperty("--my-variable", 4);
        // document.documentElement.style.setProperty("color-scheme", preferredTheme);

        htbl.cell(0, 0).style.display = '';
        htbl.cell(0, 1).style.display = '';

        // htbl.cell(0, 0).style.visibility = 'hidden';
        // htbl.cell(0, 1).style.visibility = 'hidden';
        // htbl.cell(0, 2).style.height = '40px';

        // htbl.row(0).style.gridTemplateRows = '1fr 1fr';

        if (c = document.getElementsByClassName('paramlabel')[0])
            c.style.marginTop = '66px';



    }


}

window.onresize = on_resize;
// console.log('tmp.js: after  onresize=' + myperf());

var chtypemode = 1;
let lastsavedDevicesObject = null;
function refresh_tabcontainer() {
    var devs = lastsavedDevicesObject.arrdev;
    if (chtypemode == 1)
        devs = lastsavedDevicesObject.arrdev.Where(x => x.binarytype == 0x40);
    else if (chtypemode == 2)
        devs = lastsavedDevicesObject.arrdev.Where(x => x.binarytype == 0x42);


    var devs = devs.sort((a, b) => a.Id - b.Id);
    var descriptions = devs.Select(x => x.description === 'надо_редактировать' ?
        x.description + '_id=' + x.Id : x.description);

    if (div = document.getElementById('tabcontainer')) {
        // var children = div.children;
        for (i = 0; i < div.childElementCount;) {
            // if (!descriptions.includes(div.children[i].innerText)) {
            if (!descriptions.includes(div.children[i].innerText)) {
                div.removeChild(div.children[i]);
            } else
                i++;
            // while (div.childElementCount > 1) {
            //     var elem = div.lastelementChild;
            //     if (!descriptions.includes(elem.innerText)) {
            //         div.removeChild(elem);
            //         //         div.removeChild(div.children[i]);
            //     }
        }

        if (chtypemode == 0) {
            var tyyyuuh = 0;
        }

        var array = Array.from(div.children).Select(x => x.innerText);
        for (i = 0; i < devs.length; i++) {
            var idescription = devs[i].description === "надо_редактировать" ? devs[i].description + '_id=' + devs[i].Id : devs[i].description;
            // if (!array.includes(devs[i].description)) {
            if (!array.includes(idescription)) {


                var cv = document.createElement('div');
                cv.className = 'swtab';
                // cv.style.width = '100px';

                // cv.innerText = devs[i].description != 'надо_редактировать' ?
                //     devs[i].description : devs[i].description + '_id=' + devs[i].Id;
                cv.innerText = idescription;

                // cv.innerHTML = "<div class='swtab' onclick='openPageUniversal()>" + devs[i].description + "</div>"
                div.appendChild(cv);
                cv.addEventListener('click', openPageUniversal);
            }

        }
    }

}

let myid = 0;
let mydescription;
const bc = new BroadcastChannel('test_channel');


var last_arrdev = null;
var last_objgrp = null;

var mass_sav = [];
var colsav = 0;

function deepEqual(obj1, obj2) {
    var q1 = JSON.stringify(obj1);
    var q2 = JSON.stringify(obj2);
    var res = (q1 === q2);

    return res;

    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function fillgrp(obj) {
    if (!obj)
        return;
    var _t1 = performance.now();


    last_objgrp = obj;

    var otype = obj.ObjectType;


    if (otype == CmdType.GetNodeData) {
        var t = 6789;
    }

    var mass = obj.arrgrp.Where(x => x.device_id == Id).
        sort((a, b) => Date.parse(b.server_datetime) - Date.parse(a.server_datetime));

    var needrefresh = false;

    if (colsav != tbl.colCount) {
        // if (colsav < tbl.colCount)
        needrefresh = true;
        colsav = tbl.colCount;
    }
    // if (mass_sav.length !== mass.length) {
    if (mass_sav.length < mass.length) {
        needrefresh = true;
        mass_sav = mass;
    } else {
        // var et1 = performance.now();
        for (m = 0; m < mass.length; m++) {
            if (!deepEqual(mass[m], mass_sav[m])) {
                needrefresh = true;
                break;
            }

        }
        // var et2 = performance.now();
        // console.log('---------------------- deepEqual... ' + (et2 - et1).toFixed(1));

    }


    var Light = 'linear-gradient(to bottom right, white, rgb(200,200,200)'; //                          
    Light = 'rgba(230, 230, 230, 0.95)';
    var Grey = 'rgb(45,45,53)';
    var Red = 'rgba(255,70,0,0.7)'; //    'rgba(255,70,0,0.7)';



    if (mass.length > 0) {
        if (mass.length < tbl.colCount) {
            needrefresh = true;
            tbl.setColumns(mass.length);
        }
        else if (mass.length > tbl.colCount) {
            needrefresh = true;
            tbl.setColumns(Math.min(mass.length, tbl.maxcolCount));
        }
    }

    var col = 0;
    if (tbl && needrefresh)

        if (tbfirst.rowCount != tbl.rowCount)
            tbl.setrows(tbfirst.rowCount);

    mass.forEach(item => {
        var i = 0;

        // setcell = (text, color) => {
        //     tbl.cell(i, 0).innerText = text;
        //     if (color)
        //         tbl.cell(i, 0).style.color = color;
        //     i++;
        // }
        // if (tbl)
        if ((i < tbl.rowCount) && (col < tbl.colCount)) {
            // ДАТА
            var yy = item.server_datetime.slice(2, 4);
            var mm = item.server_datetime.slice(5, 7);
            var dd = item.server_datetime.slice(8, 10);

            var tim = item.server_datetime.slice(11, 20);
            var dt_string = dd + '.' + mm + ' ' + tim;
            // tbl.cell(i, col).style.color = 'rgb(0,220,220)';
            if (i == 0) //andrew_mode
            {
                tbl.cell(i, col).style.background = Light;
                tbl.cell(i, col).style.color = 'black';
            }
            tbl.cell(i++, col).innerText = dt_string;

            // var dt_string = dd + '.' + mm + ' ' + "<span style='color:white'>" + tim + '</span>';
            // tbl.cell(i++, col).innerText = dt_string; //item.server_datetime.replace('T', ' ').substr(5, 30);

            // if (!lastsavedDevicesObject)
            //     return;
            // var _devs = lastsavedDevicesObject.arrdev.Where(x => x.Id == Id);
            // var _devs = obj.devlist.Where( x=> x.Id == Id);
            var _devs = obj.devlist.Where(x => x.Id == Id);
            if (_devs.length > 0)
                dev = _devs[0];

            var ainp = item.inp_flags & dev.inpmask;


            if (i > 0)
                tbl.cell(i, col).style.className = 'tmpdatacell';

            for (; i < 12; i++) {
                var amask = dev.inpmask & (1 << (i - 1));
                if (amask) {
                    tbl.cell(i, col).style.color = 'black';
                    tbl.cell(i, col).style.background = (ainp & (1 << (i - 1))) == 0 ? Light : Red;
                    var value = 0;
                    if (i == 1)
                        value = item.ak;
                    else if (i == 2)
                        value = item.p1;
                    else if (i == 3)
                        value = item.p3;
                    else if (i == 4)
                        value = item.gas;

                    else if (i == 5)
                        value = item.psk1;
                    else if (i == 6)
                        value = item.t1;
                    else if (i == 7)
                        value = item.t2;
                    else if (i == 8)
                        value = item.ukz;

                    else if (i == 9)
                        value = item.p2;
                    else if (i == 10)
                        value = item.psk2;
                    else if (i == 11)
                        value = item.akext;


                    tbl.cell(i, col).innerText = value < 10 ? value.toFixed(1) : value.toFixed(0);
                }
            }

            //discret flags
            var dinp = item.bit_flags & dev.bitmask;


            var k = 0

            if (dev.bitmask & (1 << k)) {
                tbl.cell(i, col).style.background = (dinp & (1 << k++)) == 0 ? Light : Red;
                tbl.cell(i, col).style.color = 'black';
                tbl.cell(i, col).innerText = item.flag0 ? 'Аварія' : 'Норма';
            } i++;

            if (dev.bitmask & (1 << k)) {
                tbl.cell(i, col).style.background = (dinp & (1 << k++)) == 0 ? Light : Red;
                tbl.cell(i, col).style.color = 'black';
                tbl.cell(i, col).innerText = item.flag1 ? 'Аварія' : 'Норма';
            } i++;

            if (dev.bitmask & (1 << k)) {
                tbl.cell(i, col).style.background = (dinp & (1 << k++)) == 0 ? Light : Red;
                tbl.cell(i, col).style.color = 'black';
                tbl.cell(i, col).innerText = item.flag2 ? 'Аварія' : 'Норма';
            } i++;

            if (dev.bitmask & (1 << k)) {
                tbl.cell(i, col).style.background = (dinp & (1 << k++)) == 0 ? Light : Red;
                tbl.cell(i, col).style.color = 'black';
                tbl.cell(i, col).innerText = item.flag3 ? 'Аварія' : 'Норма';
            } i++;

            if (dev.bitmask & (1 << k)) {
                tbl.cell(i, col).style.background = (dinp & (1 << k++)) == 0 ? Light : Red;
                tbl.cell(i, col).style.color = 'black';
                tbl.cell(i, col).innerText = item.flag4 ? 'Аварія' : 'Норма';
            } i++;

            if (dev.bitmask & (1 << k)) {
                tbl.cell(i, col).style.background = (dinp & (1 << k++)) == 0 ? Light : Red;
                tbl.cell(i, col).style.color = 'black';
                tbl.cell(i, col).innerText = item.flag5 ? 'Аварія' : 'Норма';
            } i++;
            //

            if (dev.bitmask & (1 << 9)) {
                tbl.cell(i, col).style.background = (dinp & (1 << 9)) == 0 ? Light : Red;
                tbl.cell(i, col).style.color = 'black';
                tbl.cell(i, col).innerText = item.flag9 ? 'Аварія' : 'Норма';
            } i++;

            if (dev.bitmask & (1 << 10)) {
                tbl.cell(i, col).style.background = (dinp & (1 << 10)) == 0 ? Light : Red;
                tbl.cell(i, col).style.color = 'black';
                tbl.cell(i, col).innerText = item.flag10 ? 'Аварія' : 'Норма';
            } i++;
            //
            if (dev.bitmask & (1 << 13)) {
                tbl.cell(i, col).style.background = (dinp & (1 << 13)) == 0 ? Light : Red;
                tbl.cell(i, col).style.color = 'black';
                tbl.cell(i, col).innerText = item.flag13 ? 'Аварія' : 'Норма';
            } i++;

            if (dev.bitmask & (1 << 14)) {
                tbl.cell(i, col).style.background = (dinp & (1 << 14)) == 0 ? Light : Red;
                tbl.cell(i, col).style.color = 'black';
                tbl.cell(i, col).innerText = item.flag14 ? 'Аварія' : 'Норма';
            } i++;

            if (i == tbl.rowCount - 1) {
                tbl.cell(i, col).style.borderRadius = " 0px 0px 10px 10px";
            }
            if (dev.bitmask & (1 << 15)) {
                tbl.cell(i, col).style.background = (dinp & (1 << 15)) == 0 ? Light : Red;
                tbl.cell(i, col).style.color = 'black';
                tbl.cell(i, col).innerText = item.flag15 ? 'Аварія' : 'Норма';
            } i++;


        }
        col++;

    });
    var _t2 = performance.now();
    console.log('grp: ' + (_t2 - _t1).toFixed(1) + ", col= " + col);
}



bc.onmessage = function (ev) {
    // console.log('tmp.js: onMessage() t=' + myperf());


    // return;

    if (ev.data.type) {
        if (ev.data.type == 'sync1000') {
            //////////////////////////// document.getElementById('a4').style.background = (_vvv[(_vcnt++) & 3]);
            // document.querySelector('.header').style.background = (_vvv[(_vcnt++) & 3]);
        }

    } else {

        try {
            if (ev.data) {

                if (ev.data.includes('close()')) {
                    if (ev.data.includes(mydescription)) {
                        document.documentElement.style.display = 'none';
                        window.top.close();
                    }
                }

                if (!document.hidden) {
                    // console.log("открыта");
                } else {
                    // console.log("закрыта");
                    return;
                }
                if (isJSON(ev.data)) {
                    var obj = JSON.parse(ev.data);
                    if (obj.type == "answer")
                        switch (obj.ObjectType) {
                            //
                            case CmdType.GetDevices:
                                lastsavedDevicesObject = obj;
                                last_arrdev = obj.arrdev;
                                var mydev = obj.arrdev.Where(x => x.Id == Id);

                                var dev = mydev[0];
                                if (dev) {
                                    if (a1 = document.getElementById('a1')) {
                                        a1.innerHTML = "<div>inv# " + dev.inventory_name + ',' +
                                            "<span style='font-size:22px;padding-left:20px;color:white;'>" + dev.description + "</span></div>";
                                    }
                                    if (a4 = document.getElementById('a4'))
                                        a4.innerText = dev.address ? dev.address : 'Id = ' + dev.Id;
                                    myid = dev.Id;
                                    mydescription = dev.description;
                                    document.title = mydescription;


                                    refresh_tabcontainer();
                                    if (lastsavedDevicesObject)
                                        if (lastsavedDevicesObject.arrdev.find(x => x.Id == Id))
                                            init_tblfirst_tbleft();
                                }
                                break;



                            case CmdType.GetLastSkzData:
                                // var _t1 = performance.now();
                                // console.log('tmpgrp.js: before fillskz() t=' + myperf());
                                // fillskz(obj);
                                // console.log('   ==> msg_len = ' + ev.data.length);
                                // console.log('tmpgrp.js:  after fillskz() t=' + myperf());
                                break;

                            case CmdType.GetLastGrpData:
                                var _t1 = performance.now();
                                // console.log('tmpgrp.js: before fillgrp() t=' + myperf());
                                // if (dev)
                                if (lastsavedDevicesObject)
                                    fillgrp(obj);
                                // console.log('   ==> msg_len = ' + ev.data.length);
                                // console.log('tmpgrp.js:  after fillgrp() t=' + myperf());
                                if (send_ms_flag) {
                                    send_ms_flag = false;
                                    console.log('________' + (performance.now() - browserSend_ms));
                                }
                                break;

                            default:



                                break;

                        }


                }


            }
        } catch (se) {
            var d = 0;
        }
    }

    // console.log(ev);
    // document.getElementById('a4').style.background = (_vvv[(_vcnt++) & 3]); //ev.data;

}
// bc.postMessage('This is a test message.');
// bc.close();




let srch = '{"' + location.search.replace("?", "");

srch = srch.replace('&', ',"');
while (srch.includes('='))

    srch = srch.replace('=', '":');
while (srch.includes('%22'))
    srch = srch.replace('%22', '"');

srch += '}';

var Tparam, Id, passw;

var ttt = isJSON(srch);

try {
    Tparam = JSON.parse(srch);
    Id = Tparam.device_Id;
    passw = Tparam.pw;
} catch { }
// .replace(',', '}{"')


//  Размеры таблиц...
var _firstminwidth = '210px';
var _firstpadddingleft = '6px';
//
var _leftwidth = '60px';
var _fontsize = '17px';
var _lineheight = '22px';



console.log('tmpgrp.js: before tables=' + myperf());


var tbfirst, tbleft, tbl;

// var params = JSON.parse(sessionStorage.getItem('alarm_tmp_params_' + Id));

var htbl = new jsTable('htl', 1, 3, 'htable');
htbl.rows.forEach(x => x.style.gridTemplateColumns = ' 1fr  1fr 0.8fr'); //'242px  1fr  1fr 0.8fr');
// htbl.cell(0, 0).style.maxWidth = '230px';
htbl.row(0).style.gridColumnGap = '0px';
// htbl.cell(0, 0).style.width = '20px';
// htbl.setcolumnProperty(htbl.colCount - 1, 'width', '10%');
// htbl.setMinWidth(['25%', '35%', '10%', '30%']);
// htbl.setMinWidth(['55%', '35%', '10%', '30%']);
// htbl.cell(1, 2).replaceWith(document.getElementById('itp'));
var child = htbl.cell(htbl.rowCount - 1, htbl.colCount - 1);
// var src = htbl.row(1).parentNode.appendChild(document.getElementById('itp'));
// htbl.row(1).parentNode.replaceChild(child, src);   
// src.parentNode.replaceChild(child, src);

//+++++++++++++++++   R E P L A C E !!! +++++++++++++++++++++++++
{ //replace last cell with select
    // replace:  Varian1.
    // var chng = htbl.row(1).children[3];
    // chng.replaceWith(document.getElementById('itp'));
    //
    /*********** or replace: Variant2   */
    htbl.row(0).children[htbl.colCount - 1].replaceWith(document.getElementById('itp'));
    // htbl.row(0).children[0].replaceWith(document.getElementById('itp'));

    /************ or replace: Variant3   */
    // htbl.row(1).insertBefore(document.getElementById('itp'), child);
    // htbl.row(1).removeChild(child);
    //----------------------------------------------------------------
}

htbl.cell(0, 0).innerText = '10.01  10:30:01';
// htbl.cell(0, 0).style.width = _firstminwidth;
htbl.cell(0, 1).innerText = '10.01  10:35:22';

// htbl.row(1).children[2].inneHTML = document.getElementById('itp').innerHTML;
// var rdfr = htbl.cell(1, htbl.colCount - 1);
// rdfr.data = 'rrr';
// htbl.cell(1, 3).innerText = "345";

var textnames = ['Дата вимірювання',
    'AK, В',
    'P1',
    'P3',
    'Gas',
    //
    'Psk1',
    'T1, °С',
    'T2, °С',
    'Ukz, В',
    //
    'P2',
    'Psk2',
    'AKx, В',
    '--',
    //
    '--',
    '--',
    '--',
    '--',

    ///////////////////////////////

    'ПСК1', //f0
    'ПЗК1', //f1
    'Дв1', //f2
    'Дв2', //f3
    'Дв3', //f4
    'Дв4', //f5
    '--',  // f6
    '--',  // f7
    '--',  // f8
    'ПЗК2', //f9
    'ПСК2', //f10
    '--',  // f11
    '--',  // f12
    'Дельта', //f13
    'Д.пор', //f14
    'U220', //f15
];

var textnames_2 = ['Дата',
    'AK, В',
    'P1',
    'P3',
    'Gas',
    //
    'Psk1',
    'T1, °С',
    'T2, °С',
    'Ukz, В',
    //
    'P2',
    'Psk2',
    'AKx, В',

    ///////////////////////////////

    'ПСК1', //f0
    'ПЗК1', //f1
    'Дв1', //f2
    'Дв2', //f3
    'Дв3', //f4
    'Дв4', //f5
    // f6
    // f7
    // f8
    'ПЗК2', //f9
    'ПСК2', //f10
    // f11
    // f12
    'Дельта', //f13
    'Д.пор', //f14
    'U220', //f15
];



const grpBits = ['ПСК1', 'ПЗК1', 'Дв1', 'Дв2', 'Дв3', 'Дв4', 'bit6', 'bit7', 'bit8', 'ПЗК2', 'ПСК2', 'bit11', 'bit12', 'Дельта', 'Д.пор', 'U220'];



function getbitCount(value) {
    var cnt = 0;
    for (i = 0; i < 16; i++) {
        if (value & (1 << i))
            cnt++;
    }
    return cnt;
}

function init_tblfirst_tbleft() {
    var rowamount = 1; //textnames.length; // 8;
    var mask32 = 0;
    if (lastsavedDevicesObject) {
        var dev = lastsavedDevicesObject.arrdev.find(x => x.Id == Id);
        if (dev) {
            rowamount = 1 + getbitCount(dev.inpmask & 0x07ff) + getbitCount(dev.bitmask & 0xe62f);
            // var fff = dev.bitmask << 16;
            mask32 = ((dev.bitmask << 16) & 0xffff0000) | (dev.inpmask & 0xffff);
        }
    }




    // самая лева таблица с названиями параметров
    // var tbfirst = new jsTable('fff', params.rows, 1, 'ftable');
    if (!tbfirst) {
        tbfirst = new jsTable('fff', rowamount, 1, 'ftable', 'row', 'tmpgridsquare');
        tbfirst.style.marginRight = '3px';
        tbfirst.style.cursor = 'pointer';
        // tbfirst.style.minWidth = '10vw';
        tbfirst.cell(0, 0).addEventListener('click', toggle_sizeinfo);
    }

    var names = [textnames[0]];

    for (i = 0; i < 32; i++) {
        if ((mask32 & (1 << i)) != 0)
            names.push(textnames[i + 1]);
    }

    tbfirst.setrows(rowamount);
    for (i = 0; i < rowamount; i++) {
        var icell = tbfirst.cell(i, 0);
        icell.innerText = textnames[i];

        // tbleft.cell(i, 0).style.width = '20px';
        icell.style.minWidth = _firstminwidth;
        icell.style.paddingLeft = _firstpadddingleft;
        icell.style.textAlign = 'left';

        icell.style.color = 'rgb(0,220,220)'; //    i == 0 ? 'cyan' : 'rgb(100,180,180)';

        var istyle = tbfirst.cell(i, 0).style;
        // istyle.lineHeight = _lineheight;
        istyle.fontSize = _fontsize;
    }


    // левая таблица

    if (!tbleft) {
        tbleft = new jsTable('sss', rowamount, 1, 'atable', 'row', 'tmpgridsquare');
        tbleft.cell(0, 0).addEventListener('click', toggle_sizeinfo);
        // var tbleft = new jsTable('sss', params.rows, 1, 'atable');
        // tbleft.style.minWidth = '10px';
        tbleft.style.marginRight = '3px';
        // tbleft.style.minWidth = '10vw';
    }
    tbleft.setrows(rowamount);
    for (i = 0; i < rowamount; i++) {
        var icell = tbleft.cell(i, 0);
        // icell.innerText = params.colnames[i];
        icell.innerText = textnames_2[i];
        // tbleft.cell(i, 0).style.width = '20px';
        icell.style.minWidth = _leftwidth;
        icell.style.textAlign = 'left';
        icell.style.paddingLeft = '8px';
        icell.style.color = 'rgb(0,220,220)'; //    i == 0 ? 'cyan' : 'rgb(100,180,180)';

        var istyle = tbleft.cell(i, 0).style;
        // istyle.lineHeight = _lineheight;
        istyle.fontSize = _fontsize;
    }


    if (div = document.getElementById('a1'))
        div.innerText = 'Id = ' + Id;
    if (div = document.getElementById('a4'))
        div.innerText = '- дані оновлюються...';


}


init_tblfirst_tbleft();


function set_tblstyles() {
    tbl.rows.forEach(row => {
        var array = Array.from(row.children); // Array from HTMLCollection
        var ind = tbl.rows.indexOf(row);
        array.forEach(cell => {
            if (ind == 0) {
                cell.className = 'tmpgridsquare';
                cell.style.color = 'rgb(0,220,220)';
                cell.style.fontSize = '16px';
            } else {
                cell.className = 'tmpdatacell'; // cell.className = 'tmpgridsquare';
                // cell.style.color = 'rgb(0,200,50)';
                // var t = icell.classList;
                // t = cell.classList;

                // var istyle = icell.style;
                // row.children[i].style.lineHeight = '30px';
                // istyle.lineHeight = _lineheight;
                cell.style.fontSize = _fontsize;

                // icell.style.border = '1px solid blue';
                // icell.style.boxShadow = '';

            }
            cell.style.minWidth = '120px';
        });
    });
}

if (true) {   // (!params) {

    var tbl = new jsTable('sss2', tbleft.rowCount, 1, 'btable', 'row', 'tmpdatacell'); //                    'tmpgridsquare');
    tbl.style.overflowX = 'auto';
    if (tbl) {
        tbl.rows.forEach(row => {
            Array.from(row.children).forEach(cell => {
                cell.className = 'tmpdatacell'; //   'tmpgridsquare';
                var t = cell.classList;
                // cell.style.lineHeight = getGlobalProp('--cell-common-lineheight') 
                // cell.style.lineHeight = 'var(--cell-common-lineheight)');
            });
        });
    }
    set_tblstyles();
}

if (false) {
    // if (true) {
    //
    var len = Math.min(params.colnames.length, params.rows);

    /// основная таблица
    // var tbl = new jsTable('sss2', params.rows, params.cols, 'btable');
    // tbl = new jsTable('sss2', params.rows, 20, 'btable', {
    //     cellclass: 'tmpgridsquare'
    // });

    var tbl = new jsTable('sss2', params.rows, params.cols, 'btable', 'row', 'tmpgridsquare');
    // tbl = new jsTable({
    //     idname: 'vvv',
    //     _rows: 8,
    //     _cols: 20,
    //     where: 'btable',
    //     rowclass: 'row'
    //     cellclass: 'tmpgridsquare',
    // });
    tbl.style.overflowX = 'auto'; //        'auto';


    // if (tbl) {
    //     tbl.rows.forEach(row => {
    //         Array.from(row.children).forEach(cell => {
    //             // cell.style.lineHeight = 'var(--cell-common-lineheight)'
    //             cell.className = 'tmpgridsquare';
    //             var t = cell.classList;
    //         });
    //     });
    // }


    // tbl.setMinWidth([200, 3, 4]);

    // tbl.style.background = 'blue';
    // tbl.tabl.style.maxWidth = 'calc(98vw - 78px)';
    // tbl.tabl.style.width = '80vw';
    // tbl.style.width = '500px';


    // var len = Math.min(params.colnames.length, params.rows);
    // for (i = 0; i < len; i++) {
    //     tbl.cell(i, 0).innerText = params.colnames[i];

    // }



    //Вариант 1.  (работает) красим колонку:
    // var icolumn = tbl.columnCells(2);
    // icolumn.forEach(cell => {
    //     cell.style.background = 'darkslategrey';
    // });

    //********************  Покраска строки и столбца - рабочая 
    // tbl.columnCells(2).forEach(cell => cell.style.background = 'red');
    // tbl.rowCells(3).forEach(cell => cell.style.background = 'green');
    //********************************************************* 

    tbl.rows.forEach(row => {

        /* for (i = 0; i < row.childElementCount; i++) {
             var icell = row.children[i]; */

        var array = Array.from(row.children); // Array from HTMLCollection
        //            array
        // acnt = 0;
        array.forEach(icell => {
            var t = icell.classList;
            icell.className = 'tmpgridsquare';
            t = icell.classList;

            var istyle = icell.style;
            // row.children[i].style.lineHeight = '30px';
            // istyle.lineHeight = _lineheight;
            istyle.fontSize = _fontsize;
            istyle.minWidth = '120px';
            // icell.style.border = '1px solid blue';
            // icell.style.boxShadow = '';
            // acnt++;

        });

        // if (tb.indexOf(row) == 0) {
        if (tbl.rows.indexOf(row) == 0) {
            array.forEach(cell => {

                cell.style.color = 'rgb(0,220,220)';
                cell.style.fontSize = '16px';
                // cell.className = 'tmpdatacell';
            });
        } else array.forEach(cell => {
            // cell.className = 'tmpgridsquare';
            // cell.style.color = 'rgb(0,200,50)';

            cell.className = 'tmpdatacell'; //             'tmpgridsquare';
        });
    });

    // Array.from(tb[0].children).forEach(cell => {
    //     cell.style.color = 'rgb(0,220,220)';
    // });


    if (true) {
        // var dev = JSON.parse(params.devjson);
        dev = params.devjson;
        // var text = dev.inventory_name + ', ...' + dev.description + '\n' +
        //     dev.address + '\n';

        // if (document.getElementById('msg')) {
        //     msg.innerText = text;
        // }
        if (a1 = document.getElementById('a1')) {
            a1.innerHTML = "<div>inv# " + dev.inventory_name + ',' +
                "<span style='font-size:22px;padding-left:20px;color:white;'>" + dev.description + "</span></div>";
        }
        if (a4 = document.getElementById('a4'))
            a4.innerText = dev.address;
        mydescription = dev.description;
        document.title = mydescription;
        // document.title.style.background = 'yellow';
        // title.style.color = 'blue';
    }

}


// First time reading data
var tmp = localStorage.getItem('tmppw');

console.log('tmpgrp.js: after localstorage=' + myperf());
var sert = '';
if (tmp)
    if (isJSON(tmp)) {
        sert = JSON.parse(tmp);
    }
console.log('tmpgrp.js: after JSON.parse=' + myperf());
if ((!location.search.includes('device_Id=')) ||
    (!location.search.includes('uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t'))) {
    sert = '';
}
var cmdobj = {
    type: 'nodedata', //           '_wsocket',
    caller: 'node',
    ObjectType: CmdType.GetNodeData,
    // devnumbers: [],
    id: Id, //   myid,
    description: mydescription,
    newcount: 1, // new_count,
    sertif: sert.sertif
}


// sendCmd(cmdobj);
// cmdobj.type = "_wsocket";
// cmdobj.caller = "main";
browserSendTime = new Date();
browserSend_ms = performance.now(); //    new Date().getTime();
var send_ms_flag = false;



console.log('tmpgrp.js: before Date()=' + myperf());

var tm = new Date().getTime();

window.onload = (() =>
    bc.postMessage(cmdobj)
);







on_resize();

console.log('tmpgrp.js: after onresize=' + myperf());

function selhandler(evt) {
    // var ddd = this.innerText;
    var ind = evt.selectedIndex;
    var option = evt.selectedOptions[0];
    // set_tblRowAmount(1 + ind * ind * 3);

    var new_count = 1;
    switch (ind) {
        case 0:
            new_count = 1;
            break;
        case 1:
            new_count = 4;
            break;
        case 2:
            new_count = 32;
            break;
        case 3:
            new_count = 64;
            break;
        case 4:
        default:
            new_count = 128;
            break;

    }

    var t1 = performance.now();
    tbl.maxcolCount = new_count > 0 ? new_count : 1;
    tbl.setColumns(new_count > 0 ? new_count : 1);
    var t2 = performance.now();
    set_tblstyles();
    var t3 = performance.now();

    fillgrp(last_objgrp);
    var t4 = performance.now();
    console.log('[setcolumns]: ' + 'set: ' + (t2 - t1).toFixed(1) + ' style:' + (t3 - t2).toFixed(1) +
        ' fill:' + (t4 - t3).toFixed(1));
    evt.blur();
    // setmode(evt.selectedIndex);


    // var obj = new Object({ type: 'node', id: myid, description: mydescription, newcount: new_count });
    // bc.postMessage(obj);

    var tmp = localStorage.getItem('tmppw');
    var sert = '';
    if (tmp)
        if (isJSON(tmp)) {
            sert = JSON.parse(tmp);
        }
    if ((!location.search.includes('device_Id=')) ||
        (!location.search.includes('uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t'))) {
        sert = '';
    }
    var cmdobj = {
        type: '_wsocket',
        caller: 'node',
        ObjectType: CmdType.GetNodeData,
        // devnumbers: [],
        id: myid,
        description: mydescription,
        newcount: new_count,
        sertif: sert.sertif
    }

    // sendCmd(cmdobj);
    // cmdobj.type = "_wsocket";
    // cmdobj.caller = "main";
    browserSendTime = new Date();
    browserSend_ms = t1; //performance.now(); //    new Date().getTime();
    send_ms_flag = true;
    bc.postMessage(cmdobj);


}

//Налаштування...
var nal = document.getElementById('anim');
nal.addEventListener('click', nalasht_handler);
tbleft.tabl.addEventListener('click', nalasht_handler);
tbfirst.tabl.addEventListener('click', nalasht_handler);


function nalasht_handler() {

    // var nal = document.getElementById('anim');
    var nal = document.querySelector('.nalasht');


    var vvprop = getelemProp('.nalasht', 'display');

    if (vvprop == 'none') {
        setelemProp('.nalasht', 'display', 'block');
        // nal.style.display = '';
        setTimeout(() => {
            nal.style.opacity = 1;
            nal.style.marginLeft = '0px';
            // fullscreen3(nal);
        }, 30);


    } else {
        // setelemProp('.nalasht', 'display', '');
        // nal.style.display = '';
        // nal.style.marginLeft = '-101vw';
        nal.style.opacity = 0;
        nal.style.marginLeft = '-101vw';
        setTimeout(() => {
            setelemProp('.nalasht', 'display', 'none');

        }, 400);
    }
}

nalasht_handler();



function openPageUniversal(e) {
    var tmaxobj = new Object({
        type: "tmax=300"
    });
    bc.postMessage(tmaxobj);
    var div = e.currentTarget;

    switch (div.innerText) {
        case 'Карта':
            {
                var mapcloseobj = new Object({
                    type: "map=close()"
                });
                bc.postMessage(mapcloseobj);
                var path = '../index2.html?map=force';
                path += '?map=force&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"';
                // var ewin = window.open('../index2.html?map=force', 'mapwindow');
                // window.name = 'ttt';
                // var ewin = window.open(path, 'mapwindow');
                // var etmp = window.open(location.href);
                var ewin = window.open(path); //, '_self'); //, 'mapwindow');
                // ewin.blur();
                // ewin.focus();
                // window.close();
                // setTimeout(() => ewin.focus(), 10);

                // function open_in_new_tab(url) {
                //     var win = window.open(url, '_blank');
                //     win.focus();
                // }
                //
                // t.href = 'http://' + location.host + '/data/index2.html';
                // t.href += '?map=force&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"';

                break;
            }
        case 'Дані':
            {
                bc.postMessage('alarms' + '=close()');

                ewin = window.open('../pagealarms/alarms.html');
                break;
            }

        default:
            // var dev = devchk.answDevices.filter(x => x.Id == Id)[0];
            // log('Click on dev.Id=' + Id + '...cnt:' + on_cnt++);
            // bc.postMessage(dev.description + '=close()');


            if (div.innerText.includes('надо_редактировать')) {
                var n = div.innerText.indexOf('=');
                if (n > 0) {
                    var sss = div.innerText.slice(n + 1);
                    if (sss) {
                        var id = parseInt(sss);
                        bc.postMessage(div.innerText + '=close()');
                        ewin = window.open('../pages/tmpgrp.html?device_Id=' + id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');
                        //
                    }
                }
            } else {
                var vvv = last_arrdev.Where(x => x.description.trim() == div.innerText);

                if (vvv && vvv.length > 0)
                    vvv = vvv[0];
                else
                    vvv = null;

                if (vvv) {
                    if (vvv.description.trim() != mydescription.trim()) {
                        bc.postMessage(div.innerText + '=close()');
                        ewin = window.open('../pages/tmpgrp.html?device_Id=' + vvv.Id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');
                    }
                }
            }

            /*
            //get last skz record for this device
            var skzdata_of_oneDevice = lastskzdata.filter(x => x.device_id == Id);
            // var onerecord = skzdata_of_oneDevice.sort((a, b) => Date.parse(b.server_datetime) - Date.parse(a.server_datetime))[0];

            // var result = skzdata_of_oneDevice[0];


            var params = new Object({
                id: on_cnt,

                rows: 0,
                cols: 1,

                colnames: ['дата', 'двері', 'U220', 'ак', 'Т1', 'Uскз', `Iскз`, 'Eктз'],
                // rows: colnames.length
                devjson: dev,
                lastdata: JSON.stringify(skzdata_of_oneDevice)

            });
            params.rows = params.colnames.length;
            sessionStorage.setItem('alarm_tmp_params_' + dev.Id, JSON.stringify(params));

            // setTimeout(() => {
            ewin = window.open('/data/pages/tmp.html?device_Id=' + dev.Id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');

            */
            break;


    }


    // var cnt = 0;
    // var aaa = setInterval(() => {

    //     if (lastsavedDevicesObject != null)
    //         bc.postMessage(lastsavedDevicesObject);
    //     if (cnt++ > 4)
    //         clearInterval(aaa);
    // }, 250);

}


let showallrows = true;
function showmode(event) {
    showallrows ^= showallrows;
    init_tblfirst_tbleft();


}