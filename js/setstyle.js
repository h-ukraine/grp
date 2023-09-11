class setstyle {

    static getInnerText(id) {
        let y = document.getElementById(id);
        if (y) {
            return y.innerText;
            // if (typeof(par) == typeof(string))
            //     y.innerText = par;
            // else y.innerText = par.toString();
        }
        return 'unknown';
    }

    static innerText(id, par) {
        let y = document.getElementById(id);
        if (y) {
            if (typeof(par) == typeof(string))
                y.innerText = par;
            else y.innerText = par.toString();
        }
    }

    static background(id, par) {
        let _div;
        if ((_div = document.getElementById(id)) != 'undefined')
            _div.style.background = par;
    }
    static getbackground(id) {
        let _div;
        if ((_div = document.getElementById(id)) != 'undefined')
            return _div.style.background;
        return 'brown';
    }
    static getbackgroundcolor(id) {
        let _div;
        if ((_div = document.getElementById(id)) != 'undefined')
            return _div.style.backgroundColor;
        return 'brown';
    }
    static color(id, par) {
        let _div;
        if ((_div = document.getElementById(id)) != 'undefined')
            _div.style.color = par;
    }

    static opacity(id, par) {
        var div = document.getElementById(id);
        if (div)
            div.style.opacity = par;
    }

    static getopacity(id) {
        var div = document.getElementById(id);

        return div ? div.style.opacity : null;
    }
    static visibility(id, par) {
        if (div = document.getElementById(id))
            div.style.visibility = par;
    }


    static width(id, par) {
        if (div = document.getElementById(id))
            div.style.width = par;
    }

    static height(id, par) {
        if (div = document.getElementById(id))
            div.style.height = par;
    }

    static display(id, par) {
        var div = null;
        if (div = document.getElementById(id))
            div.style.display = par;
    }


}