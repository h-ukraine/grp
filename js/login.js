const CmdType = {
    None: 0,
    SomeText: 1,
    GetLastSkzData: 2,
    GetDevices: 3,
    SaveLatLng: 4,
    Login: 5
}

let mode;

localStorage.removeItem('tmppw');

var first_mode4 = true;

function setmode(diff) {

    if (diff > 99) {
        mode = Math.min(6, ++mode);
    } else if (diff < -99) {
        mode = Math.max(0, --mode);
    } else
        mode = diff;
    // switch_to_subpage(mode);
    if (mode == 5) {
        // var pg1 = document.querySelector('.subpage1');

        // pg1.style.display = 'none';
        // var pg2 = document.querySelector('.subpage2').style.display = '';
        // switch_to_subpage(mode);

    } else
    if (mode == 4) {
        {
            // init_myorion();
            // window.dispatchEvent(new Event('resize'));
            if (first_mode4) {
                first_mode4 = false;
                // toMaxZoom();
            }
        }


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

        // setstyle.display('endfooter', 'none');
        if (div = document.getElementById('endfooter'))
            div.style.display = 'none';

    } else if (mode == 0) {
        if (div = document.getElementById('maindiv'))
            div.style.display = '';
        if (element = document.getElementById('mainmain'))
            element.classList.add("container");

        if (p = document.getElementsByClassName('mypage1')) {
            var maincont = p[0];
            p[0].style.display = 'none';
        }

        // setstyle.display('endfooter', 'block');
        if (div = document.getElementById('endfooter'))
            div.style.display = 'block';
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

        // setstyle.display('endfooter', 'none');
        if (div = document.getElementById('endfooter'))
            div.style.display = 'none';
    }
}

function come_in(evt) {
    var login = document.getElementsByName('login');
    if (login.length)
        login = login[0];

    var password = document.getElementsByName('password');
    if (password.length)
        password = password[0];

    var rememb = document.getElementById('remember');



    var log = login.value;
    var pass = password.value;
    var checked = rememb ? rememb.checked : false;


    var logobj = new Object({ type: "login", login: log, password: pass, remember: checked });


    browserSendTime = new Date();
    browserSend_ms = performance.now(); //    new Date().getTime();
    //
    cmdobj = new Object({
        type: '_wsocket',
        // caller: 'main',
        caller: 'login',
        ObjectType: CmdType.Login,
        login: log,
        password: pass,
        checked: checked

    });
    // send to websocket via worker
    bc.postMessage(cmdobj);

    // setmode(-1);
    // setmode(1);
}


//*************************/ BROADCASTING AND WORKER

const bc = new BroadcastChannel('test_channel');
bc.onmessage = function(ev) {

    msg = ev.data;
    var proba = null
    if (!msg.type) {
        msg = JSON.parse(msg);
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
            // askSkzData();
            break;

        case "answer":
            // if (msg.caller == 'main') {
            if (msg.caller == 'login') {

                var loginame = window.name;
                // var sdfg = location.origin;

                // wrapCmd(msg);
                var div = document.createElement('div');

                div.style.display = 'hidden';

                var jstr = JSON.stringify(msg);
                console.log('-------------------------- totalid=' + msg.totalid);
                localStorage.setItem('tmppw', jstr);

                var path = 'dashboard.html';
                // var path = 'index2.html';
                path += '?map=force&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"';
                window.name = 'log234';
                ewin = window.open(path, window.name);
                // ewin = window.open(path, '_blank');


                // if (confirm('Вы действительно хотите закрыть страницу?')) {

                // window.close();
                // }

                // window.close();
                // var t = document.getElementById('toskz');
                // t.href = 'http://' + location.host + '/data/index2.html';

                // t.href += '?map=force&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"';
                // // t.href += '?map=force&pw="' + msg.sertif + '"';
                // t.click();



                break;

            }
    }
}



function onready() {

    var subm = document.getElementById('subm');

    subm.addEventListener('click', come_in);
    // var md = localStorage.getItem('picomode');
    mode = 0;


    // if (div = document.getElementById('subm')) //авто переход на главную
    //     subm.click();
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



function mySelectHandler(evt) {
    evt.blur();

    setmode(evt.selectedIndex);
}



var e = document.documentElement;



function setGlobalProp(prop, val) {
    var root = document.querySelector(':root');
    // var rootStyles = getComputedStyle(root);
    root.style.setProperty(prop, val);
    // root.style.setProperty('--main-color', '#88d8b0');
}

function getGlobalProp(prop, val) {
    var root = document.querySelector(':root');
    // var rootStyles = getComputedStyle(root);
    return root.style.getPropertyValue(prop);
}

window.onload = () => {
    onready();
    if (sessionStorage && !sessionStorage.getItem('my_first_time')) {
        sessionStorage.setItem('my_first_time', true);
        window.location.reload();
    }
}


function myexit(evt) {
    var t = 0;
    // self.close();
}