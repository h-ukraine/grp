function tologin() {
    var nav = navigator;
    var loc = window.location;
    var his = window.history;

    his.back();


}

function nalasht_handler() {

    var nal = document.getElementById('anim');

    // if (nal.style.marginLeft != '0px')
    // if (nal.style.display != 'block') {
    if ((nal.style.display != 'block') && (nal.style.display != '')) {
        nal.style.display = 'block';
        setTimeout(() => {
            nal.style.opacity = 1;
            nal.style.marginLeft = '0px';
            // fullscreen3(nal);
        }, 30);


    } else {
        nal.style.display = '';
        nal.style.marginLeft = '-101vw';
        nal.style.opacity = 0;
        setTimeout(() => {
            nal.style.display = 'none';
        }, 400);
    }

    // nal.style.marginLeft = nal.style.marginLeft != '0px' ? '0px' : '-101vw';
    // if (nal.style.marginLeft != '0px')
    //     nal.style.marginLeft = '0px';
    // else nal.style.marginLeft = '-101vw';
}


var _naltim = setInterval(() => {
    var nal = document.getElementById('anim');
    if (nal) {
        nal.addEventListener('click', nalasht_handler);
        // tbleft.tabl.addEventListener('click', nalasht_handler);
        // tbfirst.tabl.addEventListener('click', nalasht_handler);
        clearInterval(_naltim);
    }
}, 200);



// --------------   nal theme ---------
function fliptheme(e) {
    e.stopPropagation();

    var name = '.nalasht';

    var dark = getelemProp(name, '--dark');
    var ukraine = getelemProp(name, '--ukraine');
    var current = getelemProp(name, '--back');
    if (current == dark) {
        setelemProp(name, '--back', ukraine);
        document.querySelector('.f2span').innerText = 'Україна';
        localStorage.setItem('naltheme', '--ukraine');
    } else {
        setelemProp(name, '--back', dark);
        document.querySelector('.f2span').innerText = 'Темна';
        localStorage.setItem('naltheme', '--dark');
    }
}

function setnaltheme(theme) {
    var item = document.querySelector('.nalasht');
    var itemStyles = getComputedStyle(item, null);
    var color = itemStyles.getPropertyValue(theme);

    var ispan = document.querySelector('.f2span');

    item.style.setProperty('--back', color);
    if (theme.includes('--ukraine')) {
        document.querySelector('.f2span').innerText = 'Україна';
    } else
        document.querySelector('.f2span').innerText = 'Темна';
}

var naltheme = null;
try {
    naltheme = localStorage.getItem('naltheme');

} finally {
    if (naltheme) {
        setnaltheme(naltheme);
    }
}



// --------------   tabs/ nodes ---------
function fliptabsnodes(e) {
    e.stopPropagation();
    var div = e.currentTarget;
    return;

    if (div.innerText.includes('Активні вкладки')) {
        div.innerText = "Доступні вузли:";
        localStorage.setItem('tabsnodes', 'nodes');
    } else {
        div.innerText = 'Активні вкладки:';
        localStorage.setItem('tabsnodes', 'tabs');
    }
}

function settabsnodes(text) {
    var item = document.querySelector('#mytabs');
    // var itemStyles = getComputedStyle(item, null);
    // var color = itemStyles.getPropertyValue(text);

    // item.innerText = text;
    if (item)
        item.innerText = text == 'tabs' ? 'Активні вкладки:' : "Доступні вузли:";
}
// var ispan = document.querySelector('.f2span');

// item.style.setProperty('tabsnodes', color);

var tabsnodes = null;
try {
    tabsnodes = localStorage.getItem('tabsnodes');

} finally {
    if (tabsnodes) {
        settabsnodes(tabsnodes);
    }
}

// -------------------  высота экрана
// setInterval(() => {
//     if (document.documentElement) {
//         //clientHeight - высота окна доступная, соотв/ @media min-height
//         var h2 = document.documentElement.clientHeight; //scrolleight
//         var h = document.body.offsetHeight;
//         var dv = document.querySelector('.f1');
//         dv.innerText = h + " " + h2;
//     }
// }, 300);