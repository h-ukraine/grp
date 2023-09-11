function getnavigation() {
    let name = localStorage.getItem('objectnavigation');
    if (name == null) {
        let obj = { current: ['admin'] };
        savenavigation(obj);
        // localStorage.setItem('objectnavigation', JSON.stringify(obj));
        return obj;
    }

    let res = 0;

    try {
        res = JSON.parse(name);

        if (res.current.length == 0) {
            res.current.push('admin');
            savenavigation(res);
        }


        let reslength = res.current.length;

        while ((count = res.current.filter(x => x == 'admin').length > 1) || (res.current[0] != 'admin'))
            res.current.shift();

        if (reslength != res.current.length)
            savenavigation(obj);
        // localStorage.setItem('objectnavigation', JSON.stringify(obj));
    }
    catch (ex) {
        res = { current: ['admin'] };
    }

    return res;
}


function setnavigation(text) {
    let obj = getnavigation();

    let last = obj.current.slice(-1)[0];

    if (last !== text) {
        obj.current.push(text);
        /*
                // if (obj.current.length > 1)
                //     obj.current.pop();
                if (obj.current.length == 1)
                    obj.current.push(text);
                else {
                    let prelast = obj.current.slice(-2, -1)[0];
                    if (prelast == text)
                        obj.current.pop();
                }
                */
        savenavigation(obj);
        // localStorage.setItem('objectnavigation', JSON.stringify(obj));
    }


    if (path = document.querySelectorAll('.pathdiv')) {
        path.forEach(x => {
            let k = obj;
            let rrrrrrr = obj.current.join('> ');
            x.innerText = '> ' + rrrrrrr;
        })


    }
}

function popnavigation() {
    let obj = getnavigation();

    let last = obj.current.pop();
    // if (last !== text) {
    //     // obj.current.pop();
    //     obj.current.push(text);
    savenavigation(obj);
    // localStorage.setItem('objectnavigation', JSON.stringify(obj));

    // }
}
function savenavigation(obj) {
    if (obj.current.length == 0)
        obj.current.push('admin');

    localStorage.setItem('objectnavigation', JSON.stringify(obj));
}


function askUsers() {
    // var ind = document.getElementById('itp').selectedIndex;


    var cmdobj = {
        type: '_wsocket',
        caller: 'manjs',
        ObjectType: CmdType.GetUsers,
        // id: Id, //myid,
        // description: mydescription,
        newcount: 1, //wcnt,
        //sertif: sert.sertif
    }

    browserSendTime = new Date();
    browserSend_ms = performance.now();
    send_ms_flag = true;
    bc.postMessage(cmdobj);
    console.log('----------------------- ask_users()');
    // }
}

function switchtopage(_classname) {

    let pages_array = document.getElementsByClassName('ispage');

    pages_array.forEach(page => {
        if (!page.className.includes(_classname))
            page.style.display = 'none';
    });

    pages_array.forEach(page => {
        if (page.className.includes(_classname)) {
            page.style.display = 'block';
            setnavigation(_classname);
            if (_classname == 'devices')
                devices();
            else if (_classname == 'users') {
                askUsers();

                // var usersobj = new Object({
                //     type: CmdType.GetUsers
                // });
                // bc.postMessage(usersobj);


            }
        }
    });

    // pages_array.forEach(x => {

    //     let class_name = x.className;
    //     if (x.className.includes(_classname)) {

    //         x.style.display = 'block';
    //         setnavigation(_classname);

    //         if (_classname == 'devices')
    //             devices();
    //     }
    //     else x.style.display = 'none'
    // });

}


function choose(evt) {

    let div = evt.currentTarget;
    if (div) {

        // let _classname = div.classList[0];
        let acckey = div.accessKey;
        switchtopage(acckey);


        // if (div.innerText.includes('Користувачі')) {
        //     if (rr = document.querySelector('.admin'))
        //         rr.style.display = 'none';
        //     if (rr = document.querySelector('.users'))
        //         rr.style.display = 'block';
        //     localStorage.setItem('admchoose', div.innerText);

        // } else if (div.innerText.includes('Параметри')) {
        //     if (rr = document.querySelector('.admin'))
        //         rr.style.display = 'none';
        //     if (rr = document.querySelector('.parameters'))
        //         rr.style.display = 'block';
        //     localStorage.setItem('admchoose', div.innerText);


        // } else if (div.innerText.includes('Прилади')) {

        //     if (rr = document.querySelector('.admin'))
        //         rr.style.display = 'none';
        //     if (rr = document.querySelector('.devices'))
        //         rr.style.display = 'block';
        //     localStorage.setItem('admchoose', div.innerText);
        //     devices();

        // }

    }

}


function returntoprev(evt) {
    let opacity = evt.currentTarget.style.opacity;
    if (opacity.length)
        if (opacity < 0.95)
            return;

    popnavigation();
    let navobj = getnavigation();
    let prev = navobj.current.pop();

    // setnavigation(prev);
    // prev = navobj.current.slice(-1)[0];
    switchtopage(prev);
}



const bc = new BroadcastChannel('test_channel');


let mmm;
let answDevices;
let lastgrpdata = null, lastuserparams = null, lastDevicesObject = null;
let alldevices = null, restricteddevices = null;
let userlist = null;
let custlist = null;

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
            if (msg.ObjectType == CmdType.GetUsers) {
                var cmdobj = msg;
                userlist = cmdobj.userlist;
                custlist = cmdobj.custlist;

                gotusers();

            }

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


                // wrapvidgets(cmdobj);
                // wrapCmd(msg);



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


}