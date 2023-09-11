class grpcolumn {
    cdiv;

    get header() {
        return this.cdiv.firstChild;
    }
    get params() {
        return Array.from(this.cdiv.children[1].children);
    }

    get rows() {
        var arr = [];

        if (this.cdiv.childElementCount > 2)
            for (var i = 2; i < this.cdiv.children.length; i++) {
                arr.push(this.cdiv.children[i]);
            }

        return arr;
    }

    cell(nrow, i) {
        return rows[nrow].children[i];
    }


    addcells(container, count) {
        var beg = container.children[1].childElementCount;
        for (var m = 1; m < container.childElementCount; m++) {

            for (var i = 0; i < count; i++) {
                var tmp = document.createElement("div");
                var val = m & 1 ? 0.95 : 0.7;
                tmp.style.background = 'rgba(210,220,210,' + val + ')';
                tmp.style.margin = '0px';
                tmp.style.textAlign = 'center';
                tmp.style.minWidth = '38px';
                tmp.style.lineHeight = '24px';
                tmp.innerText = m == 1 ? 'par' + (beg + i).toString() : beg + i;
                tmp.style.fontSize = m == 1 ? '13px' : '15px';
                tmp.style.color = 'black';
                tmp.style.borderRight = '1px dashed rgba(100,100,100,0.3)';

                container.children[m].appendChild(tmp);
                container.children[m].style.gridTemplateColumns = 'repeat(' + container.children[m].childElementCount + ', 1fr)';

            }
        }
    }




    setcolumns(val) {
        if (val != this.params.length) {
            if (val < this.params.length) {
                for (var i = 1; i < this.cdiv.childElementCount; i++) {
                    var row = this.cdiv.children[i];
                    while (val < row.childElementCount)
                        row.removeChild(row.lastChild);



                    row.style.gridTemplateColumns = ' repeat(' + val + ', 1fr) '
                    var t = 0;

                }


                // while (val < this.params.length) {
                //   this.cdiv.remove(this.cdiv.children[1].lastChild);
                // }
            } else if (val > this.params.length) {
                this.addcells(this.cdiv, val - this.params.length);

            }

        }
    }


    constructor(_div) {
        this.cdiv = _div;
    }

}




class arctable {
    left;
    arc;

    columnlist = [];

    header;
    // paramrow;


    //СВОЙСТВА 
    // get style() {
    //   return this.tabl.style;
    // }

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



    paramsrow() {
        return Array.from(this.columns.Select(x => x.children[1].children));
    }



    addcolumn(dst, _name, pars, rows, wdth) {
        var column = document.createElement('div');
        dst.appendChild(column);
        // column.style.background = 'navy';
        // column.style.border = '1px solid grey';
        // column.style.margin = '3px';
        // column.style.minHeight = '100px';
        column.style.minWidth = wdth ? wdth : '';
        // column.style.width = '100px';
        column.style.margin = '1px';

        // this.arc.appendChild(column);

        var bn = this.arc.childElementCount - 1;
        //
        var header = document.createElement("div");
        header.name = 'header';
        column.appendChild(header);
        header.innerText = _name.length > 0 ? _name : 'Description';
        header.style.paddingLeft = '3px';
        header.style.paddingRight = '3px';
        header.style.lineHeight = '28px';
        header.style.textAlign = 'center';
        header.style.borderBottom = '1px dashed green';
        header.style.background = 'rgb(90,100,110)';
        // header.style.margin = '1px';
        header.style.fontSize = '16px';


        //
        for (var r = 0; r < rows; r++) {
            var container = document.createElement("div");
            container.name = 'container';
            column.appendChild(container);

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
                tmp.style.minWidth = '35px';
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

        var ttt = 789;
        // column.style.minWidth = '200px';
        var xxx = new grpcolumn(column);
        this.columnlist.push(xxx);
        return column;
    }

    correct_gridTemplateColumns() {
        var str = ''; // '180px ';
        // var fff = [];

        if (this.arc.childElementCount > 1)
            for (var i = 0; i < this.arc.childElementCount; i++) {
                var x = this.arc.children[i];
                var nnn = x.children[1].childElementCount;
                // fff.push(nnn);
                str += nnn + 'fr ';

            };

        // this.arc.style.gridTemplateColumns = '80px  repeat(' + bn + ', 1fr) ';
        this.arc.style.gridTemplateColumns = str;

        // var sss = this.columns;

        // var bbbnn = this.columnrow(2, 3);
        // var eee = this.columnrowcell(1, 1, 1);
    }




    constructor(src, par = 10, rows = 25) {
        var table = document.querySelector(src);

        table.style.display = 'flex';
        // table.style.width = '1100%';
        // table.style.background = 'rgb(20,30,40)';


        var left = document.getElementById('ftable'); //    document.createElement('div');
        left.style.minWidth = '90px';
        left.style.position = 'relative';
        // table.appendChild(left);


        // var arc = document.createElement('div');
        // table.appendChild(arc);
        var arc = document.getElementById('btable');

        arc.style.display = 'grid';
        arc.style.width = '100%';

        arc.id = 'arc11';
        // arc.style.overflowX = 'auto';
        // arc.style.position = 'relative';
        // arc.style.flexdirection = 'row';

        // var gtbl = new jsTable('sss2', 20, 12, 'btable', 'row', 'tmpdatacell');
        // gtbl.style.overflowX = 'auto';

        // this.columns.forEach(x => c.style.margin = '2px');
        // arc.style.gridColumnGap = '5px';

        // arc.style.justifyContent = 'space-between';
        // arc.style.width = '90vw';
        arc.style.minHeight = '50px';
        // arc.style.border = '1px solid red';
        this.arc = arc;
        this.left = left;
        //

        var l_column = this.addcolumn(this.left, 'Назва: ', 1, rows, '40px');

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






        var bnm = 34;
        // for (i = 0; i < lgrp.cdiv.children.length; i++) {
        //   // var tmp = lgrp.cdiv.children[i];
        //   if (i == 0)
        //     lgrp.he.style.background = '';
        //   else {
        //     var vv = lgrp.cdiv.children[i];

        //     vv.

        //   }



        // }
        // lgrp.rows.forEach(xdiv => {
        //   xdiv.style.background = 'black';
        // });


        // var left_column = this.left.firstChild; // children[0];
        // Array.from(left_column.children).forEach(item => {
        //   if (item.name == 'header') {
        //     // colmn.innerText = '10.01 12:22';
        //   }
        //   else if (item.name == 'container') {
        //     item.firstChild.innerText = '10.01 12:22';
        //   }
        // });


        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        this.addcolumn(this.arc, '', 5, rows);

        var col1 = this.columns[0];

        var hdrs = this.headers;
        var prms = this.paramsrow();

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++
        this.columnlist[0].rows.forEach(x => {

                x.firstChild.innerText = '23.01 13:13';
            })
            //------------------------------------------------------

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






        this.addcolumn(this.arc, '', 2, rows);
        this.addcolumn(this.arc, '', 3, rows);
        // this.addcolumn(this.arc, '', 4, rows);
        // this.addcolumn(this.arc, '', 2, rows);
        // this.addcolumn(this.arc, '', 1, rows);
        this.correct_gridTemplateColumns();
        // this.arc.style.width = '1000px';
        this.arc.style.overflowX = 'auto';

        this.columnlist[1].setcolumns(5);
        this.columnlist[2].setcolumns(6);
        this.columnlist[3].setcolumns(17);

        this.correct_gridTemplateColumns();

        return;


        var ttt = 789;


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

}






function openPageUniversal(e) {
    var tmaxobj = new Object({
        type: "tmax=300"
    });
    bc.postMessage(tmaxobj);
    var div = e.currentTarget;



    switch (div.innerText) {
        case 'Карта':
            {
                var mapcloseobj = new Object({
                    type: "map=close()"
                });
                bc.postMessage(mapcloseobj);
                var path = '../index2.html?map=force';
                path += '?map=force&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"';
                // var ewin = window.open('../index2.html?map=force', 'mapwindow');
                // window.name = 'ttt';
                // var ewin = window.open(path, 'mapwindow');
                // var etmp = window.open(location.href);
                var ewin = window.open(path); //, '_self'); //, 'mapwindow');
                // ewin.blur();
                // ewin.focus();
                // window.close();
                // setTimeout(() => ewin.focus(), 10);

                // function open_in_new_tab(url) {
                //     var win = window.open(url, '_blank');
                //     win.focus();
                // }
                //
                // t.href = 'http://' + location.host + '/data/index2.html';
                // t.href += '?map=force&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"';

                break;
            }
        case 'Дані ГРП':
            {
                bc.postMessage('allgrp=close()');
                ewin = window.open('../allgrp/allgrp.html');

                break;
            }

        case 'Архів':
            {


                // bc.postMessage('allgrp=close()');
                // ewin = window.open('allgrp/allgrp.html');


                // var srctext = div.innerText;
                // e.stopPropagation();
                // e.currentTarget.innerText = 'Сторінка у розробці';
                // var cc = e.currentTarget;
                // setTimeout(() => {
                //   cc.innerText = srctext;
                // }, 600);


                break;
            }

        default:
            // var dev = devchk.answDevices.filter(x => x.Id == Id)[0];
            // log('Click on dev.Id=' + Id + '...cnt:' + on_cnt++);
            // bc.postMessage(dev.description + '=close()');


            if (div.innerText.includes('надо_редактировать')) {
                var n = div.innerText.indexOf('=');
                if (n > 0) {
                    var sss = div.innerText.slice(n + 1);
                    if (sss) {
                        var id = parseInt(sss);
                        bc.postMessage(div.innerText + '=close()');
                        ewin = window.open('../pages/tmpgrp.html?device_Id=' + id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');
                        //
                    }
                }
            } else {
                var vvv = last_arrdev.Where(x => x.description.trim() == div.innerText);

                if (vvv && vvv.length > 0)
                    vvv = vvv[0];
                else
                    vvv = null;

                if (vvv) {
                    if (vvv.description.trim() != mydescription.trim()) {
                        bc.postMessage(div.innerText + '=close()');
                        ewin = window.open('../pages/tmpgrp.html?device_Id=' + vvv.Id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');
                    }
                }
            }


            break;


    }



}