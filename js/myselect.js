let _lang = new Map();

_lang.set("ru", 'руссо');
_lang.set('ua', 'українська');
_lang.set('en', 'english');

// {
//     'ru': "русский",
//     'ua': "украинский"
// };


let setmova = () => {
    setTimeout(() => {
        if (div = document.getElementById('mov'))
            var f = 'ua';
        div.innerText = _lang.get(f);


    }, 1000);
};

function byId(div) {
    return document.getElementById(div);
}

function onblurhandler(e) {

    // var selector = document.getElementById("xxx");
    // var selectedOption = languagesSelect.options[languagesSelect.selectedIndex];
    // selection.textContent = "Вы выбрали: " + selectedOption.text;


    var span = e.currentTarget;




    var sss = span.children[0];
    // var opt = sss.selectedOption;
    var ind = sss.selectedIndex;

    var oneopt = sss.options[ind];
    var vopt = sss[ind];


    // var selectedOption = e.currentTarget.options[e.currentTarget.selectedIndex]; //                       languagesSelect.options[languagesSelect.selectedIndex];
    // selection.textContent = "Вы выбрали: " + selectedOption.text;



    // console.log("Вы выбрали: " + selectedOption.text);
    // setmova();
    var mova = byId('mov');
    mova.innerText = _lang.get(vopt.text);
}

// var cstms = document.getElementsByClassName('custom-dropdown');
// for (i = 0; i < cstms.length; i++)
//     cstms[i].addEventListener('onblur', onblurhandler);
onready = () => {
    if (div = document.getElementById('xxx')) {
        div.addEventListener('change', onblurhandler);
        // console.log(div);


    }
    setmova();

    setstyle.display('mainpage', 'none');

    setTimeout(() => {
        authenticate();
    }, 100);


}

document.addEventListener("DOMContentLoaded", onready);