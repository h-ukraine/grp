class grprow {
    isdigit = 0; // 0 - analogue, 1-digital
    longname = '';
    name = '';
    bit = 0;

    constructor(dig, lname, _name, mskbit) {
        this.isdigit = dig;
        this.longname = lname;
        this.name = _name;
        this.bit = mskbit;
    }

}


let grprows = [];



// grprows.push(new grprow(0, 'Назва', '.', 0x0));
// grprows.push(new grprow(0, 'Дата та час приладу', 'Дата', 0x0));
grprows.push(new grprow(0, 'P1, кгс/см2', 'P1', 0x2)); //
grprows.push(new grprow(0, 'P2, кгс/см2', 'P2', 0x100)); //
grprows.push(new grprow(0, 'P3, мм.вод.ст.', 'P3', 0x4)); //
grprows.push(new grprow(1, 'ПЗК1', 'ПЗК1', 65536 << 1));
grprows.push(new grprow(1, 'ПЗК2', 'ПЗК2', 65536 << 9));
grprows.push(new grprow(0, 'ПСК1, % об.', 'ПСК1', 0x10)); //
grprows.push(new grprow(0, 'ПСК2, % об.', 'ПСК2', 0x200)); //
grprows.push(new grprow(0, 'Загазованість, % об.', 'Газ', 0x8)); //
grprows.push(new grprow(1, 'Двері_1', 'Дв1', 65536 << 2));
grprows.push(new grprow(1, 'Двері_2', 'Дв2', 65536 << 3));
grprows.push(new grprow(1, 'Двері_3', 'Дв3', 65536 << 4));
grprows.push(new grprow(1, 'Двері_4', 'Дв4', 65536 << 5));
grprows.push(new grprow(0, 'Tемпература1, °С', 'T1', 0x20)); //
grprows.push(new grprow(0, 'Tемпература2, °С', 'T2', 0x40)); //
grprows.push(new grprow(0, 'Езахисту, В', 'Eзах', 0x80)); //
grprows.push(new grprow(1, 'Живлення ~220, В', '~220', 65536 << 15));
grprows.push(new grprow(0, 'Aкумулятор, В', 'АК', 0x1)); //
grprows.push(new grprow(0, 'Aкумулятор зов., В', 'AKз', 0x400)); //
grprows.push(new grprow(1, 'Дельта', 'Дельта', 65536 << 13));
grprows.push(new grprow(1, 'Додатковий поріг', 'Д.пор', 65536 << 14));
grprows.push(new grprow(0, 'Рівень GSM', 'GSM', 0x8000)); //
grprows.push(new grprow(1, 'Охорона', 'Охор', 65536 << 7));



// function getbitCount(value) {
//     var cnt = 0;
//     for (i = 0; i < 16; i++) {
//         if (value & (1 << i))
//             cnt++;
//     }
//     return cnt;
// }

function getparamname(ainp, dinp) {
    var names = [];
    var mask32 = (dinp << 16) | ainp;
    var i = 0;
    for (i = 0; i < grprows.length; i++) {
        // if (mask32 & (1 << i)) {
        var grow = grprows[i];
        if (i == 20)
            var b = 9;
        if (mask32 & grow.bit) {

            if (true) {
                var input = document.createElement('input');
                input.name = 'name11';
                input.type = 'checkbox';
                input.className = "checkbox-class-name";
                if (i < 3)
                    input.checked = true; //mmm == 0 ? false : true;
                else {
                    input.checked = false;

                    cell.style.opacity = '0.35';
                }

                cell.appendChild(input);

                // if (cell.childElementCount == 0) 
                // {


                var name = document.createElement('span');
                name.innerText = grow.name;
                name.style.paddingLeft = '5px';
                name.style.cursor = 'pointer';
                cell.appendChild(name);
                name.addEventListener('click', uniclick); //  spanclickhandler);
                cell.addEventListener('click', uniclick); //  cellclickhandler);
                // cell.innerText = grow.name; //'';

                // }
            }


        }
    }




}