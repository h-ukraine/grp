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

    let acckey = evt.currentTarget.accessKey;
    switchtopage(acckey);


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