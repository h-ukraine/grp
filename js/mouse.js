//

// TOUCH SECTION
// var ongoingTouches = new Array();
var lastmousedownid;

function startup_touch(slider) {
    // var el = document.getElementById(slider);
    var tmp = document.getElementsByClassName("vertslider2");
    var el = tmp[0];
    // el.addEventListener("touchstart", handleStart, false);
    // el.addEventListener("touchend", handleEnd, false);
    // el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
    el.addEventListener("mousedown", (e) => {
        e.preventDefault();
        lastmousedownid = el.id;
    }, false);
    el.addEventListener("mouseup", (e) => {
        e.preventDefault();
        lastmousedownid = '';
    }, false);
    document.documentElement.addEventListener("mousemove", MouseMove, false);
    document.documentElement.addEventListener("mouseup", (e) => {
        e.preventDefault();
        lastmousedownid = '';
    }, false);
}

/* Функция для получения текущих координат курсора мыши */
function getXY(obj_event) {
    if (obj_event) {
        x = obj_event.pageX;
        y = obj_event.pageY;
    } else {
        x = window.event.clientX;
        y = window.event.clientY;
        // if (ie) {
        //    y -= 2;
        //    x -= 2;
        // }
    }
    return new Array(x, y);
}

// var cnttouch = 0;
function handleMove(evt) {
    //   e = evt || window.event; 
    evt.preventDefault();
    // document.getElementById("but1").value = "move " + (++cnttouch).toString();

    var touchobj = evt.changedTouches[0];

    // distX = touchobj.pageX - startX;
    //  resizeBlock(touchobj);



    var point = getXY(touchobj);

    if (info = document.getElementById('info')) {
        info.innerText = 'x=' + point[0].toString() + ' y=' + point[1];

    }

    //  new_w = delta_w + point[0]; // Изменяем новое приращение по ширине
    //  new_h = delta_y + point[1]; // Изменяем новое приращение по высоте

    var sld = document.getElementById("sliderbase");
    //  sld.innerHTML = "h: " + (point[1]-delta_y).toString();


    //var vheight =  (sld.offsetHeight  - (point[1]-sld.offsetTop));
    var tmp = ((point[1] - sld.offsetTop));
    var vheight = tmp < 0 ? 0 : tmp; //   (tmp >100 ? 100 : tmp);
    //  vheight = vheight > 100 ? 100 : vheight;
    vheight = (vheight * 100) / sld.offsetHeight.toFixed(3);
    vheight = Math.min(100, vheight);
    setstyle.innerText('info', vheight < 100 ? vheight.toFixed(1) : vheight.toFixed(0));

    correct_table(parseInt(vheight));
    wcnt = parseInt(vheight);
    // setGlobalProp('--slider-value', vheight); // set_slider();
    //
    // correct_table(vheight);
    //

    return;

    var root = document.querySelector(':root');
    root.style.setProperty('--slider-value', vheight); //  
}


function /*resizeBlock*/ MouseMove(obj_event) {
    var point = getXY(obj_event);
    // new_w = delta_w + point[0]; // Изменяем новое приращение по ширине
    // new_h = delta_y + point[1]; // Изменяем новое приращение по высоте
    var sld = document.getElementById("sliderbase");
    //  sld.innerHTML = "h: " + (point[1]-delta_y).toString();


    //var vheight =  (sld.offsetHeight  - (point[1]-sld.offsetTop));
    var tmp = ((point[1] - sld.offsetTop));
    var vheight = tmp < 0 ? 0 : tmp; //   (tmp >100 ? 100 : tmp);
    //  vheight = vheight > 100 ? 100 : vheight;
    vheight = (vheight * 100) / sld.offsetHeight.toFixed(3);
    vheight = Math.min(100, vheight);
    // sld.innerHTML = vheight < 100 ? vheight.toFixed(1) : vheight.toFixed(0);
    if (lastmousedownid == 'slider') {
        setstyle.innerText('info', vheight < 100 ? vheight.toFixed(1) : vheight.toFixed(0));
        setGlobalProp('--slider-value', vheight); // set_slider();
        // correct_table(-vheight);
        correct_table(parseInt(vheight));
        wcnt = parseInt(vheight);
        return;
        var root = document.querySelector(':root');
        //  if( (100-vheight) < 99.0)
        root.style.setProperty('--slider-value', vheight.toString()); //    toFixed(1));
    }
    //  else 
    //      root.style.setProperty('--slider-value', (100-vheight).toFixed(0));
    // set_slider();

    //  block.style.width = new_w + "px"; // Устанавливаем новую ширину блока
    //  block.style.height = new_h + "px"; // Устанавливаем новую высоту блока
    /* Если блок выходит за пределы экрана, то устанавливаем максимальные значения для ширины и высоты */
    //  if (block.offsetLeft + block.clientWidth > clientWidth()) block.style.width = (clientWidth() - block.offsetLeft)  + "px";
    //  if (block.offsetTop + block.clientHeight > clientHeight()) block.style.height = (clientHeight() - block.offsetTop) + "px";
}