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
    GetLastGrpData: 9,
    GetNodeParams: 10,

    GetUserParams: 11
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
            // tbl.style.background = 'rgb(150,150,150';

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

        /*
        htbl.cell(0, 0).style.display = '';
        htbl.cell(0, 1).style.display = '';
        */

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


function parse_devlist(str) {
    var s1 = str.trim();

    var s2 = s1.split(',');
    for (var i = 0; i < s2.length; i++)
        s2[i] = s2[i].trim();

    return s2;

}

function limitbyuser(devs) {
    if (devs.length > 0) {
        var b = 0;


        var tmppw = localStorage.getItem('tmppw'); //last_objgrp.devlist;
        if (isJSON(tmppw)) {
            var nnn = JSON.parse(tmppw);
            if (nnn) {
                var eee = nnn.customs.devlist;
                if (eee != null)
                    if (eee.length > 0) {
                        var dev_ids = parse_devlist(eee);



                        //   var dev_ids = parse_devlist(str);

                        var devlist2 = devs.Where(x => dev_ids.includes(x.Id.toString()));

                        // var devlist2 = devlist.Where(x => devlist.includes(x.Id.toString()));
                        devlist = devlist2;
                        devs = devlist2;

                    }
            }
        }
    }

    return devs;
}




var chtypemode = 1;
let lastsavedDevicesObject = null;

function refresh_tabcontainer() {
    var devs = lastsavedDevicesObject.arrdev;
    if (chtypemode == 1)
        devs = lastsavedDevicesObject.arrdev.Where(x => x.binarytype == 0x40);
    else if (chtypemode == 2)
        devs = lastsavedDevicesObject.arrdev.Where(x => x.binarytype == 0x42);

    devs = limitbyuser(devs);

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
let vismode = 0;

function deepEqual(obj1, obj2) {
    var q1 = JSON.stringify(obj1);
    var q2 = JSON.stringify(obj2);
    var res = (q1 === q2);

    return res;

    return JSON.stringify(obj1) === JSON.stringify(obj2);
}


function fillgrp_params_feedback(obj) {
    if (!obj)
        return;
    var _t1 = performance.now();

    var idev = obj.devlist.find(x => x.Id == Id);
    if (idev) {
        lastsavedDevicesObject = new Object();
        lastsavedDevicesObject.arrdev = obj.devlist;
        init_tblfirst_tbleft();
    }
    if (tbfirst.rowCount != tbl.rowCount)
        tbl.setrows(tbfirst.rowCount);



    var lastmeasured = obj.arrgrp.sort((a, b) => Date.parse(b.mcu_datetime) - Date.parse(a.mcu_datetime));

    // tbleft.cell(0, 0).innerText = 'Устав.';
    // tbfirst.cell(0, 0).innerText = 'Уставка';
    var backcolor = 'rgb(70,70,70)';
    var color = 'rgb(230,230,230)';

    var bordercol = ' ' + 'rgb(160,160,160)';

    if (vismode == 3)
        tbl.rows.forEach(row => {
            // row.style.gridTemplateColumns = '0.4fr repeat(' + (tbl.colCount - 1).toString() + ', 1fr)';

            // row.style.gridTemplateColumns = '0.5fr repeat(' + (tbl.colCount - 1).toString() + ', 1fr)';
            // row.children[0].style.minWidth = '80px';
            row.children[0].innerText = 'xxx';
            if (tbl.rows.indexOf(row) == 0) {
                row.children[0].innerText = 'Поріг1';
                row.children[1].innerText = 'Поріг2';


                row.children[0].style.background = backcolor;
                row.children[1].style.background = backcolor;


                row.children[0].style.color = color;
                row.children[1].style.color = color;
            } else if (tbl.rows.indexOf(row) == 1) {
                row.children[0].innerText = '12';
                row.children[1].innerText = '5';

                // var gradient = 'linear-gradient(to bottom , grey, rgb(230,230,230)';
                var gradient = 'linear-gradient(to bottom , rgb(100,100,100), rgba(150, 210, 140, 0.95)';
                row.children[0].style.background = gradient;
                row.children[1].style.background = gradient;


                row.children[0].style.color = 'black';
                row.children[1].style.color = 'black';

            }
        });
    else if (vismode == 4)
        tbl.rows.forEach(row => {
            row.style.gridTemplateColumns = '0.4fr 0.4fr 0.4fr repeat(' + (tbl.colCount - 3).toString() + ', 1fr)';
            row.children[0].style.minWidth = '65px';
            row.children[1].style.minWidth = '65px';
            row.children[2].style.minWidth = '65px';
            // row.children[0].innerText = '0';

            // row.children[1].style.minWidth = '100px';
            // row.children[2].style.minWidth = '100px';
            for (i = 3; i < tbl.colCount; i++) {
                row.children[i].style.minWidth = '90px';
            }

            if (tbl.rows.indexOf(row) == 0) {
                row.children[0].innerText = 'Прилад';
                row.children[1].innerText = 'Адмін.';
                row.children[2].innerText = 'Корист.';
                row.children[3].innerText = 'Дані';
                row.children[4].innerText = 'Поріг1';
                row.children[5].innerText = 'Поріг2';

                for (i = 0; i < tbl.colCount; i++) {
                    row.children[i].style.color = color;
                    row.children[i].style.background = backcolor;
                    if (i < tbl.colCount - 1)
                        row.children[i].style.borderRight = '1px solid ' + 'rgb(90,90,90)';
                }
                var b = 0;
            } else if (tbl.rows.indexOf(row) == 1) {
                row.children[0].innerText = String.fromCodePoint(10003); //галочка
                row.children[1].innerText = String.fromCodePoint(10003); //галочка
                row.children[2].innerText = String.fromCodePoint(10003); //галочка
                // row.children[1].innerText = '12';
                // row.children[2].innerText = '5';

                // var gradient = 'linear-gradient(to bottom , grey, rgb(230,230,230)';
                var gradient = 'linear-gradient(to bottom , rgb(100,100,100), rgba(150, 210, 140, 0.95)';
                for (i = 0; i < tbl.colCount; i++) {
                    row.children[i].style.background = gradient;
                    row.children[i].style.color = 'black';
                    row.children[i].style.borderRight = '1px solid ' + bordercol;
                    if (tbl.rowCount > 2) {
                        row.children[i].style.borderRadius = '';

                    }

                    if (tbl.rowCount > 2) {
                        row.children[0].style.borderRadius = '';
                        row.children[1].style.borderRadius = '';
                        row.children[2].style.borderRadius = '';

                    }
                }
            }

        });

    if (!obj.parlist)
        return;

    var parlist = obj.parlist.Where(x => x.device_id == Id);
    if (parlist.length > 0) {
        var par = parlist[0];
        var por1 = [],
            por2 = [];

        // por1.push(5);
        por1.push(par.ak_v1);
        por1.push(par.p1_v1);
        por1.push(par.p3_v1);
        por1.push(par.gas_v1);
        por1.push(par.psk1_v1);
        por1.push(par.t1_v1);
        por1.push(par.t2_v1);
        por1.push(par.ez_v1);
        por1.push(par.p2_v1);
        por1.push(par.psk2_v1);
        por1.push(par.akz_v1);

        // por2.push(12);
        por2.push(par.ak_v2);
        por2.push(par.p1_v2);
        por2.push(par.p3_v2);
        por2.push(par.gas_v2);
        por2.push(par.psk1_v2);
        por2.push(par.t1_v2);
        por2.push(par.t2_v2);
        por2.push(par.ez_v2);
        por2.push(par.p2_v2);
        por2.push(par.psk2_v2);
        por2.push(par.akz_v2);


        var col = tbl.colCount;



        // Light = 'rgba(230, 230, 230, 0.95)';
        Light = 'rgba(150, 210, 140, 0.95)';
        // Light = 'rgba(200,230,210, 0.95)';
        var Grey = 'rgb(45,45,53)';
        var Red = 'rgba(255,70,0,0.7)'; //    'rgba(255,70,0,0.7)';

        var i = 0;
        var dev = obj.devlist.Where(x => x.Id == Id);
        if (dev.length > 0) {

            var admin_inp = 65535;
            var user_inp = 65535;


            var ainp = dev[0].inpmask; // & dev[0].inp_flags;

            var k = 2;
            var rc = tbl.rowCount;

            if (vismode == 4) {
                if (lastmeasured.length > 0) {
                    // filledit(tbl.cell(1, col - 2), 12);
                    // filledit(tbl.cell(1, col - 1), 5);
                    var j = 1;
                    var item = lastmeasured[0];

                    tbl.cell(j++, col - 3).innerText = item.csq_level.toFixed(0);
                    tbl.cell(j++, col - 3).innerText = item.ak.toFixed(2);
                    tbl.cell(j++, col - 3).innerText = item.p1.toFixed(2);
                    tbl.cell(j++, col - 3).innerText = item.p3.toFixed(0);
                    tbl.cell(j++, col - 3).innerText = item.gas.toFixed(2);
                    tbl.cell(j++, col - 3).innerText = item.psk1.toFixed(2);
                    tbl.cell(j++, col - 3).innerText = item.t1.toFixed(2);
                    tbl.cell(j++, col - 3).innerText = item.t2.toFixed(2);
                    tbl.cell(j++, col - 3).innerText = item.ukz.toFixed(2);
                    tbl.cell(j++, col - 3).innerText = item.p2.toFixed(2);
                    tbl.cell(j++, col - 3).innerText = item.psk2.toFixed(2);
                    tbl.cell(j++, col - 3).innerText = item.akext.toFixed(2);
                    //0xe23e                //0xe63f
                    // tbl.cell(j++, col - 3).innerText = idev.bitmask & 0x0001 ? 1 : '-';  //ПСК1
                    tbl.cell(j++, col - 3).innerText = idev.bitmask & 0x0002 ? 1 : '-'; //ПЗК1
                    tbl.cell(j++, col - 3).innerText = idev.bitmask & 0x0004 ? 1 : '-'; //Дв_1
                    tbl.cell(j++, col - 3).innerText = idev.bitmask & 0x0008 ? 1 : '-'; //Дв_2    
                    tbl.cell(j++, col - 3).innerText = idev.bitmask & 0x0010 ? 1 : '-'; //Дв_3
                    tbl.cell(j++, col - 3).innerText = idev.bitmask & 0x0020 ? 1 : '-'; //Дв_4
                    tbl.cell(j++, col - 3).innerText = idev.bitmask & 0x0100 ? 1 : '-'; //ПЗК2
                    // tbl.cell(j++, col - 3).innerText = idev.bitmask & 0x0200 ? 1 : '-';     //ПСК2
                    tbl.cell(j++, col - 3).innerText = idev.bitmask & 0x0010 ? 1 : '-'; //Дельта
                    tbl.cell(j++, col - 3).innerText = idev.bitmask & 0x4000 ? 1 : '-'; //Додат.поріг
                    tbl.cell(j++, col - 3).innerText = idev.bitmask & 0x8000 ? 1 : '-'; //Живл.220
                }





                tbl.cell(1, col - 2).innerText = 12;
                tbl.cell(1, col - 1).innerText = 5;
            }



            por1.forEach(elem => {
                if (k < rc) {
                    if (vismode == 4) {
                        tbl.row(k).style.gridTemplateColumns = 'repeat(0.4fr,3) repeat( 1fr, 3)';
                        tbl.cell(k, 1).style.display = '';
                        // tbl.cell(k, 3).style.fontStyle = 'oblique';
                    }
                    for (n = 0; n < tbl.colCount; n++) {

                        tbl.cell(k, n).style.background = Light;
                        tbl.cell(k, n).style.borderRadius = '';
                        tbl.cell(k, n).style.borderRight = '1px solid ' + bordercol;
                    }

                    // tbl.cell(k, col - 2).style.borderRight = '1px solid' + bordercol;
                    // tbl.cell(k, 0).style.borderRight = '1px solid' + bordercol;
                    if ((ainp & (1 << i)) || (vismode == 4)) {

                        if (vismode == 4) {
                            var val = por1[i] < 10 ? por1[i].toFixed(2) : por1[i];
                            filledit(tbl.cell(k, col - 2), val);
                            var valm = por2[i] < 10 ? por2[i].toFixed(2) : por2[i];
                            filledit(tbl.cell(k, col - 1), valm);
                        } else {
                            if (por1[i] < -999)
                                tbl.cell(k, col - 2).innerText = '---';
                            else
                                tbl.cell(k, col - 2).innerText = por1[i] < 10 ? por1[i].toFixed(2) : por1[i];

                            if (por2[i] < -999)
                                tbl.cell(k, col - 1).innerText = '---';
                            else
                                tbl.cell(k, col - 1).innerText = por2[i] < 10 ? por2[i].toFixed(2) : por2[i];
                        }


                        if (vismode == 4) {
                            fillcheckbox(tbl.cell(k, 0), ainp & (1 << i));
                            fillcheckbox(tbl.cell(k, 1), admin_inp & (1 << i));
                            fillcheckbox(tbl.cell(k, 2), user_inp & (1 << i));


                            //old variant
                            // tbl.cell(k, 0).innerText = ainp & (1 << i) ? 1 : 0;
                            // tbl.cell(k, 0).style.background = Light;
                        }
                        k++;
                    }
                }

                i++;
            });



            //discret flags
            // var dinp = item.bit_flags & dev.bitmask & 0xe63f;
            var dinp = dev[0].bitmask & 0xe23e; //0xe63f;

            var admin_bit = 65535;
            var user_bit = 65535;

            // if (dinp)
            //     nodealarm = true;

            i = k;

            // var arr = [0, 1, 2, 3, 4, 5, 9, 10, 13, 14, 15];   //0xe63f
            var arr = [1, 2, 3, 4, 5, 9, 13, 14, 15]; //0xe23e



            function fillcheckbox(vcell, mmm) {
                var input = document.createElement('input');
                input.name = 'name11';
                input.type = 'checkbox';
                input.className = "checkbox-class-name";
                input.checked = mmm == 0 ? false : true;

                // var vcell = tbl.cell(tbl.rowCount - 1, 0);
                if (vcell.childElementCount == 0) {
                    vcell.innerText = '';
                    vcell.appendChild(input);
                }
            }















            function filledit(vcell, mmm) {
                var input = document.createElement('input');
                input.name = 'name22';
                input.type = 'text';
                input.className = "number-class-name";
                input.maxLength = 12;
                input.value = mmm;

                // input.checked = mmm == 0 ? false : true;

                // var vcell = tbl.cell(tbl.rowCount - 1, 0);
                if (vcell.childElementCount == 0) {
                    vcell.innerText = '';
                    vcell.appendChild(input);
                }


                return input;

            }




            arr.forEach(j => {

                if (i < tbl.rowCount) {


                    if ((dev[0].bitmask & 0xe23e & (1 << j)) && (vismode == 3)) {
                        // tbl.row(i).removeChild(tbl.row(i).lastChild);
                        tbl.cell(i, col - 1).style.display = 'none';
                        tbl.row(i).style.gridTemplateColumns = '1fr';
                        tbl.cell(i, 0).innerText = (dinp & (1 << j)) ? 'Активний' : '-';
                        tbl.cell(i, 0).style.background = Light;
                        i++;

                    } else if (vismode == 4) {
                        // tbl.cell(i, col - 2).style.background = (dinp & (1 << j)) == 0 ? 'white' : 'red';
                        tbl.cell(i, col - 2).innerText = (dinp & (1 << j)) ? 'Активний' : '-';
                        // tbl.cell(i, col - 1).innerText = (dinp & (1 << j)) != 0 ? 'Активний' : '-';
                        tbl.cell(i, col - 1).style.display = 'none';
                        tbl.row(i).style.gridTemplateColumns = '0.4fr 0.4fr 0.4fr 1fr 2fr';

                        for (n = 0; n < tbl.colCount; n++) {
                            if (n < (tbl.colCount - 1))
                                tbl.cell(i, n).style.display = '';
                            tbl.cell(i, n).style.background = Light;
                            tbl.cell(i, n).style.borderRadius = '';
                            // if (n == 1)
                            //     tbl.cell(i, n).style.display = 'none';
                            if (n < tbl.colCount - 1)
                                tbl.cell(i, n).style.borderRight = '1px solid ' + bordercol;
                        }


                        // tbl.cell(i, col - 2).style.color = 'black';
                        // tbl.cell(i, col - 2).style.borderRight = '1px solid ' + bordercol;

                        // tbl.cell(i, 3).style.fontStyle = 'oblique';

                        if (vismode == 4) {
                            fillcheckbox(tbl.cell(i, 0), dinp & (1 << j));
                            fillcheckbox(tbl.cell(i, 1), admin_inp & (1 << j));
                            fillcheckbox(tbl.cell(i, 2), admin_bit & (1 << j));
                            // filledit(tbl.cell(i, 3), 3);

                            // tbl.cell(i, 0).style.borderRight = '1px solid ' + bordercol;
                        }

                        i++;
                    }


                }

            });




            if (false) {
                arr.forEach(j => {

                    if (i < tbl.rowCount) {
                        if (((vismode == 3) && (dev[0].bitmask & 0xe63f & (1 << j))) || (vismode == 4)) {
                            // tbl.cell(i, col - 2).style.background = (dinp & (1 << j)) == 0 ? 'white' : 'red';
                            tbl.cell(i, col - 2).innerText = (dinp & (1 << j)) ? 'Активний' : '-';
                            tbl.cell(i, col - 1).innerText = (dinp & (1 << j)) != 0 ? 'Активний' : '-';


                            for (n = 0; n < tbl.colCount; n++) {


                                tbl.cell(i, n).style.background = Light;
                                tbl.cell(i, n).style.borderRadius = '';
                                if (n == 1)
                                    tbl.cell(i, n).style.display = 'none';

                            }


                            // tbl.cell(i, col - 2).style.color = 'black';
                            tbl.cell(i, col - 2).style.borderRight = '1px solid ' + bordercol;



                            if (vismode == 4) {
                                fillcheckbox(tbl.cell(i, 0), dinp & (1 << j));
                                tbl.cell(i, 0).style.borderRight = '1px solid ' + bordercol;
                            }

                            i++;
                        }


                    }

                });
            }

            // var rcw = tbl.rowCells(tbl.rowCount - 1);

            tbl.rowCells(tbl.rowCount - 1).forEach(x => {
                x.style.borderRadius = " 0px 0px 10px 10px";


            });


            // tbl.cell(tbl.rowCount - 1, 0).style.borderRadius = " 0px 0px 10px 10px";
            // tbl.cell(tbl.rowCount - 1, col - 1).style.borderRadius = " 0px 0px 10px 10px";
            // tbl.cell(tbl.rowCount - 1, col - 2).style.borderRadius = " 0px 0px 10px 10px";




            //+++++++++++++++++   R E P L A C E !!! +++++++++++++++++++++++++
            { //replace last cell with select
                // replace:  Varian1.
                // var chng = htbl.row(1).children[3];
                // chng.replaceWith(document.getElementById('itp'));
                //
                /*********** or replace: Variant2   */
                // htbl.row(0).children[htbl.colCount - 1].replaceWith(document.getElementById('itp'));
                // htbl.row(0).children[0].replaceWith(document.getElementById('itp'));

                /************ or replace: Variant3   */
                // htbl.row(1).insertBefore(document.getElementById('itp'), child);
                // htbl.row(1).removeChild(child);
                //----------------------------------------------------------------
            }

            vissav = vismode;
            if (vismode == 4) {

                var input = document.createElement('input');
                input.name = 'name11';
                input.type = 'checkbox';
                input.className = "checkbox-class-name";
                input.checked = true;

                // var children = 
                // var vcell = tbl.cell(tbl.rowCount - 1, 0);
                // if (vcell.childElementCount == 0) {
                //     vcell.innerText = '';
                //     vcell.appendChild(input);
                //     // tbl.cell(tbl.rowCount - 1, 0).innerText = '';
                //     // tbl.cell(tbl.rowCount - 1, 0).appendChild(input);
                // }

                // tbl.cell(tbl.rowCount - 1, 0).replaceWith(input);


                //     <div>
                //     <input class='chkb' type="checkbox" id='scales0' name="scales0" checked>
                //     <label id=lb0 for="scales0">Scales</label>
                // </div>

            }









            var dummyu = 789;
        }

    }

}



var vissav = -1;


function fillgrp(obj) {
    if (!obj)
        return;
    var _t1 = performance.now();

    var bbb = obj.devlist.find(x => x.Id == Id);
    if (bbb) {
        lastsavedDevicesObject = new Object();
        lastsavedDevicesObject.arrdev = obj.devlist;
        init_tblfirst_tbleft();
    }


    if ((vismode == 3) || (vismode == 4)) {
        if (vissav != vismode) {
            // vissav = vismode;
            fillgrp_params_feedback(obj);
        }
        colsav = tbl.colCount;
        return;
    }
    vissav = vismode;

    last_objgrp = obj;

    var otype = obj.ObjectType;


    if (otype == CmdType.GetNodeData) {
        var t = 6789;
    }

    var mass = obj.arrgrp.Where(x => x.device_id == Id).
        sort((a, b) => Date.parse(b.mcu_datetime) - Date.parse(a.mcu_datetime));

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
    } else if (!needrefresh) {
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
        } else if (mass.length > tbl.colCount) {
            needrefresh = true;
            tbl.setColumns(Math.min(mass.length, tbl.maxcolCount));
        }
    }



    if (tbfirst.rowCount != tbl.rowCount)
        tbl.setrows(tbfirst.rowCount);

    var col = 0;
    if (tbl && needrefresh) {

        var nodealarm = false;

        //коррекция ошибки mcu_datetime '2023'
        if (false) {
            for (var m = 0; m < mass.length; m++) {
                var dt = Date.parse(mass[m].mcu_datetime);
                var ee = new Date(dt);
                if (ee.getFullYear() > 2022) {
                    ee.setYear(2022);

                    var servdt = new Date(Date.parse(mass[m].server_datetime));

                    if (ee.getDate() < servdt.getDate()) {
                        ee.setDate(servdt.getDate());
                        ee.setMonth(servdt.getMonth());
                    }

                    var options = { year: 'numeric', day: 'numeric', month: 'numeric' };
                    // document.getElementById('vdgdate').innerText = dt.toLocaleDateString('ua-Ua', options) + ' ' + dt.toLocaleTimeString(); // + '  ' + 

                    mass[m].mcu_datetime = ee.getFullYear() + '-' + (ee.getMonth() < 10 ? '0' : '') + ee.getMonth() + '-' + ee.getDate() + 'T' +
                        ee.toLocaleTimeString();
                }
            }
        }


        var vmass = mass.sort((a, b) => Date.parse(b.mcu_datetime) - Date.parse(a.mcu_datetime));
        vmass.forEach(item => {
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
                var yy = item.mcu_datetime.slice(2, 4);
                var mm = item.mcu_datetime.slice(5, 7);
                var dd = item.mcu_datetime.slice(8, 10);


                if (true) {
                    var imonth = parseInt(mm);

                    var arr = ['0', 'січ', 'лют', 'бер', 'кві', 'тра', 'чер', 'лип', 'сер', 'вер', 'жов', 'лис', 'гру']

                    mm = arr[imonth];

                }

                var BorderColour = 'rgba(140,140,140,0.33)';

                var tim = item.mcu_datetime.slice(11, 16); //    (11, 20);
                var dt_string = dd + ' ' + mm + ' ' + tim;
                // tbl.cell(i, col).style.color = 'rgb(0,220,220)';
                if (i == 0) //andrew_mode
                {
                    tbl.cell(i, col).style.background = '#b8b8b8db'; //    Light;
                    tbl.cell(i, col).style.color = 'black';
                    // tbl.cell(i, col).style.background = '#bbbbbb77';//    Light;
                    // tbl.cell(i, col).style.color = 'rgb(220,220,220)';
                    tbl.cell(i, col).style.borderRight = '1px solid ' + BorderColour;
                }
                tbl.cell(i++, col).innerText = dt_string;

                // var dt_string = dd + '.' + mm + ' ' + "<span style='color:white'>" + tim + '</span>';
                // tbl.cell(i++, col).innerText = dt_string; //item.mcu_datetime.replace('T', ' ').substr(5, 30);

                // if (!lastsavedDevicesObject)
                //     return;
                // var _devs = lastsavedDevicesObject.arrdev.Where(x => x.Id == Id);
                // var _devs = obj.devlist.Where( x=> x.Id == Id);
                var _devs = obj.devlist.Where(x => x.Id == Id);
                var dev = null;
                if (_devs.length > 0)
                    dev = _devs[0];

                var ainp = item.inp_flags & dev.inpmask & 0x7ff;
                if (ainp)
                    nodealarm = true;


                var avalues = ['dummy'];
                avalues.push(item.ak);
                avalues.push(item.p1);
                avalues.push(item.p3);
                avalues.push(item.gas);
                avalues.push(item.psk1);
                avalues.push(item.t1);
                avalues.push(item.t2);
                avalues.push(item.ukz);
                avalues.push(item.p2);
                avalues.push(item.psk2);
                avalues.push(item.akext);

                // GSM row
                tbl.cell(i, col).style.color = 'black';
                tbl.cell(i, col).style.background = Light;
                tbl.cell(i, col).style.background = 'linear-gradient(to bottom, rgb(150,150,150),rgb(230,230,230))';
                // tbl.cell(i, col).innerText = (item.csq_level * 100 / 31).toFixed(0);
                tbl.cell(i, col).innerText = item.csq_level;
                tbl.cell(i, col).style.borderRight = '1px solid ' + BorderColour;

                //other rows
                var rr = 2;
                for (; i <= 12; i++) {
                    // if (i > 0)
                    //     tbl.cell(i, col).style.className = 'tmpdatacell';
                    var amask = dev.inpmask & (1 << (i - 1)) & 0x7ff;
                    if (amask) {
                        tbl.cell(rr, col).style.color = 'black';
                        tbl.cell(rr, col).style.background = (ainp & (1 << (i - 1))) == 0 ? Light : Red;
                        var value = avalues[i];

                        // tbl.cell(i, col).innerText = value < 10 ? value.toFixed(1) : value.toFixed(0);
                        var aval = Math.abs(value);
                        if (value < -999.0)
                            tbl.cell(rr, col).innerText = '-';
                        else
                            tbl.cell(rr, col).innerText = (aval < 10) && (aval > 0) ? value.toFixed(2) :
                                (aval < 19.95 ? value.toFixed(1) : value.toFixed(0));
                        // tbl.cell(i, col).style.borderRight = '1px solid rgb(190,190,190)';
                        tbl.cell(rr, col).style.borderRight = '1px solid ' + BorderColour;
                        rr++;
                    }
                }

                //discret flags
                var dinp = item.bit_flags & dev.bitmask & 0xe23e;
                if (dinp)
                    nodealarm = true;

                i = rr;

                var arr = [0, 1, 2, 3, 4, 5, 9, 10, 13, 14, 15];

                arr.forEach(k => {
                    if (dev.bitmask & 0xe23e & (1 << k)) {
                        tbl.cell(i, col).style.background = (dinp & (1 << k)) == 0 ? Light : Red;
                        tbl.cell(i, col).innerText = (dinp & (1 << k)) != 0 ? 'Аварія' : 'Норма';
                        tbl.cell(i, col).style.color = 'black';
                        // tbl.cell(i, col).style.borderRight = '1px solid rgb(190,190,190)';
                        tbl.cell(i, col).style.borderRight = '1px solid ' + BorderColour;
                        tbl.cell(i, col).style.display = '';
                        i++;
                    }
                    k++;


                });

                tbl.cell(tbl.rowCount - 1, col).style.borderRadius = " 0px 0px 10px 10px";

            }
            col++;


            var div = document.getElementById('led');
            if (div) {
                if (nodealarm)
                    div.className = 'redled';
                else
                    div.className = 'greenled';
            }
        });
    }
    var _t2 = performance.now();
    console.log('grp: ' + (_t2 - _t1).toFixed(1) + ", col= " + col + '    xcnt = ' + xcnt++);
}

var xcnt = 0;



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
                    if (ev.data.includes(mydescription) || ev.data.includes('all=')) {
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
                            case CmdType.GetUserParams:
                                {
                                    var zdummy = 444;



                                }
                                break;

                            case CmdType.GetDevices:
                                lastsavedDevicesObject = obj;
                                last_arrdev = obj.arrdev;
                                var mydev = obj.arrdev.Where(x => x.Id == Id);

                                var dev = mydev[0];
                                if (dev) {
                                    if (a1 = document.getElementById('a1')) {
                                        // a1.innerHTML = "<div>inv# " + dev.inventory_name + ',' +
                                        var _name = dev.description == 'надо_редактировать' ? dev.description + '_id' + Id : dev.description;
                                        // a1.innerHTML = "<div >" + dev.inventory_name + ',' +
                                        //     "<span style='font-size:20px;padding-left:20px;color:white;'>" + _name + "</span></div>";
                                        var bbb = '';
                                        // if (dev.inventory_name)
                                        //     bbb = dev.inventory_name.length > 0 ? "<span style=padding-left:10px;>" + dev.inventory_name + "</span>" : '';
                                        if (dev.Identifier)
                                            bbb = "<span style='padding-left:10px; font-size:18px;'>" + '  #' + dev.Identifier + "</span>"

                                        a1.innerHTML = "<div style='font-size:16px;'>" + "<span style='font-size:19px;padding-left:0px; text-align:left; margin-left:0px; color:white;'>" + _name + "</span>" +
                                            bbb + "</div>";


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

                            // case CmdType.GetLastGrpData:
                            case CmdType.GetNodeData:
                                var _t1 = performance.now();
                                // console.log('tmpgrp.js: before fillgrp() t=' + myperf());
                                // if (dev)
                                // if (lastsavedDevicesObject)
                                if (obj.devlist.length > 0) {
                                    if (obj.arrgrp.Where(x => x.device_id == Id).length > 0)
                                        fillgrp(obj);
                                }
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

var Tparam;
var Id;
var passw;

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
htbl.cell(0, 0).style.display = 'none';
htbl.cell(0, 1).style.display = 'none';
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
    htbl.row(0).children[htbl.colCount - 1].replaceWith(document.getElementById('doubleitp'));
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

var textnames = ['Дата та час приладу', //полные названия  
    'Aкумулятор, В',
    'P1, кгс/см2',
    'P3, мм.вод.ст.',
    'Загазованість, % об.',
    //
    'ПСК1, % об.',
    'Tемпература1, °С',
    'Tемпература2, °С',
    'Езахисту, В',
    //
    'P2, кгс/см2',
    'ПСК2, % об.',
    'Aкумулятор зов., В',
    '--',
    //
    '--',
    '--',
    '--',
    '--',

    ///////////////////////////////

    'ПСК1', //f0
    'ПЗК1', //f1
    'Двері_1', //f2
    'Двері_2', //f3
    'Двері_3', //f4
    'Двері_4', //f5
    '--', // f6
    '--', // f7
    '--', // f8
    'ПЗК2', //f9
    'ПСК2', //f10
    '--', // f11
    '--', // f12
    'Дельта', //f13
    'Додатковий поріг', //f14
    'Живлення U220', //f15
];

var textnames_2 = ['Дата',
    'AK, В',
    'P1, кгс',
    'P3, мм',
    'Газ, %',
    //
    'ПСК1',
    'T1, °С',
    'T2, °С',
    'Eзах, В',
    //
    'P2, кгс',
    'ПСК2',
    'AKз, В',
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
    '--', // f6
    '--', // f7

    '--', // f8
    'ПЗК2', //f9
    'ПСК2', //f10
    '--', // f11

    '--', // f12
    'Дельта', //f13
    'Д.пор', //f14
    'U220', //f15
];



// const grpBits = ['ПСК1', 'ПЗК1', 'Дв1', 'Дв2', 'Дв3', 'Дв4', 'bit6', 'bit7', 'bit8', 'ПЗК2', 'ПСК2', 'bit11', 'bit12', 'Дельта', 'Д.пор', 'U220'];



function getbitCount(value) {
    var cnt = 0;
    for (i = 0; i < 16; i++) {
        if (value & (1 << i))
            cnt++;
    }
    return cnt;
}

function init_tblfirst_tbleft(firsttime = false) {
    var rowamount = 1; //textnames.length; // 8;
    var mask32 = 0;
    if (lastsavedDevicesObject) {
        var dev = lastsavedDevicesObject.arrdev.find(x => x.Id == Id);
        if (dev) {

            var abits = getbitCount(dev.inpmask & 0x07ff);
            var dbits = getbitCount(dev.bitmask & 0xe23e);
            rowamount = 1 + 1 + getbitCount(dev.inpmask & 0x07ff) + getbitCount(dev.bitmask & 0xe23e);
            // var fff = dev.bitmask << 16;

            mask32 = ((dev.bitmask << 16) & 0xe23e0000) | (dev.inpmask & 0x07ff);
            if (vismode == 4) {
                rowamount = 1 + 1 + getbitCount(0x07ff) + getbitCount(0xe23e);
                mask32 = 0xe23e0000 | (0x07ff);
            }
            // mask32 = ((dev.bitmask << 16) & 0xffff0000) | (dev.inpmask & 0xffff);
            var dummy7 = 7;
        }
    }




    // длинная левая таблица с названиями параметров tbfirst
    var names = [textnames[0]];
    if ((vismode == 3) || (vismode == 4)) {
        names = ['Уставка'];
    }
    names.push('Рівень GSM');

    for (i = 0; i < 32; i++) {
        if ((mask32 & (1 << i)) != 0)
            names.push(textnames[i + 1]);
    }
    // var tbfirst = new jsTable('fff', params.rows, 1, 'ftable');
    if (!tbfirst) {
        tbfirst = new jsTable('fff', rowamount, 1, 'ftable', 'row', 'tmpgridsquare');
        tbfirst.style.marginRight = '3px';
        tbfirst.style.cursor = 'pointer';
        // tbfirst.style.minWidth = '10vw';
        tbfirst.cell(0, 0).addEventListener('click', toggle_sizeinfo);
    }



    tbfirst.setrows(rowamount);
    for (i = 0; i < rowamount; i++) {
        var icell = tbfirst.cell(i, 0);
        icell.innerText = names[i]; //textnames[i];

        // tbleft.cell(i, 0).style.width = '20px';
        icell.style.minWidth = _firstminwidth;
        icell.style.paddingLeft = _firstpadddingleft;
        icell.style.textAlign = 'left';

        icell.style.color = 'rgb(0,220,220)'; //    i == 0 ? 'cyan' : 'rgb(100,180,180)';

        var istyle = tbfirst.cell(i, 0).style;
        // istyle.lineHeight = _lineheight;
        istyle.fontSize = _fontsize;
        if (i == 0)
            icell.style.color = 'rgb(200,200,200)';
    }




    // короткая левая таблица  tbleft
    names = [textnames_2[0]];
    if ((vismode == 3) || (vismode == 4)) {
        names = ['Устав.'];
    }
    names.push('GSM');
    for (i = 0; i < 32; i++) {
        if ((mask32 & (1 << i)) != 0)
            names.push(textnames_2[i + 1]);
    }

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
        icell.innerText = names[i]; //textnames_2[i];
        // tbleft.cell(i, 0).style.width = '20px';
        icell.style.minWidth = _leftwidth;
        icell.style.textAlign = 'left';
        icell.style.paddingLeft = '8px';
        icell.style.color = 'rgb(0,220,220)'; //    i == 0 ? 'cyan' : 'rgb(100,180,180)';

        var istyle = tbleft.cell(i, 0).style;
        // istyle.lineHeight = _lineheight;
        istyle.fontSize = _fontsize;
        if (i == 0)
            icell.style.color = 'rgb(200,200,200)';
    }

    //  в первый раз
    if (firsttime) {
        if (div = document.getElementById('a1'))
            div.innerText = 'Id = ' + Id;
        if (div = document.getElementById('a4'))
            div.innerText = '- дані оновлюються...';
    }


}


init_tblfirst_tbleft(true);


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

if (true) { // (!params) {

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
    type: '_wsocket', //                  'nodedata', //           '_wsocket',
    caller: 'node',
    ObjectType: CmdType.GetNodeData,
    // devnumbers: [],
    id: Id, //   myid,
    description: mydescription,
    newcount: 4, // new_count,
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



function refresh_data() {
    var ind = document.getElementById('itp').selectedIndex;

    if (ind < 4) {
        var wcnt = 1;
        if (ind == 1) wcnt = 10;
        else if (ind == 2)
            wcnt = 50;
        else if (ind == 3)
            wcnt = 200;



        var cmdobj = {
            type: '_wsocket',
            caller: 'node',
            ObjectType: CmdType.GetNodeData,
            id: Id, //myid,
            description: mydescription,
            newcount: wcnt,
            sertif: sert.sertif
        }

        browserSendTime = new Date();
        browserSend_ms = performance.now();
        send_ms_flag = true;
        bc.postMessage(cmdobj);
        console.log('----------------------- onwinfocus()');
    }
}



function onwinfocus() {
    refresh_data();
}

function onwinblur() {

}





window.onload = (() => {

    var nav = window.navigator.userAgent.includes('Mobile');
    if (!nav) {
        var pc_color = getrootProp('--pc-background');
        setGlobalProp('--common-background', pc_color);
    }


    if (tmp = localStorage.getItem('tmppw')) {
        var sert = '';

        if (isJSON(tmp)) {
            sert = JSON.parse(tmp);
            var user = sert.iuser;

            var seldiv = document.querySelector('#itp');

            if (seldiv = document.querySelector('#itp')) {
                seldiv.selectedIndex = 0;
            }

            if ((user.login != 'user1') && (user.login != 'user5')) {
                // x.style.display = 'block';
                if (seldiv) {
                    var opt = seldiv.options;
                    var one = Array.from(opt).find(x => x.innerText.includes('лаштув'));
                    // var ttt = seldiv.options.item(seldiv.options.length - 1);
                    // var nlast = seldiv.childElementCount;
                    var nlast = Array.from(seldiv.children).find(x => x.innerText.includes('Налаштування'));
                    if (nlast) {
                        // seldiv.options[nlast - 1].remove();
                        seldiv.removeChild(nlast);
                    }
                    // one.disabled = true;
                    var e = 3;
                }

            }



        }
    }
    send_ms_flag = true;
    bc.postMessage(cmdobj);
    window.onfocus = onwinfocus;
    window.onblur = onwinblur;

    setTimeout(() => {
        if (tbl.rowCount < 2)
            refresh_data();
    }, 180);
});







on_resize();

console.log('tmpgrp.js: after onresize=' + myperf());


function selperiod(evt) {



}


let usermenu = false;

function onselmenu(evt) {
    usermenu = !usermenu;
    fillgrp(last_objgrp);
    // refresh_data();
}





function selhandler(evt) {
    // var ddd = this.innerText;
    var ind = evt.selectedIndex;
    var option = evt.selectedOptions[0];
    // set_tblRowAmount(1 + ind * ind * 3);
    vismode = 0;
    var new_count = 1;
    switch (ind) {
        case 0:
            new_count = 1;
            break;
        case 1:
            new_count = 10;
            break;
        case 2:
            new_count = 50;
            break;
        case 3: // Параметри вузла
            {
                new_count = 200;
                // vismode = 4;
                break;


            }
        case 4: // Параметри  (вузла)
            {
                new_count = 2;
                vismode = 3;
                break;
            }
        case 5: // Налаштування параметрів або архів
        case 6: // Налаштування параметрів або архів
            {
                if (evt.options[ind].value.includes('Налаштування')) {
                    new_count = 6;
                    vismode = 4;
                } else if (evt.options[ind].value.includes('Архів')) {
                    var t = 0;
                    evt.selectedIndex = 0;

                    bc.postMessage('archive=close()');
                    ewin = window.open('../archive/archive.html');
                }
                break;
            }

        case 33:
            // new_count = 64;
            var eee = evt.options;
            if (eee[0].innerText.includes('Поточні')) {

                eee[0].label = '• Архів';

                eee[1].label = '• за добу';
                eee[2].label = '• за інтервал';
                eee[3].label = '• Поточні дані';

            } else {
                eee[0].label = '• Поточні дані';

                eee[1].label = '• 10 останніх записів';
                eee[2].label = '• 50 останніх записів';
                eee[3].label = '• Архів';

            }



            eee.selectedIndex = 0;
            var r = 0;

            break;



        default:
            new_count = 128;
            break;

    }

    // tbl.setColumns(new_count);


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

    /*
    if ((vismode == 3) || (vismode == 4)) {
        var cmdobj = {
            type: '_wsocket',
            caller: 'node',
            ObjectType: CmdType.GetNodeParams,
            id: myid,
            description: mydescription,
            newcount: new_count,
            sertif: sert.sertif
        }
 
        browserSendTime = new Date();
        browserSend_ms = t1; //performance.now(); //    new Date().getTime();
        send_ms_flag = true;
        // bc.postMessage(cmdobj);
    }
    else {
 
        */

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
        case 'Дані ГРП':
            {
                // e.stopPropagation();
                // e.currentTarget.innerText = 'Сторінка у розробці';
                // var cc = e.currentTarget;
                // setTimeout(() => {

                //     cc.innerText = 'Дані ГРП';


                // }, 600);
                bc.postMessage('allgrp=close()');
                ewin = window.open('../allgrp/allgrp.html');
                break;
            }
        case 'Архів':
            {
                // bc.postMessage('allgrp=close()');
                // ewin = window.open('allgrp/allgrp.html');

                ////////
                // var srctext = div.innerText;
                // e.stopPropagation();
                // e.currentTarget.innerText = 'Сторінка у розробці';
                // var cc = e.currentTarget;
                // setTimeout(() => {
                //     cc.innerText = srctext;
                // }, 600);

                ////
                bc.postMessage('archive=close()');
                ewin = window.open('../archive/archive.html');

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
            // var onerecord = skzdata_of_oneDevice.sort((a, b) => Date.parse(b.mcu_datetime) - Date.parse(a.mcu_datetime))[0];
 
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


let archivemode = 0;

function showmode(event) {
    archivemode = archivemode == 0 ? 1 : 0;
    var a2 = document.getElementById('a2');
    a2.innerText = archivemode == 0 ? 'Поточні' : 'Архівні';
    // init_tblfirst_tbleft();


}