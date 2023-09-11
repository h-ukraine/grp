//enumeration
const CmdType = {
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
    GetDataArchive: 12
}



function deepEqual(obj1, obj2) {
    var q1 = JSON.stringify(obj1);
    var q2 = JSON.stringify(obj2);
    var res = (q1 === q2);

    return res;

    // return JSON.stringify(obj1) === JSON.stringify(obj2);
}

let DEBUG = false;
let docLoaded = false;

let isWsOpened = false;



var answDevices = [];

let lastDevicesObject = null;
let lastuserparams;
let lastgrpdata;

// document.addEventListener("DOMContentLoaded", () => {
window.onload = function () {

    docLoaded = true;

    if (true) {
        // if (location.search.includes('map=force')) {
        var nal = document.getElementById('anim');
        // nal.style.display = 'none';

        nal.style.marginTop = '-2000px';
        nalasht_handler();
        // var cls = document.querySelector('.nalasht')
        setTimeout(() => {
            // nalasht_handler();
            var nal = document.getElementById('anim');
            // nal.style.opacity = 0;
            setTimeout(() => nal.style.marginTop = '0px', 500);
        }, 500);

        // if (div = document.getElementById('anim')) {
        //     // div.style.display = 'none';
        //     div.style.marginLeft = '-101vw';
        // }
        // }

    }


    // console.log('DOM loaded:  ' + myperf()); //            new Date().getMilliseconds().toFixed(2));

    // onready();
    // console.log("  #_onready passed:  " + myperf()); //+ new Date().getMilliseconds().toFixed(2));

    if (bc) {
        var tmp = localStorage.getItem('tmppw');
        var obj;
        if (tmp)
            obj = isJSON(tmp) ? JSON.parse(tmp) : undefined;
        if (!obj) {
            // console.log("[index2]: obj tmppw undefined " + myperf());
        } else {

            if (f1 = document.querySelector('.username'))
                f1.children[1].innerText = obj.iuser.name + ' ' + obj.iuser.lastname;


            // console.log("[index2]: obj tmppw sent!!! " + myperf());
            bc.postMessage(new Object({
                type: 'totalid',
                totalid: obj.totalid
            }));

        }
    }





    // askSkzData();
    // askGrpData();



    var tmt = 150;
    if (window.navigator.userAgent.includes('Mobile')) {
        tmt = 200;

        if (div = document.querySelector('.f1')) {
            div.innerText = div.innerText.substring(div.innerText.indexOf('V'));
            div.style.display = 'none';
        }
        if (tema = document.querySelector('.f2'))
            tema.innerHTML = tema.innerHTML.replace('Тема:', '');
    }





    if (true) {
        var zzz = setInterval(() => {

            if (isWsOpened) {

                var tmp = localStorage.getItem('tmppw');
                var sert = '';
                if (isJSON(tmp)) {
                    sert = JSON.parse(tmp);
                }
                bc.postMessage(new Object({
                    type: 'wsopenack',
                    totalid: sert.totalid ? sert.totalid : -1
                }));



                if (answDevices.length == 0) {
                    var cmdobj = {
                        ObjectType: CmdType.GetDevices,
                        devnumbers: [],
                        sertif: sert.sertif
                    }

                    // sendCmd(cmdobj);
                    cmdobj.type = "_wsocket";
                    cmdobj.caller = "main";
                    browserSendTime = new Date();
                    browserSend_ms = performance.now(); //    new Date().getTime();
                    bc.postMessage(cmdobj);
                }


                if (answDevices.length > 0) // &&
                // (devchk.skzrecs.length > 0)) 
                {
                    clearInterval(zzz);
                    // console.log('------clearInterval(zzz)');
                    // refresh_objects_on_map();
                }



            }
        }, tmt);

    }


}






let mmm;

bc.onmessage = function (ev) {

    msg = ev.data;

    if (!msg.type) {
        if (isJSON(msg))
            msg = JSON.parse(msg); //                    myGetJson(ev.data);
    }



    switch (msg.type) {

        case 'wsopened':
            {
                isWsOpened = true;
                // console.log('---------main2: wsopened! ' + performance.now().toFixed(1));
                // console.log('---------main2: wsopened! ' + myperf());

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



        case "answer":
            if ((msg.caller == 'main') || (msg.ObjectType == CmdType.GetUserParams)) {

                var cmdobj = msg;

                switch (msg.ObjectType) {



                    case CmdType.GetUserParams:
                        {
                            lastuserparams = cmdobj
                            mmm = msg;
                            mmm = null;

                        }
                        break;
                    case CmdType.GetLastGrpData:
                        {
                            if (cmdobj.arrgrp.length > 0)
                                lastgrpdata = cmdobj;
                            mmm = msg;
                            mmm = null;

                        }
                        break;

                    case CmdType.GetDevices:
                        // var tm_ms = performance.now(); //   new Date().getTime();
                        // var diff_ms = tm_ms - browserSend_ms;

                        var recs = cmdobj.arrdev;
                        if (recs.length > 0) {

                            lastDevicesObject = cmdobj;

                            var _force = false;
                            if (recs.length > 0) {
                                var p1 = performance.now();
                                if (!deepEqual(answDevices, recs)) {
                                    var p2 = performance.now();
                                    console.log(" -- devices changed !!  t= " + (p2 - p1).toFixed(3));
                                    _force = true;
                                }

                            }

                            answDevices = recs;

                        }
                        break;



                    // wrapCmd(msg);


                }
                wrapvidgets(cmdobj);




                // case 'nodedata':
                //     {
                //         wrapNodeData(msg);
                //         break;
                //     }
                // case 'alarm':
                //     {
                //         wrapAlarmData(msg);
                //         break;
                //     }



            }
    }


    function wrapvidgets(cmdobj) {
        if (lastDevicesObject && lastgrpdata && lastuserparams) {

            let devs = lastDevicesObject.arrdev.Where(x => x.binarytype == 64);



            try {



                if (lastuserparams.customs.devlist)
                    if (lastuserparams.customs.devlist.length > 0) {

                        let spl = lastuserparams.customs.devlist.split(`,`);

                        if (spl)
                            for (i = 0; i < spl.length; i++)
                                spl[i] = spl[i].trim();


                        var nmbs = new Uint32Array(spl);
                        // devs = devs.Where(x => lastuserparams.customs.devlist.includes(x.Id));
                        devs = devs.Where(x => nmbs.includes(x.Id));
                    }
            } catch (r) {
                let cv = r;
            }




            document.getElementById('devall').firstElementChild.innerText = devs.length;



            var inpmask = lastuserparams.customs.user_inp_mask & lastuserparams.customs.admin_inp_mask;
            var bitmask = lastuserparams.customs.user_bit_mask & lastuserparams.customs.admin_bit_mask;

            var avar = 0;
            var offline = 0;

            var iflags = 0;
            var bflags = 0;
            var lastmcutime; // = Date.now();

            devs.forEach(x => {
                var grp = lastgrpdata.arrgrp.Where(y => y.device_id == x.Id).Last();
                if (!grp) {
                    var b = 98;
                } else {
                    var now = Date.now(); //.getTime();

                    var t0 = grp.server_datetime;
                    var t1 = Date.parse(t0);
                    var time = (now - t1) / (1000 * 60);

                    //---- if offline
                    if (time > x.timeout) {
                        offline++;
                    }

                    //----------------- if not offline then if alarmed -----
                    else {
                        if (!lastmcutime)
                            lastmcutime = Date.parse(grp.mcu_datetime);
                        else {
                            var mtime = Date.parse(grp.mcu_datetime);
                            lastmcutime = mtime > lastmcutime ? mtime : lastmcutime;

                        }

                        // if (x.Id == 93) 
                        {
                            var n = 0;
                            if (grp.inp_flags & x.inpmask & inpmask) {
                                iflags |= (grp.inp_flags & x.inpmask & inpmask);
                                n = 1;
                            }

                            if (grp.bit_flags & x.bitmask & bitmask) {
                                bflags |= (grp.bit_flags & x.bitmask & bitmask);
                                n = 1;
                            }
                            avar += n;
                        }

                    }
                }


            });
            document.getElementById('devoffline').firstElementChild.innerText = offline;
            document.getElementById('devavar').firstElementChild.innerText = avar;


            //alarm vidget
            let parnames = [];
            grprows.forEach(par => {
                if (par.isdigit) {
                    if ((par.bit >> 16) & bflags)
                        parnames.push(par.name);
                } else {
                    if (par.bit & iflags)
                        parnames.push(par.name);

                }

            });

            if (parnames.length == 0)
                document.getElementById('parnames').innerText = 'відсутні';
            else {
                var str = '';
                for (var k = 0; k < parnames.length; k++) {
                    if (k > 0)
                        str += ', ';
                    str += parnames[k];
                }
                document.getElementById('parnames').innerText = str;
            }


            // document.getElementById('vdgdate').innerText = Date.now().toLocaleString();

            var dt = new Date();
            var mst = lastmcutime ? new Date(lastmcutime) : new Date(Date.now());
            if (mst)
                dt = mst;


            var timestr = dt.toDateString();

            var mm = dt.getMonth()
            if (true) {
                var imonth = parseInt(mm);
                var arr = ['січ', 'лют', 'бер', 'кві', 'тра', 'чер', 'лип', 'сер', 'вер', 'жов', 'лис', 'гру']
                mm = arr[imonth];
            }

            var str = dt.getDate() + ' ' + mm + ' ' + dt.getFullYear().toString().slice(0) + ' ' + dt.toLocaleTimeString().slice(0, 5);
            document.getElementById('vdgdate').innerText = str;
            // var yy = .slice(2, 4);
            // var mm = xgrp.mcu_datetime.slice(5, 7);
            // var dd = xgrp.mcu_datetime.slice(8, 10);








            // var options = { day: 'numeric', month: 'numeric' };
            // document.getElementById('vdgdate').innerText = dt.toLocaleDateString('ua-Ua', options) + ' ' + dt.toLocaleTimeString(); // + '  ' + 





            var dummy = 0;
        }


    }



    function wrapCmd(cmdobj) {
        var _t1 = performance.now();
        let cmdtype = null;
        let result = null;

        try {
            // cmdobj = JSON.parse(data); //, [reviver]);
            // cmdobj = data;
            switch (cmdobj.ObjectType) {
                //
                case CmdType.SomeText:
                    var recs = cmdobj.records;
                    for (i = 0; i < recs.length; i++) {
                        var id = recs[i].id;
                        var name = recs[i].name;
                    }
                    break;


                case CmdType.GetDevices:
                    var tm_ms = performance.now(); //   new Date().getTime();
                    var diff_ms = tm_ms - browserSend_ms;

                    var recs = cmdobj.arrdev;
                    if (recs.length == 0) {
                        var f = 456;
                    } else {
                        lastDevicesObject = cmdobj;

                        var _force = false;
                        if (recs.length > 0) {
                            var p1 = performance.now();
                            if (!deepEqual(devchk.answDevices.sort((a, b) => a.Id - b.Id), recs.sort((a, b) => a.Id - b.Id))) {
                                // if (!deepEqual(lastDevicesObject.arrdev.sort((a, b) => a.Id - b.Id), recs.sort((a, b) => a.Id - b.Id))) {

                                // lastDevicesObject.arrdev = recs;


                                var p2 = performance.now();
                                console.log(" -- devices changed !!  t= " + (p2 - p1).toFixed(3));
                                _force = true;
                            }

                        }


                        devchk.answDevices = recs;




                        // for (i = 0, k = 0; i < recs.length; i++, k++) {
                        //     console.log(recs[i]);
                        // }

                        refresh_objects_on_map(_force);
                        refresh_tabcontainer();
                    }
                    break;


                case CmdType.GetLastGrpData:
                    {
                        if (cmdobj.caller == 'main') {
                            var t0 = 678;
                            var recs = cmdobj.arrgrp;
                            if (recs.length == 0) {
                                var t = 0;
                            } else {
                                devchk.grprecs = recs;
                                lastgrpdata = recs;
                                devchk.checkdevices(devchk.grprecs); //               (recs);
                                if (lastgrpdata.length > 0)
                                    refresh_objects_on_map();
                            }

                        } else {
                            var t = 678;
                        }

                        break;
                    }

                case CmdType.GetLastSkzData:
                    // return;


                    /*
 
                                var AImode = false;
 
 
                                if (AImode) { // автогруппировка записей с учетом одного коннекта клиент-сервер
                                    // при этом могут быть разные name !!!
 
                                    // ввести в таблицу Skz колонки connect_id (номер сессии),  number (номер SIM карты)
                                    // который отличался бы от имени name
 
                                    // 1. выборка различных Ipaddr:port
                                    // массив для сортировки
                                    var list = cmdobj.arrskz; //  ['Дельта', 'альфа', 'ЧАРЛИ', 'браво'];
 
                                    // временный массив содержит объекты с позицией и значением сортировки
                                    // var mapped = list.map(function(el, i) {
                                    //     return { index: i,   adr: el.server_datetime};
                                    // });
 
                                    function factorial(n) {
                                        return n * 2;
                                    };
 
                                    var t = factorial(5);
                                    // сортируем массив, содержащий уменьшенные значения
                                    list = list.sort(function(a, b) {
                                        // if (a.id > b.id) {
                                        //     return 1;
                                        // }
                                        // if (a.value < b.value) {
                                        //     return -1;
                                        // }
                                        // return 0;
                                        return a.Id - b.Id;
                                    });
 
                                    // контейнер для результа
                                    var result555 = mapped.map(function(el) {
                                        return list[el.index];
                                    });
 
 
                                } else 
                                */

                    if (cmdobj.caller == 'main') {



                        //
                        // if (div = document.getElementById('textbox2')) {
                        // var submsg = "";

                        // var recv = new Date();
                        // var reciveTime = new Date().toTimeString();
                        var recs = cmdobj.arrskz;
                        var tm_ms = performance.now(); //   new Date().getTime();
                        var diff_ms = tm_ms - browserSend_ms;


                        var time = browserSendTime;
                        if (browserSendTime) {
                            var hh = toZeroFormat(time.getHours(), 1);
                            var mm = toZeroFormat(time.getMinutes(), 1);
                            var ss = toZeroFormat(time.getSeconds(), 1);
                            var timString = time.toTimeString().substring(0, 8);

                            // запрос/ответ
                            setstyle.innerText('zap', 'запит : ' + timString);
                            setstyle.innerText('vid', 'відгук : ' + (diff_ms / 1000).toFixed(3) + 'c');
                            // tbl3.cell(k, m++).innerText = timString; // hh + ':' + mm + ':' + ss;
                            // tbl3.cell(k, m++).innerText = (diff_ms / 1000).toFixed(3); //    reciveTime.substring(0, 8);
                        }

                        devchk.skzrecs = recs;
                        devchk.checkdevices(devchk.skzrecs); //               (recs);
                        refresh_objects_on_map();
                        skz_array.length = 0;
                        var k = 0;
                        for (i = 0; i < recs.length; i++, k++) {

                            var item = recs[i];
                            var id = item.id; //recs[i].id;
                            var name = item.name; //recs[i].name;

                            // var skz = new Skz(item);
                            // if (skz != null)
                            //     skz_array.push(skz);
                            skz_array.push(item);


                            // var tmp = {
                            //     "Номер": item.name,
                            // };

                            // var stmp = '' + item.name + ': ' +
                            //     item.server_datetime.replace('T', ' ') +
                            //     ' дверь=' + item.dv_1 +
                            //     ' U220 =' + item.u_220 +
                            //     ' ak=' + item.ak +
                            //     ' t1=' + item.t_1 +
                            //     ' _f0:' + item.flag0 +
                            //     ' _f1:' + item.flag1 +
                            //     ' _f2:' + item.flag2 +
                            //     ' _f3:' + item.flag3 +
                            //     ' _f4:' + item.flag4 +
                            //     ' _f5:' + item.flag5;


                            // submsg += JSON.stringify(recs[i]) + '\n';
                            // submsg += JSON.stringify(tmp) + '\n';
                            // submsg += stmp + '\n';

                            var headers = ["назва", "номер", 'сервер', 'прилад', 'запит', 'відгук, c',
                                'двері', 'U220', 'ak', 't1', 'u_ckz', 'i_ckz', 'e_ktz',
                                'IPaddress', 'port', 'Id', 'cmd'
                            ];


                            if (false) {
                                if (i == 0) {
                                    for (m = 0; m < tbl3.colCount; m++) {
                                        tbl3.cell(k, m).innerText = headers.length > m ? headers[m] : '';
                                    }
                                    k++;
                                } else if ((i % 4) == 0) {
                                    for (z = 0; z < tbl3.colCount; z++) {
                                        tbl3.cell(k, z).innerText = '';

                                    }
                                    k++;
                                }
                            }

                            // var time = browserSendTime;
                            // var hh = toZeroFormat(time.getHours(), 1);
                            // var mm = toZeroFormat(time.getMinutes(), 1);
                            // var ss = toZeroFormat(time.getSeconds(), 1);
                            // var timString = time.toTimeString().substring(0, 8);


                            // }
                            // k = i;
                            //заполним таблицу tabl3
                            if (tbl3 != null) {
                                if (k < tbl3.rowCount) {
                                    tbl3.row(k).style.display = '';

                                    m = 0;
                                    // description, name
                                    if ((i % 4) == 0) {
                                        var dvd = '';
                                        if (devchk.answDevices.length > 0) {
                                            tmp = devchk.answDevices.filter(x => x.Id == item.device_id);
                                            if (tmp)
                                                dvd = tmp[0];
                                        }

                                        tbl3.cell(k, m++).innerText = dvd ? dvd.description : '---'; //    i & 1 ? "" : item.name;
                                        tbl3.cell(k, m++).innerText = item.name; //    i & 1 ? "" : item.name;
                                    } else {
                                        tbl3.cell(k, m++).innerText = '.'; //    i & 1 ? "" : item.name;
                                        tbl3.cell(k, m++).innerText = '.'; //    i & 1 ? "" : item.name;
                                    }
                                    // server_datetime, mcu_datetime
                                    tbl3.cell(k, m++).innerText = item.server_datetime.replace('T', ' ');
                                    tbl3.cell(k, m++).innerText = item.mcu_datetime.replace('T', ' ');
                                    // запрос/ответ
                                    if ((i % 4) == 0) {
                                        tbl3.cell(k, m++).innerText = timString; // hh + ':' + mm + ':' + ss;
                                        tbl3.cell(k, m++).innerText = (diff_ms / 1000).toFixed(3); //    reciveTime.substring(0, 8);
                                    } else {
                                        tbl3.cell(k, m++).innerText = '.';
                                        tbl3.cell(k, m++).innerText = '.';
                                    }

                                    // tbl3.cell(k, m++).innerText = (diff_ms / 1000).toFixed(3); //    reciveTime.substring(0, 8);

                                    var ired = 'rgb(255,80,50)';
                                    var deflt = tbl3.cell(k, 0).style.color;

                                    tbl3.cell(k, m).style.color = item.dv_1 == 'Закр.' ? 'grey' : 'rgb(255,80,50)';
                                    tbl3.cell(k, m++).innerText = item.dv_1 == 'Закр.' ? 'Зачин.' : 'Відчин.';
                                    // 
                                    tbl3.cell(k, m).style.color = item.u_220 == 'Норма' ? 'grey' : 'rgb(255,80,50)';
                                    tbl3.cell(k, m++).innerText = item.u_220 == 'Норма' ? 'Норма' : 'Аварія';

                                    tbl3.cell(k, m).style.color = item.flag0 > 0 ? ired : deflt;
                                    tbl3.cell(k, m++).innerText = item.ak.toFixed(2);

                                    tbl3.cell(k, m).style.color = item.flag1 > 0 ? ired : deflt;
                                    tbl3.cell(k, m++).innerText = item.t_1.toFixed(1);

                                    tbl3.cell(k, m).style.color = item.flag2 > 0 ? ired : deflt;
                                    tbl3.cell(k, m++).innerText = item.u_ckz > 0 ? item.u_ckz.toFixed(1) : 0;

                                    tbl3.cell(k, m).style.color = item.flag3 > 0 ? ired : deflt;
                                    tbl3.cell(k, m++).innerText = item.i_ckz > 0 ? item.i_ckz.toFixed(1) : 0;

                                    tbl3.cell(k, m).style.color = item.flag4 > 0 ? ired : deflt;
                                    tbl3.cell(k, m++).innerText = item.e_ktz > 0 ? item.e_ktz.toFixed(2) : 0;

                                    tbl3.cell(k, m++).innerText = item.ipaddr;
                                    tbl3.cell(k, m++).innerText = item.port;
                                    tbl3.cell(k, m++).innerText = item.Id;
                                    tbl3.cell(k, m++).innerText = item.command;

                                }

                            }

                            // if ((i % 5) == 5) {
                            //     // for (m = 0; m < tbl3.colCount; m++) {
                            //     //     tbl3.cell(k, m).innerText = '';
                            //     k++;
                            // }



                        }

                        if (tbl3)
                            if (k < tbl3.rowCount) {

                                for (i = k; i < tbl3.rowCount; i++) {
                                    var ttt = tbl3.row(i);
                                    tbl3.row(i).style.display = 'none';
                                    var rrr = 0;
                                }
                            }



                    }

                    break;




                default:

                    break;

                // div.innerText = submsg;
            }




            // if (cmdobj.ObjectType == CmdType.SomeText) {

            //     recs = cmdobj.records;
            //     // arr = new Array(recs);
            //     for (i = 0; i < recs.length; i++) {
            //         var id = recs[i].id;
            //         var name = recs[i].name;

            //         var sms = recs[i].sms;
            //     }
            //     // recs.forEach(element => {
            //     //     var id = element.id;
            //     //     var name = element.name;
            //     // });

        } catch (e) {


        }
        // refresh_objects_on_map();
        set_lastskzdata();
        // var _t2 = performance.now();
        // var _t3 = _t2 - _t1;
        // console.log(_t3);
    }
}