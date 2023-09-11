var devarray = [];
// let lastDevicesObject;
// let lastgrpdata;
// let lastuserparams;

let current_devices_mode = null;

function parse_devlist(str) {
    var s1 = str.trim();

    var s2 = s1.split(',');

    for (var i = 0; i < s2.length; i++)
        s2[i] = s2[i].trim();

    return s2;

}

function _______________________________________limitbyuser_old_working(devs) {
    if (devs.length > 0) {
        var b = 0;

        var tmppw = localStorage.getItem('tmppw'); //last_objgrp.devlist;
        if (isJSON(tmppw)) {
            var nnn = JSON.parse(tmppw);
            if (nnn) {
                var eee = nnn.customs.devlist;
                if (eee != null)
                    if (eee.length > 0) {
                        var dev_ids = parse_devlist(eee); //devlist; //userobj.customs.devlist;



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


function limitbyuser(devs) {

    if (devs.length > 0) {
        var b = 0;
        if (1) {

            let uo = userobj;
            if (userobj.devstr != null) {
                var dev_ids = parse_devlist(userobj.devstr); //devlist; //userobj.customs.devlist;
                var devlist2 = devs.Where(x => dev_ids.includes(x.Id.toString()));

                // var devlist2 = devlist.Where(x => devlist.includes(x.Id.toString()));
                devlist = devlist2;
                devs = devlist2;

                let finish = -1;
            }



        }
        if (0) {
            var tmppw = localStorage.getItem('tmppw'); //last_objgrp.devlist;
            if (isJSON(tmppw)) {
                var nnn = JSON.parse(tmppw);
                if (nnn) {
                    var eee = nnn.customs.devlist;
                    if (eee != null)
                        if (eee.length > 0) {
                            var dev_ids = parse_devlist(eee); //devlist; //userobj.customs.devlist;



                            //   var dev_ids = parse_devlist(str);

                            var devlist2 = devs.Where(x => dev_ids.includes(x.Id.toString()));

                            // var devlist2 = devlist.Where(x => devlist.includes(x.Id.toString()));
                            devlist = devlist2;
                            devs = devlist2;

                        }
                }
            }
        }
    }

    return devs;
}


function devices(mode = 'devices') {

    let ind_accessable = localStorage.getItem('useraccessable_index');
    if (ind_accessable == null)
        ind_accessable = 0;
    if (sel = document.getElementById('dev-select')) {
        sel.selectedIndex = ind_accessable;
    }



    if (path = document.querySelectorAll('.pathdiv')) {
        if (path[0].innerText.includes('users'))
            mode = 'users';
    }

    current_devices_mode = mode;

    if (current_devices_mode == 'devices')
        _devs();
    else _user_devs();


}



function _user_devs() {


    userobj = restore_userobject();

    if (userobj != null) {

        let id = -1;
        let ylist = userobj.custlist.Where(x => x.userlogin == userobj.login);
        let devstr = '';
        if (ylist != null)
            userobj.devstr = ylist[0].devlist;
        _devs(userobj);

    }
    else {
        console.log('ERROR: userobj = null');
    }


}



function _devs(uobj = null) {

    // let qwer = lastDevicesObject
    let tmp = setInterval((aobj = uobj) => {
        let pollingobject = null;

        if (sel = document.getElementById('dev-select')) {
            switch (sel.selectedIndex) {
                case 0: pollingobject = lastDevicesObject;
                    break;
                case 1: pollingobject = lastDevicesObject; //alldevices;
                    break;
                case 2: pollingobject = lastDevicesObject;//restricteddevices;
                    break;


            }
        }
        // if (devarray.length > 0)
        if (pollingobject) {
            clearTimeout(tmp);

            devarray = [];
            let arr = pollingobject.arrdev;



            // let byuser = arr.Select(x => x.Id);  //           parse_devlist(arr);//                   limitbyuser(arr);



            if (userobj == null)
                userobj = restore_userobject();

            let thepath = document.querySelector('.pathdiv').innerText;
            if (!thepath.includes('users')) {
                userobj = null;


                if (usertabl != null) {
                    usertabl.tabl.remove();
                }



            }
            else
                set_user_container();
            if (userobj) {
                let byuser = userobj ? limitbyuser(arr) : arr;


                if (sel.selectedIndex == 0)
                    arr = byuser;
                else if (sel.selectedIndex == 1)
                    arr = arr.Where(x => !byuser.includes(x));
                document.querySelector('.directdev').style.display = 'none';
                document.querySelector('.myselect').style.display = '';

            }
            else {

                document.querySelector('.directdev').style.display = '';
                document.querySelector('.myselect').style.display = 'none';

            }


            // for (let i = 0; i < 89; i++) {
            for (i = 0; i < arr.length; i++) {
                let obj = new Object();

                obj.Identifier = arr[i].Identifier//i + 1;
                obj.address = arr[i].address//"вул. Якась, " + (100 + obj.Identifier) + '\n';
                //   obj.name = i + ': \n' + "055334455";
                obj.name = arr[i].description  //arr//'ГРП - ';
                obj.Id = arr[i].Id;
                obj.device_enabled = arr[i].device_enabled;

                devarray.push(obj);
            }

            // let amnt = document.getElementById('amount');
            // amnt.innerText = arr.length;

            gendivs_from_array();
            // if (userobj)
            //     set_user_container();
        }

    }, 200);
}


function restore_userobject() {
    let struser = sessionStorage.getItem('userobj');
    let _user = null;

    if (struser != null)
        if (isJSON(struser)) {
            _user = JSON.parse(struser);
        }
    return _user;
}



var usertabl = null;

function set_user_container() {
    if (usertabl != null) {
        usertabl.tabl.remove();
    }
    usertabl = new jsTable('usertb', 1, 3, 'user-container');

    let struser = sessionStorage.getItem('userobj');


    let _user = restore_userobject();

    // let _user = null;

    // if (struser != null)
    //     if (isJSON(struser)) {
    //         _user = JSON.parse(struser);
    //     }


    if (_user != null) {
        usertabl.cell(0, 0).innerText = _user.login;
        usertabl.cell(0, 1).innerText = _user.name;
        usertabl.cell(0, 2).innerText = _user.lastname;


        let row = usertabl.row(0);
        usertabl.row(0).style.gridTemplateColumns = '0.3fr 1fr 1fr';
        usertabl.tabl.style.maxWidth = '300px';
        usertabl.style.marginBottom = '10px';
        usertabl.row(0).children.forEach(icell => {
            icell.classList.add('underscored');
            icell.style.fontSize = '18px';


        });

    }







}


function mySelectHandler(sel) {
    if (cont = document.querySelector('.container_d')) {
        // let count = cont.childElementCount; 

        // let ind_accessable = localStorage.getItem('useraccessable_index');
        // if (ind_accessable == null)
        //     ind_accessable = 0;

        // sel.selectedIndex = ind_accessable;

        localStorage.setItem('useraccessable_index', sel.selectedIndex);


        while (cont.childElementCount > 0)
            cont.removeChild(cont.lastChild);
    }
    devices();



}


function set_dev_amount(div) {



    let arr = div ? div.parentNode.parentNode.children : document.querySelector('.container_d').children;

    let texts = arr.Select(x => x.innerText.slice(0, 3).trim());
    let choosen = texts.Where(x => x.includes('✔')).length;
    let notchoosen = texts.Where(x => x.includes('...')).length;

    if (amnt = document.getElementById('amount')) {

        let select = document.getElementById('dev-select');
        let ind = select.selectedIndex;

        if (path = document.querySelector('.pathdiv'))
            if (!path.innerText.includes('users'))
                ind = 2;

        switch (ind) {
            case 0: amnt.innerText = choosen;
                break;
            case 1: amnt.innerText = notchoosen;
                break;
            case 2: amnt.innerText = choosen + ' (' + (texts.length - 1) + ')';
                break;


        }

    }



    let zz = -1;
}



function spanclick(evt) {
    evt.stopPropagation();
    let curr = evt.currentTarget;
    let parent = curr.parentNode;

    if (curr.innerText == '✔') {
        parent.style.opacity = '0.3';
        curr.innerText = '...';
    }
    else {
        parent.style.opacity = '1';
        curr.innerText = '✔';
    }

    set_dev_amount(evt.currentTarget);
    let r = -1;
}




function gendivs_from_array() {
    if (cont = document.querySelector('.container_d')) {
        let count = cont.childElementCount;
        while (cont.childElementCount > 0)
            cont.removeChild(cont.lastChild);

        // add  '+' button
        var div = document.createElement('div');
        div.accessKey = 'plusdevice'
        div.className = 'devclassplus';
        div.innerText = '+';

        // div.style.fontSize = '16px';
        // div.style.lineHeight = '48px';
        // div.style.textAlign = 'center';
        // div.style.paddingLeft = '5px';
        // div.style.paddingRight = '5px';
        cont.appendChild(div);

        // add dev buttons
        if (!isMobile()) {

            setelemProp('.devclassplus', 'min-width', '500px');
            setelemProp('.devclassplus', 'height', '40px');
            setelemProp('.devclassplus', 'margin-top', '5px');
            // div.style.marginTop = '5px';


            /*
                        let answDevices;
                        let lastgrpdata = null, lastuserparams = null, lastDevicesObject = null;
                        let alldevices = null, restricteddevices = null;
                        let userlist = null;
                        let custlist = null;
                        */



            let uob = userobj;
            let ul = userlist;
            let cl = custlist;
            let dev_ids = [];
            if (userobj != null) {
                let dvstr = userobj.devstr;

                if (dvstr != null) {
                    dev_ids = parse_devlist(userobj.devstr);
                    for (i = 0; i < dev_ids.length; i++) {
                        dev_ids[i] = parseInt(dev_ids[i]);

                    }
                }
            }


            devarray.forEach(x => {
                var div = document.createElement('div');
                div.className = 'devclass_pc';
                div.accessKey = 'devinside'
                // div.innerHTML = x.name + '<span style="color:rgb(150,150,140); white-space:pre;">    #' + x.Identifier + '</span>'
                //     + ' <span style="color:rgb(90,200,210);">' + x.address + '</span>';




                let symb = '...';
                let opacity = '0.3';

                if (userobj) {
                    if ((userobj.devstr == null) || /*userobj.devstr.includes*/ dev_ids.includes(x.Id)) {
                        symb = '✔';
                        opacity = '1';
                    }
                }

                // direct devices !!
                else {
                    if (x.device_enabled) {
                        symb = '✔';
                        opacity = '1';
                        //  : 'x';
                    }
                    else {
                        symb = '...';
                        opacity = '0.35';
                    }
                }

                div.style.opacity = opacity;
                div.innerHTML = `<span class=checkspan  onclick=spanclick(event) >${symb}</span>` +

                    '<span style="color:rgb(150,150,140); white-space:pre;padding-right:8px;">    #' + x.Identifier + '</span>' + x.name
                    + ' <span style="color:rgb(90,200,210);">' + x.address + '</span>';
                cont.appendChild(div);
            });
        }
        else
            devarray.forEach(x => {
                var div = document.createElement('div');
                div.className = 'devclass';
                div.accessKey = 'devinside'
                // div.innerHTML = x.name + '<span style="color:rgb(150,150,140); white-space:pre;">    #' + x.Identifier + '</span>'
                // + ' <br></><span style="color:rgb(90,200,210);">' + x.address + '</span>';
                div.innerHTML = '<span style="color:rgb(150,150,140); white-space:pre;padding-right:8px;">    #' + x.Identifier + '</span>' + x.name
                    + ' <span style="color:rgb(90,200,210);padding-left:4px;">' + x.address + '</span>';
                cont.appendChild(div);
            });

        Array.from(cont.children).forEach(x => {
            x.addEventListener('click', devinside_handler);
        });


        // while (cont.childElementCount > 0)
        //     cont.remove(cont.lastChild);


        set_dev_amount();
    }
}


let er = 0;

let navobj = getnavigation();
let clname = navobj.current.pop();
switchtopage(clname);

// let navigatinmode = localStorage.getItem('objectnavigation');
// let navobj = JSON.parse(navigatinmode);

// let modename = localStorage.getItem('admchoose');
// let arr = document.getElementsByClassName('abutton');
// if (arr) {
//     Array.from(arr).forEach(x => {
//         if (x.innerText.trim() == modename.trim())
//             x.click();


//     });


// }


function isMobile() {
    return window.navigator.userAgent.includes('Mobile');
}


if (isMobile()) {
    // if (div = document.querySelector('.header'))
    //     div.style.display = 'none';
    // if (dd = document.querySelector('.acontainer'))
    //     dd.style.marginTop = '2px';
    // document.querySelector('#tablecontainer').style.marginRight = '2.0vw';
}
if (!isMobile()) {
    var pc_color = getrootProp('--pc-background');
    setGlobalProp('--common-background', pc_color);
}


// set_user_container();
let ddd = 0;