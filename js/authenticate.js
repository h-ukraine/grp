var _temporary = 'oxygen';
let _timinterval = null;
let _timout = null;

function clear_tims() {
    if (_timinterval)
        clearInterval(_timinterval);
    if (_timout)
        clearTimeout(_timout);
    _timout = null;
    _timinterval = null;
}

function authenticate() {
    // var wrkpan = document.getElementById('workpanel');
    setstyle.display('regform', 'block');

    // wrkpan.style.display = 'none';
    setstyle.innerText('regmsg', "");
    setstyle.background('regmsg', '');


    if (dv = document.getElementById('login')) {
        make_editable(dv, false);
        // dv.style.color = 'lightgreen';
        // dv.innerText = 'hospital';
    }
    if (dv = document.getElementById('logvalue')) {
        make_editable(dv, false);
        // dv.style.color = 'lightgreen';
        dv.innerText = 'hospital';
    }
    if (dv = document.getElementById('passvalue')) {
        make_editable(dv, false);
        dv.innerText = '';
        // dv.style.color = 'lightgreen';
    }

    // Подсказка  временно!!!
    var fff = false;
    if (!_timinterval) {
        _timinterval = setInterval(() => {
            if (!fff) {
                fff = true;
                setstyle.innerText('regmsg', "Введіть тимчасовий пароль: " + _temporary);
                setstyle.color('regmsg', 'yellow');
            } else {
                fff = false;
                setstyle.innerText('regmsg', "");
                setstyle.color('regmsg', 'yellow');
            }
        }, 500);


        _timout = setTimeout(() => {
            // clearInterval(_timinterval);
            setstyle.innerText('regmsg', "");
            clear_tims();

        }, 3200);
    }
    //
    setstyle.color('regmsg', 'yellow');

}

function regcancel(mode) {
    setstyle.display('regform', 'none');
    clear_tims();
    if (!mode) {
        setstyle.display('youcannot', 'block');
        if (div = document.getElementById(youcannot)) {
            div.onselectstart = () => { return false; }
        }


        var h3 = document.querySelectorAll('h3');
        if (h3.length)
            h3[0].style.opacity = '0.25';
        var h2 = document.querySelectorAll('h2');
        if (h2.length)
            h2[0].style.opacity = '0.25';
    }
}

function regin() {
    clear_tims();

    var auth = false;
    if (dv = document.getElementById("regform")) {
        // var cc = setstyle.getInnerText('logvalue');
        if (setstyle.getInnerText('logvalue') == "hospital") {
            var passw = setstyle.getInnerText('passvalue');

            passw = passw.replace('\n', '');
            passw = passw.replace('\r', '');
            passw = passw.toLocaleLowerCase();
            if (passw == _temporary) {
                auth = true;
                regcancel(true);
                // customHandler();
                setstyle.display('mainpage', '');
            }

        }

        if (!auth) {
            setstyle.innerText('regmsg', "Логін або пароль помилкові.  Спробуйте ще");
            setstyle.background('regmsg', 'brown');
        }



    }
}

function hideregmsg() {
    if (dv = document.getElementById('regmsg')) {
        setstyle.innerText('regmsg', "");
        setstyle.background('regmsg', '');

    }


}