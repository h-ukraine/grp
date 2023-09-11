let gas_codes = [
    "CnHm", "CH4",
    "H2", "CO",
    "H2S", "SO2",
    "CL2", "NH3",
    "NO2", "O2",
    "CO2", "Рівень",
    "Температ.", "Тиск",
    "Кнопки", "Дистанція",
];

let units_codes = [
    "Пусто", "%НКПР",
    "мг/м3", "%об",
    "ppm", "В",
    "мВ", "сек",
    "Бод", "°C",
    "°K", "Бар",
    "кПа", "МПа",
    "%", "м",
];




//enum example!!!
var State = {
    STATE_A: 0,
    STATE_B: 1,
    STATE_C: 2
        //...
}




class Bitconverter {

    ToInt16(buf, beg) {
        var res = buf[beg] + buf[beg + 1] * 256;
        if (res > 32767)
            res -= 65536;
        return res;
    }

    ToUInt16(buf, beg) {
        var _ushort = buf[beg] + buf[beg + 1] * 256;
        return _ushort;
    }

    // getFloat(data, offset = 0) {
    //     return new DataView(data.buffer, offset, 8).getFloat64(0);
    // }

    static ToFloat(buf, offset) {
        var len = buf.length;
        let buffer = new ArrayBuffer(len);
        let view = new DataView(buffer);
        // set bytes
        buf.forEach(function(b, i) {
            view.setUint8(i, b);
        });
        // for (var i = 0; i < len; i++)
        //     view.setUint8(i, buf[i]);

        return view.getFloat32(offset, true);
    }




}

// let headnames = ['Коментар', 'Адр.', '№давач.', '№вх.', '№вих.', 'Газ/Вим.вел.', 'Конц./Знач.', 'Од.вим.', 'Стан./Помил.', 'Иніц.', 'Ремонт', 'Регл.', 
// 12: 'Пор1', 'Пор2', 'Пор3', 'Пер-', 'Пер+', 
// 17: 'Рез.жив.', 'Осн.жив.', 'Активний',
// ];

// function string2Bin(str) {
//     var result = [];
//     for (var i = 0; i < str.length; i++) {
//         result.push(str.charCodeAt(i).toString(2));
//     }
//     return result;
// }

// function bin2String(array) {
//     var result = "";
//     for (var i = 0; i < array.length; i++) {
//         var ari = parseInt(array[i], 2); //array[i];
//         var ch = String.fromCharCode(ari);
//         result += ch;
//         var dummy = 0;
//         if (i >= 22)
//             dummy++;

//     }
//     return result;
// }

let decoder = new TextDecoder();

let namemass = [];


callback_GetBinary = (buf) => { // function callback_GetBinary(buf) {


    console.log("[callback_GetBinary]: " + buf.length + 'bytes');
    //                 1  2   3   4   5   6   7   8   9  10  11  12  13   14  15 16  17  18 19
    //    1  68   4   1  21   3  29  19  47  42   0   0 154 153 153  64   0   0   1 145   5 215

    var wh1; // = document.getElementById('wk1h');
    var wk1; // = document.getElementById('wk1');
    var activeColumns = names_array.filter(x => x.isactive); //   wk1.childElementCount;
    var len = activeColumns.length;

    var trystr = new TextDecoder().decode(new Uint8Array(buf));
    var nm = trystr.indexOf('name');

    var espName = trystr.substr(nm + 4, 100);
    if (namemass.filter(x => x == espName).length == 0)
        namemass.push(espName);

    var nmbid = namemass.indexOf(espName);

    for (var i = 0; i < len; i++) {
        if (i == 0) {

            var wkname = 'wk' + (nmbid + 1).toString() + 'head';
            setstyle.innerText(wkname, espName);
            // if (nmbid == 0) {
            //     // wk1.children[i].style.color = 'green';
            //     setstyle.innerText('wk1head', espName);
            // } else if (nmbid == 1) {
            //     // wk2.children[i].style.color = 'green';
            //     wk2head.innerText = espName;
            // } else if (nmbid == 2) {
            //     // wk3.children[i].style.color = 'green';
            //     wk3head.innerText = espName;

            // } else if (nmbid == 3) {
            //     // wk4.children[i].style.color = 'green';
            //     wk4head.innerText = espName;
            // } else if (nmbid == 4) {
            //     // wk5.children[i].style.color = 'green';
            //     wk5head.innerText = espName;
            // } else if (nmbid == 5) {
            //     // wk6.children[i].style.color = 'green';
            //     wk6head.innerText = espName;
            // }


        } else {

            wk1 = document.getElementById('wk' + (nmbid + 1).toString());
            wh1 = document.getElementById('wk' + (nmbid + 1).toString() + 'h');

            whead1 = document.getElementById('wk' + (nmbid + 1).toString() + 'head');

            // wk1.children[i].innerText = i.toString();
            var name = wh1.children[i].innerText;
            // var nnn = names_array[1].name;

            // if (name == names_array[0].name) { //Коментар.
            //     wk1.children[i].innerText = 'Палата №101';
            // }


            if (name == names_array[1].name) { //Адр.
                wk1.children[i].innerText = buf[0];
            }
            if (name == names_array[2].name) { //№датчика(каналу !!!)
                wk1.children[i].innerText = buf[3]; //buf[0];
            }
            if (name == names_array[3].name) { //№входу
                wk1.children[i].innerText = (buf[19] & 7).toString();
            }
            if (name == names_array[4].name) { //№виходу
                wk1.children[i].innerText = (buf[19] >> 4 & 7).toString();
            }
            if (name == names_array[5].name) { //газ/величина
                var ind = buf[17];
                if (ind < gas_codes.length)
                    wk1.children[i].innerText = gas_codes[ind];
                else
                    wk1.children[i].innerText = 'undefined';
            }
            if (name == names_array[6].name) { //Конц./Знач.
                // var ind = buf[18];
                // if (ind < units_codes.length)
                wk1.children[i].innerText = Bitconverter.ToFloat(buf, 12).toFixed(2);
                // else
                //     wk1.children[i].innerText = 'undefined';
            }
            if (name == names_array[7].name) { //Од.виміру
                var ind = buf[18];
                if (ind < units_codes.length)
                    wk1.children[i].innerText = units_codes[ind];
                else
                    wk1.children[i].innerText = 'undefined';
            }
            if (name == names_array[8].name) { //Сост/ошибка
                // var ind = buf[18];
                // if (ind < units_codes.length)
                // wk1.children[i].innerText = buf[17] == 255 ? 'нема зв.з дав.' : 'Працює';
                var irow = (i / cols).toFixed(0);
                var ifirst = irow * cols;
                var ilast = ifirst + cols - 1;

                if (buf[17] == 255) {
                    wk1.children[i].innerText = 'нема зв.з дав.';
                    // get first and last index of current row

                    for (n = ifirst; n <= ilast; n++) {
                        // wk1.children[n].style.background = 'rgb(220,230,0)'; //yellow';
                        wk1.children[n].style.background = 'rgb(130,23,0)'; //yellow';
                        wk1.children[n].style.color = 'rgb(220,220,100)';

                    }
                    wk1.children[i].style.background = 'red';
                    wk1.children[i].style.color = 'yellow';
                    wk1h.style.color = 'yellow';
                    whead1.style.color = 'yellow';
                } else {
                    wk1.children[i].innerText = 'Працює';
                    for (n = ifirst; n <= ilast; n++) {
                        wk1.children[n].style.background = default_background;
                        wk1.children[n].style.color = default_color;
                    }
                    wk1h.style.color = 'green';
                    whead1.style.color = 'green';
                    // wk1.children[i].style.background = default_background;
                }
                // else
                //     wk1.children[i].innerText = 'undefined';
            }
            if (name == names_array[9].name) { //инициализация
                // var ind = buf[18];
                // if (ind < units_codes.length)
                wk1.children[i].innerText = buf[19] & 0x8 ? 1 : 0;
                // else
                //     wk1.children[i].innerText = 'undefined';
            }
            if (name == names_array[10].name) { //ремонт
                // var ind = buf[18];
                // if (ind < units_codes.length)
                wk1.children[i].innerText = buf[16] & 0x2 ? 1 : 0;
                // else
                //     wk1.children[i].innerText = 'undefined';
            }
            if (name == names_array[11].name) { //выкл ЧЭ  Регламент???
                // var ind = buf[18];
                // if (ind < units_codes.length)
                wk1.children[i].innerText = buf[16] & 0x4 ? 1 : 0;
                // else
                //     wk1.children[i].innerText = 'undefined';
            }
            if (name == names_array[12].name) { //Порог1
                wk1.children[i].innerText = buf[16] & 0x8 ? 1 : 0;
            }
            if (name == names_array[13].name) { //Порог2
                wk1.children[i].innerText = buf[16] & 0x10 ? 1 : 0;
            }
            if (name == names_array[14].name) { //Порог3
                wk1.children[i].innerText = buf[16] & 0x20 ? 1 : 0;
            }
            if (name == names_array[15].name) { //Пер-
                wk1.children[i].innerText = buf[16] & 0x40 ? 1 : 0;
            }
            if (name == names_array[16].name) { //Пер+
                wk1.children[i].innerText = buf[16] & 0x80 ? 1 : 0;
            }

            //
            if (name == names_array[17].name) { //Рез.жив.
                wk1.children[i].innerText = (buf[11] & 0x01) ? 'немає' : 'норма';
            }
            if (name == names_array[18].name) { //Осн.жив.
                wk1.children[i].innerText = (buf[11] & 0x02) == 2 ? 'немає' : 'норма';
            }
            if (name == names_array[19].name) { //Рез.жив.
                wk1.children[i].innerText = buf[19] & 0x80 ? 1 : 0;
            }





        }
    }




    return;


    //
    if (buf[9] == 6) {
        setstyle.background("current_values", "darkgreen");
        setTimeout(() => setstyle.background("current_values", "transparent"), 500);

        // var len = buf.length;
        // var ttt = new ArrayBuffer(buf.length);
        // var view = new DataView(ttt);
        // buf.forEach(function(b, i) {
        //     view.setUint8(i, b);
        // });

        // var bbb = new ArrayBuffer(buf.length);

        var fcurr = bitc.ToUInt16(buf, 0);
        var icode = bitc.ToUInt16(buf, 2);

        // var df = new Uint8Array(buf, 4, 8);
        // var ef = bitc.getFloat(df, 4);

        let buffer = new ArrayBuffer(12);
        let view = new DataView(buffer);
        // set bytes
        buf.forEach(function(b, i) {
            view.setUint8(i, b);
        });
        // new DataView(buffer).setFloat32(0, 78.456, true);
        // let aaa = view.getFloat32(5, true);

        let bbbfloat = bitc.ToFloat(buf, 5);

        console.log(" fcurr = " + fcurr.toString() + ", icode = " + icode.toString());

        if (div = document.getElementById('val0')) {
            var height = Math.max(500, (35000 - fcurr)) * 90 / 35000;
            div.style.height = height.toString() + '%';
            div.style.top = (90 - height).toString() + '%';
            setstyle.innerText('l3', fcurr.toString());
        }

        setstyle.innerText('freqvalue', fcurr.toString());
        setstyle.innerText('levelvalue', icode.toString());
        setstyle.innerText('tempvalue', buf[4].toFixed(1));

        if (param.clbmode == 2)
            setstyle.innerText('fullval', fcurr.toString());
        if (param.clbmode == 1)
            setstyle.innerText('emptyval', fcurr.toString());


    } else if (buf[9] == 5) {
        setstyle.background('current_params', "darkgreen");
        setTimeout(() => {
            setstyle.background('current_params', "transparent");
        }, 500);

        var fmin = bitc.ToUInt16(buf, 0);
        var fmax = bitc.ToUInt16(buf, 2);
        var fempt = bitc.ToUInt16(buf, 4);
        var ffull = bitc.ToUInt16(buf, 6);

        var specbits = buf[8];

        var devmonth = buf[10];
        var devyear = buf[11];
        var devnum = bitc.ToUInt16(buf, 12);
        // vvv[18] = ndat;
        // vvv[19] = codelitr;
        // vvv[20] = version;
        // vvv[21] = dir;
        var codelitr = buf[19];

        setstyle.innerText("fminval", fmin.toString());
        setstyle.innerText("fmaxval", fmax.toString());

        setstyle.innerText("zfullval", ffull.toString());

        setstyle.innerText("zemptyval", fempt.toString());
        if (param.clbmode == 0) {
            setstyle.innerText('fullval', ffull.toString());
            setstyle.innerText('emptyval', fempt.toString());
        }
        // setstyle.innerText("iddu02", devmonth.toString() + '-' + devyear.toString() + ' #00' + devnum.toString());
        var e1 = toZeroFormat(0, 1);


        setstyle.innerText("iddu02", toZeroFormat(devmonth, 1) + toZeroFormat(devyear, 1) + toZeroFormat(devnum, 4));

        // specbits
        setstyle.innerText("sharp", (specbits & 0x80) ? 'расчётно' : 'точно');
        setstyle.innerText("formcode", (codelitr & 1) ? 'Littre' : 'Code');
        setstyle.innerText("version", (codelitr >> 1) <= 30 ? 'V3.0' : 'V' + ((codelitr >> 1) / 10).toFixed(1));

        setstyle.innerText("timeofaver", (specbits & 0x02) ? 25 : 12);
        setstyle.innerText("zcodemax", (() => {
            var t = (specbits >> 2) & 3;
            return t == 0 ? '1024' : (t == 1 ? 2048 : 4096);
        })());
        // if (div = document.getElementById('zcodemax')) {
        //     var t = (specbits >> 2) & 3;
        //     div.innerText = t == 0 ? 1024 : (t == 1 ? 2048 : 4096);
        // }

        if (dv = document.getElementById('pg1_save')) {
            if (dv.style.visibility == 'hidden') {
                setstyle.innerText('pg1_form', (codelitr & 1) ? 'Littre' : 'Code');
                /*if (div = document.getElementById('pg1_form')) {
                    div.innerText = (codelitr & 1) ? 'Littre' : 'Code';
                    // setCookie(pg1_form, param.pg1_form);
                    // setCookie(pg1_code, param.pg1_code);
                    // setCookie(pg1_taver, param.pg1_taver);
                    // checkpage1();                    
                }*/

                // setstyle.innerText('pg1_code', ((specbits >> 2) & 3) == 0 ? '1024' : (t == 1 ? 2048 : 4096));
                setstyle.innerText("pg1_code", (() => {
                    var t = (specbits >> 2) & 3;
                    return t == 0 ? '1024' : (t == 1 ? 2048 : 4096);
                })());


                setstyle.innerText('pg1_taver', (specbits & 0x02) ? 25 : 12);
            }
        }

        console.log(" fmin = " + fmin.toString() + ", fmax = " + fmax.toString());
    }
    //
    else if (buf[9] == 70) {
        var nwritten = bitc.ToUInt16(buf, 0);
        console.log("[cmd=70]: записано строк : " + nwritten);

        if (div = document.getElementById('modalyes')) {
            div.style.visibility = 'visible';
        }

        if (tarirovka.rowcurr == nwritten) {

            div.style.color = 'rgb(50,255,50';
            div.innerText = "Тарировка завершена успешно.\n" + "(в ДУ записано строк: " + nwritten.toString() + ')';
            // setstyle.innerText('modalno', 'сохранено строк: ' + nwritten.toString() + '. OK!');
            div.style.background = 'rgba(15,14,14,0.7';

            // yfunc = nothing;
            setstyle.visibility('modalno', 'hidden');

            setstyle.innerText('modalmb', '>  С О Х Р А Н И Т Е  <\n ФАЙЛ ТАРИРОВКИ !');
            setstyle.visibility('modalmb', 'visible');
            setstyle.background('modalmb', 'rgba(15,14,14,0.7');
            setstyle.background('modalmb', setstyle.getbackground('baseback'));
            //setstyle.color('modalmb', 'rgba(255,255,205,1.0');
            setstyle.color('modalmb', 'rgba(255,255,205,1.0');
            // setstyle.visibility('modalno', 'visible');


            modalaction = (mod) => {
                if (mod == 0) {
                    // console.log("Click modal Yes");

                    // setstyle.visibility('modalyes', 'hidden');
                    // setstyle.visibility('modalmb', 'hidden');
                    // setstyle.color('modalno', 'orange');
                    // setstyle.background('modalno', 'rgba(20,30,40,0.8)');
                    // setstyle.innerText('modalno', 'НЕ ВЫКЛЮЧАЙТЕ ПИТАНИЕ!\n данные пишутся в ДУ...');
                    // setstyle.visibility('modalno', 'visible');

                    //                // let div = document.getElementById('modalform');
                    // if (yfunc) yfunc();
                } else if (mod == 1) {
                    // console.log("Click modal No");
                    // // let div = document.getElementById('modalform');
                    // if (nfunc) nfunc();
                    // // modalaction = modalnormal;
                } else if (mod == 2) {

                    // WRITE FILE with tar data

                    console.log("Click modal Cancel");
                    // let div = document.getElementById('modalform');
                    // if (cancelfunc) cancelfunc();
                    tarSaveResult();
                    modalaction = modalnormal;
                    setstyle.visibility('modalform', 'hidden');
                    setstyle.visibility('modalyes', 'hidden');
                    setstyle.visibility('modalno', 'hidden');
                    setstyle.visibility('modalmb', 'hidden');
                }


            }
        }
        // when error:
        else {
            setstyle.innerText('modalno', 'О Ш И Б К А !\n Попробуйте повторить операцию');
            setstyle.visibility('modalmb', 'visible');

        }

        // }
        // }


    }


}