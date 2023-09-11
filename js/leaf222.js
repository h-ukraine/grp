var mymap;
let circle, circle3;
var www = -1;
let iii = null;

function init_leaf() {
    mymap = L.map('mapid').setView([50.011, 36.26], 11);

    // 49.9654, 36.2411
    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     maxZoom: 18,
    //     id: 'mapbox/streets-v11',
    //     tileSize: 512,
    //     zoomOffset: -1,
    //     accessToken: 'your.mapbox.access.token'
    // }).addTo(mymap);
    ///var eee = 
    //
    //
    //
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        tileSize: 512,
        zoomOffset: -1,
        subdomains: 'abc',
    }).addTo(mymap);



    // var Jawg_Dark = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
    //     // attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //     // minZoom: 0,
    //     maxZoom: 22,
    //     // subdomains: 'abcd',
    //     // accessToken: '<your accessToken>'
    // });





    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //     // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     maxZoom: 18,
    //     tileSize: 512,
    //     zoomOffset: -1
    // }).addTo(map);
    //
    //
    //
    //
    // var Jawg_Terrain = L.tileLayer('https://{s}.tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
    //     attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //     minZoom: 0,
    //     maxZoom: 22,
    //     subdomains: 'abcd',
    //     accessToken: '<your accessToken>'
    // }).addTo(mymap);
    // var Jawg_Dark = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
    //     // attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //     minZoom: 0,
    //     maxZoom: 22,
    //     subdomains: 'abcd',
    //     accessToken: '<your accessToken>'
    // }).addTo(mymap);

    //
    // var OpenStreetMap_CH = L.tileLayer('https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
    //     maxZoom: 18,
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //     bounds: [
    //         [45, 5],
    //         [48, 11]
    //     ]
    // }).addTo(mymap);

    // var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    //     subdomains: 'abcd',
    //     maxZoom: 19
    // }).addTo(mymap);

    // var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    //     maxZoom: 20,
    //     attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    // }).addTo(mymap);

    // var Jawg_Matrix = L.tileLayer('https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
    //     attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //     minZoom: 0,
    //     maxZoom: 22,
    //     subdomains: 'abcd',
    //     accessToken: '<your accessToken>'
    // }).addTo(mymap);

    // var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    //     maxZoom: 17,
    //     attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    // }).addTo(mymap);
    // 49.9654, 36.2411
    //
    //
    //
    //49.985954867482015, 36.27130447981019
    // var marker = L.marker([51.5, 36.2]).addTo(mymap);
    circle = L.circle([49.985954867482015, 36.27130447981019], {
        color: 'yellow',
        fillColor: 'rgb(220,220,30)',
        fillOpacity: 0.5,
        radius: 700
    }).addTo(mymap);
    circle.bindPopup(" Кінний ринок<br> Esp32_Дозор №2").openPopup();

    // var circle1 = L.circle([49.985954867482015, 36.27330448281019], {
    //     color: 'green',
    //     fillColor: 'rgb(20,220,30)',
    //     fillOpacity: 0.5,
    //     radius: 240
    // }).addTo(mymap);

    // var circle2 = L.circle([49.986954867482015, 36.27330448281019], {
    //     color: 'red',
    //     fillColor: 'rgb(240,22,30)',
    //     fillOpacity: 0.5,
    //     radius: 240
    // }).addTo(mymap);
    //

    //Дозор на Орионе
    circle3 = L.circle([50.0343109723699, 36.28156442984946], {
        color: 'yellowgreen',
        fillColor: 'rgb(40,220,30)',
        fillOpacity: 0.5,
        radius: 700
    }).addTo(mymap);
    circle3.bindPopup("Тов Оріон. <br> Esp32_Дозор №1").openPopup();
    // // var polygon = L.polygon([
    // //     [51.509, -0.08],
    // //     [51.503, -0.06],
    // //     [51.51, -0.047]
    // // ]).addTo(mymap);

    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    // circle.bindPopup("I am a circle.");
    // polygon.bindPopup("I am a polygon.");
    // var popup = L.popup()
    //     .setLatLng([51.5, -0.19])
    //     .setContent("I am a standalone popup.")
    //     .openOn(mymap);



    // L.MyLeafletControl = L.Control.extend( //{
    //     // options: 
    //     {
    //         position: 'topright'
    //     }
    //     // ...
    //     //}
    // );

    // var kk = new L.MyLeafletControl({
    //     position: 'bottomright'
    // });

    // kk.addTo(mymap);

    // var searchControl = new L.Control.Search({
    //     layer: markers2,
    //     propertyName: 'Name',
    //     circleLocation: true
    // });
    // searchControl.on('search_locationfound', function(e) {
    //     e.layer.openPopup().openOn(map);
    //     map.setZoom(16);
    // });
    // map.addControl(searchControl);

    //markerclustergroup !!!
    var LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'leaf-shadow.png',
            iconSize: [38, 95],
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76]
        }
    });

    // var greenIcon = new LeafIcon({ iconUrl: 'leaf-green.png' }),
    // var redIcon = new LeafIcon({ iconUrl: 'leaf-red.png' }),
    // var orangeIcon = new LeafIcon({ iconUrl: 'leaf-orange.png' });
    var greenIcon = new LeafIcon({
        iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
        shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
    });

    var redIcon = new LeafIcon({
        iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-red.png',
        shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
        myparam: 0

    });
    var orangeIcon = new LeafIcon({
        iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-orange.png',
        shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
        myparam: 0
    });


    L.icon = function(options) {
        return new L.Icon(options);
    };


    L.marker([51.5, -0.09], { icon: greenIcon }).addTo(mymap).bindPopup("I am a green leaf.");
    L.marker([51.495, -0.083], { icon: redIcon }).addTo(mymap).bindPopup("I am a red leaf.");
    L.marker([51.49, -0.1], { icon: orangeIcon }).addTo(mymap).bindPopup("I am an orange leaf.");















    ///
    if (true) {
        L.Control.Watermark = L.Control.extend({
            // position: 'topleft',
            onAdd: function(mymap) {
                var img = L.DomUtil.create('img'); //('img');

                // img.src = '../../docs/images/logo.png';
                // img.src = '/data/img/orion3.jpg';  
                img.src = 'img/orion3.jpg'; //img/orion3.jpg
                // img.style.width = '100px';
                img.style.height = '60px';
                // img.style.width = '170px';
                img.background = 'red';
                img.style.opacity = 0.65;
                img.style.borderRadius = '5px';
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

        L.control.watermark({
            position: 'bottomleft' // 'topright', //'bottomleft',

            // opacity: 0.5
        }).addTo(mymap);




    }

}