



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
                bc.postMessage('allgrp=close()');
                ewin = window.open('../allgrp/allgrp.html');

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
                //   cc.innerText = srctext;
                // }, 600);


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


            break;


    }



}
