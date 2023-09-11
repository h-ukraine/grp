// let bbb = -34;
// zcomp = null;


// // var isovar = myvar;

// function fcomp() {
//     var eee = document.getElementById('component1');
//     zcomp = eee;
//     bbb = 1;
//     // var e = eee.id;
// }


// function fcomp23() {
//     var eee = document.getElementById('component1');
//     // var www = zcomp;
// }


// function generatetabl(id) {
//     var tabl = document.getElementsByClassName(id);
//     tabl = tabl[0];

//     var nam1 = document.createElement('div');
//     nam1.id = 'nam1';
//     nam1.classList += 'cll';
//     nam1.innerText = 'Nam1!'
//     tabl.appendChild(nam1);

// }




// function old_working_genGridTable(gridContainer, rows = 4, cols = 6) {
//     var e = document.getElementById(gridContainer);
//     for (var r = 0; r < rows; r++) {
//         var row = document.createElement("div");
//         row.className = "row";
//         for (var c = 0; c < cols; c++) {
//             var cell = document.createElement("div");
//             // if (r == 2 && c == 2)
//             //     cell.className = "gridsquare begin";
//             // else if (r == 2 && c == 4)
//             //     cell.className = "gridsquare end";
//             // else
//             cell.className = "gridsquare";
//             cell.innerText = r + '_' + c;
//             if ((c == 0) || (r == 0)) {
//                 cell.style.textAlign = 'center';
//                 cell.style.color = 'rgb(10,170,220)';
//             }
//             row.appendChild(cell);
//         }
//         row.style.gridTemplateColumns = '1.5fr  repeat(' +
//             (cols - 1).toString() + ', 1fr)';
//         e.appendChild(row);
//     }
// }


// Доступ к таблице по row column

const _getRow = grid => index => {
    if (grid) {
        return grid.querySelector(`div.row:nth-child(${index + 1})`);
    }
    // handle your exception here
};


// const getColumn = grid => (rowIndex, cellIndex) => {
_getCell = grid => (rowIndex, cellIndex) => {
    const row = _getRow(grid)(rowIndex);
    if (row) {
        return row.querySelector(`div:nth-child(${cellIndex + 1})`);
    }
    // Handle your exception here.
};




class jsTable {
    tabl;
    rowCount;
    colCount;

    //СВОЙСТВО style для таблицы  - вместо функции style()  !!!!!!!!!!!!!!!!
    //реализовано в виде свойства
    get style() {
        return this.tabl.style;
    }
    get rows() {
        // var arr = [];
        // for (i = 0; i < this.rowCount; i++)
        //     arr.push(this.row(i));
        // return arr;
        return Array.from(this.tabl.children);
    }


    row(index) {
        // return this.tabl.querySelector(`div.row:nth-child(${index + 1})`);
        return index < this.tabl.childElementCount ? this.tabl.children[index] : null;
    }

    columnCells(index) {
        var col = [];
        this.rows.forEach(row => {
            if (index < row.childElementCount)
                col.Add(row.children[index]);
        });
        return col;
    }

    rowCells(index) {
        var arr = [];
        if (index < this.rowCount) {
            var eee = this.row(index).children;
            arr = Array.from(eee);



            // var t = this.rows;
            // var r = t[4];
            // this.rows[index].children.forEach(cell => {

            //     arr.Add(row.children[index]);
            // });
            return arr;
        }
    }


    // get cells() {
    //     return Array.from(this.row.children);
    // }







    setcolumnProperty(index, prop, val) {
        var e = null;
        for (var i = 0; e = this.row(i); i++) {
            this.cell(i, index).style.setProperty(prop, val);
        }
        //return this.tabl.querySelector(`div.row:nth-child(${index + 1})`);

    }

    setMinWidth(args) {
        if (args) {
            var i = 0;
            for (i = 0;
                (i < args.length) && (i < this.colCount); i++) {
                if (args[i].length > 0)
                    this.setcolumnProperty(i, 'min-width', args[i].toString() + 'px');
            }
        }
    }


    _genGridTable(сontainer, rows = 4, cols = 6) {
        this.rowCount = rows;
        this.colCount = cols;

        // var e = document.getElementById(сontainer);
        var e = сontainer;
        for (var r = 0; r < rows; r++) {
            var row = document.createElement("div");
            row.className = "row";
            for (var c = 0; c < cols; c++) {
                var cell = document.createElement("div");
                // if (r == 2 && c == 2)
                //     cell.className = "gridsquare begin";
                // else if (r == 2 && c == 4)
                //     cell.className = "gridsquare end";
                // else
                cell.className += "gridsquare"; //"tmpgrid"; // 
                cell.innerText = r + '_' + c;
                if ((c == 0) || (r == 0)) {
                    cell.style.textAlign = 'center';
                    // cell.style.color = 'rgb(10,170,220)';
                }

                // if (r == 2 || r == 3)
                if (r == 0) {
                    cell.style.color = 'rgb(255,255,255)';
                    cell.style.lineHeight = '30px';
                    // cell.style.marginBottom = '8px';
                } else {
                    if ((r / 5) & 1) {
                        cell.style.color = 'rgb(10,170,220)';
                        // if ((r % 5) > 0)
                        //     cell.style.background = 'rgba(63,63,63,0.8)';
                    }
                    if ((r % 5) == 0) {
                        // cell.style.height = '3px';
                        // cell.style.lineHeight = '40px';
                        // cell.style.className = '';

                        //
                        // cell.style.background = 'rgb(23,26,30)';
                    }
                }
                row.appendChild(cell);


            }
            row.style.gridTemplateColumns = '1.5fr  repeat(' +
                (cols - 1).toString() + ', 1fr)';
            e.appendChild(row);
        }
    }

    constructor(idname, rows, cols, where = document.body) {
        // if (!(this.tabl = document.getElementById(idname))) {
        this.tabl = document.createElement('div');
        this.tabl.id = idname;
        // }

        this._genGridTable(this.tabl, rows, cols);

        //
        if (where == document.body)
            document.body.appendChild(this.tabl);
        else {
            var dst = document.getElementById(where);
            if (dst)
                dst.appendChild(this.tabl);
        }

        // var div = document.getElementById(idname);
        // document.appendChild(this.tabl);
        // this._genGridTable(idname, rows, cols);


        return this;
    }


    cell(rowIndex, cellIndex) {
        // const row = getRow(this.tabl)(rowIndex);
        const row = this.row(rowIndex);
        if (row) {
            // return row.querySelector(`div:nth-child(${cellIndex + 1})`);
            return cellIndex < row.childElementCount ? row.children[cellIndex] : null;
        }
        // Handle your exception here.
    }

    setProperty(a, b) {
        this.tabl.style.setProperty(a, b);
    }

};



/*
class jsDivTable {
    tabl;
    rowCount;
    colCount;

    //свойство style для таблицы вместо функции style()
    get style() {
        return this.tabl.style;
    }

    row(index) {
        // return this.tabl.querySelector(`div.row:nth-child(${index + 1})`);

        return index < this.tabl.childElementCount ? this.tabl.children[index] : null;
    }

    //реализовано в виде свойства выше 
    // style() {
    //     return this.tabl.style;
    // }

    setcolumnProperty(index, prop, val) {
        var e = null;
        for (var i = 0; e = this.row(i); i++) {
            this.cell(i, index).style.setProperty(prop, val);
        }
        //return this.tabl.querySelector(`div.row:nth-child(${index + 1})`);

    }

    setMinWidth(args) {
        if (args) {

            for (i = 0;
                (i < args.length) && (i < this.colCount); i++) {
                if (args[i] > 0)
                    this.setcolumnProperty(i, 'min-width', args[i].toString() + 'px');
            }
        }
    }


    _genGridTable(сontainer, rows = 4, cols = 6) {
        this.rowCount = rows;
        this.colCount = cols;

        // var e = document.getElementById(сontainer);
        var e = сontainer;
        for (var r = 0; r < rows; r++) {
            var row = document.createElement("div");
            row.className = "row";
            for (var c = 0; c < cols; c++) {
                var cell = document.createElement("div");
                // if (r == 2 && c == 2)
                //     cell.className = "gridsquare begin";
                // else if (r == 2 && c == 4)
                //     cell.className = "gridsquare end";
                // else
                cell.className += "gridsquare";
                cell.innerText = r + '_' + c;
                if ((c == 0) || (r == 0)) {
                    cell.style.textAlign = 'center';
                    // cell.style.color = 'rgb(10,170,220)';
                }

                // if (r == 2 || r == 3)
                if (r > 5 && r < 10)
                    cell.style.color = 'rgb(10,170,220)';
                row.appendChild(cell);

                if (r == 0)
                    cell.style.color = 'rgb(255,255,255)';
            }
            row.style.gridTemplateColumns = '1.5fr  repeat(' +
                (cols - 1).toString() + ', 1fr)';
            e.appendChild(row);
        }
    }

    constructor(newbody, zdiv, rows, cols, where = document.body) {
        // if (!(this.tabl = document.getElementById(idname))) {
        this.tabl = zdiv; //     document.createElement('div');
        // this.tabl.id = idname;
        // }

        this._genGridTable(this.tabl, rows, cols);

        //
        if (where == document.body)
            newbody.appendChild(this.tabl);
        // document.body.appendChild(this.tabl);
        else {
            var wrap = document.getElementById(where); //document.getElementById('wrapper');
            if (wrap)
                wrap.appendChild(this.tabl);
        }

        // var div = document.getElementById(idname);
        // document.appendChild(this.tabl);
        // this._genGridTable(idname, rows, cols);


        return this; //.tabl;
    }



    cell(rowIndex, cellIndex) {
        // const row = getRow(this.tabl)(rowIndex);
        const row = this.row(rowIndex);
        if (row) {
            return row.querySelector(`div:nth-child(${cellIndex + 1})`);
        }
        // Handle your exception here.
    }

    setProperty(a, b) {
        this.tabl.style.setProperty(a, b);
    }

};


*/