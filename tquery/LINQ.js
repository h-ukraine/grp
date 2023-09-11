//-------------   extending Array methods
Array.prototype.First = function () { return (this.length > 0 ? this[0] : null); }
Array.prototype.Last = function () { return (this.length > 0 ? this[this.length - 1] : null); }


Array.prototype.Add = function (element) { this.push(element); }
Array.prototype.Where = function (args) { return this.filter(args); }
Array.prototype.Select = function (args) { return this.map(args); }
Array.prototype.Count = function (args) { return this.length; }

Array.prototype.Distinct = function (args) {
    if (!args)
        args = this;
    var res = [];
    args.forEach(x => {
        if (!res.includes(x))
            res.push(x);
    });
    return res;
};

Array.prototype.Skip = function (n) { return this.slice(n); }
Array.prototype.Take = function (n) { return this.slice(0, n); }

//-------------   extending HTMLCollection methods
HTMLCollection.prototype.Where = function (args) { return Array.from(this).filter(args); }
HTMLCollection.prototype.Select = function (args) { return Array.from(this).map(args); }
HTMLCollection.prototype.Skip = function (n) { return Array.from(this).slice(n); }
HTMLCollection.prototype.Take = function (n) { return Array.from(this).slice(0, n); }
HTMLCollection.prototype.forEach = function (args) { Array.from(this).forEach(args); }
// HTMLCollection.prototype.Add = function(div) { this.appendChild(div) }
// HTMLCollection.prototype.Remove = function(div) { this.removeChild(div) }

//----------------  JSON  ------------------------------
function isJSON(str) {
    if (/^\s*$/.test(str)) return false;
    str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
    str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
    str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
    return (/^[\],:{}\s]*$/).test(str);
}



//---------------- access to properties  ------------------------------

function setGlobalProp(prop, val) {
    var root = document.querySelector(':root');
    // var rootStyles = getComputedStyle(root);

    root.style.setProperty(prop, val);
    // var mainColor = rootStyles.getPropertyValue('--main-color');

    // console.log(mainColor); // '#ffeead'

    // Для обновления переменной CSS, просто вызовите метод setProperty на элементе, в котором была объявлена переменная, и передайте имя переменной в качестве первого параметра и новое значение — вторым.

    // root.style.setProperty('--main-color', '#88d8b0');
}

function getGlobalProp(prop, val) {
    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root, null);

    var bbb = root.style.getPropertyValue(prop);
    return rootStyles.getPropertyValue(prop);
}


function getelemProperty(elem, propname) {
    // var item = document.getElementById(elem);
    var item = document.querySelector(elem);
    // var cls = document.getElementsByClassName(classname)[0];
    var theCSSprop = window.getComputedStyle(item, null).getPropertyValue(propname);
    return theCSSprop;
}

function getrootProp(propname) {
    var root = document.querySelector(':root');
    var theCSSprop = window.getComputedStyle(root, null).getPropertyValue(propname);
    return theCSSprop;
}

function setrootProp(propname, value) {
    var root = document.querySelector(':root');
    // var rootstyle = window.getComputedStyle(root, null);
    root.setProperty(propname, value);
    var t = getrootProp(propname);
    return t;
}