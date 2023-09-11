class arctable {
    table;
    left;
    arc;

    columnlist = [];

    headerHeight = 28;

    lastobj;
    maxrows;




    //СВОЙСТВА
    $pages = 1;
    get pages() { return this.$pages; }
    set pages(vol) {
        this.$pages = vol;
        this.correctbuttons(vol);
        var dv = document.querySelector('#pgno');
        if (dv)
            dv.innerText = vol;
    }


    $curr = 0;
    get curr() { return this.$curr; }
    set curr(vol) {
        vol = Math.min(this.pages - 1, vol);

        this.$curr = vol;
        this.correctcurrpage(vol);
        var dv = document.querySelector('#currno');
        if (dv)
            dv.innerText = vol;
    }



    get rowCount() {
        return this.columnlist.length > 0 ?
            this.columnlist[0].rowCount : 0;
    }

    get style() {
        return this.table.style;
    }

    get columns() {
        return Array.from(this.arc.children);
    }
    get headers() {
        return this.columns.Select(x => x.firstChild);
    }

    columnrow(col, row) {
        return this.columns[col].children[row];
    }

    columnrowcell(col, row, cell) {
        return this.columns[col].children[row].children[cell];
    }


    clear() {

        while (this.columnlist.length > 0) {
            // var col = this.columnlist[this.columnlist.length - 1];
            // col.cdiv.remove();
            this.columnlist.Last() ? this.columnlist.Last().cdiv.remove() : null;
            this.columnlist.length--;
        }

        // while (this.arc.childElementCount > 0)
        //     this.arc.removeChild(this.arc.lastChild);
    }


    paramsrow() {
        return Array.from(this.columns.Select(x => x.children[1].children));
    }

    setcontainer(column_div, rows, pars) {
        for (var r = 0; r < rows; r++) {
            var container = document.createElement("div");
            container.name = 'container';
            column_div.appendChild(container);

            container.style.display = 'grid';
            container.style.flexDirection = 'row';
            // container.style.margin = '1px';
            container.style.gridTemplateColumns = ' repeat(' + pars + ', 1fr) '
            container.style.justifyContent = 'center';





            for (var i = 0; i < pars; i++) {
                var tmp = document.createElement("div");
                var val = r & 1 ? 0.7 : 0.95;
                tmp.style.background = 'rgba(210,220,210,' + val + ')';
                tmp.style.margin = '0px';
                tmp.style.textAlign = 'center';
                tmp.style.minWidth = '165px';
                tmp.style.lineHeight = '24px';
                tmp.innerText = r == 0 ? 'par' + i : i;
                tmp.style.fontSize = r == 0 ? '13px' : '15px';
                tmp.style.color = 'black';

                tmp.style.borderRight = '1px dashed rgba(100,100,100,0.3)';

                container.appendChild(tmp);
            }

            // this.rows.push(container);
            //
        }
    }


    addcolumn(dst, descript, pars, rows, wdth) {
        var column = document.createElement('div');
        dst.appendChild(column);
        // column.style.background = 'navy';
        // column.style.border = '1px solid grey';
        // column.style.margin = '3px';
        // column.style.minHeight = '100px';
        column.style.minWidth = '800px'; // wdth ? wdth : '';
        // column.style.width = '100px';
        column.style.margin = '1px';

        // this.arc.appendChild(column);

        // var bn = this.arc.childElementCount - 1;
        //
        var header = document.createElement("div");
        header.name = 'header';
        column.appendChild(header);
        header.innerText = descript.length > 0 ? descript : 'Description';
        header.style.paddingLeft = '3px';
        header.style.paddingRight = '3px';
        header.style.lineHeight = this.headerHeight + 'px'; //  '28px';
        header.style.textAlign = 'center';
        header.style.borderBottom = '1px dashed green';
        header.style.background = 'rgb(90,100,110)';
        // header.style.margin = '1px';
        header.style.fontSize = '16px';

        //

        this.setcontainer(column, rows, pars);

        var grpclmn = new grpcolumn(column);
        this.columnlist.push(grpclmn);
        return grpclmn;
    }


    add_grpcolumn(dst, descript, pars, rows, wdth) {
        var grpclmn = new grpcolumn(dst, descript, pars, rows, wdth);

        this.columnlist.push(grpclmn);
        this.correct_gridTemplateColumns();
        return grpclmn;
    }







    correct_gridTemplateColumns() {
        var str = ''; // '180px ';
        // var fff = [];

        if (this.left.childElementCount > 1)
            for (var i = 0; i < this.left.childElementCount; i++) {
                var x = this.left.children[i];
                var nnn = x.children[1].childElementCount;
                // fff.push(nnn);
                str += nnn + 'fr ';

            };

        this.left.style.gridTemplateColumns = str;






        str = '';

        if (this.arc.childElementCount > 1)
            for (var i = 0; i < this.arc.childElementCount; i++) {
                var x = this.arc.children[i];
                var nnn = 1;
                if (x.children.length > 2) {
                    nnn = x.children[1].childElementCount;
                    // fff.push(nnn);
                    str += nnn + 'fr ';
                }

            };

        // this.arc.style.gridTemplateColumns = '80px  repeat(' + bn + ', 1fr) ';
        this.arc.style.gridTemplateColumns = str;

        // var sss = this.columns;

        // var bbbnn = this.columnrow(2, 3);
        // var eee = this.columnrowcell(1, 1, 1);

        if (this.columnlist.length > 1) {
            this.columnlist.Skip(1).forEach(grpcol => {
                if (grpcol.cdiv.children.length > 1) {
                    var n = grpcol.cdiv.children[1].childElementCount;
                    var wmin = grpcol.cdiv.children[1].firstChild.style.minWidth;

                    grpcol.cdiv.style.minWidth = (n * 38).toString() + 'px';
                }
            });

            // correct left params height
            if (this.columnlist.length > 2)
                if (this.columnlist[1].params.length > 0) {
                    var clh = this.columnlist[1].params[0].clientHeight;
                }
                // var h1 = this.columnlist[0].params[0].style.height = clh + 'px';
            var dummy = 1;

        }

        //  Sum()
        //  [].reduce((a, b) => a + b, 0);  //0 - default value 
        var amount = this.columnlist.Skip(1).Select(x => x.params.length).reduce((a, b) => a + b, 0);

        var amount2 = this.columnlist.Skip(1).Select(x => x.params.length).reduce((a, b) => a + b, 0);

        // this.arc.style.minWidth = (amount * 65) + 'px';
        this.columnlist.Skip(1).forEach(x => {
            var _width = (x.params.length * (x.www + 2));
            // x.cdiv.style.minWidth = (x.params.length * (x.www + 2)) + 'px';
            x.cdiv.style.minWidth = Math.max(100, _width) + 'px';
        });

        var b = 0;

    }



    getinfo(id) {
        var amask = 0;
        var dmask = 0;

    }

    correctcurrpage(vol) {
        var btns = [];
        btns.push(document.querySelector('#cfirst'));
        btns.push(document.querySelector('#ccurrent'));
        btns.push(document.querySelector('#clast'));

        btns.forEach(x => {
            if (x.innerText == (vol + 1)) {
                x.style.border = '2px solid rgb(63, 129, 190)';

            } else
                x.style.border = '1px solid grey';

            if (this.pages > 3) {
                if (x.id == 'ccurrent') {
                    if ((vol > 0) && (vol < (this.pages - 1))) {
                        x.innerText = vol + 1;
                        x.style.border = '2px solid rgb(63, 129, 190)';
                    }
                }
            }

        });


    }



    correctbuttons(pages) {
        var cont = document.querySelector('.cbutcontainer');
        if (cont) {
            switch (this.pages) {

                case 0:
                    cont.children.forEach(ch => {
                        ch.style.display = 'none';
                    });
                    break;


                case 1:
                    {
                        cont.children.forEach(ch => {
                            // if (ch.id == 'cfirst')
                            //     ch.style.display = '';
                            // else
                            ch.style.display = 'none';

                        });
                    }
                    break;

                case 2:
                    {
                        cont.children.forEach(ch => {
                            if ((ch.id == 'cfirst') || (ch.id == 'clast'))
                                ch.style.display = '';
                            else
                                ch.style.display = 'none';
                            if (ch.id == 'clast')
                                ch.innerText = '2';

                        });
                    }
                    break;

                case 3:
                    {
                        cont.children.forEach(ch => {
                            if ((ch.id == 'cfirst') || (ch.id == 'clast') || (ch.id == 'ccurrent'))
                                ch.style.display = '';
                            else
                                ch.style.display = 'none';

                            if (ch.id == 'clast')
                                ch.innerText = '3';
                            if (ch.id == 'ccurrent')
                                ch.innerText = '2';
                            if (ch.id == 'cfirst')
                                ch.innerText = '1';
                        });
                    }
                    break;
                default:
                    {
                        cont.children.forEach(ch => {
                            // if ((ch.id == 'cfirst') || (ch.id == 'clast') || (ch.id == 'ccurrent'))
                            ch.style.display = '';
                            // else
                            //     ch.style.display = 'none';

                            if (ch.id == 'clast')
                                ch.innerText = this.pages;
                            if (ch.id == 'ccurrent')
                                ch.innerText = this.curr;
                            if (ch.id == 'cfirst')
                                ch.innerText = '1';
                        });
                    }
                    break;

            }
        }

    }


    refresh(obj) {
        // this.clear();
        this.lastobj = obj;


        if ((obj.arrgrp.length + obj.tmlist.length) == 0) {
            // document.querySelector('.cbutcontainer').style.display = 'none';
            document.querySelector('.cbutcontainer').style.visibility = 'hidden';
            document.querySelector('.cbtext').style.display = 'block';
            document.querySelector('.cbtext').innerText = 'Дані відсутні';
            // document.querySelector('.redline').visibility = 'visible';
            // document.querySelector('#redl').borderBottom = '1px solid green;';
            return;
        }
        document.querySelector('.cbutcontainer').style.visibility = 'visible';
        document.querySelector('.cbutcontainer').style.display = 'flex';
        document.querySelector('.cbtext').style.display = 'none';


        var xp = xparams;

        var doc = document.documentElement;
        var linebottom = doc.offsetHeight;
        var bod = document.body.scrollHeight;
        var win = document.documentElement.clientHeight;


        var l = this.left;
        var a = this.arc;
        // var maxrows = ((win - top - 60) / 24).toFixed(0);
        var top = this.left.offsetTop + this.headerHeight;

        var maxrows = Math.floor((win - top - 115 - 30) / 24); //.toFixed(0);


        var headers = this.headers;
        if (headers.length > 0) {
            var top = headers[0].offsetTop + headers[0].offsetHeight;
        }


        //время
        var times = obj.arrgrp.sort((a, b) => Date.parse(a.mcu_datetime) - Date.parse(b.mcu_datetime));
        if (obj.amode == 3)
            times = obj.arrgrp.sort((a, b) => Date.parse(a.server_datetime) - Date.parse(b.server_datetime));


        maxrows = Math.min(times.length + (obj.tmlist.length > 0 ? 1 : 0), maxrows);
        this.maxrows = maxrows;
        this.pages = Math.ceil((obj.arrgrp.length + (obj.tmlist.length > 0 ? 1 : 0)) / maxrows);
        this.curr = 0;
        // var clm = this.columns;


        if (this.columnlist.length == 0) {
            // this.addcolumn(this.left, 'Вузол', 1, maxrows, '40px');
            var grp = this.add_grpcolumn(this.left, 'Вузол', 1, maxrows, '110px');

            // var cont = grp.paramcontainer;
            // cont.firstChild.style.color = 'green';
            // cont.firstChild.style.background = 'yellow';
            // grp.params[0].style.color = 'blue';

            // var ppp = grp.params[0];
            // ppp.style.background = 'red';
            if (grp.params.length > 0) {
                grp.params[0].style.color = 'black';
                grp.params[0].style.background = 'rgb(200,200,200)';
            }
            // grp.params[0].style.height = '48px';

            if (grp.rows.length > 0)
                grp.rows.forEach(x =>
                    Array.from(x.children).forEach(y => {
                        y.style.background = 'rgb(60,60,60)';
                        y.style.color = 'rgb(220,220,220)';
                    })
                );


        } else {
            this.columnlist[0].setupcontainer(null, maxrows, 1);
        }

        // this.columnlist[0].setrows(maxrows, 1);




        // var rt = this.columnlist.Skip(1);
        // rt.forEach(cc => {
        //     this.arc.removeChild(cc.cdiv);
        // });
        // this.columnlist.length = 1;


        // return;


        // -------------------- расчет количества колонок по блокам
        // var Idlist = obj.devlist.Select(x => x.Id);

        var tmppw = localStorage.getItem('tmppw');

        var userobj;
        if (tmppw) {
            if (isJSON(tmppw))
                userobj = JSON.parse(tmppw);
        }




        obj.devlist.forEach(x => {

            var ainp = 0x8000;
            var dinp = 0;
            var rnames = [];



            if (obj.amode == 3) {
                rnames = [];
                rnames.push('Затримка');
            } else {
                rnames = [];
                grprows.forEach(rw => {
                    // var grpr = grprows.find(x => x.name === rw.name);
                    if (xparams.includes(rw.name)) {
                        rnames.push(rw.name);
                        if (!rw.isdigit)
                            ainp |= rw.bit;

                        else
                            dinp |= (rw.bit >> 16);

                    }
                });

            }




            ainp &= x.inpmask;
            dinp &= x.bitmask;

            ainp &= (userobj.customs.user_inp_mask & userobj.customs.admin_inp_mask);
            dinp &= (userobj.customs.user_bit_mask & userobj.customs.admin_bit_mask);





            // if (obj.amode == 3)
            //     rnames.length = 1;

            var grp = this.add_grpcolumn(this.arc, x.description, rnames.length, maxrows, '95px');
            for (var n = 0; n < Math.min(grp.params.length, rnames.length); n++) {
                grp.params[n].innerText = rnames[n];
            }
            // var cell = document.createElement('div');
            // // cell.classList.add('tmpdatacell');
            // cell.id = element.Id;
            // cell.innerText = element.description;
            // cell.margin = '2px';
            // cell.style.fontSize = '16px';
        });

        this.columnlist[0].params[0].innerText = 'Дата';
        this.columnlist[0].params[0].style.fontSize = '15px';
        // this.columnlist[0].header.style.fontSize = '15px';

        // ---------------------------------------------------------

        if (false) {
            var len = Math.min(maxrows, times.length + obj.tmlist.length);

            for (var i = 0; i < len; i++) {

                var _columntable = this.columnlist[0];

                //Проверка свойств!
                var _cdiv = _columntable.cdiv;
                var _header = _columntable.header;
                var _params = _columntable.params;
                var _rows = _columntable.rows;
                var _irows = _columntable.irows;

                // var _cell = _columntable.cell(1, 0);
                // var _icell = 



                var icell = _columntable.cell(i, 0);

                var time = times[i].mcu_datetime;
                var dt = new Date(time);
                var options = { day: 'numeric', month: 'numeric' };
                _columntable.cell(i, 0).innerText = dt.toLocaleTimeString() + '  ' + dt.toLocaleDateString('ua-Ua', options);
                _columntable.cell(i, 0).style.whiteSpace = 'nowrap';
                // _columntable.cell(i, 0).style.fontSize = '15px';

                if (i == 0) {
                    // this.columnlist[0].header.innerText = dt.toLocaleDateString();
                    var options = { day: 'numeric', month: 'numeric', year: '2-digit' };


                    this.columnlist[0].params[0].innerText = 'Дата'; //dt.toLocaleDateString('ua-Ua', options);
                    this.columnlist[0].params[0].style.fontSize = '15px';
                    // this.columnlist[0].header.style.fontSize = '15px';
                    // this.columnlist[0].header.style.lineHeight = '29px';
                }

            }


            var vvvcnt = this.rowCount;
        }

        // var grp0 = this.add_grpcolumn(this.arc, 'dev0', 4, maxrows, '40px');
        // var grp1 = this.add_grpcolumn(this.arc, 'dev0', 6, maxrows, '40px');
        this.arc.style.overflowX = 'auto';

        this.correct_gridTemplateColumns();



        this.columnlist.Skip(1).forEach(x => {
            x.params.forEach(y => {
                y.style.background = 'rgb(200,200,200)';
                y.style.color = 'black';
                y.style.fontSize = '15px';
            });
        });


        //correct +/- page buttons


        this.curr = 0;
        this.correctbuttons(this.pages);
        var dvv;
        if (dvv = document.querySelector('#ccurrent')) {
            dvv.innerText = 2;
        }



        this.refill(this.lastobj);

        return;




        var nams = times.Select(x => x.device_id);
        var inams = nams.Distinct().sort((a, b) => a - b);

        var listdescript = ['dummy'];

        inams.forEach(x => {
            var dev = obj.devlist.find(y => y.Id == x);
            if (dev)
                listdescript.push(dev.description);

        });


        //количество колонок 
        if (true) {

            // if (this.columnlist.length > (listdescript.length)) {

            while (this.columnlist.length > (listdescript.length)) {
                // this.columnlist.remove(this.columnlist[this.columnlist.length - 1]);
                var div = this.columnlist[this.columnlist.length - 1].cdiv;
                var column = this.columns[this.columns.length - 1];
                var dd = this.arc.lastChild;
                // this.arc.children.remove(this.arc.lastChild);
                this.arc.removeChild(this.arc.lastChild);
                this.columnlist.splice(this.columnlist.length - 1, 1);

                //////////////////////////////////////   myChildNode.parentNode.removeChild(myChildNode);
            }
            // }

            while (this.columnlist.length < (listdescript.length)) {
                this.addcolumn(this.arc, '_name', 2, 1, 20);
            }
        }


        this.correct_gridTemplateColumns();

        var dummy = 0;
    }




    initialize(src, pars = 10, rows = 1, obj = null) {
        if (true) {

            // if(this.columns.find(x=> x.cdiv.innerText == '????????')

            if (this.left.childElementCount == 0)
                var grp_column = this.add_grpcolumn(this.left, 'Вузол', pars, rows, '90px');

            var lgrp = this.columnlist[0];
            var i = 0;
            var _color = 'rgb(150,230,240)';
            var m = 0;

            // lgrp.header.style.background = '';
            // lgrp.header.style.color = _color;
            lgrp.header.style.borderBottom = '';
            // lgrp.header.style.textAlign = 'right';
            // lgrp.header.style.paddingRight = '8px';
            lgrp.params.forEach(x => {
                m = 1;
                x.style.background = m & 1 ? 'rgb(60,60,60)' : 'rgb(55,53,57)';
                // x.style.background = '';
                x.style.color = 'rgb(230,230,230)'; //_color;
                x.innerText = 'Дата і  час';
                x.style.textAlign = 'left';
                x.style.paddingLeft = '8px';
                x.style.borderRight = '';

                // x.style.borderBottom = '1px solid grey';
            });

            m = 0;
            lgrp.rows.forEach(irow => Array.from(irow.children).forEach(y => {

                y.style.background = m & 1 ? 'rgb(60,60,60)' : 'rgb(55,53,57)';
                y.style.color = _color;
                y.style.fontSize = '14px';
                y.style.borderRight = '';
                m++;
                // y.style.borderBottom = '1px solid grey';
            }));


        }

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        // this.addcolumn(this.arc, '', 5, rows);

        // var col1 = this.columns[0];

        var hdrs = this.headers;
        var prms = this.paramsrow();

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++
        if (this.columnlist.length > 0)
            this.columnlist[0].rows.forEach(x => {

                x.firstChild.innerText = '23.01 13:13';
            })
            //------------------------------------------------------
        if (this.arc.childElementCount > 0) {
            var iarc_column = this.arc.children[0];
            Array.from(iarc_column.children).forEach(x => {
                if (x.name == 'header') {
                    // x.innerText = 'Вузел';
                } else if (x.name == 'container') {
                    if (Array.from(iarc_column.children).indexOf(x) == 1) {
                        var names = ['par1', 'par2', 'par3', 'par4', 'par5', 'par6'];

                        var amount = x.childElementCount;
                        Array.from(x.children).forEach(y => {
                            var ind = Array.from(x.children).indexOf(y);
                            if (ind < names.length)
                                x.children[ind].innerText = names[ind];

                        });
                    }
                }
            });

        }

        this.arc.style.overflowX = 'auto';


        if (false) {
            this.addcolumn(this.arc, '', 2, rows);
            this.addcolumn(this.arc, '', 3, rows);

            // this.correct_gridTemplateColumns();

            this.columnlist[1].setcolumns(5);
            this.columnlist[2].setcolumns(6);
            this.columnlist[3].setcolumns(17);
        }

        this.columnlist.Add(new grpcolumn(this.arc, 'block1', 5, 3, '40px'));

        this.columnlist.Add(new grpcolumn(this.arc, 'block2', 1, 2, '60px'));

        this.correct_gridTemplateColumns();
    }




    constructor(src, pars = 10, rows = 1, obj = null) {


        this.table = document.querySelector(src);

        var left = document.getElementById('ftable'); //    document.createElement('div');
        // left.style.minWidth = '90px';
        // left.style.position = 'relative';
        // table.appendChild(left);
        left.style.width = '120px';

        // var arc = document.createElement('div');
        // table.appendChild(arc);
        var arc = document.getElementById('btable');

        arc.style.display = 'grid';
        arc.style.width = '100%';
        arc.style.minHeight = '50px';

        // arc.id = 'arc11';
        // arc.style.overflowX = 'auto';
        // arc.style.position = 'relative';
        // arc.style.flexdirection = 'row';

        // var gtbl = new jsTable('sss2', 20, 12, 'btable', 'row', 'tmpdatacell');
        // gtbl.style.overflowX = 'auto';

        // this.columns.forEach(x => c.style.margin = '2px');
        // arc.style.gridColumnGap = '5px';

        // arc.style.justifyContent = 'space-between';
        // arc.style.width = '90vw';


        // arc.style.border = '1px solid red';
        this.arc = arc;
        this.left = left;
        //

        // this.initialize(src, pars = 10, rows = 1, obj = null);
        this.pages = 0;

    }



    fill(grpobj) {
        if (znames.length > 0) {
            for (var i = 1; i < this.columnlist.length; i++)
                if (znames.includes(this.columnlist[i].header.innerText) == false) {
                    // delete yhis column
                    var b = 0;


                }

        }

    }



    getresult(arr, grow, dev, amode) {
        var Red = 'rgb(200,70,20)';
        var White = 'rgb(230,230,230)';
        var Grey = 'rgb(90,100,100)';
        var TmColor = 'rgb(200,160,160)';


        var inpmask = dev.inpmask;
        var bitmask = dev.bitmask;
        var obj = new Object({
            res: 'x',
            back: amode == 3 ? TmColor : (arr.tm_over > 0 ? Grey : White)
        });

        var aflags = arr.inp_flags & inpmask;

        function getback(arg) {
            if (aflags & arg)
                return Red;
            else if (arr.tm_over > 0)
                return Grey;
            else
                return White;

            // return flags & arg ? Red : White;
        }


        if (!grow.isdigit) {
            if (inpmask & grow.bit & 0x2) {
                obj.res = arr.p1;
                obj.back = getback(grow.bit & 0x2);
            } else if (inpmask & grow.bit & 0x100) {
                obj.res = arr.p2;
                obj.back = getback(grow.bit & 0x100);
            } else if (inpmask & grow.bit & 0x4) {
                obj.res = arr.p3;
                obj.back = getback(grow.bit & 0x4);

            } else if (inpmask & grow.bit & 0x10) {
                obj.res = arr.psk1;
                obj.back = getback(grow.bit & 0x10);
            } else if (inpmask & grow.bit & 0x200) {
                obj.res = arr.psk2;
                obj.back = getback(grow.bit & 0x200);
            } else if (inpmask & grow.bit & 0x8) {
                obj.res = arr.gas;
                obj.back = getback(grow.bit & 0x8);

            } else if (inpmask & grow.bit & 0x20) {
                obj.res = arr.t1;
                obj.back = getback(grow.bit & 0x20);
            } else if (inpmask & grow.bit & 0x40) {
                obj.res = arr.t2;
                obj.back = getback(grow.bit & 0x40);
            } else if (inpmask & grow.bit & 0x80) {
                obj.res = arr.ukz;
                obj.back = getback(grow.bit & 0x80);

            } else if (inpmask & grow.bit & 0x01) {
                obj.res = arr.ak;
                obj.back = getback(grow.bit & 0x01);
            } else if (inpmask & grow.bit & 0x400) {
                obj.res = arr.akext;
                obj.back = getback(grow.bit & 0x400);
            } else if ( /*inpmask & */ grow.bit & 0x8000) {
                obj.res = arr.csq_level;
                obj.back = getback(grow.bit & 0x8000);
            }


            if (obj.res != 'x') {

                if (Math.abs(obj.res) < 10.0)
                    obj.res = obj.res.toFixed(2);
                else
                    obj.res = obj.res.toFixed(0);
            }
            // return obj;

        } else {
            var dmask = grow.bit >> 16;
            if (bitmask & dmask) {
                if (isMobile)
                    obj.res = arr.bit_flags & dmask ? 'Авр' : 'Нрм';
                else
                    obj.res = arr.bit_flags & dmask ? 'Аварія' : 'Норма';
                obj.back = arr.bit_flags & dmask ? Red : (arr.tm_over > 0 ? Grey : White);
            }

            // if (res == undefined)
            //     return 'x';
            // return obj;
        }

        if (amode == 3)
            obj.back = White; //   TmColor;
        return obj;
    }


    minutes_toString(str_minutes) {
        //время
        var tmov = parseInt(str_minutes);

        var days = Math.floor(tmov / (60 * 24))
        if (days > 0)
            tmov = tmov - (days * 60 * 24);

        var hours = Math.floor(tmov / 60);

        if (hours > 0)
            tmov -= (hours * 60);




        var str = days ? days + 'д_' : '';
        if (hours < 10)
            str += '0';
        str += hours.toFixed() + ':';
        if (tmov < 10)
            str += '0';
        str += tmov;


        return str;
    }





    refill(obj = this.lastobj) {
        var os1 = obj;


        var beg = this.curr * this.rowCount;
        var end = Math.min((this.curr + 1) * this.rowCount, obj.arrgrp.length);






        var n = beg;
        for (i = 0; i < this.rowCount; i++) {


            var arr;
            var dev;
            var description;

            //  set time
            if ((beg + i) < end) {
                arr = obj.arrgrp[beg + i];
                dev = obj.devlist.find(x => x.Id == arr.device_id);
                if (dev)
                    description = dev.description;


                var time = obj.amode == 3 ? arr.server_datetime : arr.mcu_datetime;
                var dt = new Date(time);
                var options = { day: 'numeric', month: 'numeric' };


                // this.columnlist[0].cell(i, 0).innerText = dt.toLocaleTimeString() + '  ' + dt.toLocaleDateString('ua-Ua', options);
                this.columnlist[0].cell(i, 0).innerHTML =
                    '<span style="font-style: oblique; padding-right:5px;">' +
                    dt.toLocaleDateString('ua-Ua', options) + '</span > ' + ' ' + dt.toLocaleTimeString();




            } else {
                this.columnlist[0].cell(i, 0).innerText = '.';
            }

            // set values to corresponding column
            this.columnlist.Skip(1).forEach(x => {

                if ((x.header.innerText == description) && ((beg + i) < end)) {
                    // x.rowparams(i).forEach(cell => {
                    if (obj.amode == 3) {
                        var params = x.rowparams(i);
                        var cell = params[0];

                        //время
                        var tmov = parseInt(arr.tm_over);

                        var days = Math.floor(tmov / (60 * 24))
                        if (days > 0)
                            tmov = tmov - (days * 60 * 24);

                        var hours = Math.floor(tmov / 60);

                        if (hours > 0)
                            tmov -= (hours * 60);




                        var str = days ? days + '_' : '';
                        if (hours < 10)
                            str += '0';
                        str += hours.toFixed() + ':';
                        if (tmov < 10)
                            str += '0';
                        str += tmov;



                        str = this.minutes_toString(arr.tm_over);


                        cell.innerText = str;
                        cell.innerHTML = '<div class=centerspan>' + str + '</div>';
                        // cell.style.background = 'rgb(150,165,165)';
                        // cell.style.textAlign = 'right';
                        // cell.style.paddingRight = '10px';

                    } else {
                        var params = x.rowparams(i);

                        var plen = params.length;
                        for (var k = 0; k < plen; k++) {
                            var cell = params[k];

                            var partext = x.params[k].innerText;
                            var grow = grprows.find(x => x.name == partext);
                            if (grow) {
                                var vvv = this.getresult(arr, grow, dev, obj.amode);

                                cell.innerText = vvv.res;
                                cell.style.background = vvv.back;


                            } else
                                cell.innerText = 'Err-1';


                            // var partext = x.params[i].innerText;
                            // if (partext) {
                            //     var grow = grprows.find(x => x.name == partext);
                            //     if (grow) {
                            //         var vvv = this.getresult(arr, grow);
                            //         // if(grow.isdigit)
                            //         cell.innerText = vvv;
                            //     } else
                            //         cell.innerText = 'Err-1';






                        }
                    }

                    // cell.innerText = 'Err-2';
                    // cell.innerText = 'info' + (beg + i);
                } else
                    x.rowparams(i).forEach(cell => {
                        cell.innerText = '.';
                        cell.style.background = 'rgb(230,230,230)';

                    });

            });

        }


        if (obj.amode == 3)
            if (end >= obj.arrgrp.length) { // is last page

                var fff = obj.dtright;


                // var time =                 obj.amode == 3 ? arr.server_datetime : arr.mcu_datetime;
                var dt = new Date(fff);
                var options = { day: 'numeric', month: 'numeric' };


                // this.columnlist[0].cell(i, 0).innerText = dt.toLocaleTimeString() + '  ' + dt.toLocaleDateString('ua-Ua', options);
                this.columnlist[0].cell(this.rowCount - 1, 0).innerHTML =
                    '<span style="font-style: oblique; padding-right:5px;">' +
                    dt.toLocaleDateString('ua-Ua', options) + '</span > ' + ' ' + dt.toLocaleTimeString(options);



                // this.columnlist[0].cell(this.rowCount - 1, 0).innerText = "зв`язку немає";
                this.columnlist.Skip(1).forEach(x => {
                    var name = x.header.innerText;
                    var tms = obj.tmlist.Where(y => y.description == name);
                    var icell = x.cell(this.rowCount - 1, 0);

                    if (tms.length > 0) {
                        // x.cell(this.rowCount - 1, 0).innerText = this.minutes_toString(tms[0].tmover); //   
                        var str = this.minutes_toString(tms[0].tmover);
                        icell.innerHTML = '<div class=centerspan>' + str + '</div>';
                        // icell.innerText = this.minutes_toString(tms[0].tmover); //                        tms[0].description;
                        icell.style.background = 'rgb(150,165,165)'; //            'rgb(90,100,100)';   rgb(150,165,165)
                        // icell.style.fontWeight = '700';
                        // icell.style.fontSize = '16px';
                    } else {
                        var icell = x.cell(this.rowCount - 1, 0);
                        icell.innerText = '-';
                        icell.style.background = 'rgb(230,230,230)';
                        icell.style.fontWeight = '700';
                    }



                });

            }



    }

}