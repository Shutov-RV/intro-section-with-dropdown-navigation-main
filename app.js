let features = document.querySelector('.features');
let arrow = document.querySelector('.arrow');
let menu = document.querySelector('.menu');
let menuComparyWrapper = document.querySelector('.menu__company_wrapper');
let company = document.querySelector('.company');

features.addEventListener('click', () => {
    renderFeatures();
}
);

company.addEventListener('click', () => {
    renderCompany();
}
);


// function renderFeatures(){
//     let htmlMenu = `
//         <div class="features__menu">
//         <ul class="features__list">
//         <li class="todo"><img src="/images/icon-todo.svg" alt=""> Todo List</li>
//         <li class="calendar"><img src="/images/icon-calendar.svg"> Calendar</li>
//         <li class="reminders"><img src="/images/icon-reminders.svg"> Reminders</li>
//         <li class="planning"><img src="/images/icon-planning.svg"> Planning</li>
//         </ul>
//         </div>`;
//     menu.innerHTML = htmlMenu;
// }



let arrowUp = `<img class="arrow" src="/images/icon-arrow-up.svg" alt="">`;
let arrowDown = `<img class="arrow" src="/images/icon-arrow-down.svg" alt="">`;


function renderFeatures() {
    if (menu.style.display==='block') {
        menu.style.display = 'none';
        features.children[0].src = '/images/icon-arrow-down.svg';


    } else {
        menu.style.display = 'block';
        features.children[0].src="/images/icon-arrow-up.svg";
    }


}


function renderCompany(){
    if (menuComparyWrapper.style.display==='block') {
        menuComparyWrapper.style.display = 'none';
        company.children[0].src = '/images/icon-arrow-down.svg';


    } else {
        menuComparyWrapper.style.display = 'block';
        company.children[0].src="/images/icon-arrow-up.svg";
    }
}

