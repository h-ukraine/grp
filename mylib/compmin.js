// Доступ к таблице по row column

const _getRow = grid => index => {
    if (grid) {
        return grid.querySelector(`div.row:nth-child(${index + 1})`);
    }
};

// const getColumn = grid => (rowIndex, cellIndex) => {
_getCell = grid => (rowIndex, cellIndex) => {
    const row = _getRow(grid)(rowIndex);
    if (row) {
        return row.querySelector(`div:nth-child(${cellIndex + 1})`);
    }
};

class jsTable {
    tabl;
    rowCount;
    colCount;
    maxcolCount;
    rowclass;
    cellclass;

    // gridtemplatecolumns;

    //СВОЙСТВА 
    get style() {
        return this.tabl.style;
    }
    get rows() {
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
        return Array.from(this.row(index).children);
    }

    cells_ofRow(index) {
        return Array.from(this.row(index).children);
    }

    setcolumnProperty(index, prop, val) {
        var e = null;
        for (var i = 0; e = this.row(i); i++) {
            this.cell(i, index).style.setProperty(prop, val);
        }
        //return this.tabl.querySelector(`div.row:nth-child(${index + 1})`);

    }

    setcolumnProp(index, prop, val) {
        var e = null;
        for (var i = 0; i < this.rows.length; i++) {
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

    _genGridTable(tabldiv, rows = 4, cols = 6) {
        // var сщте = document.getElementById(сontainer);

        for (var r = 0; r < rows; r++) {
            var row = document.createElement("div");
            row.className = this.rowclass;
            for (var c = 0; c < cols; c++) {
                var cell = document.createElement("div");
                // if (r == 2 && c == 2)
                //     cell.className = "gridsquare begin";
                // else if (r == 2 && c == 4)
                //     cell.className = "gridsquare end";
                // else
                cell.className = this.cellclass; //+= "gridsquare"; //"tmpgrid"; // 
                //// cell.innerText = r + '_' + c;
                if ((c == 0) || (r == 0)) {
                    cell.style.textAlign = 'center';
                    // cell.style.color = 'rgb(10,170,220)';
                }

                if (r == 0) {
                    // cell.style.color = 'rgb(255,255,255)';
                    // cell.style.lineHeight = '30px';
                    // cell.style.marginBottom = '8px';
                }

                // else {
                //     if ((r / 5) & 1) {
                //         cell.style.color = 'rgb(10,170,220)';
                //         // if ((r % 5) > 0)
                //         //     cell.style.background = 'rgba(63,63,63,0.8)';
                //     }
                //     if ((r % 5) == 0) {
                //         // cell.style.height = '3px';
                //         // cell.style.lineHeight = '40px';
                //         // cell.style.className = '';

                //         //
                //         // cell.style.background = 'rgb(23,26,30)';
                //     }
                // }
                row.appendChild(cell);
            }
            row.style.gridTemplateColumns = '1.5fr  repeat(' +
                (cols - 1).toString() + ', 1fr)';
            tabldiv.appendChild(row);
        }
    }

    setColumns(amount) {

        if (amount < this.colCount) {
            this.rows.forEach(row => {
                // var ind = tbl.rows.indexOf(row);
                // for (i = amount; i < this.colCount; i++) {
                //     // row.children[i].style.background = 'blue';
                //     // tbl.cell(ind, i).classList = '';

                //     // tbl.cell(ind, i).style.display = 'none';
                //     row.children.item(i).style.display = 'none';
                // }

                while (row.childElementCount > amount)
                    row.removeChild(row.lastChild);

                if (amount == 1)
                    row.style.gridTemplateColumns = '';
                else
                    row.style.gridTemplateColumns = ' repeat(' + amount + '1fr)';
                row.style.gridTemplateColumns = '1.0fr  repeat(' +
                    // (this.colCount - 1).toString() + ', 1fr)';
                    (amount - 1).toString() + ', 1fr)';
                // if (amount == 0)
                //     row.style.gridTemplateColumns = '1fr ';
                // else
                //     row.style.gridTemplateColumns = '1fr  repeat(' + (amount - 1).toString() + ', 1fr)';
            });
            this.colCount = amount;

        } else if (amount > this.colCount)
            this.rows.forEach(row => {
                // var count = row.childElementCount;

                // var www = this.rows;
                // var ij0 = Array.from(this.tabl.children);
                var ind = this.rows.indexOf(row);

                if (amount == 1)
                    row.style.gridTemplateColumns = '';
                else
                    // row.style.gridTemplateColumns = ' repeat(' + amount + '1fr)';
                    row.style.gridTemplateColumns = '1fr  repeat(' + (amount - 1).toString() + ', 1fr)';

                var _currclass = row.lastChild.className;
                for (i = 0; i < (amount - this.colCount); i++) {
                    var cell = document.createElement("div");
                    // if (r == 2 && c == 2)
                    //     cell.className = "gridsquare begin";
                    // else if (r == 2 && c == 4)
                    //     cell.className = "gridsquare end";
                    // else
                    cell.className = _currclass; //row.lastChild.className; //  this.cellclass; //+= "gridsquare"; //"tmpgrid"; // 
                    // if (ind == 0)
                    // cell.innerText = ind + '_' + (this.colCount + i);

                    row.appendChild(cell);
                }


            });

        var ttt = this.colCount + amount;
        this.colCount = this.row(0).childElementCount;

    }

    setrows(amount) {
        if (amount < this.rowCount) {
            while (this.tabl.childElementCount > amount)
                this.tabl.removeChild(this.tabl.lastChild);

        } else if (amount > this.rowCount) {
            for (var r = this.rowCount; r < amount; r++) {
                var row = document.createElement("div");
                row.className = this.rowclass;
                for (var c = 0; c < this.colCount; c++) {
                    var cell = document.createElement("div");
                    cell.className = this.cellclass;

                    // check upper row the same cell class...
                    if (r > 0) {

                        let prev_classname = this.cell(r - 1, c).classList;
                        let curr_classname = cell.classList;
                        let lll = -1;



                    }


                    // cell.innerText = r + '_' + c;
                    if ((c == 0) || (r == 0)) {
                        cell.style.textAlign = 'center';
                        // cell.style.color = 'rgb(10,170,220)';
                    }

                    if (r == 0) {
                        // cell.style.color = 'rgb(255,255,255)';
                        // cell.style.lineHeight = '30px';
                        // cell.style.marginBottom = '8px';
                    }

                    row.appendChild(cell);
                }
                row.style.gridTemplateColumns = '1.5fr  repeat(' +
                    (this.colCount - 1).toString() + ', 1fr)';
                this.tabl.appendChild(row);
            }

        }

        this.rowCount = amount;


    }

    constructor(idname, _rows, _cols, where = document.body, rowclass = 'row', cellclass = 'gridsquare') {
        // if (!(this.tabl = document.getElementById(idname))) {
        this.tabl = document.createElement('div');
        this.rowCount = _rows;
        this.maxcolCount = this.colCount = _cols;
        this.tabl.id = idname;
        this.rowclass = rowclass;
        this.cellclass = cellclass;


        // }

        this._genGridTable(this.tabl, _rows, _cols);

        //
        if (where == document.body) {
            document.body.appendChild(this.tabl);
        }
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
    }

    setProperty(a, b) {
        this.tabl.style.setProperty(a, b);
    }

};