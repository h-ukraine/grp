var utbl = null;


var dltbl = null;

let butpressed = null;


var deleted = {
  rows: [],

  add(row) {
    this.rows.push(row);

    if (dltbl == null) {
      div = document.getElementById('usertable');
      dltbl = new jsTable('dltbl', 1, utbl.colCount, 'usertable');
      dltbl.style.marginTop = '20px';
      // dltbl.style.border = '1px solid grey';s
      // dltbl.tabl.style.marginTop = '15px';
      dltbl.cell(0, 0).classList.add('underscored');
      // dltbl.cell(0, 0).classList.add('hoverdiv');
      dltbl.cell(0, 0).innerText = 'корзина';
      dltbl.cell(0, 0).style.fontSize = '16px';
      dltbl.cell(0, 0).style.lineHeight = '30px';
      dltbl.cell(0, 0).style.maxWidth = '350px';
      // if (!isMobile())
      //   dltbl.cell(0, 0).style.minWidth = '50px';
      dltbl.cell(0, 0).style.color = 'white';
      // dltbl.cell(0, 0).style

      // dltbl.cell(0, 0).addEventListener('click', finallydel);


      document.getElementById('usave').classList.remove('hidden');

      document.getElementById('udel').classList.remove('hidden');
      document.getElementById('back_from_users').style.opacity = '0.3';




      // dltbl.cell(0, 0).style.background = 'blue';
      // dltbl.row(0).style.border = '1px solid green';

      // dltbl.cell(0, 0).style.color = 'rgb(255,90,50)'; //             setAttribute('color', 'rgb(100,50,50)');

      while (true) {

        let irow = dltbl.row(0);
        if (dltbl.tabl.children[0].childElementCount > 2) {
          dltbl.tabl.children[0].removeChild(irow.lastChild);
        }
        else
          break;
        // dltbl.tabl.children[0].remove(dltbl.tabl.children[0].lastChild);
      }

    }


    dltbl.tabl.appendChild(row);
    row.style.background = '';
    // let templ = utbl.tabl.lastChild.style.gridTemplateColumns;
    // dltbl.rows.forEach(row => {
    //   row.style.gridTemplateColumns = templ;
    // });
  },

  remove(row) {
    this.rows.pop(row);

    utbl.tabl.appendChild(row);
    row.style.background = '';
    if (dltbl.rows.length <= 1) {
      dltbl.tabl.remove();
      dltbl = null;
      document.getElementById('udel').classList.add('hidden');
      document.getElementById('back_from_users').style.opacity = '1';
    }

  },



}



//let legacy_input = `<input type="text" name="login" placeholder="Логін" aria-label="Login" autocomplete="nickname" required>`;
// let passw_input = `<input type="password" name="password" placeholder="Пароль" aria-label="Password" autocomplete="current-password" required>`;

function get_legacy_input(text) {

  let input_object = {
    type: "text",
    // id: "id-1",
    name: "name",
    class: "cell",
    placeholder: "123456",
    // min: "5",
    // max: "50",
  };
  let nd = document.createElement("input", input_object);
  nd.value = text;
  nd.classList.add("inp_legacy");
  nd.classList.add("noborder");
  // nd.classList.add("underscored");
  return nd;


  //return `<input type="text" name="text" placeholder="" aria-label="Login" autocomplete="nickname"   value="${text}" required  class=inp_legacy>`;
}
function get_passw_input(text) {
  let rrr = get_legacy_input(text);
  rrr.setAttribute('aria-label', 'Password');
  rrr.value = '';
  rrr.placeholder = text;
  return rrr;

  //return `<input type="text" name="password" placeholder="${text}" aria-label="Password" autocomplete="current-password" class=psw_legacy required>`;
}

var down_start = Date.now();
var down_src = null;
var down_tim = null;

var down_end = Date.now();


function divselected(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  downhandler(evt);




}



function downhandler(evt) {
  down_start = Date.now();
  butpressed = document;
  console.log('downhandler');
  if (evt.currentTarget != document) {
    console.log('setTimeout...');

    down_tim = setTimeout((a = evt) => {
      let cell = a.srcElement; //  .currentTarget;
      let row = cell.parentNode;
      row.style.background = 'grey';
      // row.children.forEach(cell => {
      //   cell.style.color = 'rgb(70,130,60)';
      // });
    }, 1000);
  }

  // console.log('butpressed = document');

}

function finallydel(evt) {
  if (dltbl != null)
    dltbl.tabl.remove();
  dltbl = null;

  document.getElementById('udel').classList.add('hidden');
  document.getElementById('back_from_users').style.opacity = '1';

  // document.removeChild(dltbl.tabl);
  // dltbl.rows.forEach(row => {
  //   dltbl.tabl.removeChild(row);




  // });




}


function del_row(src) {

  // let tp = typeof (evt);
  // if (typeof (evt) == 'event') {

  // let src = evt.currentTarget;


  let already_deleted = false;

  utbl.rows.forEach(row => {
    row.children.forEach(icell => {
      if (icell == src) {
        deleted.add(row);
        // utbl.tabl.removeChild(row);
        utbl.rowCount = utbl.rows.length;
        let w = 0;
        already_deleted = true;
      }
    });

  });

  if (!already_deleted)
    dltbl.rows.forEach(row => {
      row.children.forEach(icell => {
        if (icell == src) {
          deleted.remove(row);
          // utbl.tabl.removeChild(row);
          utbl.rowCount = utbl.rows.length;
          let w = 0;
          return;
        }
      });

    });


  // let row = cell.parentNode;
  // utbl.tabl.removeChild(row);

  // }



}



/*
ALTER TABLE users AUTO_INCREMENT = 1001;
or if you haven't already added an id column, also add it

ALTER TABLE users ADD id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  ADD INDEX(id);

*/








function add_new_row() {

  // add
  let dd = cellfocused;
  if (cellfocusedout == null) {

    utbl.setrows(utbl.rowCount + 1);

    let row = utbl.rows.Last();
    row.classList.add('underscored');
    row.style.gridTemplateColumns = '0.3fr  repeat(' +
      (utbl.colCount - 1).toString() + ', 1fr)';


    let rnlast = utbl.rowCount - 1;
    utbl.cell(rnlast, 0).innerText = '?'; //     rnlast;
    utbl.cell(rnlast, 0).style.paddingRight = '10px';
    utbl.cell(rnlast, 0).classList.add('hoverdiv');
    // utbl.cell(rnlast, 0).classList.add('underscored');
    utbl.cell(rnlast, 0).addEventListener('click', uphandler);
    utbl.cell(rnlast, 0).addEventListener('mousedown', downhandler);
    utbl.cell(rnlast, 0).addEventListener('touchstart', divselected);
    utbl.cell(rnlast, 0).addEventListener('touchend', uphandler);




    for (i = 5; i < 10; i++) {
      utbl.cell(rnlast, i).innerText = 65535;
      if (i == 9) {
        utbl.cell(rnlast, i).innerText = 'user';
      }
      utbl.cell(rnlast, i).style.textAlign = 'left';
      utbl.cell(rnlast, i).classList.add('textcolor');
    }
    // utbl.cell(rnlast, i).innerText = 'user';
    //i=9  replace to select    [admin,user]




    // row.childNodes[5].innerText = '65535';

    if (isMobile()) { }
    else {
      utbl.cell(rnlast, 0).style.fontSize = '16px';
    }
    utbl.cell(rnlast, 0).style.lineHeight = '30px';


    for (i = 1; i < utbl.colCount; i++) {
      if (i == 2)
        row.replaceChild(get_passw_input('*'), row.children[i]);
      else if (i < 4) {
        row.children[i].replaceWith(get_legacy_input(''));
      }
      icell = utbl.cell(rnlast, i);
      icell.addEventListener('mousedown', focused);
      utbl.cell(rnlast, i).addEventListener('focusin', focusin);
      utbl.cell(rnlast, i).addEventListener('focusout', focusout);

      if (isMobile()) { }
      else {
        icell.style.fontSize = '16px';
      }
      icell.style.lineHeight = '30px';
    }

    utbl.setcolumnProp(0, 'min-width', '20px');
    utbl.setcolumnProp(0, 'max-width', '90%');
    utbl.setcolumnProp(1, 'min-width', '50px');
    utbl.setcolumnProp(2, 'min-width', '50px');
    utbl.setcolumnProp(3, 'min-width', '80px');
    utbl.setcolumnProp(4, 'min-width', '90px');

  }

  //delete
  else {
    let cell = cellfocused;
    del_row(cellfocusedout);
    cellfocusedout = null;


  }


}


var userobj = null;


window.oncontextmenu = (function (e) {
  //действия
  return false;
});

function uphandler(evt) {
  blur();

  if (down_tim != null) {
    clearInterval(down_tim);
    down_tim = null;
  }

  // evt.stopPropagation();
  // evt.preventDefault();
  // if (evt.button == 0) {
  //   alert('Вы кликнули левой клавишей');
  // } else if (evt.button == 1) {
  //   evt.stopPropagation();
  //   alert('Вы кликнули левой колесиком');
  // } else if (evt.button == 2) {
  //   alert('Вы кликнули правой клавишей');
  // }



  let now = Date.now();
  let tdiff = now - down_start;



  if (tdiff > 3000) {
    let r = 0;
  }

  // (+)
  if (evt.currentTarget == utbl.cell(0, 0)) {
    let y = 0;

    add_new_row();
  }

  else {
    // console.log(evt.currentTarget);

    if (evt.currentTarget == document) {
      if (butpressed == document)
        utbl.rows.forEach(row => {
          row.children.forEach(icell => icell.style.opacity = '1');
        });
    }

    else {




      utbl.rows.forEach(row => {
        row.children.forEach(icell => icell.style.opacity = '1');
      });



      if (tdiff > 1000) {

        if (evt.currentTarget.parentNode != utbl.row(0))
          del_row(evt.currentTarget);
      }
      else {


        let curr = evt.currentTarget;

        let arr = utbl.columnCells(0);

        userobj = null;

        let opacity = parseFloat(curr.style.opacity);

        if (opacity > 0.95)
          arr.forEach(x => {
            if (x == curr) {
              row = x.parentNode;

              userobj = {
                login: row.children[1].value,
                password: row.children[2].value,
                name: row.children[3].value,
                lastname: row.children[4].value,
                custlist: custlist
              };

              if ((userobj != null) && (dltbl == null)) {
                sessionStorage.setItem('userobj', JSON.stringify(userobj));
              }
            }
          });

        if (dltbl == null) {

          let parent = evt.currentTarget.parentNode;

          if (parent != utbl.row(0)) {
            let fc = cellfocused;
            let fc0 = cellfocusedout;
            if (fc0 == null)
              switchtopage('devices');
            cellfocusedout = null;

          }
        }
      }





    }

    if (0) // some diagnostics
    {
      // let icell = evt.currentTarget;
      // let row = icell.parentNode;

      // let r1 = row.children[1];
      // let val = r1.value;
      // let pls = row.children[2].placeholder;
      // let pws = row.children[2].value;

      // if (elem = document.getElementById('loginname')) {
      //   elem.innerText = val;

    }

  }

}

function onsave_users() {
  cellfocusedout = null;

}


function focused(evt) {
  evt.stopPropagation();  //preventDefault()


  /*
  The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.
  It does not, however, prevent any default behaviors from occurring; for instance, clicks on links are still processed. 
  If you want to stop those behaviors, see the preventDefault() method. 
  It also does not prevent propagation to other event-handlers of the current element. 
  If you want to stop those, see stopImmediatePropagation().
  */
  console.log(evt.currentTarget);
  butpressed = evt.currentTarget;
  let src = evt.currentTarget;

  let evtrow = evt.currentTarget.parentNode;

  document.getElementById('usave').classList.remove('hidden');


  for (i = 1; i < utbl.rowCount; i++) {
    utbl.row(i).children.forEach(icell => {
      // if (icell.tagName == 'DIV') {
      if (icell != src) {
        if (utbl.row(i) != evtrow)
          icell.style.opacity = '0.3';
        else
          icell.style.opacity = '1.0';
      }
      else {
        icell.style.opacity = '1.0';
        butpressed = icell;
      }

      if (icell.childElementCount > 0) {
        let inp = icell.childNodes[0];
        if (inp.tagName == 'INPUT') {
          let y = 0;


        }

      }




    });

  }

}

function focusouthandler(evt) {

  // evt.stopPropagation();
  let curr = evt.currentTarget;

  let need_up = true;

  if (curr == butpressed)
    need_up = true;
  else {
    for (row = 1; row < utbl.rowCount; row++)
      for (col = 1; col < utbl.colCount; col++) {
        if (curr == utbl.cell(row, col))
          need_up = false;
      }
  }

  if (need_up)
    utbl.rows.forEach(row => {
      row.children.forEach(icell => icell.style.opacity = '1');
    });
}



let cellfocused = null;
let cellfocusedout = null;

function focusin(evt) {
  console.log(evt.currentTarget.value + ': focusin');
  cellfocused = evt.currentTarget;
  utbl.cell(0, 0).innerText = isMobile() ? '+/-' : '+ / -';
  // utbl.cell(0, 0).style.background = 'rgb(230,50,50)';
  utbl.cell(0, 0).style.border = '1px solid red';

  // document.getElementById('back_from_users').style.opacity = '0.3';

}
function focusout(evt) {
  console.log(evt.currentTarget.value + ': focusout');
  if (evt.currentTarget == cellfocused) {
    cellfocusedout = cellfocused;
    cellfocused = null;
    console.log("cellfocused = null");
    utbl.cell(0, 0).innerText = '+';
    // utbl.cell(0, 0).style.background = '';
    utbl.cell(0, 0).style.border = '';
  }
}





function gotusers() {
  if (userlist != null && custlist != null) {

    document.addEventListener('mousedown', downhandler);
    document.addEventListener('mouseup', uphandler);

    if (utbl == null)
      utbl = new jsTable('tableid', 1, 5 + 5, 'usertable');

    // if (utbl != null)
    //   document.getElementById('usertable').removeChild(utbl.tabl);


    // utbl = new jsTable('tableid', userlist.length + 1, 5, 'usertable');
    // utbl = new jsTable('tableid', 1, 5, 'usertable');
    utbl.setrows(userlist.length + 1);


    utbl.rows.forEach(row => {

      row.classList.add('underscored');

      // row.style.className = 'container_d';

      let s = row;

      row.style.gridTemplateColumns = '0.3fr  repeat(' +
        (utbl.colCount - 1).toString() + ', 1fr)';

      row.children.forEach(icell => {
        // c.style.border = '1px solid grey';
        // cc.className += " underscored";  //  

        // icell.classList.add("underscored");  //   .add('underscored');
        if (isMobile()) { }
        else {
          icell.style.fontSize = '16px';
        }
        icell.style.lineHeight = '30px';
      });

    });


    for (r = 0; r < userlist.length; r++) {

      if (r == 0) {
        utbl.cell(r, 0).innerText = '+';
        utbl.cell(r, 0).style.paddingRight = '10px';
        utbl.cell(r, 0).classList.add('hoverdiv');
        //
        utbl.cell(r, 1).innerText = 'login';
        utbl.cell(r, 2).innerText = 'passw';
        utbl.cell(r, 3).innerText = 'name';
        utbl.cell(r, 4).innerText = 'lastname';
        utbl.cell(r, 5).innerText = 'inp_adm';
        utbl.cell(r, 6).innerText = 'bit_adm';
        utbl.cell(r, 7).innerText = 'inp_usr';
        utbl.cell(r, 8).innerText = 'bit_usr';
        utbl.cell(r, 9).innerText = 'role';


        utbl.row(0).children.forEach(x => {
          x.style.color = 'white';
          if (x != utbl.row(0).firstChild) {
            x.style.textAlign = 'left';
            x.style.minWidth = '85px';
          }
          x.addEventListener('click', uphandler);
        });
      }

      let item = userlist[r];

      let rcust = custlist.Where(c => c.userlogin == item.login);
      let cust = null;
      if (rcust.length) {
        cust = rcust[0];
      }


      let rnmb = r + 1;
      utbl.cell(rnmb, 0).addEventListener('click', uphandler);
      utbl.cell(rnmb, 0).addEventListener('touchend', uphandler);
      utbl.cell(rnmb, 0).classList.add('hoverdiv');
      utbl.cell(rnmb, 0).innerText = item.Id;
      utbl.cell(rnmb, 0).addEventListener('mousedown', downhandler);
      utbl.cell(rnmb, 0).addEventListener('touchstart', divselected);
      utbl.cell(rnmb, 0).style.paddingRight = '10px';
      // utbl.cell(rnmb, 0).style.color = 'cyan';
      utbl.cell(rnmb, 0).classList.add('textcyan');
      // utbl.cell(rnmb, 0).style.minWidth = '50px';
      //utbl.cell(rnmb, 1).innerHTML = get_legacy_input(item.login);   //   innerText = item.login;
      // utbl.cell(rnmb, 1).innerHTML = (`${get_legacy_input(item.login)}`);   //   innerText = item.login;


      let rc = utbl.row(rnmb);

      let arr = [item.login, item.password, item.name, item.lastname,
      cust.admin_inp_mask, cust.admin_bit_mask, cust.user_inp_mask, cust.user_bit_mask, cust.priority < 6 ? 'admin' : 'user'];

      for (i = 0; i < arr.length; i++) {
        if (i == 1)

          rc.replaceChild(get_passw_input(arr[i]), rc.children[i + 1]);
        else if (i < 4) {
          // rc.replaceChild(get_legacy_input(arr[i]), rc.children[i + 1]);
          rc.children[i + 1].replaceWith(get_legacy_input(arr[i]));


        }
        else {
          rc.children[i + 1].innerText = arr[i];
          // rc.children[i + 1].style.color = 'rgb(188, 201, 166)';
          rc.children[i + 1].classList.add('textcolor');
          rc.children[i + 1].classList.add('hoverdiv');
          rc.children[i + 1].style.textAlign = 'left';

        }


        utbl.cell(rnmb, i + 1).addEventListener('mousedown', focused);
        utbl.cell(rnmb, i + 1).addEventListener('focusin', focusin);
        utbl.cell(rnmb, i + 1).addEventListener('focusout', focusout);


      }
      /*
         rc.replaceChild(get_legacy_input(item.login), rc.children[1]);
         // rk.children[1].innerHTML = get_legacy_input(item.login);
         utbl.cell(rnmb, 1).addEventListener('mousedown', focused);
         // utbl.cell(rnmb, 1).addEventListener('touchstart', focused);
         // utbl.cell(rnmb, 1).addEventListener('focusout', focusouthandler);
   
         utbl.cell(rnmb, 2).innerHTML = get_passw_input(item.password); //   innerText = item.password;
         utbl.cell(rnmb, 2).addEventListener('mousedown', focused);
         // utbl.cell(rnmb, 2).addEventListener('touchstart', focused);
         // utbl.cell(rnmb, 2).addEventListener('focusout', focusouthandler);
   
         // utbl.cell(rnmb, 2).addEventListener('blur', blured);
         // let aaa = utbl.cell(rnmb, 2);
         // utbl.cell(rnmb, 2).placeholder = '444'; 
         utbl.cell(rnmb, 3).innerHTML = get_legacy_input(item.name);
         utbl.cell(rnmb, 3).addEventListener('mousedown', focused);
         // utbl.cell(rnmb, 3).addEventListener('touchstart', focused);
         // utbl.cell(rnmb, 3).addEventListener('focusout', focusouthandler);
   
         utbl.cell(rnmb, 4).innerHTML = get_legacy_input(item.lastname);
         utbl.cell(rnmb, 4).addEventListener('mousedown', focused);
         // utbl.cell(rnmb, 4).addEventListener('touchstart', focused);
         // utbl.cell(rnmb, 4).addEventListener('focusout', focusouthandler);
         */
    }
    utbl.setcolumnProp(0, 'min-width', '20px');
    utbl.setcolumnProp(0, 'max-width', '90%');
    utbl.setcolumnProp(1, 'min-width', '50px');
    utbl.setcolumnProp(2, 'min-width', '50px');
    utbl.setcolumnProp(3, 'min-width', '80px');
    utbl.setcolumnProp(4, 'min-width', '90px');

  }
  else {
    setTimeout(gotusers, 1000);
  }




}

