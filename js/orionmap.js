    //

    function isJSON(str) {
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
        sessionStorage.setItem('alarm_tmp_params_' + dev.Id, JSON.stringify(params));

        // setTimeout(() => {
        ewin = window.open('/data/pages/tmp.html?device_Id=' + dev.Id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');


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
            div.style.background = aonly ? accent : normback;
            div.style.color = aonly ? 'rgba(250,250,120,1)' : 'white';
        }
        if (div = document.querySelector('#tmonly')) {
            // div.style.background = tonly ? 'rgba(20,20,40,0.7)' : normback;
            div.style.background = tonly ? accent : normback;
            div.style.color = tonly ? 'rgba(250,250,120,1)' : 'white';

        }
        if (div = document.querySelector('#normonly')) {
            // div.style.background = normonly ? 'rgba(41, 170, 24, 0.594)' : normback;
            div.style.background = normonly ? accent : normback;
            div.style.color = normonly ? yellowwhite : 'white';
        }
        refresh_objects_on_map();
    }

    function toggle_alarmonly() {
        if (!aonly) {
            aonly = true;
            normonly = false;
        } else
            aonly = false;
        setradiobuttons()

    }

    function toggle_tmonly() {
        if (!tonly) {
            tonly = true;
            normonly = false;
        } else
            tonly = false;
        setradiobuttons()
    }

    function force_all() {
        if (!normonly) {
            normonly = true;
        } else
            normonly = false;
        aonly = tonly = false;
        setradiobuttons()

    }

    function toggle_footer(x) {

        eget = document.getElementsByClassName('flexfooter')[0];
        var t = getelemProperty(eget, 'display');

        //через свойство класса...
        var footerclass = document.querySelector('.flexfooter');
        var rootStyles = getComputedStyle(footerclass);
        footerclass.style.setProperty('display', t == 'none' ? 'block' : 'none');
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




    // var markers = L.markerClusterGroup();
    var markers = L.markerClusterGroup({
        disableClusteringAtZoom: 12,

        iconCreateFunction: function(cluster) {
            // return new L.DivIcon({
            //     html: '<div><span>' + cluster.getChildCount() + '</span></div>',
            //     className: 'myalarm',
            //     iconSize: new L.Point(40, 40)
            // });
            return L.divIcon({
                html: '<div style="text-align:center;">' + cluster.getChildCount() + '</div>',
                // html: '<b>' + cluster.getChildCount() + '</b>',
                iconSize: new L.Point(44, 44),
                className: 'myalarm',

            });
        },
    });


    // var markers2 = L.markerClusterGroup();
    var markers2 = L.markerClusterGroup({
        disableClusteringAtZoom: 11,
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
        disableClusteringAtZoom: 12,
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


    ///////
    var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
        }),
        // latlng = L.latLng(50.0, 30.42);
        latlng = L.latLng(50.0, 36.25);

    let map = null;


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


    var firstrefresh = true;

    function refresh_objects_on_map() {
        //
        // map.removeLayer(markers);
        // markers.clearLayers();

        markers.clearLayers();
        markers3.clearLayers();
        var zoomlevel = -1;
        if (map)
            zoomlevel = map.getZoom();


        for (var i = 0; i < devchk.answDevices.length; i++) {
            //

            var dev = devchk.answDevices[i];
            var lng = dev.latitude;
            var lat = dev.longitude;

            var hasalarms = hasLastAlarms(dev);
            if (!hasalarms) {
                var wwwwwww = 4;
            }

            // var title = dev.name;
            var marker0 = null;

            if (zoomlevel <= 8)
                hasalarms = true;

            if (hasalarms) {
                marker0 = L.marker(new L.LatLng(lng, lat), {
                    // title: title,
                    title: dev.description,
                    myoption: 0,
                    // icon: redIcon,
                    icon: L.divIcon({

                            // html: '<b-dv style="display:' + bdv_vis_mode + ';">' + dev.description + '</b-dv>',
                            html: '<b-dv style="display:' + bdv_vis_mode + ';">' + 1 + '</b-dv>',
                            // html: '<b-dv ">' + dev.inventory_name + '</b-dv>',
                            // html: '<b>' + cluster.getChildCount() + '</b>',
                            iconSize: new L.Point(34, 34),
                            className: dev.name == '1' ? 'myround_grey' : 'myround',
                            myparam: 0

                        })
                        // icon: i < 50 ? cpuIcon : i < 70 ? redIcon : alarmIcon,
                        // pane: 'mark2'

                });
            } else {
                marker0 = L.marker(new L.LatLng(lng, lat), {
                    // title: title,
                    title: dev.description,
                    myoption: 0,
                    // icon: redIcon,
                    icon: L.divIcon({

                            // html: '<b-dv style="display:' + bdv_vis_mode + ';">' + dev.description + '</b-dv>',
                            html: '<b-dv style="display:' + bdv_vis_mode + ';">' + 1 + '</b-dv>',
                            // html: '<b-dv ">' + dev.inventory_name + '</b-dv>',
                            // html: '<b>' + cluster.getChildCount() + '</b>',
                            iconSize: new L.Point(34, 34),
                            className: dev.name == '1' ? 'myround_grey' : 'myround_green',
                            myparam: 0

                        })
                        // icon: i < 50 ? cpuIcon : i < 70 ? redIcon : alarmIcon,
                        // pane: 'mark2'

                });


            }

            // marker0.bindPopup(title);
            // var mark1=L.marker([51.5, -0.09]).bindPopup(L.popup({maxWidth:500}).setContent("I am a standalone popup.")).addTo(map);

            // marker0.bindPopup("<div style='background:red;'>Hello world!</div><br />I am a popup.", {

            // marker0.bindPopup(title);
            // marker0.bindPopup(title + ' - карточка объекта' + "<br/><input type='text' name='login' placeholder='Пошук' aria-label='Login' autocomplete='nickname'required class='poshuk'>" +
            //     "<br/>I am a popup. <div onclick='on_on()' style='background:yellow; border: 1px solid navy; user-select: none;'>Кнопка просмотра объекта </div>", {
            //         maxWidth: 500,
            //     });

            // var alarmhtml = document.createElement('div');
            // var last_alarms_old = "<div style='color:red; font-size:15px'>" +
            //     (dev.flag0 != 0 ? "<div>flag0 </div>" : "") +
            //     (dev.flag1 != 0 ? "<div>flag1 </div>" : "") +
            //     (dev.flag2 != 0 ? "<div>flag2 </div>" : "") +
            //     (dev.flag3 != 0 ? "<div>flag3 </div>" : "") +
            //     (dev.flag4 != 0 ? "<div>flag4 </div>" : "") +
            //     (dev.flag5 != 0 ? "<div>flag5 </div>" : "") +
            //     "</div>"
            //     //
            // ;


            // var last_alarms_2 = "<div style='color:red; font-size:13px'>" +
            //     (dev.flag0 != 0 ? "AK," : "") +
            //     (dev.flag1 != 0 ? " T_1," : "") +

            //     (dev.flag2 != 0 ? " U_ckz," : "") +
            //     (dev.flag3 != 0 ? " I_ckz," : "") +
            //     (dev.flag4 != 0 ? " E_ktz," : "") +
            //     (dev.flag5 != 0 ? " U_220" : "") +
            //     "</div>"
            //     //
            // ;


            var last_alarms = hasalarms ? "<div style='color: #400000; font-size:14px; font-weight:700;'>" + get_lastskzdata(dev.Id) + "</div>" :
                "<div style='color: #004000; font-size:14px; font-weight:700;'> Ektz" + get_lastskzdata(dev.Id) + "</div>";


            // var invname = dev.inventory_name;
            // marker0.bindPopup('<div style="display:inline-block; font-weight:700; font-size:15px;color:midnightblue;text-decoration: underline overline #FF3028;user-select:none;">' + dev.inventory_name +
            marker0.bindPopup('<div style="display:inline-block; font-weight:700; font-size:15px;color:black;user-select:none;">' +
                dev.inventory_name + ', ' +
                '<a href="https://orion.com.ua" class="marker-popup" style="color:black;" >' + dev.description + '</a></div>' +
                (DEBUG ? ' - SIM: ' + dev.name : '') +
                // "<hr/>" +
                '<br>' + dev.address +

                "<div style='display:flex;'>" +
                (hasalarms ? "<div class='band-popup-red'> </div>" : "<div class='band-popup-green'> </div>") +
                " <div onclick='on_on(" + dev.Id + ")'    style='  user-select: none;text-align:center;'>" +
                '<a>' + last_alarms + '</a>' + "</div>" +
                "</div>"

                , {

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
            if (hasalarms)
                markers.addLayer(marker0);
            else(markers3.addLayer(marker0));

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




                // if (!markers. .hasLayer(marker0)) {
                //     // map.addLayer(marker0);


                //     markers.addLayer(marker0);
                // }

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
        bc.postMessage('alarms' + '=close()');
        ewin = window.open('/data/pagealarms/alarms.html');
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
        // map = L.mapbox.map('map', null, { zoomControl:false });

        var jstring = localStorage.getItem('map_params');

        var _center = latlng;
        var _zoom = 12;
        if (jstring)
            if (isJSON(jstring)) {
                var obj = JSON.parse(jstring);
                _zoom = obj.zoom;
                _center = obj.center;

            }



        map = L.map('map', {
            // zoomControl: false,
            center: _center, //latlng,
            zoom: _zoom, //12,
            layers: [tiles]
        });

        var cv = map.zoomControl._container.children;
        map.zoomControl._container.style.border = 'none';
        for (i = 0; i < cv.length; i++) {
            style = cv[i].style;
            style.fontSize = '26px';
            // style.paddingLeft = '8px';
            style.paddingTop = '0px';
            style.lineHeight = '32px';
            // style.textAlign = 'center';


            style.background = 'rgba(100,100,100,0.67)';
            style.marginBottom = '5px';
            style.width = '36px';
            style.height = '36px';
            style.border = '1px solid rgba(60,60,60,0.77)';
            style.borderRadius = '3px';
            // style.color = 'black';
        }



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
            position: 'bottomleft'
        }).addTo(map);


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
                container.style.border = '1px solid  rgb(90,90,90)';
                container.style.borderRadius = '3px';
                container.style.letterSpacing = '0.1em';
                container.style.fontSize = '18px';
                // container.style.marginLeft = '5px';
                // container.style.height = '26px';
                container.style.width = '27px';
                // container.style.marginTop = '60px';

                // container.style.background = 'rgba(100,100,100,0.27)';
                // ... initialize other DOM elements, add listeners, etc.
                this.options.istyle = container.style;
                return container;
            }
        });





        var mcontrol = map.addControl(new MenuControl());

        var but = document.querySelector('.my-custom-control');
        // but.className = 'my-custom-control';
        // but.style.height = '40px';
        but.style.lineHeight = '26px';
        // but.style.width = '40px';
        but.style.padding = '5px';
        but.style.color = 'white';
        but.style.background = 'rgba(30,30,30,0.4)';
        but.style.textAlign = 'center';
        but.style.marginTop = '60px';
        but.style.fontWeight = '700';
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




        //Making Control Z under +-  ...




        // var vdiv = mcontrol.getContainer();
        // vdiv.style.background = 'red';
        // new L.Control({
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
                div.innerText = currZoom;
            prevZoom = currZoom;

            refresh_objects_on_map();
        });
        window.onresize = on_resize;

        return;

        for (var i = 0; i < 500; i++) {
            // var a = addressPoints[i];
            // var title = a[2];
            // var marker = L.marker(new L.LatLng(a[0], a[1]), {
            //     title: title,

            // });
            // marker.bindPopup(title);



            if (i < 100) {
                var lat = getRandom(24.0, 30.0);
                var lng = getRandom(48.4, 51.5);
                var title = 'SKZ_' + i.toString();
                var marker0 = L.marker(new L.LatLng(lng, lat), {
                    title: title,
                    // icon: redIcon,
                    icon: i < 50 ? cpuIcon : i < 70 ? redIcon : alarmIcon,
                    // pane: 'mark2'

                });
                // marker0.bindPopup(title);
                // var mark1=L.marker([51.5, -0.09]).bindPopup(L.popup({maxWidth:500}).setContent("I am a standalone popup.")).addTo(map);

                // marker0.bindPopup("<div style='background:red;'>Hello world!</div><br />I am a popup.", {

                // marker0.bindPopup(title);
                marker0.bindPopup(title + ' - карточка объекта' + "<br/><input type='text' name='login' placeholder='Пошук' aria-label='Login' autocomplete='nickname'required class='poshuk'>" +
                    "<br/>I am a popup. <div onclick='on_on()' style='background:yellow; border: 1px solid navy; user-select: none;'>Кнопка просмотра объекта </div>", {
                        maxWidth: 500,
                    });

                marker0.on("dblclick", (event) => { //FIXME "dblclick" =>"click" works

                    // this.toggleSelectedEgg(e);
                    var myMarker = event.target;
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



                    printstat();

                });



                if (i < 95)
                    markers.addLayer(marker0);
                else
                    markers3.addLayer(marker0);
            } else {
                var lat = getRandom(30.2, 37.0);
                var lng = getRandom(46.7, 50.2);
                var title = 'SKZ_' + i.toString();
                var marker0 = L.marker(new L.LatLng(lng, lat), {
                    title: title,
                    icon: greenIcon,
                });
                marker0.bindPopup(title);
                markers2.addLayer(marker0);


            }
        }



        map.addLayer(markers);
        map.addLayer(markers2);
        map.addLayer(markers3);



        // setInterval(() => {
        //     var mrk = markers;
        //     if (map.hasLayer(mrk))
        //         map.removeLayer(mrk);
        //     else
        //         map.addLayer(mrk);
        // }, 1000);


        printstat(true);

        // pane2.style.display = 'none';

        // var t = 567;
        // t++;
    }