    //


    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    function log(txt) {
        if (div = document.getElementById('textbox')) {
            var mySplits = div.innerText.split("\n");

            if (mySplits.length >= 10) {
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

    function on_on(evt) {
        log('on_on ' + '    ' + on_cnt++);

    }

    function toggle_footer(x) {
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
        disableClusteringAtZoom: 11,

        iconCreateFunction: function(cluster) {
            // return new L.DivIcon({
            //     html: '<div><span>' + cluster.getChildCount() + '</span></div>',
            //     className: 'myalarm',
            //     iconSize: new L.Point(40, 40)
            // });
            return L.divIcon({
                html: '<b>' + cluster.getChildCount() + '</b>',
                iconSize: new L.Point(40, 40),
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
                    html: '<div><span>' + cluster.getChildCount() + '</span></div>',
                    // className: 'mynormal',
                    className: 'mynormal',
                    iconSize: new L.Point(40, 40),

                });
            // tt.Icon.style.textAligne = 'center';
            // tt.removeClass('my-div-icon');
            return tt;
        }
    });

    var markers3 = L.markerClusterGroup({
        disableClusteringAtZoom: 11,
        iconCreateFunction: function(cluster) {
            return L.divIcon({
                html: '<b>' + cluster.getChildCount() + '</b>',
                iconSize: new L.Point(40, 40),
                className: 'acked',

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
        opacity: '0.5',
        className: 'halfopacity',

    });
    var alarmIcon = new _cpuIcon({
        // iconUrl: './processor-64x64.png'
        iconUrl: './alarm2.png',
        opacity: '0.5',
        className: 'halfopacity',
        myparam: 0
    });


    ///////
    var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
        }),
        latlng = L.latLng(50.0, 30.42);


    let map = null;


    // L.marker([51.5, -0.09], {
    //     icon: greenIcon
    // }).addTo(map);



    function init_realworld() {
        if (map != null)
            return;

        map = L.map('map', {
            center: latlng,
            zoom: 6,
            layers: [tiles]
        });

        //Create panes for each of the sets of markers
        // var pane1 = map.createPane('mark1');
        // var pane2 = map.createPane('mark2');
        // var pane3 = map.createPane('mark3');








        // for (var i = 0; i < addressPoints.length; i++) {
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

        var t = 567;
        t++;
    }