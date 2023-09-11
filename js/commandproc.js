//enumeration
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

let _cmdcnt = 0;

class BaseCmdObject {
    CommandId = _cmdcnt++;
    ObjectType = CmdType.SomeText;

    // constructor(tp) {
    //     if (tp)
    //         this.ObjectType = tp;
    // }
}

class jsonCommand { //extends BaseCmdObject {
    Text = 'Это просто текст: ';
    // dateleft = 0;
    // dateright = 0;
    lastnmb;

    // constructor(type = null) {
    // super(type);
    // }
}

// class Skz {
//     // Id;
//     device_id;
//     server_datetime;
//     mcu_datetime;
//     password;
//     command;
//     name;
//     devtype;
//     bit_err;
//     data_err;
//     dv_1;
//     u_220;
//     ak;
//     t_1;
//     u_ckz;
//     i_ckz;
//     e_ktz;
//     u220f;

//     ipaddr;
//     port;
//     tm_limit;
//     tm_over;

//     constructor(obj) {
//         this.Id = obj.Id;
//         this.device_id = obj.device_id;

//         this.server_datetime = obj.server_datetime;
//         this.mcu_datetime = obj.mcu_datetime;
//         // password;
//         // command;
//         // name;
//         // devtype;
//         // bit_err;
//         // data_err;
//         this.dv_1;
//         // u_220;
//         // ak;
//         // t_1;
//         // u_ckz;
//         // i_ckz;
//         // e_ktz;
//         // u220f;


//         this.ipaddr = obj.ipaddr;
//         this.port = obj.port;
//         this.tm_limit = obj.tm_limit;
//         this.tm_over = obj.tm_over;

//         return this;


//     }

// }



function toFormat(ths, val) {
    res = "";
    var n = Math.pow(10, val);
    while (n > 1) {
        if (ths < n)
            res += " ";
        n /= 10;
    }
    return res + ths.toString();

}

function toZeroFormat(ths, val) {
    res = "";
    var n = Math.pow(10, val);
    while (n > 1) {
        if (ths < n)
            res += "0";
        n /= 10;
    }
    return res + ths.toString();
}


class DevicesCheck {
    tlast = -10000; //10s

    activeDevices = [];

    answDevices = [];

    skzrecs = [];
    grprecs = [];

    checkdevices(arr, fff = 0) {

        return;


        if (fff > 0) {
            var qq = 0;

        }

        arr.forEach(element => {
            if (!this.activeDevices.includes(element.device_id)) {
                // var ddd_obj = new { id: 34, name: 'eee' };
                this.activeDevices.push(parseInt(element.device_id));
            }

        });
        var tnow = performance.now();
        // if (((tnow - this.tlast) > 5 * 1000) || (this.answDevices.length == 0)) {
        if (((tnow - this.tlast) > 2.5 * 1000) || (lastsavedDevicesObject == null) || (fff > 0)) {
            console.log('check devices...');
            // get active devices info from database

            var tmp = localStorage.getItem('tmppw');
            var sert = '';
            if (isJSON(tmp)) {
                sert = JSON.parse(tmp);
            }

            if ((!location.search.includes('map=force&pw=')) ||
                (!location.search.includes('uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t'))) {
                sert = '';
            }


            var cmdobj = {
                ObjectType: CmdType.GetDevices,
                devnumbers: this.activeDevices, //          [23, 24, 1]
                sertif: sert.sertif
            }

            // sendCmd(cmdobj);
            cmdobj.type = "_wsocket";
            cmdobj.caller = "main";
            browserSendTime = new Date();
            browserSend_ms = performance.now(); //    new Date().getTime();
            if (this.answDevices.length == 0)
                bc.postMessage(cmdobj);

            //
            this.tlast = tnow;
        }

    }
}


let devchk = new DevicesCheck();


let skz_array = [];
let lastskzdata = [];
let lastgrpdata = [];


function hasLastAlarms(dev) {

    // if (dev.Id == 29) {
    //     var e = 7;
    // }
    if (dev.binarytype == 0x40) {
        // get last grp data

        var _last_grp_data = devchk.grprecs.Where(x => x != null).Where(x => x.device_id == dev.Id)
            .sort((a, b) => Date.parse(a.server_datetime) - Date.parse(b.server_datetime));



        if (_last_grp_data.length > 0) {
            // var record = lastgrpdata.Where(x => x != null).Where(x => x.device_id == dev.Id);
            // if (record.length == 0)
            //     return false;

            var last = lastgrpdata.Last();
            var isalarm = false;
            if ((last.bit_flags != 0) || (last.inp_flags != 0))
                isalarm = true;
            // if (last.flag0 || last.flag1 || last.flag2 || last.flag3 || last.flag4 || last.flag5)
            //     isalarm = true;
            // if ((last.dv_1 != "Закр.") && (last.dv_1 != "Зачин."))
            //     isalarm = true;
            // if (last.u_220 != 'Норма')
            //     isalarm = true;
            return isalarm;

        }
    } else if (dev.binarytype != 0x40)
        if (lastskzdata.length > 0) {
            var record = lastskzdata.Where(x => x != null).Where(x => x.device_id == dev.Id);
            if (record.length == 0)
                return false;

            var last = record.Last();
            var isalarm = false;
            if (last.flag0 || last.flag1 || last.flag2 || last.flag3 || last.flag4 || last.flag5)
                isalarm = true;
            if ((last.dv_1 != "Закр.") && (last.dv_1 != "Зачин."))
                isalarm = true;
            if (last.u_220 != 'Норма')
                isalarm = true;
            return isalarm;
        }

    return false;

}


function hasLastTimeout(dev) {
    if (dev.Id == 61) {
        var _tmp = 0;

    }
    var record = null;
    if (dev.binarytype == 0x42)
        record = lastskzdata.Where(x => x != null).Where(x => x.device_id == dev.Id);
    else if (dev.binarytype == 0x40)
        record = lastgrpdata.Where(x => x != null).Where(x => x.device_id == dev.Id);

    if (dev.Id == 69) {
        var dummy678 = 678;
    }

    if (record.length > 0) {
        records = record.sort((a, b) => Date.parse(a.server_datetime) - Date.parse(b.server_datetime));
        var last = records.Last();
        var dt = Date.parse(last.server_datetime);

        var now = Date.now();
        var inmin = (now - dt) / (60 * 1000);

        if (inmin > dev.timeout) {
            return true;
        }
        return false;
        // if ((Date.now() - Date.parse(last.server_datetime)) > last.timeout)
        //     return true;
    }
    return true;
}









function set_lastskzdata() {

    lastskzdata.length = 0;

    var lastrecord = null;

    for (i = 0; i < devchk.activeDevices.length; i++) {
        // var dt = new Date();
        var Id = devchk.activeDevices[i];
        skz_array.forEach(elem => {
            if (elem.device_id == Id) {
                var xdt = Date.parse(elem.server_datetime);
                if (lastrecord == null)
                    lastrecord = elem;
                else {
                    ydt = Date.parse(lastrecord.server_datetime);
                    if (xdt > ydt)
                        lastrecord = elem;
                }

            }

        });
        if (lastrecord != null)
            lastskzdata.push(lastrecord);
        else {
            var dummy = 0;
        }
        lastrecord = null;


    }

}




//------------- 1st way  ---   extending Array
Array.prototype.Add = function(element) {
    this.push(element);
};

Array.prototype.Where = function(args) {
    return this.filter(args);
};

if (!Array.prototype.Select)
    Array.prototype.Select = function(args) {
        return this.map(args);
    };

if (!Array.prototype.Last) {
    Array.prototype.Last = function() {
        return this[this.length - 1];
    };
};




function get_lastskzdata(devId) {
    var str = '';

    if (lastskzdata.length == 0)
        return '';

    // var record = lastskzdata.filter((x) => { return x.device_id == devId; });

    // var proba_skzdata = lastskzdata.Where(x => x.device_id == devId);

    // var proba_ids = lastskzdata.Where(x => x.device_id == devId).Select(y => y.device_id);

    var skzdata_of_oneDevice = lastskzdata.filter(x => x.device_id == devId);
    // var onerecord = skzdata_of_oneDevice.sort((a, b) => Date.parse(a.server_datetime) - Date.parse(b.server_datetime))[0];

    if (skzdata_of_oneDevice.length == 0)
        return str;

    var res = skzdata_of_oneDevice[0];





    if (res.flag0)
        str += ' AK,';
    if (res.flag1)
        str += ' T1,';
    if (res.flag2)
        str += ' Uскз,';
    if (res.flag3)
        str += ' Iскз,';
    if (res.flag4)
        str += ' Eзах,';
    if (res.flag5)
        str += ' U220,';

    if (res.dv_1 !== 'Закр.')
        str += ' Дв.1'; //    ' Відчин.';
    // if (res.u_220 != 'Норма')
    //     str += ' Аварія'

    var prefix = (DEBUG ? res.server_datetime.replace('T', ' ') + ':  ....(id=' + res.Id + ') ' + res.name + '<br>' : '');

    if (str.length > 0)
        str = prefix + str;

    return str;

}


const grpAnalogue = ['AK', 'P1', 'P3', 'Газ', 'ПСК1', 'T1', 'T2', 'Езах', 'P2', 'ПСК2', 'AKзов'];
const grpBits = ['ПСК1', 'ПЗК1', 'Дв1', 'Дв2', 'Дв3', 'Дв4', 'bit6', 'bit7', 'bit8', 'ПЗК2', 'ПСК2', 'bit11', 'bit12', 'Дельта', 'Д.пор', 'U220'];

function get_lastgrpTextdata(dev) {
    if (dev.Id == 61) {
        var wer = 0;
    }

    var str = '';

    if (lastgrpdata.length == 0)
        return '';

    // var record = lastskzdata.filter((x) => { return x.device_id == devId; });

    // var proba_skzdata = lastskzdata.Where(x => x.device_id == devId);

    // var proba_ids = lastskzdata.Where(x => x.device_id == devId).Select(y => y.device_id);

    var grpdata_of_oneDevice = lastgrpdata.filter(x => x.device_id == dev.Id);
    // var onerecord = skzdata_of_oneDevice.sort((a, b) => Date.parse(a.server_datetime) - Date.parse(b.server_datetime))[0];

    if (grpdata_of_oneDevice.length == 0)
        return str;

    var dat = grpdata_of_oneDevice[0];

    var n = 0;

    for (n = 0; n < grpAnalogue.length; n++) {
        if (dat.inp_flags & dev.inpmask & (1 << n)) {
            if (str.length > 0)
                str += ', ';
            str += grpAnalogue[n]; // str += ' ' + grpAnalogue[n] + ',';
        }
    }


    str += '<br>';
    var n = 0;
    var _secalarm = false;
    for (n = 0; n < grpBits.length; n++) {
        var tmpflags = dev.bitmask & (1 << n);
        if (dat.bit_flags & tmpflags) {

            str += _secalarm ? ', ' : '';
            str += grpBits[n];
            _secalarm = true;
        }
    }

    // if (res.flag0)
    //     str += ' AK,';
    // if (res.flag1)
    //     str += ' T1,';
    // if (res.flag2)
    //     str += ' Uскз,';
    // if (res.flag3)
    //     str += ' Iскз,';
    // if (res.flag4)
    //     str += ' Eзах,';
    // if (res.flag5)
    //     str += ' U220,';



    var prefix = (DEBUG ? res.server_datetime.replace('T', ' ') + ':  ....(id=' + res.Id + ') ' + res.name + '<br>' : '');

    if (str.length > 0)
        str = prefix + str;

    return str;

}


let lastsavedDevicesObject = null;

function myGetJson(data) {

    cmdobj = JSON.parse(data);
    wrapCmd(cmdobj);
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




function refresh_tabcontainer() {
    var corr = devchk.answDevices;
    if (corr.length == 19) {
        var t = 222;
    }

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

        var array = Array.from(div.children).sort((a, b) => a.Id > b.Id).Select(x => x.innerText);
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


function wrapNodeData(cmdobj) {
    var _t1 = performance.now();
    let cmdtype = null;
    let result = null;

    // if (devchk.answDevices.length > 0) {
    var _data = devchk.skzrecs.Where(x => x.device_id == cmdobj.id);

    if (_data.length > 0) {
        function sendtonodeskz() {
            if (_data) {
                var e = new Object({
                    type: 'answer',
                    ObjectType: CmdType.GetLastSkzData,
                    arrskz: _data
                });
                bc.postMessage(JSON.stringify(e));
                return true;
            }
            return false;
        }

        sendtonodeskz();
    } else {
        _data = devchk.grprecs.Where(x => x.device_id == cmdobj.id);
        if (_data.length > 0) {
            function sendtonodegrp() {
                if (_data) {
                    var e = new Object({
                        type: 'answer',
                        ObjectType: CmdType.GetLastGrpData,
                        arrgrp: _data,
                        devlist: devchk.answDevices.Where(x => x.binarytype == 0x40)
                    });
                    bc.postMessage(JSON.stringify(e));
                    return true;
                }
                return false;
            }

            sendtonodegrp();
        }
    }




    // if (!sendtonode()) {

    //     var ttt = setInterval(() => {
    //         var _data = devchk.skzrecs.Where(x => x.device_id == cmdobj.id);
    //         // var _data1 = lastskzdata.Where(x => x.device_id == cmdobj.id);

    //         if (_data) {
    //             var e = new Object({
    //                 type: 'answer',
    //                 ObjectType: CmdType.GetLastSkzData,
    //                 arrskz: _data
    //             });
    //             // bc.postMessage(e);
    //             bc.postMessage(JSON.stringify(e));
    //             clearInterval(ttt);
    //         }


    //     }, 200);
    // }

}

function wrapAlarmData(cmdobj) {
    var _t1 = performance.now();
    let cmdtype = null;
    let result = null;


    if (devchk.answDevices.length > 0) {

        var devobj = new Object({

            type: 'answer',
            ObjectType: CmdType.GetDevices,
            arrdev: devchk.answDevices

        });
        bc.postMessage(JSON.stringify(devobj));
    }


    // if (devchk.answDevices.length > 0) {

    // var ttt = setInterval(() => {
    var _data = devchk.skzrecs; // .Where(x => x.device_id == cmdobj.id);
    // var _data1 = lastskzdata.Where(x => x.device_id == cmdobj.id);

    if (_data) {
        var e = new Object({
            type: 'answer',
            ObjectType: CmdType.GetLastSkzData,
            arrskz: _data
        });
        bc.postMessage(JSON.stringify(e));
        // clearInterval(ttt);
    }


    // }, 200);

}

function deepEqual_well(obj1, obj2) {
    var q1 = JSON.stringify(obj1);
    var q2 = JSON.stringify(obj2);
    var res = (q1 === q2);

    // if (obj1.length > 0)
    //     if (!res) {
    //         for (let i = 0; i < q1.length; i++) {
    //             let a = q1[i];
    //             let b = q2[i];
    //             if (a != b) {
    //                 let r = 0;
    //             }

    //         }

    //     }

    return res;

    // return JSON.stringify(obj1) === JSON.stringify(obj2);
}


function deepEqual(obj1, obj2) {


    for (let i = 0; i < obj2.length; i++) {
        if (JSON.stringify(obj1[i]) !== JSON.stringify(obj2[i])) {
            if (obj1.length > 0) {


                let aprops = Object.getOwnPropertyNames(obj1[i]);

                aprops.forEach(prop => {
                    let v1 = obj1[i][prop];
                    let v2 = obj2[i][prop];
                    if (v1 != v2) {
                        var ttt = 0;
                        var oh = 1;
                        ttt = oh;
                    }



                });


                let ddd = 0;

            }


        }




    }

    // if (obj1.length > 0)
    //     if (!res) {
    //         for (let i = 0; i < q1.length; i++) {
    //             let a = q1[i];
    //             let b = q2[i];
    //             if (a != b) {
    //                 let r = 0;
    //             }

    //         }

    //     }

    // return res;
    let r1 = JSON.stringify(obj1);
    let r2 = JSON.stringify(obj2);
    return (r1 === r2);
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
                    // if (lastsavedDevicesObject && cmdobj) {
                    //     var h1 = lastsavedDevicesObject.arrdev.sort((a, b) => a.Id - b.Id);
                    //     var h2 = cmdobj.arrdev.sort((a, b) => a.Id - b.Id);

                    //     for (i = 0; i < h1.length; i++) {
                    //         let ttt = deepEqual(h1[i], h2[i]);
                    //         if (!ttt) {
                    //             let r = 0;
                    //         }


                    //     }
                    //     var prepre = deepEqual(lastsavedDevicesObject.arrdev, cmdobj.arrdev);
                    // }


                    var _force = lastsavedDevicesObject == null ? true : false;
                    if (!_force)
                        if (recs.length > 0) {
                            var p1 = performance.now();
                            if (!deepEqual(lastsavedDevicesObject.arrdev, recs)) { //if (!deepEqual(devchk.answDevices, recs)) {

                                var p2 = performance.now();
                                console.log(" -- devices changed !!  t= " + (p2 - p1).toFixed(3));
                                _force = true;
                            }

                        }
                    lastsavedDevicesObject = cmdobj;

                    devchk.answDevices = recs;

                    let fresult = deepEqual(devchk.answDevices, recs);


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







function openPageUniversal(e) {



    bc.postMessage(new Object({
        type: "tmax=300"
    }));

    //

    var div = e.currentTarget;
    switch (div.innerText) {
        case 'Карта':
            {
                var mapcloseobj = new Object({
                    type: "map=close()"
                });
                bc.postMessage(mapcloseobj);
                var ewin = window.open('../index2.html?map=force');
                break;
            }
            // case 'Аварії':
        case 'Дані':
            {

                bc.postMessage('alarms=close()');
                ewin = window.open('pagealarms/alarms.html');
                break;
            }
        case 'Дані ГРП':
            {
                bc.postMessage('allgrp=close()');
                ewin = window.open('allgrp/allgrp.html');

                // e.stopPropagation();
                // e.currentTarget.innerText = 'Сторінка у розробці';
                // var cc = e.currentTarget;
                // setTimeout(() => {
                //     cc.innerText = 'Дані ГРП';
                // }, 600);


                break;
            }
        case 'Архів':
            {
                // bc.postMessage('allgrp=close()');
                // ewin = window.open('allgrp/allgrp.html');




                // var srctext = div.innerText;
                // e.stopPropagation();
                // e.currentTarget.innerText = 'Сторінка у розробці';
                // var cc = e.currentTarget;
                // setTimeout(() => {
                //     cc.innerText = srctext;
                // }, 600);

                bc.postMessage('archive=close()');
                ewin = window.open('archive/archive.html');
                break;
            }
        default:
            // var dev = devchk.answDevices.filter(x => x.Id == Id)[0];
            // log('Click on dev.Id=' + Id + '...cnt:' + on_cnt++);
            // bc.postMessage(dev.description + '=close()');

            // if (div.innerText.includes('ГРП')) {
            //     var n = div.innerText.indexOf('=');
            //     // if (n > 0) {
            //     //     var sss = div.innerText.slice(n + 1);
            //     //     if (sss) {
            //     //         var id = parseInt(sss);
            //     bc.postMessage(div.innerText + '=close()');
            //     ewin = window.open('./pages/grp.html?device_Id=' + id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');
            // }







            var vvv = null;

            if (div.innerText.includes('надо_редактировать')) {
                var n = div.innerText.indexOf('=');
                if (n > 0) {
                    var sss = div.innerText.slice(n + 1);
                    if (sss) {
                        var id = parseInt(sss);
                        bc.postMessage(div.innerText + '=close()');

                        var devs = devchk.answDevices.Where(x => x.Id == id);
                        if (devs.length > 0) {
                            dev = devs[0];
                            if (dev.binarytype == 0x40)
                                ewin = window.open('./pages/tmpgrp.html?device_Id=' + dev.Id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');
                            if (dev.binarytype == 0x42)
                                ewin = window.open('./pages/tmp.html?device_Id=' + dev.Id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');

                            //ewin = window.open('./pages/tmp.html?device_Id=' + id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');
                        }
                    }
                }
            } else {
                // var vv1 = devchk.answDevices.Where(x => x.description.includes('C#'));
                // var vv2 = devchk.answDevices.Where(x => x.description.includes('simulator'));
                // var ff = devchk.answDevices[2].description;
                // var ff1 = devchk.answDevices[2].description.trim();

                vvv = devchk.answDevices.Where(x => x.description.trim() === div.innerText);

                if (vvv && vvv.length > 0)
                    vvv = vvv[0];
                else
                    vvv = null;

                // var devs = devchk.answDevices.Where(x => x.Id == id);
                // var dev;
                // if (devs.length > 0) {
                //     dev = devs[0];
                // }

                if (vvv) {
                    // if (vvv.description != e.innerText) {

                    var skzdata_of_oneDevice = lastskzdata.filter(x => x.device_id == vvv.Id);
                    // var onerecord = skzdata_of_oneDevice.sort((a, b) => Date.parse(b.server_datetime) - Date.parse(a.server_datetime))[0];

                    // var result = skzdata_of_oneDevice[0];


                    var params = new Object({
                        id: on_cnt,

                        rows: 8,
                        cols: 1,

                        colnames: ['дата', 'двері', 'U220', 'ак', 'Т1', 'Uскз', `Iскз`, 'Eктз'],
                        // rows: colnames.length
                        devjson: vvv,
                        lastdata: JSON.stringify(skzdata_of_oneDevice)

                    });




                    // sessionStorage.setItem('alarm_tmp_params_' + vvv.Id, JSON.stringify(params));

                    bc.postMessage(vvv.description + '=close()');

                    var dev = vvv;
                    if (dev.binarytype == 0x40)
                        ewin = window.open('./pages/tmpgrp.html?device_Id=' + dev.Id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');
                    if (dev.binarytype == 0x42)
                        ewin = window.open('./pages/tmp.html?device_Id=' + dev.Id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');



                    //ewin = window.open('./pages/tmp.html?device_Id=' + vvv.Id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');
                    // }
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