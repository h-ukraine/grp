function isJSON(str) {
    if (!str) {
        return;
    }
    if (/^\s*$/.test(str)) return false;
    str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
    str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
    str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
    return (/^[\],:{}\s]*$/).test(str);
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function log(txt) {
    if (div = document.getElementById('textbox')) {
        var mySplits = div.innerText.split("\n");

        if (mySplits.length >= 7) {
            var n = div.innerText.indexOf('\n');
            // var n2 = div.innerText.substr(n + 1, div.innerText.length).indexOf('\n');
            // var sss = div.innerText.substring(0, n + 1);
            // var sss2 = div.innerText.substr(n2 + 1, div.innerText.length);
            var sss = div.innerText.substr(n + 1, div.innerText.length);
            div.innerText = sss + txt + "\n";


        } else
            div.innerText = div.innerText + txt + "\n";

        div.scrollIntoView({
            block: "end"
        });

    }


}

var on_cnt = 1;
let ewin = null;




function gotoTab(evt) {
    var description = evt.target.innerText;

    if (description && description != '.' && description != '---') {
        var dev = devchk.answDevices.filter(x => x.description == evt.target.innerText)[0];
        if (dev)
            on_on(dev.Id);
    }
}


function on_on(Id) {
    var dev = devchk.answDevices.filter(x => x.Id == Id)[0];
    log('Click on dev.Id=' + Id + '...cnt:' + on_cnt++);
    bc.postMessage(dev.description + '=close()');

    // setTimeout(() => {



    // var yyy = location.host + 'example.com'
    // window.open(location.host + '/example.com');


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
    // sessionStorage.setItem('alarm_tmp_params_' + dev.Id, JSON.stringify(params));

    // setTimeout(() => {
    if (dev.binarytype == 0x40)
        ewin = window.open('./pages/tmpgrp.html?device_Id=' + dev.Id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');
    if (dev.binarytype == 0x42)
        ewin = window.open('./pages/tmp.html?device_Id=' + dev.Id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');


    // }, 2000);
    // var ref = ['/data/pages/tmp.html?device_Id=23', '/data/pages/tmp.html?device_Id=24']
    // ewin = window.open(ref, '_blank');
    // ewin = window.open('/data/pages/tmp.html?device_Id=' + dev.Id, "_blank", "top=210, start=200, width=400,height=380");
    // }, 200);

    return;






    // const html = `
    // <head><meta charset='UTF-8'><title>Test</title></head>
    // <body>
    //   <p>Text.</p>
    // </body>`;
    var hhh = '<html><head><link rel="stylesheet" href="css/conta.css">  </head><body>  </body></html>';
    // window.open('<html><head> ФФФФФФФФФФФФФФФ</head><body></body></html>');
    // window.location.open('about:blank').document.documentElement.innerHTML = hhh;

    var newWindow = window.open();
    newWindow.document.write(hhh);

    // а потом сделать

    var div22 = newWindow.document.createElement('div');
    // var div = newWindow.document.getElementById('f2');




    //var rrr = new jsDivTable(newWindow.document.body, div22, 4, 4);







    // var ggg = '<html><head> </head><body>' + div22.outerHTML + '</body></html>';

    // newWindow.document.write(ggg);
    // newWindow.document.body.appendChild(div22);


}


let bdv_vis_mode = 'block';

function toggle_bdv() {

    // var mrks = markers.getLayers();


    // // var myr = document.getElementsByClassName('myround');
    // for (i = 0; i < mrks.length; i++) {
    //     {
    //         // myr[i].classList.remove('myround');
    //         var uuu = mrks[i]._icon.children[0].style.display = 'none'; //          classList.add('myhiddenround');
    //         var eee = 5;
    //     }


    // }
    // return;

    // var rootStyles = getComputedStyle(myr);
    // var t = getelemProperty(myr, 'display');
    // myr.style.setProperty('display', t == 'none' ? 'block' : 'none');
    // return;



    //изменим глобально свойство класса...
    // var b_dv_class = document.querySelector('.bdvclass');
    // var rootStyles = getComputedStyle(b_dv_class);
    // b_dv_class.style.setProperty('display', t == 'none' ? 'block' : 'none');

    //
    // var b_dv = document.querySelector('b-dv');
    // var rootStyles = getComputedStyle(b_dv);
    // var t = getelemProperty(b_dv, 'display');
    // b_dv.style.setProperty('display', t == 'none' ? 'block' : 'none');

    //через свойство класса...
    // var bdvclass = document.querySelector('.bdvclass');

    bdv_vis_mode = bdv_vis_mode == 'none' ? 'block' : 'none'; //  
    var b_dv = document.querySelector('b-dv');
    var rootStyles = getComputedStyle(b_dv);
    b_dv.style.display = bdv_vis_mode;

    var arr = document.getElementsByTagName('b-dv');
    for (i = 0; i < arr.length; i++) {
        var element = arr[i]
        element.style.display = bdv_vis_mode; //   t == 'none' ? 'block' : 'none';
    }

    // var rootStyles = getComputedStyle(bdvclass);
    // var t = getelemProperty(bdvclass, 'display'); bdvclass.style.setProperty('display', t == 'none' ? 'block' : 'none');
    // elem.style.setProperty('--localValue', Math.min((_height) * wcnt / 100, _height) + 'px');



    return;
}


var aonly = false,
    tonly = false,
    normonly = false;

function setradiobuttons() {
    // var arr = ['aonly', 'tonly', 'allmarkers'];
    // arr.forEach( x=> {
    //     if( div = document.querySelector(x))
    //      {


    //      }

    // });
    var normback = 'rgba(90,90,90,0.6)';
    var accent = 'rgba(20,20,20,0.8)'; //             'rgba(10,20,255,0.8)'; //            'rgb(100,230,50,0.75)';
    var yellowwhite = 'rgb(255, 255, 160)';

    if (div = document.querySelector('#alarmonly')) {
        // var r = div.className = 'alldivdark';
        // r.style.background = aonly ? accent : normback;
        div.className = aonly ? 'alldivdark' : 'alldivcentered';
        // div.style.background = aonly ? accent : normback;
        div.style.color = aonly ? 'rgba(250,250,120,1)' : 'white';
    }
    if (div = document.querySelector('#tmonly')) {
        div.className = tonly ? 'alldivdark' : 'alldivcentered';
        // div.style.background = tonly ? 'rgba(20,20,40,0.7)' : normback;
        // div.style.background = tonly ? accent : normback;
        div.style.color = tonly ? 'rgba(250,250,120,1)' : 'white';

    }
    if (div = document.querySelector('#normonly')) {
        div.className = normonly ? 'alldivdark' : 'alldivcentered';
        // div.style.background = normonly ? 'rgba(41, 170, 24, 0.594)' : normback;
        // div.style.background = normonly ? accent : normback;
        div.style.color = normonly ? yellowwhite : 'white';
    }
    refresh_objects_on_map();
}




let chtypesav = 0;
let chtypemode = 0; // 0 - all, 1 -grponly, 2 - skzonly


function showtypemode(mode) {
    var divchmode = document.querySelector('#choosetype');
    if (divchmode) {
        switch (chtypemode) {
            default:
                case 0:
                divchmode.innerText = 'Всі';
            break;
            case 1:
                    divchmode.innerText = 'ГРП';
                break;
            case 2:
                    divchmode.innerText = 'СКЗ';
                break;


        }
        if (target = document.querySelector('#mytabs')) //         ('#sw555'))
        // target.innerText = 'Відображати вузли: ' + divchmode.innerText;
            target.innerText = 'Доступні вузли:' + divchmode.innerText;
    }
}



var rtmpr = localStorage.getItem('chtypemode');
// if (rtmpr != undefined) {
var e = parseInt(rtmpr);
if (e != undefined) {

    if (isNaN(e))
        e = 0;
    showtypemode(chtypemode = e);
}


// }
var rrrdunnn = 44546;
// if (r = localStorage.getItem('chtypemode'))
//     chtypemode = r;

function choose_types(e) {
    var target;
    if (e) {
        e.stopPropagation();
        target = e.currentTarget;

    }
    // else
    //     target = document.querySelector('#sw555');
    chtypemode++;
    if (chtypemode >= 3)
        chtypemode = 0;


    showtypemode(chtypemode);

    // var divchmode = document.querySelector('#choosetype');
    // if (divchmode)
    //     switch (chtypemode) {
    //         case 0: divchmode.innerText = 'Всі';


    //             break;
    //         case 1: divchmode.innerText = 'ГРП';
    //             break;
    //         case 2: divchmode.innerText = 'СКЗ';
    //             break;


    //     }
    // if (target)
    //     target.innerText = 'Вузли: ' + divchmode.innerText;



    localStorage.setItem('chtypemode', chtypemode);
}


function toggle_alarmonly() {

    if (!aonly) {
        aonly = true;
        tonly = normonly = false;
    } else
        aonly = false;
    setradiobuttons();

}

function toggle_tmonly() {
    if (!tonly) {
        tonly = true;
        aonly = normonly = false;
    } else
        tonly = false;
    setradiobuttons();
}

function force_all() {
    if (!normonly) {
        normonly = true;
    } else
        normonly = false;
    aonly = tonly = false;
    setradiobuttons();

}

function setdraggable(display) {

    var all = [];
    markers.eachLayer(x => all.push(x));
    markers.clearLayers();

    var nall = [];
    all.forEach(imark => {
        imark.options.draggable = (display == 'none' ? false : true);
        var marker0 = L.marker();
        marker0.options = imark.options;
        marker0._events = imark._events;
        marker0._popup = imark._popup;
        marker0._popupHandlersAdded = imark._popupHandlersAdded;
        marker0._leaflet_id = imark._leaflet_id;
        marker0._latlng = imark._latlng;
        // marker0 = L.marker(new L.LatLng(imark._latlng.lat, imark._latlng.lng),
        //     imark.options
        // );
        nall.push(marker0);
    })

    markers.addLayers(nall);
}

/*
    function setdraggable_old(display) {

        var bb = map._layers;
        var cc = map._targets;
        // var brr = markers.eachLayer((x) => all.push(x));
        var layers = markers.getLayers().Where(x => x.dragging);
        // layers = markers._featureGroup._layers;

        // if (layers instanceof L.MarkerClusterGroup) {
        //     layers = layers._topClusterLevel.getAllChildMarkers();
        // } else if (layers instanceof L.LayerGroup) {
        //     layers = layers._layers;
        // } else if (layers instanceof L.MarkerCluster) {
        //     layers = layers.getAllChildMarkers();
        // } else if (layers instanceof L.Marker) {
        //     layers = [layers];
        // } // else: must be an Array(L.Marker)|Map(L.Marker)
        // this._flagParentsIconsNeedUpdate(layers);
        // this._refreshClustersIcons();

        // // In case of singleMarkerMode, also re-draw the markers.
        // if (this.options.singleMarkerMode) {
        //     this._refreshSingleMarkerModeMarkers(layers);
        // }

        // return this;
        // markers.eachLayer(x => {
        //     markers.eachLayer(x => x != null);

        //     var y = markers._topClusterLevel.getAllChildMarkers().Where(m => m.options.devId == x.options.devId);

        //     y.dragging.enable();

        // });
        // return;

        var all = [];
        markers.eachLayer((x) => all.push(x));

        markers.clearLayers();
        var nall = [];


        all.forEach(x => {
            var imark = x;
            // var sss = JSON.stringify(imark.options.icon);
            // var ic = JSON.parse(sss);


            //
            // marker0 = L.marker(new L.LatLng(imark._latlng.lat, imark._latlng.lng), {
            //     title: imark.options.title,
            //     devId: imark.options.devId,
            //     draggable: true,
            //     icon: imark.options.icon
            // });
            imark.options.draggable = true;
            var marker0 = L.marker();
            marker0.options = imark.options;
            marker0._events = imark._events;
            marker0._popup = imark._popup;
            // var rt = imark._popupHandlersAdded;
            marker0._popupHandlersAdded = imark._popupHandlersAdded;
            marker0._leaflet_id = imark._leaflet_id;
            marker0._latlng = imark._latlng;
            // marker0 = L.marker(new L.LatLng(imark._latlng.lat, imark._latlng.lng),
            //     imark.options
            // );
            nall.push(marker0);


            // imark.options.draggable = true;
            // nall.push(imark);



        })

        markers.addLayers(nall);

        return;



        // markers3.eachLayer((x) => all.push(x));

        // var arr = markers._topClusterLevel.getAllChildMarkers();

        // for (i = 0; i < all.length; i++) {
        //     var imarks = markers._topClusterLevel.getAllChildMarkers().Where(x => x.options.devId == arr[i].options.devId);
        //     imarks[0].dragging.enable();
        // }
        // return;
        var imarks = markers._topClusterLevel.getAllChildMarkers().Where(x => x.options.devId == 24);
        arr.forEach(x => x.dragging.enable());

        var imark = imarks[0];
        imark.dragging.enable();
        // markers.removeLayer(imark);

        marker0 = L.marker(new L.LatLng(imark._latlng.lat, imark._latlng.lng), {
            title: imark.options.title,
            devId: imark.options.devId,
            draggable: imark.options.draggable,
            icon: imark.icon
        });

        // marker0.dragging.enable();

        // markers.addLayer(marker0);

        return;


        // marker0 = L.marker(new L.LatLng(lng, lat), {
        //     // title: title,
        //     title: dev.description != 'надо_редактировать' ? dev.description : dev.description + '_id=' + dev.Id,
        //     devId: dev.Id,
        //     myoption: 0,
        //     draggable: false,
        //     // icon: redIcon,
        //     icon: L.divIcon({

        //             // html: '<b-dv style="display:' + bdv_vis_mode + ';">' + dev.description + '</b-dv>',
        //             html: '<b-dv style="display:' + bdv_vis_mode + ';">' + 1 + '</b-dv>',
        //             // html: '<b-dv ">' + dev.inventory_name + '</b-dv>',
        //             // html: '<b>' + cluster.getChildCount() + '</b>',
        //             iconSize: new L.Point(34, 34),
        //             className: dev.name == '1' ? 'myround_grey' : 'myround',
        //             myparam: 0

        //         })
        //         // icon: i < 50 ? cpuIcon : i < 70 ? redIcon : alarmIcon,
        //         // pane: 'mark2'

        // });










        markers.eachLayer((layer) => {
            layer.options.draggable = true;


        });
        markers.refreshClusters();
        return;


        if (display == 'none') {
            // make all markers nondraggable
            all.forEach(x => {
                x.options.draggable = false;
            });
            markers.eachLayer((x) => {
                x.options.draggable = false;
                // markers._refreshSingleMarkerModeMarkers(x);
            });

            // markers.eachLayer( (x)=>
            // {
            //     if( )



            // });
            markers.clearLayers();
            markers.addLayers(all);

            // markers3.eachLayer((x) => {
            //     x.options.draggable = 'false';
            //     markers._refreshSingleMarkerModeMarkers(x);
            //     markers._refreshSingleMarkerModeMarkers(x);
            // });
            //          (layers);
        } else {
            markers.eachLayer((x) => {
                x.dragging.enable();


                // refreshInMasterClusterGroup(markers, x);
            });
            // // all markers draggable
            // all.forEach(x => {
            //     x.options.draggable = true;
            //     x.options.ddd = 6;
            // });
            // // markers.eachLayer((x) => x.options.draggable = 'true');
            // // markers3.eachLayer((x) => x.options.draggable = 'true');
            // markers.clearLayers();
            // markers.addLayers(all);
        }

    }


*/





function toggle_footer(x) {

    eget = document.getElementsByClassName('flexfooter')[0];
    var t = getelemProperty(eget, 'display');

    //через свойство класса...
    var footerclass = document.querySelector('.flexfooter');
    var rootStyles = getComputedStyle(footerclass);
    footerclass.style.setProperty('display', t == 'none' ? 'block' : 'none');
    setdraggable(footerclass.style.display);
    // elem.style.setProperty('--localValue', Math.min((_height) * wcnt / 100, _height) + 'px');
    return;

    //тоже работает:  через div? - разобраться
    setelemProperty(eget, 'display', t == 'none' ? 'block' : 'none');
    return;

    var prp = eget.style.display;
    eget.style.display = t == 'none' ? 'block' : 'none';
    return;

    var pg1 = document.querySelector('.flexfooter');
    if (pg1) {
        if (x) {
            pg1.style.display = '';
        } else {
            pg1.style.display = 'none';
        }
    }
    // var pg1 = document.querySelector('.subpage1');

    // pg1.style.display = 'none';
    // var pg2 = document.querySelector('.subpage2').style.display = '';
    // switch_to_subpage(mode);
}


function getelemProperty(elem, propname) {
    // var elem = document.getElementById(elem_id);
    // var cls = document.getElementsByClassName(classname)[0];
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue(propname);
    return theCSSprop;
}

function setelemProperty(elem, propname, value) {




    // var elem = document.getElementById(elem_id);
    // var cls = document.getElementsByClassName(classname)[0];
    var theCSSprop = window.getComputedStyle(elem); //, null).getPropertyValue(propname);
    // var qqq = window.getComputedStyle(elem, null);
    elem.style.setProperty(propname, value);
    // return theCSSprop;
}


function toggle_flextable(x) {
    // if (div = document.querySelector('.flextable')) {
    //     var dsp = div.style.display;
    //     div.style.display = dsp == '' ? 'none' : '';
    // }

    var eget = document.getElementsByClassName('.flextable');
    eget = document.getElementsByClassName('flextable')[0];
    var t = getelemProperty(eget, 'display');
    var prp = eget.style.display;
    // eget.style.display = eget.style.display == '' ? 'none' : '';
    eget.style.display = t == 'none' ? 'block' : 'none';
    // if (sel = document.querySelector('.flextable')) {
    //     var dsp = sel.style.getProperty('display');
    //     dsp.style.display = dsp == '' ? 'none' : '';


    // }
}




function printstat(once = false) {


    if (div = document.getElementById('textbox1')) {
        var alm = markers.getLayers().length;
        var ack = markers3.getLayers().length;

        var nrm = markers2.getLayers().length;
        var msg = (alm + ack + nrm) + ', в тому числі:\n';
        msg += '------------------------------------------------\n';
        msg += (alm > 99 ? "" : alm > 10 ? " " : "  ") + alm.toString() + ' - аварійні\n';
        msg += ack.toString().padStart(4, ' ') + " - підтверджені аварії\n";
        msg += nrm.toString().padStart(4, ' ') + ' - у нормі';
        div.innerText = msg;

    }
    // if (once)
    //     if (tb = document.getElementById('textbox')) {
    //         tb.innerText = 'Подтвержденные аварии:\n'

    //     }

}



function markerInCluster(marker, clust) {
    clust.EachLayer(layer => {
        if (layer.options.title == marker.options.title)
            if (layer.options.icon.options.html == marker.options.icon.options.html)
                return layer;
    });
    return null;
}


//add to markers or refresh if changed
function refreshInMasterClusterGroup(cluster, marker) {

    // if (aonly && (marker.options.alarmstatus != 'alarm'))
    //     cluster.removeLayer(marker)

    // if (chtypemode != chtypesav) {
    //     chtypesav = chtypemode;
    // markers3.eachLayer((layer) => {
    //     markers3.removeLayer(layer);
    // });
    // markers3.refreshlayers();

    // }



    if (chtypemode > 0) {
        if (chtypemode == 1) {
            if (marker.options != null) {



                var ddd = devchk.answDevices.Where(x => x.Id == marker.options.devId);
                var tdev = null;
                if (ddd.length > 0) {
                    tdev = ddd[0];
                    if (tdev.binarytype != 0x40) {


                        cluster.eachLayer(function(layer) {
                            if (layer.options.title == marker.options.title) {
                                cluster.removeLayer(layer);
                            }
                        });
                        return;
                        // cluster.removeLayer(marker);
                    }
                }

                var nnn = 789;
            }

        } else if (chtypemode == 2) {
            if (marker.options != null) {

                var ddd = devchk.answDevices.Where(x => x.Id == marker.options.devId);
                var tdev = null;
                if (ddd.length > 0) {
                    tdev = ddd[0];
                    if (tdev.binarytype != 0x42) {


                        cluster.eachLayer(function(layer) {
                            if (layer.options.title == marker.options.title) {
                                cluster.removeLayer(layer);
                            }
                        });
                        return;
                        // cluster.removeLayer(marker);
                    }
                }

                var nnn = 789;
            }

        }



    }



    var _exists = false;


    cluster.eachLayer(function(layer) {
        if (layer.options.title == marker.options.title) {
            _exists = true;
            if (aonly && (marker.options.alarmstatus != 'alarm')) {
                cluster.removeLayer(layer);
                return;
            }
            if (tonly && (marker.options.alarmstatus != 'timeout')) {
                cluster.removeLayer(layer);
                return;
            }
            if (normonly && (marker.options.alarmstatus != 'normal')) {
                cluster.removeLayer(layer);
                return;
            }




            if ((layer.options.icon.options.html != marker.options.icon.options.html) ||
                (layer.options.alarmstatus != marker.options.alarmstatus)) {
                cluster.removeLayer(layer);
                cluster.addLayer(marker);
            }
            var bbb = layer.getLatLng();
            // if ((layer.getLatLng().lat != marker.getLatLng().lat) ||
            //     (layer.getLatLng().lng != marker.getLatLng().lng)) {
            //     cluster.removeLayer(layer);
            //     cluster.addLayer(marker);
            // }
        }
    });
    if ((aonly && (marker.options.alarmstatus != 'alarm')) ||
        (tonly && (marker.options.alarmstatus != 'timeout')) ||
        (normonly && (marker.options.alarmstatus != 'normal'))) {
        return;
    } else if (!_exists) {

        // if (chtypemode == 1)
        var ebintype = marker.options.binarytype;
        if ((ebintype == 0x40) || (ebintype == 0x42))
            cluster.addLayer(marker);
    }
}




// var markers = L.markerClusterGroup();
var markers = L.markerClusterGroup({
    disableClusteringAtZoom: 17,

    divicon: 5,

    clsname: 'mytransparent',

    iconCreateFunction: function(cluster) {
        // return new L.DivIcon({
        //     html: '<div><span>' + cluster.getChildCount() + '</span></div>',
        //     className: 'myalarm',
        //     iconSize: new L.Point(40, 40)
        // });
        var marks = cluster.getAllChildMarkers();
        var status = 'normal';
        marks.forEach(x => {
            if ((x.options.alarmstatus == 'timeout') && (status != 'alarm'))
                status = 'timeout';
            if ((x.options.alarmstatus == 'alarm')) //&& status != 'timeout')
                status = 'alarm';

        });

        switch (status) {
            case 'normal':
                this.clsname = 'mynormal';
                break;
            case 'timeout':
                this.clsname = 'notused';
                break;
            case 'alarm':
                this.clsname = 'myalarm';
                break;

        }


        return this.divicon = L.divIcon({
            html: '<div style="text-align:center;">' + cluster.getChildCount() + '</div>',
            // html: '<b>' + cluster.getChildCount() + '</b>',
            iconSize: new L.Point(44, 44),
            // className: 'myalarm',
            className: this.clsname,

        });
    },
});

// markers.prototype.hasSameLayer = function(element) {
//     this.push(element);
// };
// var markers2 = L.markerClusterGroup();
var markers2 = L.markerClusterGroup({
    disableClusteringAtZoom: 17,
    iconCreateFunction: function(cluster) {

        var tt =
            new L.DivIcon({
                html: '<div ><span >' + cluster.getChildCount() + '</span></div>',
                // className: 'mynormal',
                className: 'acked',
                iconSize: new L.Point(40, 40),

            });
        // tt.Icon.style.textAligne = 'center';
        // tt.removeClass('my-div-icon');
        return tt;
    }
});

var markers3 = L.markerClusterGroup({
    disableClusteringAtZoom: 17,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: '<div style="text-align:center;">' + cluster.getChildCount() + '</div>',
            // html: '<b>' + cluster.getChildCount() + '</b>',
            iconSize: new L.Point(44, 44),
            className: 'mynormal',
        });
    }
});




////////
var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
            // myparam: 0
    }
});

var _cpuIcon = L.Icon.extend({
    options: {
        iconSize: [45, 45],
        shadowSize: [50, 64],
        // iconAnchor: [22, 94],
        iconAnchor: [20, 45],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76],


    }
});
var greenIcon = new LeafIcon({
    iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
    shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
});

var redIcon = new LeafIcon({
    iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-red.png',
    shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    myparam: 0

});

var cpuIcon = new _cpuIcon({
    // iconUrl: './processor-64x64.png'
    // iconUrl: './TFT_128.png',
    iconUrl: './prapor2.png',
    opacity: '0.95',
    className: 'halfopacity',

});
var alarmIcon = new _cpuIcon({
    // iconUrl: './processor-64x64.png'
    iconUrl: './alarm2.png',
    opacity: '0.95',
    className: 'halfopacity',
    myparam: 0
});

let map = null;
///////
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
    }),
    // latlng = L.latLng(50.0, 30.42);
    latlng = L.latLng(50.0, 36.25);




// let bdvmode = 'block';

function AllMarkers(clustergroup) {
    var arr = [];
    clustergroup.eachLayer((layer) => {
        arr.Add(layer);
    });
    return arr;
}

function FindMarkerByTitle(imarker, clustergroup) {


    var result = clustergroup.getLayers();

    var one = result.Where(x => x.options.title == imarker.options.title);
    return one[0];







    var _exists = false;
    clustergroup.eachLayer(function(layer) {

        // if (layer.name==name) {
        if (layer.options.title == imarker.options.title) {
            return layer;
            _exists = true;
            // markers.zoomToShowLayer(layer, function() {

            //     layer.openPopup();

            // });

        }
    });
    return null;
    // if (!_exists)
    //     markers.addLayer(marker0);

}



function correctLatLng() {
    if (!map)
        return;

    // var dvstore = localStorage.getItem('devstorage');
    // if (dvstore)
    //     if (devchk.answDevices.length == 0) {
    //         devchk.answDevices = dvstore;
    //     }

    // if (dvstore != devchk.answDevices)
    //     if (devchk.answDevices.length > 0)
    //         localStorage.setItem('devstorage', devchk.answDevices);
    return devchk.answDevices;

    var arr = devchk.answDevices.sort((a, b) => a.Id - b.Id);

    for (i = 0; i < arr.length; i++) {
        // var lat = arr[i].latitude;
        // var lng = arr[i].longitude;

        var other = arr.Where(x => x.Id > arr[i].Id);

        // var mass = [];
        // for (k = 0; k < other.length; k++) {
        //     klat = other[k].latitude;
        //     klng = other[k].longitude;
        //     var difflat = klat - lat;
        //     var difflng = klng - lng;

        //     if (Math.abs(klat - lat) < 0.005)
        //         if (Math.abs(klng - lng) < 0.005)
        //             mass.push(other[k]);

        // }

        var delta = 0.00008;
        var other2 = other.Where(x => (Math.abs(x.latitude - arr[i].latitude) < delta) &&
            (Math.abs(x.longitude - arr[i].longitude) < delta));

        var zlev = map.getZoom();

        var shift = 0.00010;
        var coeff = 1;
        if (zlev == 17)
            shift = 0.00011 * 2;

        else if (zlev == 16)
            shift = 0.00011 * 4;

        else if (zlev == 15)
            shift = 0.00011 * 8;
        else if (zlev == 14)
            shift = 0.00011 * 16;
        else if (zlev == 13)
            shift = 0.00011 * 32;
        else if (zlev == 12)
            shift = 0.00011 * 64;
        else if (zlev == 11)
            shift = 0.00011 * 128;
        else if (zlev == 10)
            shift = 0.00011 * 220;



        if (other2.length > 0)
            for (m = 0; m < other2.length; m++) {
                switch (m) {
                    case 0:
                        other2[m].latitude -= shift * coeff;
                        other2[m].longitude -= shift * coeff;
                        break;
                    case 1:
                        other2[m].latitude -= shift * coeff;
                        other2[m].longitude += shift * coeff;
                        break;
                    case 2:
                        other2[m].latitude += shift * coeff * 0.75;
                        other2[m].longitude += shift * coeff * 0.75;
                        break;
                    case 3:
                        other2[m].latitude += shift * coeff;
                        other2[m].longitude -= shift * coeff;
                        break;


                }
                // if (m == 0) {

                // }

                var bl = devchk.answDevices.Where(x => x.Id == other2[m].Id);
                if (bl) {
                    bl[0].latitude = other2[m].latitude;
                    bl[0].longitude = other2[m].longitude;
                }
            }

        var e = 0;


    }
    return devchk.answDevices;
}



var alarmflags = 0;
var alarmflsav = 0;

function alarmflagschanged(a, t, n) {
    alarmflags = (a ? 1 : 0) + (t ? 2 : 0) + (n ? 4 : 0);
    if (alarmflsav != alarmflags) {
        alarmflsav = alarmflags;
        return true;
    }
    return false;
}



function parse_devlist(str) {
    var s1 = str.trim();

    var s2 = s1.split(',');
    for (var i = 0; i < s2.length; i++)
        s2[i] = s2[i].trim();

    return s2;
}



var firstrefresh = true;

function refresh_objects_on_map(forcerefresh = false) {
    if (!map)
        return;
    // console.log("refresh_objects_on_map");
    var needrepack = alarmflagschanged(aonly, tonly, normonly);
    if (forcerefresh)
        needrepack = true;

    if (needrepack) {
        var t = -234;
        markers.clearLayers();
        markers3.clearLayers();
        // if (aonly)
        //     markers.options.clsname = 'myalarm';
        // else if (tonly)
        //     markers.options.clsname = 'notused';
        // else if (normonly) {
        //     markers.options.clsname = 'mynormal';
        // } else {
        //     markers.options.clsname = 'mytransparent';
        // }

    }

    var _t1 = performance.now();
    //
    // map.removeLayer(markers);
    // markers.clearLayers();

    // markers.clearLayers();
    // markers3.clearLayers();

    // document.querySelector('#userLat1').value = ll.lat;
    var delta = 0.0070;
    var startLng = 50.0732,
        startLat = 36.2804;


    var zoomlevel = -1;
    if (map)
        zoomlevel = map.getZoom();

    var corrected = correctLatLng();
    corrected = corrected.sort((a, b) => a.Id - b.Id);


    corrected = limitbyuser(corrected);
    // if (corrected.length > 0) {
    //     var b = 0;


    //     var tmppw = localStorage.getItem('tmppw'); //last_objgrp.devlist;
    //     if (isJSON(tmppw)) {
    //         var nnn = JSON.parse(tmppw);
    //         if (nnn) {
    //             var eee = nnn.customs.devlist;

    //             var dev_ids = parse_devlist(eee);  //devlist; //userobj.customs.devlist;


    //             // if (str) {
    //             //   var dev_ids = parse_devlist(str);

    //             var devlist2 = corrected.Where(x => dev_ids.includes(x.Id.toString()));

    //             // var devlist2 = devlist.Where(x => devlist.includes(x.Id.toString()));
    //             devlist = devlist2;
    //             corrected = devlist2;
    //             // }
    //         }
    //     }
    // }
    // Увага!!!


    // for (var i = 0; i < devchk.answDevices.length; i++) {
    for (var i = 0; i < corrected.length; i++) {
        //

        var dev = corrected[i];
        if ((dev.latitude == 0) || (dev.longitude == 0)) {
            dev.latitude = startLng;
            dev.longitude = startLat;
            startLat -= delta * 2;
            // startLng -= delta;
        }

        var lng = dev.latitude;
        var lat = dev.longitude;

        if (dev.binarytype == 0x40) {
            // is grp device
            var e_1 = 0;

        }

        var hastimeout = hasLastTimeout(dev);
        // if (!hastimeout) {
        //     var bb = 9876;
        // }

        var hasalarms = hasLastAlarms(dev);

        if (dev.binarytype == 0x40) {
            var ldd = lastgrpdata.Where(x => x.device_id == dev.Id).sort((a, b) => Date.parse(a.server_datetime) - Date.parse(b.server_datetime));
            var last;
            if (ldd.length > 0) {
                last = ldd[0];
                var ainp = last.inp_flags & dev.inpmask & 0xffff;
                var dinp = last.bit_flags & dev.bitmask & 0xffff;

                hasalarms = (ainp != 0) || (dinp != 0) ? true : false;

            }
        }



        // if (!hasalarms) {
        //     var wwwwwww = 4;
        // }

        // var title = dev.name;
        var marker0 = null;

        if (zoomlevel <= 3)
            hasalarms = true;

        // if (dev.Id > 29) {
        //     b = dev.Id;
        //     var title = dev.description != 'надо_редактировать' ? dev.description : dev.description + '_id=' + dev.Id;
        //     b = b + 1;
        // }

        var devclassname = 'myround_green';
        if (hastimeout)
            devclassname = 'myround_grey';
        else if (hasalarms)
            devclassname = 'triangle'; //      'myround';

        // if (hasalarms) {
        // if (true) {
        var footerclass = document.querySelector('.flexfooter');


        marker0 = L.marker(new L.LatLng(lng, lat), {
            // title: title,
            title: dev.description != 'надо_редактировать' ? dev.description : dev.description + '_id=' + dev.Id,
            devId: dev.Id,
            myoption: 0,
            alarmstatus: hastimeout ? 'timeout' : (hasalarms ? 'alarm' : 'normal'),
            draggable: (footerclass.style.display == 'block' ? true : false),
            // icon: redIcon,


            icon: L.divIcon({

                    // html: '<b-dv style="display:' + bdv_vis_mode + ';">' + dev.description + '</b-dv>',
                    html: '<b-dv style="display:' + bdv_vis_mode + ';">' + 1 + '</b-dv>',
                    // html: '<b-dv ">' + dev.inventory_name + '</b-dv>',
                    // html: '<b>' + cluster.getChildCount() + '</b>',
                    iconSize: hasalarms && !hastimeout ? new L.Point(30, 30) : new L.Point(36, 36),
                    className: devclassname, //     dev.name == '1' ? 'myround_grey' : 'myround_transparent',
                    myparam: 0

                })
                // icon: alarmIcon
                // icon: i < 50 ? cpuIcon : i < 70 ? redIcon : alarmIcon
                // pane: 'mark2'

        });


        marker0.options.binarytype = dev.binarytype;
        marker0.options.inpmask = dev.inpmask;
        marker0.options.bitmask = dev.bitmask;

        if (dev.Id == 61) {
            var addrr = dev.address;
            var e = 0;

        }

        // } else {
        //     marker0 = L.marker(new L.LatLng(lng, lat), {
        //         // title: title,
        //         title: dev.description != 'надо_редактировать' ? dev.description : dev.description + '_id=' + dev.Id,
        //         devId: dev.Id,
        //         myoption: 0,
        //         draggable: false,
        //         // icon: redIcon,
        //         icon: L.divIcon({

        //                 // html: '<b-dv style="display:' + bdv_vis_mode + ';">' + dev.description + '</b-dv>',
        //                 html: '<b-dv style="display:' + bdv_vis_mode + ';">' + 1 + '</b-dv>',
        //                 // html: '<b-dv ">' + dev.inventory_name + '</b-dv>',
        //                 // html: '<b>' + cluster.getChildCount() + '</b>',
        //                 iconSize: new L.Point(34, 34),
        //                 className: dev.name == '1' ? 'myround_grey' : 'myround_green',
        //                 myparam: 0

        //             })
        //             // icon: i < 50 ? cpuIcon : i < 70 ? redIcon : alarmIcon,
        //             // pane: 'mark2'

        //     });


        // }



        // marker0.options.draggable = true;

        // marker0.bindPopup(title);
        // var mark1=L.marker([51.5, -0.09]).bindPopup(L.popup({maxWidth:500}).setContent("I am a standalone popup.")).addTo(map);

        // marker0.bindPopup("<div style='background:red;'>Hello world!</div><br />I am a popup.", {

        // marker0.bindPopup(title);
        // marker0.bindPopup(title + ' - карточка объекта' + "<br/><input type='text' name='login' placeholder='Пошук' aria-label='Login' autocomplete='nickname'required class='poshuk'>" +
        //     "<br/>I am a popup. <div onclick='on_on()' style='background:yellow; border: 1px solid navy; user-select: none;'>Кнопка просмотра объекта </div>", {
        //         maxWidth: 500,
        //     });


        var last_alarms = hasalarms ? "<div style='color: #400000; font-size:14px; font-weight:700;'>" + get_lastskzdata(dev.Id) + "</div>" :
            "<div style='color: #004000; font-size:14px; font-weight:700;'> Ektz" + get_lastskzdata(dev.Id) + "</div>";



        if (dev.binarytype == 0x40) {
            // var ldd = lastgrpdata.Where(x => x.device_id == dev.Id).sort((a, b) => Date.parse(a.server_datetime) - Date.parse(b.server_datetime));
            // var last;
            // if (ldd.length > 0) {
            //     last = ldd[0];
            //     var ainp = last.inp_flags & dev.inpmask & 0xffff;
            //     var dinp = last.bit_flags & dev.bitmask & 0xffff;
            //     hasalarms = (ainp != 0) || (dinp != 0) ? true : false;
            // }

            var last_grpalarms = hasalarms ? "<div style='color: #400000; font-size:14px; font-weight:700; text-align:left;'>" + get_lastgrpTextdata(dev) + "</div>" :
                "<div style='color: #004000; font-size:14px; font-weight:700; text-align: left;'> Норма" + get_lastgrpTextdata(dev) + "</div>";


            marker0.bindPopup('<div style="display:inline-block; font-weight:700; font-size:15px;color:black;user-select:none;">' +
                dev.description + ' #' + dev.Identifier + '<span style="padding-left:10px;">' +
                '<b style="font-size:15px; font-weight:500;">' + (dev.inventory_name ? dev.inventory_name : '') + // 'Inv# ???') + '</b></div>' +
                '</span>' +
                // '<a href="https://orion.com.ua" class="marker-popup" style="color:black;" >' + dev.description + '</a></div>' +

                (DEBUG ? ' - SIM: ' + dev.name : '') +
                // "<hr/>" +
                '<br>' + (dev.address ? dev.address : 'Id = ' + dev.Id) +

                "<div style='display:flex;'>" +
                (hasalarms ? "<div class='band-popup-red'> </div>" : "<div class='band-popup-green'> </div>") +
                " <div onclick='on_on(" + dev.Id + ")'    style='user-select: none;text-align:center;cursor:pointer;text-decoration:underline;'>" +
                // '<a style="text-align: left;">' + last_grpalarms + '</a>' + "</div>" +
                '<a >' + last_grpalarms + '</a>' + "</div>" +
                "</div>", {

                    maxWidth: 500,
                });
        }

        // var invname = dev.inventory_name;
        // marker0.bindPopup('<div style="display:inline-block; font-weight:700; font-size:15px;color:midnightblue;text-decoration: underline overline #FF3028;user-select:none;">' + dev.inventory_name +
        if (dev.binarytype == 0x42)
            marker0.bindPopup('<div style="display:inline-block; font-weight:700; font-size:15px;color:black;user-select:none;">' +
                (dev.inventory_name ? dev.inventory_name : '') + ', ' +
                // '<a href="https://orion.com.ua" class="marker-popup" style="color:black;" >' + dev.description + '</a></div>' +
                dev.description + '</a></div>' +
                (DEBUG ? ' - SIM: ' + dev.name : '') +
                // "<hr/>" +
                '<br>' + (dev.address ? dev.address : 'Id = ' + dev.Id) +

                "<div style='display:flex;'>" +
                (hasalarms ? "<div class='band-popup-red'> </div>" : "<div class='band-popup-green'> </div>") +
                " <div onclick='on_on(" + dev.Id + ")'    style='user-select: none;text-align:center;cursor:pointer;text-decoration:underline;'>" +
                '<a>' + last_alarms + '</a>' + "</div>" +
                "</div>", {

                    maxWidth: 500,
                });




        if (false) {
            marker0.on("dblclick", (event) => { //FIXME "dblclick" =>"click" works

                // this.toggleSelectedEgg(e);
                var myMarker = event.target;
                var opts = event.target.options;

                if (opts.myoption == 0) {
                    opts.myoption = 1;
                }

                if (event.target.options.icon.options.myparam == 0) {
                    // console.log("doubleclick: " + event.target.options.title + " - авария подтверждена!");
                    var dt = new Date; //.toString();
                    const formatDate = d => [
                        d.getFullYear(),
                        (d.getMonth() + 1).toString().padStart(2, '0'),
                        d.getDate().toString().padStart(2, '0'),
                    ].join('-');

                    const formatTime = d => [
                        d.getHours().toString().padStart(2, '0'),
                        d.getMinutes().toString().padStart(2, '0'),
                        d.getSeconds().toString().padStart(2, '0')
                    ].join(':');

                    const formatDateTime = d => {
                        return formatDate(d) + ' ' + formatTime(d);

                    }

                    // log("dblclick:  " + event.target.options.title + " - авария подтверждена  | user1");
                    // log(dt.toJSON().slice(0, 39).replace('T', ' ') + " : " + event.target.options.title + " - авария подтверждена  | user1");
                    // log(formatDate(dt) + ' ' + formatTime(dt) + " : " + event.target.options.title + " - авария подтверждена  | user1");
                    log(formatDateTime(dt) + "  ... " + event.target.options.title + " - подтв./user1");
                    // myMarker.options.opacity *= 0.7;
                    // markers.removeLayer(event.target);

                    myMarker.options.icon = new _cpuIcon({
                        // iconUrl: './processor-64x64.png'
                        iconUrl: './alarmgrey2.png',
                        // iconUrl: './prapor2.png',
                        opacity: '0.5',
                        className: 'halfopacity',
                        myparam: 1
                    });

                    // map.removeLayer(event.target);
                    var tr = markers.hasLayer(event.target);
                    var tr3 = markers3.hasLayer(event.target);
                    if (tr) {
                        markers.removeLayer(event.target);
                        // markers3.removeLayer(event.target);
                        // map.addLayer(myMarker);
                        markers3.addLayer(myMarker);
                    }





                    // map.addLayer(myMarker);
                    // map.removeLayer(markers3);
                    // markers3.addLayer(myMarker);
                    // map.addLayer(markers3);
                }

                // myMarker.options.icon.options.iconUrl = './prapor2.png';
                // myMarker.options.icon.options.iconSize = [45, 45];
                // myMarker.options.icon.options.iconAnchor = [8, 45];
                myMarker.refreshIconOptions(null, true);



                // printstat();

            });
        }


        //place marker0 to corresponded murkers or markers3...



        if (true) {
            // if (hasalarms) {
            // delete from markers3 if exists
            markers3.eachLayer((layer) => {
                if (layer.options.title == marker0.options.title)
                    markers3.removeLayer(layer);
            });
            // if (dev.binarytype == 0x40)
            var vmode = chtypemode;

            refreshInMasterClusterGroup(markers, marker0);

            // switch (vmode) {
            //     case 0:
            //         refreshInMasterClusterGroup(markers, marker0);
            //         break;
            //     case 1:
            //         if (dev.binarytype == 0x40)
            //             refreshInMasterClusterGroup(markers, marker0);
            //         break;
            //     case 2:
            //         if (dev.binarytype == 0x42)
            //             refreshInMasterClusterGroup(markers, marker0);
            //         break;


            // }


        } else {
            // delete from markers (alarms) if exists
            markers.eachLayer((layer) => {
                if (layer.options.title == marker0.options.title)
                    markers.removeLayer(layer);
            });


            //add to markers3 (normal) or refresh if changed
            refreshInMasterClusterGroup(markers3, marker0);



            // var _exists = false;
            // markers3.eachLayer(function(layer) {
            //     if (layer.options.title == marker0.options.title) {
            //         _exists = true;
            //         if (layer != marker0) {
            //             markers3.removeLayer(layer);
            //             markers3.addLayer(marker0);
            //         }
            //         // break;
            //         // markers.zoomToShowLayer(layer, function() {
            //         //     layer.openPopup();
            //         // });
            //     }
            // });
            // if (!_exists)
            //     markers.addLayer(marker0);
        }







        if (false) {

            var tr = markers.hasLayer(marker0);

            var tr0 = markers.getLayers();

            var arrmass = AllMarkers(markers);

            tr0 = FindMarkerByTitle(marker0, markers);

            var tr3 = markers3.hasLayer(marker0);
            if (tr0) {
                markers.removeLayer(marker0);
                // markers3.removeLayer(event.target);
                // map.addLayer(myMarker);
                markers3.addLayer(marker0);
            }
            marker0.refreshIconOptions();




            var _exists = false;
            markers.eachLayer(function(layer) {

                // if (layer.name==name) {
                if (layer.options.title == marker0.options.title) {

                    _exists = true;
                    // markers.zoomToShowLayer(layer, function() {

                    //     layer.openPopup();

                    // });

                }
            });

            if (!_exists)
                markers.addLayer(marker0);
        }

    }
    // map.addLayer(markers);
    if (firstrefresh) {
        if (map) {
            firstrefresh = false;
            if (!location.search.includes('?map=force'))
                toMaxZoom();
        }
    }
    // var _t2 = performance.now();
    // var _t3 = _t2 - _t1;
    // console.log(_t3);
}


function toMaxZoom() {

    // let markers = markers;               [marker1, marker2, marker3]
    // var interv = setInterval(() => {
    let arr = [];
    var mmm = markers.getLayers();
    var bbb = markers3.getLayers();

    if (mmm)
        mmm.forEach(x => arr.push(x));
    // for (i = 0; i < mmm.length; i++)
    //     arr.push(markers[i]);
    if (bbb)
        bbb.forEach(x => arr.push(x));
    // for (i = 0; i < bbb.length; i++)
    //     arr.push(markers3[i]);

    // let latlngs = mmm.map(marker => marker.getLatLng());

    // let lg2 = bbb.map(marker => marker.getLatLng());

    // lg2.forEach(element => {
    //     latlngs.Add(element);
    // });

    if (arr.length > 0) {
        var latlngs = arr.Select(x => x.getLatLng());
        if (latlngs) {
            let latlngBounds = L.latLngBounds(latlngs);
            if (latlngBounds) {
                map.fitBounds(latlngBounds);
                // clearInterval(interv);
            }
        }
    }
    // }, 1000);


    // OR with a smooth animation
    // map.flyToBounds(latlngBounds);
}






function openPageAlarms() {
    var tmaxobj = new Object({
        type: "tmax=300"
    });
    bc.postMessage(tmaxobj);
    //
    bc.postMessage('alarms' + '=close()');
    ewin = window.open('./pagealarms/alarms.html');
    // ewin = window.open('/data/pagealarms/alarms.html', 'fullscreen=yes,scrollbars=auto,menubar=no,toolbar=no,location=no,status=no');
    // ev.currentTarget.style.color = 'yellow';


    var cnt = 0;
    var aaa = setInterval(() => {

        if (lastsavedDevicesObject != null)
            bc.postMessage(lastsavedDevicesObject);
        if (cnt++ > 4)
            clearInterval(aaa);
    }, 250);

}


function init_myorion() {
    if (map != null)
        return;
    console.log("  #_init_myorion started:  " + myperf()); //   + performance.now().toFixed(2));
    // map = L.mapbox.map('map', null, { zoomControl:false });

    var jstring = localStorage.getItem('map_params');

    var _center = latlng;
    var _zoom = 12;
    if (jstring)
        if (jstring.length > 0)
            if (isJSON(jstring)) {
                var obj = JSON.parse(jstring);
                _zoom = obj.zoom;
                _center = obj.center;

            }

    map = L.map('map', {
        zoomControl: false,
        center: _center, //latlng,
        zoom: _zoom, //12,
        layers: [tiles]
    });
    setwatermark(map, 'topleft');
    console.log("  #_init_myorion map:  " + myperf()); // + performance.now().toFixed(2));



    // map.zoomControl._container.style.display = 'flex';
    // map.zoomControl._container.style.flexDirection = 'flex-rows';
    // map.zoomControl._container.classList = [];
    // map.zoomControl._container.style.display = 'block';

    // map.zoomControl.remove();
    // map.removeControl(map.zoomControl);

    // map.scrollWheelZoom.disable();  // отключает zoom колесом 
    // map.zoomControl.disable();      // отключаетно не убирает кнопки zoom +  - 

    //Create panes for each of the sets of markers
    // var pane1 = map.createPane('mark1');
    // var pane2 = map.createPane('mark2');
    // var pane3 = map.createPane('mark3');

    //  for (var i = 0; i < devchk.activeDevices.length; i++) {
    //  }

    map.addLayer(markers3);
    map.addLayer(markers); //alarms!
    L.control.scale({
        imperial: false,
        position: 'bottomleft',
        // maxWidth: 200,
        width: 150
    }).addTo(map);


    // +++++++++++++++++++ Кнопки на карте
    // Кнопка центра
    // let center = L.control({
    //     position: 'topright'
    // });
    // center.onAdd = function(map) {
    //     let center = L.DomUtil.create('div', 'map-control-button');
    //     return center;
    // };

    // center.addTo(map);
    // the same as
    // map.addControl(center);


    //Making Control  "±" zoom
    var mZoom_common = L.Control.extend({
        nnn: null,
        mmm: 3,
        options: {
            position: 'topleft',
            // istyle: null,
        },

        createMapdiv: function() {
            var vdiv = L.DomUtil.create('div');
            vdiv.innerText = this.options.text; //'+';
            // vdiv.style.border = '1px solid  rgb(90,90,90)';
            vdiv.style.borderRadius = '3px';
            vdiv.style.color = this.options.color ? this.options.color : 'white';
            vdiv.style.marginTop = this.options.mrgtop ? this.options.mrgtop : '0px'; // '35px';
            vdiv.style.fontSize = this.options.fz ? this.options.fz : '26px';
            vdiv.style.lineHeight = '36px';
            vdiv.style.width = '36px';

            // vdiv.className += ' cursorpointer';
            vdiv.classList.add('cursorpointer');
            vdiv.style.background = 'rgba(100,100,100,0.67)';
            // vdiv.title = "Показати всі вузли";
            // container.style.transform = 'rotate(270deg)';
            // vdiv.style.letterSpacing = '0.1em';
            // vdiv.style.marginLeft = '5px';
            vdiv.style.textAlign = 'center';
            return vdiv;
        },


        onAdd: function(map) {
            var container = this.createMapdiv();
            // container = this.tune(container);
            this.nnn = container;
            this.mmm = -7;
            // if (this.mystyle.textalign)
            //     container.style.textAlign = mystyle.textaligne;
            container.addEventListener('click', this.options.handler);
            container.title = this.options.title ? this.options.title : '';
            return container;
        }
    });


    new mZoom_common({
        text: '+',
        mrgtop: '26px',
        title: 'Масштаб +',
        handler: () => map.zoomIn()
    }).addTo(map);

    new mZoom_common({
        text: '-',
        fz: '28px',
        mrgtop: '10px',
        title: 'Масштаб -',
        handler: () => map.zoomOut()
    }).addTo(map);

    var zoom_control = new mZoom_common({
        text: 'M',
        fz: '20px',
        color: 'white',
        mrgtop: '10px',
        // _container: title,
        handler: () => toMaxZoom()
    }); //.addTo(map);

    zoom_control.options.title = 'Масштаб: всі вузли';
    zoom_control.addTo(map);

    // _zoom._container.title = 'jjj';

    //Making Control Z under ±  ...

    // var mZoom = L.Control.extend({

    //     options: {
    //         position: 'topleft',
    //         istyle: null,
    //     },
    //     onAdd: function(map) {
    //         // create the control container with a particular class name
    //         var container = L.DomUtil.create('div'); //, 'my-custom-zoom');

    //         container = L.DomUtil.create('div');
    //         container.innerText = 'Z' //'Аварії';
    //             // container.style.transform = 'rotate(270deg)';
    //         container.style.border = '1px solid  rgb(90,90,90)';
    //         container.style.borderRadius = '3px';
    //         // container.style.letterSpacing = '0.1em';
    //         container.style.fontSize = '20px';
    //         container.style.color = 'black';
    //         // container.style.marginLeft = '5px';
    //         container.style.lineHeight = '36px';
    //         container.style.width = '36px';
    //         // container.style.marginTop = '20px';
    //         container.style.marginTop = '15px'; //'35px';
    //         // container.className += ' cursorpointer';
    //         container.classList.add('cursorpointer');

    //         container.style.background = 'rgba(100,100,100,0.67)';
    //         container.title = "Показати всі вузли";
    //         // ... initialize other DOM elements, add listeners, etc.
    //         // this.istyle = container.style;
    //         container.addEventListener('click', (ev) => {
    //             toMaxZoom();
    //         });
    //         // this.options.container = container;
    //         return container;
    //     }
    // });
    // var zmcontrol = map.addControl(new mZoom());





    //Making menucontrol
    var MenuControl = L.Control.extend({
        options: {
            position: 'topleft',
            istyle: null
        },
        onAdd: function(map) {
            // create the control container with a particular class name
            var container = L.DomUtil.create('div', 'my-custom-control');

            container.innerText = '|||' //'Аварії';
            container.style.transform = 'rotate(270deg)';
            // container.style.border = '1px solid  rgb(90,90,90)';
            container.style.borderRadius = '3px';
            container.style.letterSpacing = '0.1em';
            container.style.fontSize = '18px';
            // container.style.marginLeft = '5px';
            container.style.height = '28px';
            container.style.width = '27px';
            container.classList.add('cursorpointer');
            container.title = "Опції";
            // container.style.marginTop = '60px';

            // container.style.background = 'rgba(100,100,100,0.27)';
            // ... initialize other DOM elements, add listeners, etc.
            this.options.istyle = container.style;
            return container;
        }
    });

    var mcontrol = map.addControl(new MenuControl());

    // var but = mcontrol._container;

    var intrval1 = setInterval(() => {
        var but = document.querySelector('.my-custom-control');
        if (but) {
            // but.style.height = '40px';
            but.style.lineHeight = '28px';
            // but.style.width = '40px';
            but.style.padding = '4px';
            but.style.color = 'white';
            but.style.background = 'rgba(30,30,30,0.4)';
            but.style.textAlign = 'center';
            but.style.marginTop = '10px';
            but.style.fontWeight = '700';
            // but.className = 'cursorpointer';
            // but.style.marginBottom = '80px';
            // but.style.borderRadius = '30px';

            but.addEventListener('click', (ev) => {

                nalasht_handler();
                // calling page "alarms":
                //--------------------------------
                // bc.postMessage('alarms' + '=close()');
                // ewin = window.open('/data/pagealarms/alarms.html');
                // // ev.currentTarget.style.color = 'yellow';

                // var cnt = 0;
                // var aaa = setInterval(() => {

                //     if (lastsavedDevicesObject != null)
                //         bc.postMessage(lastsavedDevicesObject);
                //     if (cnt++ > 4)
                //         clearInterval(aaa);
                // }, 250);
            });
            clearInterval(intrval1);


        }

    }, 200);

    // var but = document.querySelector('.my-custom-control');


















    // var vdiv = mcontrol.getContainer();
    // vdiv.style.background = 'red';
    // new L.Control.extend({
    //     onAdd: function(map) {
    //         // var img = L.DomUtil.create('img');

    //         // img.src = '../../docs/images/logo.png';
    //         // img.style.width = '200px';

    //         // return img;

    //         var dv = document.createElement('div');
    //         dv.innerText = 'TTTTTTTTTTTT';
    //         return dv;
    //     },

    //     onRemove: function(map) {
    //         // Nothing to do here
    //     }
    // }).addTo(map);

    // L.control.watermark = function(opts) {
    //     return new L.Control.Watermark(opts);
    // }

    // L.control.watermark({ position: 'bottomleft' }).addTo(map);

    var prevZoom = map.getZoom();
    map.on('zoomend', function(e) {
        // debugger;
        var currZoom = map.getZoom();
        var diff = prevZoom - currZoom;
        // if (diff > 0) {
        //     alert('zoomed out');
        // } else if (diff < 0) {
        //     alert('zoomed in');
        // } else {
        //     alert('no change');
        // }
        if (div = document.getElementById('eee'))
            div.innerText = 'z:' + currZoom;
        prevZoom = currZoom;


        // devchk.checkdevices(devchk.skzrecs, 1);




        // devchk.checkdevices(devchk.grp, 1);
        refresh_objects_on_map();
    });
    window.onresize = on_resize;
    console.log("  #_init_myorion before return:  " + myperf()); //+ performance.now().toFixed(2));
    window.dispatchEvent(new Event('resize'));

    // refresh_objects_on_map();

    return;

    // map.addLayer(markers);
    // map.addLayer(markers2);
    // map.addLayer(markers3);

    // setInterval(() => {
    //     var mrk = markers;
    //     if (map.hasLayer(mrk))
    //         map.removeLayer(mrk);
    //     else
    //         map.addLayer(mrk);
    // }, 1000);
    printstat(true);
}

function saveLatLng(event) {
    var mrks = [];


    if (markers)
        markers.eachLayer((x) => mrks.push(x));

    if (markers3)
        markers3.eachLayer((x) => mrks.push(x));



    var ttt = [];
    mrks.forEach(x => {

        var obj = new Object();
        obj.lat = x._latlng.lat;
        obj.lng = x._latlng.lng;
        obj.Id = x.options.devId;
        ttt.push(obj);
    });

    var jtmp = localStorage.getItem('tmppw');
    var sert = '';
    if (jtmp)
        if (jtmp.length > 0)
            if (isJSON(jtmp)) {
                sert = JSON.parse(jtmp);
            }
    if ((!location.search.includes('map=force&pw=')) ||
        (!location.search.includes('uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t'))) {
        sert.sertif = '';
    }

    cmdobj = new Object({
        type: "_wsocket",
        ObjectType: CmdType.SaveLatLng,
        markers: ttt,
        Text: "save",
        length: mrks.length,
        sertif: sert.sertif
    });


    // cmdobj.type = "_wsocket";
    // cmdobj.caller = "main";
    // browserSendTime = new Date();
    // browserSend_ms = performance.now(); //    new Date().getTime();
    bc.postMessage(cmdobj);

    var t = 0;
}



///
function setwatermark(_map, pos) {

    if (true) {
        L.Control.Watermark = L.Control.extend({
            // position: 'topleft',
            onAdd: function(mymap) {
                var img = L.DomUtil.create('img'); //('img');

                // img.src = '../../docs/images/logo.png';
                // img.src = '/data/img/orion3.jpg';  
                // img.style.backgroundImage = "alarm2.png";

                //
                img.src = './img/orion.png'; //     // img.src = 'img/orion3.jpg'; 
                img.style.width = '120px';
                img.style.height = '32px';
                img.style.marginTop = '4px';
                img.style.opacity = 0.8;
                img.style.cursor = 'pointer';
                // img.style.backgroundSize = 'cover';
                // img.style.backgroundRepeat = 'no-repeat';
                // img.style.backgroundPosition = '10px 10px';
                // img.className = 'logotyp2';

                //
                // img.style.width = '110px';
                // img.style.height = '36px';
                // img.style.marginTop = '2px';
                // img.style.width = '92px';
                // img.style.background = 'red';
                // img.style.opacity = 0.9; //    0.65;

                //
                // img.style.borderRadius = '5px';
                // img.style.marginTop = '-200px';
                // img.style.marginLeft = '280%';
                img.addEventListener('click', () => {
                    console.log("Меня кликнули!");
                    if (div = document.getElementById('leftpan')) {
                        // div.style.display = 'none';
                        var lmp = document.getElementById('lmap');
                        if (www == 0) {

                            if (iii == null) {
                                var p = document.getElementById('leftpan');
                                www = Number(p.clientWidth);
                                iii = setInterval(() => {
                                    var p = document.getElementById('leftpan');

                                    if (www < 75) {
                                        www++;
                                        p.style.width = (www).toString() + 'px';
                                    }
                                    if (www >= 75) {
                                        clearInterval(iii);
                                        iii = null;
                                    }
                                }, 5);
                            }

                        } else {
                            // div.style.display = 'none';
                            if (iii == null) {
                                var p = document.getElementById('leftpan');
                                www = Number(p.clientWidth);
                                iii = setInterval(() => {
                                    var p = document.getElementById('leftpan');

                                    if (www > 0) {
                                        www--;
                                        p.style.width = (www).toString() + 'px';
                                    }
                                    if (www <= 0) {
                                        clearInterval(iii);
                                        iii = null;
                                    }
                                }, 5);
                            }
                            lmp.style.width = '100%';


                        }


                    }
                });

                img.addEventListener('mousedown', () => {
                    console.log("Меня нажали!");
                    img.style.opacity = '1.0';
                });
                img.addEventListener('touchstart', () => {
                    console.log("Меня нажали!");
                    img.style.opacity = '1.0';
                });
                img.addEventListener('mouseup', () => {
                    console.log("Меня отпустили!");
                    img.style.opacity = '0.65';
                });
                img.addEventListener('touchend', () => {
                    console.log("Меня отпустили!");
                    img.style.opacity = '0.65';
                }); // img.onselect = () => {};
                img.onselectstart = function() {
                    return false;
                };
                img.setAttribute('unselectable', 'on');

                img.addEventListener('contextmenu', (event) => {
                    event.preventDefault();

                });

                return img;
            },

            onRemove: function(mymap) {
                // Nothing to do here
            }
        });

        L.control.watermark = function(opts) {
            return new L.Control.Watermark(opts);
        }

        var bbb555 = L.control.watermark({
            position: pos //            'bottomleft' // 'topright', //'bottomleft',

            // opacity: 0.5
        });

        bbb555.addTo(_map);
        // var tm9 = setInterval(() => {
        //     if (_map) {
        //         bbb555.addTo(_map);
        //         clearInterval(tm9);
        //     }

        // }, 300);








    }
}