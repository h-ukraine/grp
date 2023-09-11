class grprow {
  isdigit = 0; // 0 - analogue, 1-digital
  longname = '';
  name = '';
  bit = 0;

  constructor(dig, ln, _name, mskbit) {
    this.isdigit = dig;
    this.longname = ln;
    this.name = _name;
    this.bit = mskbit;
  }

}

var showAdr = 1;
let grprows = [];

grprows.push(new grprow(0, 'Назва', '.', 0x0));
if (showAdr)
  grprows.push(new grprow(0, 'Адреса', 'Адр', 0x0));
grprows.push(new grprow(0, 'Дата та час приладу', 'Дата', 0x0));

grprows.push(new grprow(0, 'P1, кгс/см2', 'P1, кгс', 0x2));
grprows.push(new grprow(0, 'P2, кгс/см2', 'P2, кгс', 0x100));
grprows.push(new grprow(0, 'P3, мм.вод.ст.', 'P3, мм', 0x4));
grprows.push(new grprow(1, 'ПЗК1', 'ПЗК1', 65536 << 1));
grprows.push(new grprow(1, 'ПЗК2', 'ПЗК2', 65536 << 9));
grprows.push(new grprow(0, 'ПСК1, % об.', 'ПСК1', 0x10));
grprows.push(new grprow(0, 'ПСК2, % об.', 'ПСК2', 0x200));
grprows.push(new grprow(0, 'Загазованість, % об.', 'Газ, %', 0x8));
grprows.push(new grprow(1, 'Двері_1', 'Дв1', 65536 << 2));
grprows.push(new grprow(1, 'Двері_2', 'Дв2', 65536 << 3));
grprows.push(new grprow(1, 'Двері_3', 'Дв3', 65536 << 4));
grprows.push(new grprow(1, 'Двері_4', 'Дв4', 65536 << 5));
grprows.push(new grprow(0, 'Tемпература1, °С', 'T1, °С', 0x20));
grprows.push(new grprow(0, 'Tемпература2, °С', 'T2, °С', 0x40));
grprows.push(new grprow(0, 'Езахисту, В', 'Eзах, В', 0x80));
grprows.push(new grprow(1, 'Живлення ~220, В', '~220, В', 65536 << 15));
grprows.push(new grprow(0, 'Aкумулятор, В', 'АК, В', 0x1));
grprows.push(new grprow(0, 'Aкумулятор зов., В', 'AKз, В', 0x400));
grprows.push(new grprow(1, 'Дельта', 'Дельта', 65536 << 13));
grprows.push(new grprow(1, 'Додатковий поріг', 'Д.пор', 65536 << 14));
grprows.push(new grprow(0, 'Рівень GSM', 'GSM', 65536 << 16));