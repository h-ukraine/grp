var pnames = [
    `Номер об'єкта`, 'Телефон', 'Ідентифікатор',
    'Назва',
    'Область',
    'Район',
    'Широта  X',
    'Довгота Y',
    'Активне',
];







devinside_handler = (evt) => {

    // let acckey = evt.currentTarget.accessKey;
    // switchtopage(acckey);

    // if (isMobile())
    // ewin = window.open('../setup/devsetup.html', '_self');
    // ewin = window.open('../pages/tmpgrp.html?device_Id=' + id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"');

    let c_amount = evt.currentTarget.childElementCount;

    id = evt.currentTarget.children[c_amount - 2].innerText;

    id = id.replace('#', '').trim();



    let parent1 = evt.currentTarget.parentNode;
    let parent2 = parent1.parentNode;
    let clist = parent2.classList;

    ewin = window.open('../setup/devsetup.html?device_Id=' + id + '&pw="uca9iaug1efqflqeg6iviyVUfyv3kYtgvVyfTdttu685t8p97t"', '_self');
    // else
    //     ewin = window.open('../setup/devsetup.html');




    /*
        let pages = document.getElementsByClassName('ispage');
        Array.from(pages).forEach(x => {
            x.style.display = 'none';
        });
    
        // localStorage.setItem('parentpage', 'devices');
        // localStorage.setItem('subpage', 'devinside');
    
        if (div = document.querySelector('.devinside')) {
            div.style.display = 'block';
        }
    
    */


}