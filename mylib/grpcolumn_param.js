class grpcolumn {
    cdiv;
    www = 60;

    get header() {
        return this.cdiv.firstChild;
    }

    get paramcontainer() {
        return this.cdiv.children[1];
    }

    get params() {

        if (!this.cdiv || this.cdiv.childElementCount < 2)
            return []; //null;

        try {
            return Array.from(this.cdiv.children[1].children);
        } catch (except) {
            var t = 0;
        }
        // var c = Array.from(this.cdiv.children);
        // return c.slice(1);
    }


    get rowCount() {
        return Math.max(0, this.cdiv.childElementCount - 2);
    }
    get rows() {

        return Array.from(this.cdiv.children).slice(2);

        var arr = [];
        // if (this.cdiv.childElementCount > 2)
        var container = this.cdiv.children[1];
        for (var i = 0; i < container.children.length; i++) {
            arr.push(container.children[i]);
        }
        return arr;
    }

    get allrows() {
        return Array.from(this.cdiv.children).slice(1);
    }


    get irows() {
        var arr = [];
        // if (this.cdiv.childElementCount > 2)
        for (var i = 1; i < this.cdiv.children.length; i++) {
            arr.push(this.cdiv.children[i]);
        }
        return arr;
    }




    rowcontainer(n) {
        var cont = this.cdiv.children[n + 2].children;
        return Array.from(cont);
    }

    rowparams(n) {
        var nn = n + 2;
        var cont = this.cdiv.children[nn];

        // return Array.from(cont.children);
        return Array.from(cont.children);
    }
    rowparams_alt(n) {

        return Array.from(this.rows[n].children);
    }




    // cells
    paramcell(i) {
        return this.params[i];
    }

    icell(row, col) {
        return this.rowcontainer(row)[col];
    }
    icell_alt(row, col) {
        return this.rowparams(row)[col];
    }

    cell(nrow, i) {

        var trows = this.rows;
        var irow = trows[nrow];
        if (irow.children) {
            var ch = irow.children;
            var item = ch[i];
            return this.rows[nrow].children[i];
        }

        // return ch.length == 0 ? irow : ch[i];

        return item;

        // return this.rows[nrow].children[i];
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





    setupcontainer(column_div, rows, pars) {

        this.www = isMobile ? 43 : 50;

        // setup(rows, pars) {
        this.header.style.minWidth = (this.www * pars).toString() + 'px';
        this.header.style.whiteSpace = 'nowrap';
        // column_div.style.minWidth = (www * pars).toString() + 'px';

        // while (this.rows.length > rows)
        //     this.rows.removeChild(this.rows.lastChild);

        while (this.rowCount > rows)
            this.cdiv.removeChild(this.cdiv.lastChild);
        while (this.rowCount < rows) {
            var container = document.createElement("div");
            container.name = 'container';
            // column_div.appendChild(container);
            this.cdiv.appendChild(container);
            container.style.display = 'grid';
            container.style.flexDirection = 'row';
            // container.style.margin = '1px';
            container.style.gridTemplateColumns = ' repeat(' + pars + ', 1fr) '
            container.style.justifyContent = 'left';
            container.style.borderBottom = '1px solid grey';
        }


        var r = 0;
        this.allrows.forEach(x => {
            while (x.childElementCount > pars)
                x.removeChild(x.lastChild);

            // while (x.childElementCount < pars) {
            for (var i = x.childElementCount; i < pars; i++) {
                // for (var i = 0; i < pars; i++) {
                var tmp = document.createElement("div");
                var val = 0.95; //r & 1 ? 0.7 : 0.85;
                tmp.style.background = 'rgba(245,245,245,' + val + ')';
                tmp.style.margin = '0px';
                tmp.style.textAlign = 'center';
                tmp.style.minWidth = this.www + 'px';
                tmp.style.lineHeight = '24px';
                tmp.innerText = r == 0 ? 'par' + i : i;
                tmp.style.fontSize = r == 0 ? '13px' : '14px';
                tmp.style.color = 'black';
                tmp.style.borderRight = '1px dashed rgba(100,100,100,0.6)';
                // tmp.style.whiteSpace = 'nowrap';

                x.appendChild(tmp);
                // }



            }
            r++;
        });





        // for (var r = 0; r <= rows; r++) {
        //     var container = document.createElement("div");
        //     container.name = 'container';
        //     // column_div.appendChild(container);
        //     this.cdiv.appendChild(container);
        //     container.style.display = 'grid';
        //     container.style.flexDirection = 'row';
        //     // container.style.margin = '1px';
        //     container.style.gridTemplateColumns = ' repeat(' + pars + ', 1fr) '
        //     container.style.justifyContent = 'left';

        //     for (var i = 0; i < pars; i++) {
        //         var tmp = document.createElement("div");
        //         var val = r & 1 ? 0.7 : 0.95;
        //         tmp.style.background = 'rgba(210,220,210,' + val + ')';
        //         tmp.style.margin = '0px';
        //         tmp.style.textAlign = 'center';
        //         tmp.style.minWidth = '35px';
        //         tmp.style.lineHeight = '24px';
        //         tmp.innerText = r == 0 ? 'par' + i : i;
        //         tmp.style.fontSize = r == 0 ? '13px' : '15px';
        //         tmp.style.color = 'black';
        //         tmp.style.borderRight = '1px dashed rgba(100,100,100,0.3)';

        //         container.appendChild(tmp);
        //     }
        // }

        // if (!this.params) {
        //     var r = 0;
        // }

        if (this.params.length > 0)
            this.params.forEach(x => {
                var m = 1;
                x.style.background = m & 1 ? 'rgb(60,60,60)' : 'rgb(255,53,57)';
                x.style.color = 'rgb(230,230,230)'; //_color;
                // x.innerText = 'Дата і  час';
                x.style.textAlign = 'center'; //'left';
                // x.style.paddingLeft = '8px';
                x.style.borderRight = '1px dashed grey';
                // x.style.borderBottom = '1px solid grey';
                // x.style.height = '40px';
                x.style.lineHeight = '20px';
                x.style.paddingTop = '3px';
                x.style.fontWeight = '700';
            });



    }


    setrows(val, pars) {
        var cont = Array.from(this.cdiv.children).find(x => x.name == 'container');
        this.setcolumns(1);

        while (cont.firstChild) {
            cont.removeChild(cont.lastChild);
        }

        this.setupcontainer(cont, val, pars);

        var dummy = 7;
    }


    constructor(dst, descript, pars, rows, wdth) {

        this.cdiv = document.createElement('div');
        this.cdiv.style.minWidth = wdth ? wdth : '';
        // column.style.width = '100px';
        this.cdiv.style.margin = '1px';
        dst.appendChild(this.cdiv);


        var header = document.createElement("div");
        header.name = 'header';
        this.cdiv.appendChild(header);
        header.innerText = descript ? descript : 'Description';
        header.style.paddingLeft = '3px';
        header.style.paddingRight = '3px';
        header.style.lineHeight = '28px'; //this.headerHeight + 'px'; //  '28px';
        header.style.textAlign = 'center';
        // header.style.borderBottom = '1px dashed green';
        header.style.background = 'rgb(90,100,110)';
        header.style.color = 'rgb(235,235,235)';
        // header.style.margin = '1px';
        header.style.fontSize = '16px';

        this.setupcontainer(this.cdiv, rows, pars);
    }



}