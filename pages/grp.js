//------------- 1st way  ---   extending Array
Array.prototype.Add = function(element) {
    this.push(element);
};

Array.prototype.Where = function(args) {
    return this.filter(args);
};

Array.prototype.Select = function(args) {
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
    Login: 5
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


let lastsavedDevicesObject = null;

function refresh_tabcontainer() {
    var devs = lastsavedDevicesObject.arrdev;
    var devs = devs.sort((a, b) => a.Id - b.Id);
    if (div = document.getElementById('tabcontainer')) {
        var children = div.children;
        var descriptions = devs.Select(x => x.description);
        for (i = 1; i < div.childElementCount;) {
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

        var array = Array.from(div.children).Select(x => x.innerText);
        for (i = 0; i < devs.length; i++) {
            if (!array.includes(devs[i].description)) {


                var cv = document.createElement('div');
                cv.className = 'swtab';

                cv.innerText = devs[i].description != 'надо_редактировать' ?
                    devs[i].description : devs[i].description + '_id=' + devs[i].Id;

                // cv.innerHTML = "<div class='swtab' onclick='openPageUniversal()>" + devs[i].description + "</div>"
                div.appendChild(cv);
                cv.addEventListener('click', openPageUniversal);
            }

        }


        // for (i = 0; i < devs.length; i++) {
        //     if (!array.includes(devs[i].description)) {


        //         var cv = document.createElement('div');
        //         cv.className = 'swtab';

        //         cv.innerText = devs[i].description;

        //         // cv.innerHTML = "<div class='swtab' onclick='openPageUniversal()>" + devs[i].description + "</div>"
        //         div.appendChild(cv);
        //         cv.addEventListener('click', openPageUniversal);
        //     }

        // }
    }

}


let mydescription;
const bc = new BroadcastChannel('test_channel');

bc.postMessage('ГРП' + '=close()');


var last_arrskz = null;
var last_arrdev = null;
var last_objskz = null;

var mass_sav = [];
var colsav = 0;

function deepEqual(obj1, obj2) {
    var q1 = JSON.stringify(obj1);
    var q2 = JSON.stringify(obj2);
    var res = (q1 === q2);

    return res;

    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function fillskz(obj) {
    if (!obj)
        return;
    var _t1 = performance.now();
    // last_arrskz = obj.arrskz;
    last_objskz = obj;

    var mass = obj.arrskz.Where(x => x.device_id == 33). //   Id).
    sort((a, b) => Date.parse(b.server_datetime) - Date.parse(a.server_datetime));
    var needrefresh = false;

    if (colsav != tbl.colCount) {
        // if (colsav < tbl.colCount)
        needrefresh = true;
        colsav = tbl.colCount;
    }
    if (mass_sav.length !== mass.length) {
        needrefresh = true;
        mass_sav = mass;
    } else {

        for (m = 0; m < mass.length; m++) {
            if (!deepEqual(mass[m], mass_sav[m])) {
                needrefresh = true;
                break;
            }

        }
    }


    var Light = 'linear-gradient(to bottom right, white, rgb(200,200,200)'; //                          
    Light = 'rgba(230, 230, 230, 0.95)';
    var Grey = 'rgb(45,45,53)';
    var Red = 'rgba(255,70,0,0.7)'; //    'rgba(255,70,0,0.7)';

    var col = 0;
    if (tbl && needrefresh)
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
                // var yy = item.server_datetime.slice(2, 4);
                var mm = item.server_datetime.slice(5, 7);
                var dd = item.server_datetime.slice(8, 10);

                var tim = item.server_datetime.slice(11, 20);
                var dt_string = dd + '.' + mm + ' ' + tim;
                // tbl.cell(i, col).style.color = 'rgb(0,220,220)';

                for (j = 0; j < 2; j++) {

                    if (i == 0) //andrew_mode
                    {
                        tbl.cell(i, col).style.background = Light;
                        tbl.cell(i, col).style.color = 'black';
                    }
                    var rc = tbl.rowCount;
                    if (i == 8) {
                        // tbl.cell(8, col).style.color = 'grey';
                        tbl.cell(i, col).style.className = 'tmpgridsquare';
                        tbl.cell(8, col).style.fontWeight = '400';
                        tbl.cell(8, col).style.background = 'rgb(160,160,160)';
                    }
                    tbl.cell(i++, col).innerText = dt_string;

                    // var dt_string = dd + '.' + mm + ' ' + "<span style='color:white'>" + tim + '</span>';
                    // tbl.cell(i++, col).innerText = dt_string; //item.server_datetime.replace('T', ' ').substr(5, 30);

                    if ((i % 8) != 0)
                        tbl.cell(i, col).style.className = 'tmpdatacell';



                    tbl.cell(i, col).style.color = 'black';
                    tbl.cell(i, col).style.background = item.dv_1 == 'Закр.' ? Light : Red;
                    tbl.cell(i++, col).innerText = item.dv_1 == 'Закр.' ? 'Зачинено' : 'Відчинено';

                    tbl.cell(i, col).style.color = 'black';
                    tbl.cell(i, col).style.background = item.u_220 == 'Норма' ? Light : Red;
                    tbl.cell(i++, col).innerText = item.u_220 == 'Норма' ? 'Норма' : 'Аварія';


                    tbl.cell(i, col).style.background = item.flag0 ? Red : Light;
                    tbl.cell(i, col).style.color = 'black';
                    tbl.cell(i++, col).innerText = item.ak.toFixed(2);


                    tbl.cell(i, col).style.background = item.flag1 ? Red : Light;
                    tbl.cell(i, col).style.color = 'black';

                    tbl.cell(i++, col).innerText = item.t_1.toFixed(1);


                    tbl.cell(i, col).style.background = item.flag2 ? Red : Light;
                    tbl.cell(i, col).style.color = 'black';
                    tbl.cell(i++, col).innerText = item.i_ckz > 0 ? item.i_ckz.toFixed(1) : 0;

                    tbl.cell(i, col).style.background = item.flag3 ? Red : Light;
                    tbl.cell(i, col).style.color = 'black';
                    tbl.cell(i++, col).innerText = item.i_ckz > 0 ? item.i_ckz.toFixed(1) : 0;

                    if (i == tbl.rowCount - 1) {
                        tbl.cell(i, col).style.borderRadius = " 0px 0px 10px 10px";
                    }
                    tbl.cell(i, col).style.background = item.flag4 ? Red : Light;
                    tbl.cell(i, col).style.color = 'black';
                    tbl.cell(i++, col).innerText = item.e_ktz > 0 ? item.e_ktz.toFixed(2) : 0;
                }
            }
            col++;
        });
    var _t2 = performance.now();
    console.log('skz: ' + (_t2 - _t1).toFixed(1) + ", col= " + col);

}



bc.onmessage = function(ev) {



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
                            document.documentElement.style
                                .display = 'none';
                            window.top.close();
                        }
                    }
                    if (document.hidden) {
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
                                    var mydev = obj.arrdev.Where(x => x.Id == 33); //               Id);
                                    var dev = mydev[0];
                                    if (a1 = document.getElementById('a1')) {
                                        a1.innerHTML = "<div>inv# " + dev.inventory_name + ',' +
                                            "<span style='font-size:22px;padding-left:20px;color:white;'>" + /*dev.description*/ '(id33-ГРП!)'
                                        "</span></div>";
                                    }
                                    if (a4 = document.getElementById('a4'))
                                        a4.innerText = dev.address ? dev.address : 'Id = ' + dev.Id;
                                    mydescription = "ГРП"; //dev.description;
                                    document.title = mydescription;


                                    refresh_tabcontainer();
                                    break;



                                case CmdType.GetLastSkzData:

                                    fillskz(obj);



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

srch = srch.replace(':undefined', ':"undefined"');


var Tparam, Id, passw;





var ttt = isJSON(srch);





try {
    Tparam = JSON.parse(srch);
    var Id = Tparam.device_Id;
    var passw = Tparam.pw;
} catch {}
// .replace(',', '}{"')


//  Размеры таблиц...
var _firstminwidth = '210px';
var _firstpadddingleft = '6px';
//
var _leftwidth = '60px';
var _fontsize = '17px';
var _lineheight = '22px';






var tbfirst, tbleft, tbl;

// var jmsg = sessionStorage.getItem('alarm_tmp_params_' + Id);
// var tobj = JSON.parse(jmsg);
var params = JSON.parse(sessionStorage.getItem('alarm_tmp_params_' + Id));

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

var textnames = [
    'Дата',
    'Двері_1',
    'Стан живлення',
    'Акумулятор, В',
    'Температура_1, °С',
    'Напруга СКЗ, В',
    'Струм СКЗ, А',
    'Напруга захисту, В',

    'Дата',
    'Двері_1',
    'Стан живлення',
    'Акумулятор, В',
    'Температура_1, °С',
    'Напруга СКЗ, В',
    'Струм СКЗ, А',
    'Напруга захисту, В',
    '9'
];

var textnames_2 = [
    'Дата',
    'Дв_1',
    'U220',
    'Ак, В',
    'Т1, °С',
    'Uскз, В',
    'Iскз, А',
    'Ектз, В',

    'Дата',
    'Дв_1',
    'U220',
    'Ак, В',
    'Т1, °С',
    'Uскз, В',
    'Iскз, А',
    'Ектз, В',
    '9'
];

function init_tblfirst_tbleft() {
    var rowamount = 16;
    // самая лева таблица с названиями параметров
    // var tbfirst = new jsTable('fff', params.rows, 1, 'ftable');
    tbfirst = new jsTable('fff', rowamount, 1, 'ftable', 'row', 'tmpgridsquare');
    tbfirst.style.marginRight = '3px';
    // tbfirst.style.minWidth = '10vw';
    tbfirst.cell(0, 0).addEventListener('click', toggle_sizeinfo);
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
    tbleft = new jsTable('sss', rowamount, 1, 'atable', 'row', 'tmpgridsquare');
    tbleft.cell(0, 0).addEventListener('click', toggle_sizeinfo);
    // var tbleft = new jsTable('sss', params.rows, 1, 'atable');
    // tbleft.style.minWidth = '10px';
    tbleft.style.marginRight = '3px';
    // tbleft.style.minWidth = '10vw';
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
        var Light = 'rgba(230, 230, 230, 0.95)';
        var array = Array.from(row.children); // Array from HTMLCollection
        var ind = tbl.rows.indexOf(row);
        array.forEach(cell => {
            if (ind == 0) {
                cell.className = 'tmpgridsquare';
                cell.style.color = 'black'; //         'rgb(0,220,220)';
                cell.style.fontSize = '16px';
                // cell.style.background = Light;

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

if (!params) {

    var tbl = new jsTable('sss2', 16, 1, 'btable', 'row', 'tmpdatacell'); //                    'tmpgridsquare');
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

if (params) {
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
        mydescription = "ГРП"; //dev.description;
        document.title = mydescription;
        // document.title.style.background = 'yellow';
        // title.style.color = 'blue';
    }

}

if (true) // занести только текущие данные в таблицу из SessionStorage
{
    if (params) {

        var i = 0;
        var last = JSON.parse(params.lastdata)[0];

        // function tblcell(text, color) {
        tblcell = (text, color) => {
            tbl.cell(i, 0).innerText = text;
            if (color)
                tbl.cell(i, 0).style.color = color;
            i++;
        }

        // tbl.celll(i, 0).style.minWidth = '50px';
        tblcell(last.server_datetime.replace('T', ' ').substring(5, 100).replace('-', '.'));
        // tbl.cell(i++, 0).innerText = last.server_datetime.replace('T', ' ').substring(5, 100).replace('-', '.');

        tblcell(last.dv_1, last.dv_1.includes('Закр.') ? 'lightgreen' : 'red');
        tblcell(last.u_220, last.u_220.includes('Норма') ? 'lightgreen' : 'red');

        tblcell(last.ak, last.flag0 ? 'red' : 'lightgreen');

        tbl.cell(i, 0).style.color = last.flag1 ? 'red' : 'lightgreen';
        tbl.cell(i++, 0).innerText = last.t_1;

        tbl.cell(i, 0).style.color = last.flag2 ? 'red' : 'lightgreen';
        tbl.cell(i++, 0).innerText = last.u_ckz;

        tbl.cell(i, 0).style.color = last.flag3 ? 'red' : 'lightgreen';
        tbl.cell(i++, 0).innerText = last.i_ckz;

        tbl.cell(i, 0).style.color = last.flag4 ? 'red' : 'lightgreen';
        tbl.cell(i++, 0).innerText = last.e_ktz;

    }
}

on_resize();

function selhandler(evt) {
    // var ddd = this.innerText;
    var ind = evt.selectedIndex;
    var option = evt.selectedOptions[0];
    // set_tblRowAmount(1 + ind * ind * 3);
    // var new_count = ind == 0 ? 1 : (ind * ind * ind * 4); // - tbl.colCount;
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
    // if (new_count < tbl.colCount) {
    //     var e = 0;
    // }
    var t1 = performance.now();
    tbl.setColumns(new_count > 0 ? new_count : 1);
    var t2 = performance.now();

    set_tblstyles();
    var t3 = performance.now();

    fillskz(last_objskz);
    var t4 = performance.now();


    console.log('[setcolumns]: ' + 'set: ' + (t2 - t1).toFixed(1) + ' style:' + (t3 - t2).toFixed(1) +
        ' fill:' + (t4 - t3).toFixed(1));

    evt.blur();
    // setmode(evt.selectedIndex);
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


function openPageUniversal(e) {
    var tmaxobj = new Object({
        type: "tmax=300"
    });
    bc.postMessage(tmaxobj);

    var div = e.currentTarget;

    switch (div.innerText) {
        // case 'Карта':
        //     {
        //         var mapcloseobj = new Object({
        //             type: "map=close()"
        //         });
        //         bc.postMessage(mapcloseobj);
        //         var ewin = window.open('../index2.html?map=force');
        //         break;
        //     }
        case 'Карта':
            {
                var path = '../index2.html?map=force';
                path += '?map=force&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"';
                var ewin = window.open(path, 'mapwindow');
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
                        ewin = window.open('../pages/tmp.html?device_Id=' + id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');

                    }
                }
            } else {
                var vvv = last_arrdev.Where(x => x.description == div.innerText);

                if (vvv && vvv.length > 0)
                    vvv = vvv[0];
                else
                    vvv = null;

                if (vvv) {
                    if (vvv.description != mydescription) {
                        bc.postMessage(div.innerText + '=close()');
                        ewin = window.open('../pages/tmp.html?device_Id=' + vvv.Id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');
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