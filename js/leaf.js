function onresize() {
    // if (div = document.getElementById('lmap')) {
    //     if (window.innerHeight > window.innerWidth) {
    //         div.style.marginLeft = '0px';
    //         document.getElementById('headcontainer').style.display = '';
    //         if (cc = document.getElementById('mapid'))
    //             cc.style.height = 90 + '%';
    //     } else {
    //         div.style.marginLeft = '100px';
    //         if (cc = document.getElementById('mapid')) {
    //             // cc.style.height = '98.2%';
    //             cc.style.height = '97vh';
    //         }
    //         // div.style.height = '100px';
    //         if (window.innerHeight < 400)
    //             document.getElementById('headcontainer').style.display = 'none';
    //     }

    // }



}

leaf_ready = () => {

    // onresize();
}

setInterval(() => {
    var windowInnerHeight = window.screen.height; //screen.height;

    //
    // document.getElementById('secondcont').style.height = windowInnerHeight + 'px';
    // document.getElementById('lmap').style.height = windowInnerHeight + 'px';
    // document.getElementById('mapid').style.height = windowInnerHeight + 'px';



}, 200);

function fly(where) {
    if (where == 'orionf')
        mymap.setZoom(13);
    else
        mymap.setZoom(11);
    var d = document.getElementsByClassName('city');
    for (i = 0; i < d.length; i++) {
        d[i].style.color = 'rgb(150,150,150';
    }

    // var hov = document.getElementsByClassName('city:hover');
    // for (i = 0; i < hov.length; i++) {
    //     hov[i].style.color = 'green';
    // }

    document.getElementById(where).style.color = 'white';
    setTimeout(() => {
        switch (where) {
            case 'orionf':
                // setTimeout(() => {
                //     mymap.setZoom(13);
                // }, 1000);
                // mymap.setZoom(13);
                circle3.openPopup();
                mymap.flyTo([50.034320910541076, 36.28154867730466]);

                break;

            case 'kharkiv':
                circle.openPopup();
                mymap.flyTo([50.011, 36.26]);

                break;
            case 'cherkasy':
                mymap.flyTo([49.424, 32.044]);
                break;
            case 'odesa':
                mymap.flyTo([46.472105292639846, 30.698244009507135]);
                break;
            case 'poltava':
                mymap.flyTo([49.603135834094005, 34.54075784233936]);
                break;

        }
    }, 400);

    // 
}



document.addEventListener('DOMContentLoaded', leaf_ready);
window.addEventListener('resize', onresize);