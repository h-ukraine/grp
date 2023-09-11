const bc = new BroadcastChannel('test_channel');



function openPageUniversal(e) {
    var tmaxobj = new Object({
        type: "tmax=300"
    });
    // bc.postMessage(tmaxobj);
    var div = e.currentTarget;



    switch (div.innerText) {
        case 'Профіль':
            {
                e.stopPropagation();
                bc.postMessage('all=close()');
                gotoLogin();
                return;
                break;
            }
        case 'Карта':
            {
                var mapcloseobj = new Object({
                    type: "map=close()"
                });
                bc.postMessage(mapcloseobj);
                var path = './index2.html?map=force';
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
                bc.postMessage('allgrp=close()');
                var path = 'allgrp/allgrp.html';
                path += '?map=force&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"';
                var ewin = window.open(path);
                // ewin = window.open('../allgrp/allgrp.html');

                break;
            }

        case 'Архів':
            {


                bc.postMessage('archive=close()');
                var path = 'archive/archive.html';
                path += '?map=force&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"';
                var ewin = window.open(path);
                // ewin = window.open('allgrp/allgrp.html');


                // var srctext = div.innerText;
                // e.stopPropagation();
                // e.currentTarget.innerText = 'Сторінка у розробці';
                // var cc = e.currentTarget;
                // setTimeout(() => {
                //   cc.innerText = srctext;
                // }, 600);


                break;
            }
        case 'Адміністрування':
            {
                bc.postMessage('man=close()');
                var path = 'man/man.html';
                path += '?map=force&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"';
                var ewin = window.open(path);
                localStorage.setItem('admchoose', '');
            }
            break;

        case 'Очистити':
            {
                // var mapcloseobj = new Object({
                //     type: "all=close()"
                // });
                bc.postMessage('all=close()');
                // bc.postMessage(mapcloseobj);
            }
            break;

    }
}


function gotoLogin(e) {

    var a = document.createElement('a'); //                   document.getElementById('toskz2');
    // t.href = 'http://skz.onserver.site:49020/data/login.html';
    //a.href = 'http://' + location.host + '/data/login.html';
    a.href = './';
    // t.href += '?map=force&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"';
    // t.href += '?map=force&pw="' + msg.sertif + '"';
    a.click();
}

function tologin() {
    var nav = navigator;
    var loc = window.location;
    var history = window.history;
    localStorage.removeItem('tmppw');

    history.back();
}