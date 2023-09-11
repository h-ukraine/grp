// var myedits = ['stval', 'wval', 'firmval', 'carval', 'workerval',
// 'presentval', 'plombval', 'derznumval', 'discretval', 'choosenumb'
// ];
var myedits = [];


function make_editable(cv, needstorage = true) {
    // var cv = document.getElementById(elem);
    if (cv) {
        if (cv.contentEditable != 'true') {
            cv.contentEditable = "true";
            // var t = document.getElementById(cv.id);
            // t.accessKey = needstorage ? "need" : "";
            cv.accessKey = needstorage;

            cv.addEventListener("keydown", keyevent);
            cv.addEventListener("focus", onfocusHandler);
            cv.addEventListener("blur", onblurHandler);

            //css settings
            cv.style.textAligne = 'center';
            // cv = document.getElementById(cv.id);
            cv.style.lineHeight = '24px';
            cv.style.color = 'green';
            // cv.style.color = 'rgba(250, 243, 152, 0.55)';
            // cv.style.background = 'linear-gradient(to bottom, rgba(35, 49, 35, 0.1), rgba(41, 77, 94, 0.178))';


            // cv.onselectstart = () => { return false; } //  //make unselectable!!
            //
            //read and set from cookies
            if (needstorage) {
                var tmp = localStorage.getItem(cv.id);
                if (tmp)
                    cv.innerText = tmp;
            }
        }
    }

}



myedits.forEach(name => {
    if (elem = document.getElementById(name))
        make_editable(elem);
});






function onfocusHandler(evt) {
    evt.currentTarget.style.background = "rgba(25,50,45,0.8";
    evt.currentTarget.style.color = 'rgba(255,255,0,0.99)';
    evt.currentTarget.style.borderRadius = '0px';
    evt.currentTarget.style.borderColor = 'black';
    // evt.currentTarget.style.background = 'none';


}

function onblurHandler(evt) {
    // evt.currentTarget.style.color = 'rgba(250, 243, 152, 0.5)'; // 'yellow';
    evt.currentTarget.style.color = 'green'; // 'yellow';
    // evt.currentTarget.style.backgroundColor = 'green';
    // if( evt.currentTarget.inn)
    evt.currentTarget.style.background = 'none';
    evt.currentTarget.style.backgroundColor = 'rgba(50,59,39, 0.7)';

    // set cookie on blur event for ... wval, stval...
    var name = evt.currentTarget.id;
    var text = evt.currentTarget.innerText;
    // setCookie(name, text); //, 3600 * 24 * 365);
    if (evt.currentTarget.accessKey)
        localStorage.setItem(name, text);

}

function getprintable(txt) {

    var s = "";
    for (i = 0; i < txt.length; i++) //{
        if (txt.charCodeAt(i) >= 32)
            s += txt[i];
        // }
    return s;
}

function keyevent(e) {
    // var t = document.getElementById('foot123');
    // if (t)
    //     t.innerText = Number("${e.key}").toString();

    switch (e.keyCode) {
        // case 'p':
        //     e.preventDefault();
        //     break;
        case 27:
        case 13:
            // e.preventDefault();
            // var elem = e.currentTarget;
            // elem.blur();
            break;
        case 37: // если нажата клавиша влево
            // if (left > 0)
            // blueRect.style.marginLeft = left - 10 + "px";
            break;
        case 38: // если нажата клавиша вверх
            // if (top > 0)
            //     blueRect.style.marginTop = top - 10 + "px";
            break;
        case 39: // если нажата клавиша вправо
            // if (left < document.documentElement.clientWidth - 100)
            //     blueRect.style.marginLeft = left + 10 + "px";
            break;
        case 40: // если нажата клавиша вниз
            // if (top < document.documentElement.clientHeight - 100)
            //     blueRect.style.marginTop = top + 10 + "px";
            break;
    }

    setTimeout((eee) => {

        var bbb = eee.innerText;
        // var tmp = 0;
        // var s = "";
        // for (i = 0; i < bbb.length; i++) {
        //     if (bbb.charCodeAt(i) >= 32)
        //         s += bbb[i];
        //     else {
        //         tmp = bbb[i];
        //     }
        // }

        if (eee.innerText.includes('\n')) {
            eee.innerText = getprintable(eee.innerText); //   s; //eee.innerText.replace('\n', ''); // eee.innerText = s;
        }


        //   if need rewrite
        var need_rewrite = false;
        // var sttm_string = '';
        for (i = 0; i < bbb.length; i++) {
            var chcode = bbb.charCodeAt(i);
            // sttm_string += bbb.charCodeAt(i) + ' ';
            if ((chcode != 8) && (chcode < 32) /*&& (chcode == 10) */ ) {
                need_rewrite = true;
                // setstyle.innerText('head1', 'code= ' + bbb.charCodeAt(i) + ', pos=' + i.toString());
                break;
            }
        }

        // setstyle.innerText('termhead', sttm_string);

        if (need_rewrite) {
            // terminal("call_2 blur()\n");
            // eee.innerText = s;   //call2

            // var stmp = correct_digit_cells(eee);
            // eee.innerText = stmp;
            eee.blur();

            // _restoreSelection(selectionRange);
            // localStorage.setItem(eee.id, eee.innerText);
        }

    }, 2, e.currentTarget);



}