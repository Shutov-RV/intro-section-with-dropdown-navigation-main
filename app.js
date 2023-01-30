let features = document.querySelector('.features');
let features__mobile = document.querySelector('.features__mobile');
let company = document.querySelector('.company');
let company__mobile = document.querySelector('.company__mobile');
let burger = document.querySelector('.burger');
let close = document.querySelector('.close');
let menu__mobile = document.querySelector('.menu__mobile')
let arrow = document.querySelector('.arrow');
let features__nav = document.querySelector('.features__nav');
let company__nav = document.querySelector('.company__nav');
let features__mobile_nav = document.querySelector('.features__mobile_nav');
let company__mobile_nav = document.querySelector('.company__mobile_nav');


features.addEventListener('click', () => {
    renderFeatures();
}
);

company.addEventListener('click', () => {
    renderCompany();
}
);

burger.addEventListener('click', () => {
    renderMobileMenu();
}
);

close.addEventListener('click', () => {
    closeMobileMenu();
})

features__mobile.addEventListener('click', () => {
    renderMobileFeaturesMenu();
})
company__mobile.addEventListener('click', () => {
    renderMobileCompanyMenu();
})





let arrowUp = `<img class="arrow" src="/images/icon-arrow-up.svg" alt="">`;
let arrowDown = `<img class="arrow" src="/images/icon-arrow-down.svg" alt="">`;


function renderFeatures() {


    if (company__nav.style.display === 'block'){
        company__nav.style.display = 'none';
        company.children[0].src = '/images/icon-arrow-down.svg';
    }
    if (features__nav.style.display==='block') {
        features__nav.style.display = 'none';
        features.children[0].src = '/images/icon-arrow-down.svg';


    } else {
        features__nav.style.display = 'block';
        features.children[0].src="/images/icon-arrow-up.svg";
    }

}


function renderCompany() {
    if (features__nav.style.display === 'block') {
        features__nav.style.display = 'none';
        features.children[0].src = '/images/icon-arrow-down.svg';
    }

    if (company__nav.style.display==='block') {
        company__nav.style.display = 'none';
        company.children[0].src = '/images/icon-arrow-down.svg';


    } else {
        company__nav.style.display = 'block';
        company.children[0].src="/images/icon-arrow-up.svg";
    }
}


function renderMobileMenu() {
    menu__mobile.style.display = 'flex';
}

function closeMobileMenu() {
    menu__mobile.style.display = 'none';
    features__mobile_nav.style.display = 'none';
    company__mobile_nav.style.display = 'none';
}

function renderMobileFeaturesMenu() {
    if (company__mobile_nav.style.display === 'block'){
        company__mobile_nav.style.display = 'none';
    }
    if (features__mobile_nav.style.display==='block') {
        features__mobile_nav.style.display = 'none';
        features__mobile.children[0].src = '/images/icon-arrow-down.svg';

    } else {
        features__mobile_nav.style.display = 'block';
        features__mobile.children[0].src="/images/icon-arrow-up.svg";
    }
}

function renderMobileCompanyMenu() {
    if (features__mobile_nav.style.display === 'block') {
        features__mobile_nav.style.display = 'none';
    }

    if (company__mobile_nav.style.display==='block') {
        company__mobile_nav.style.display = 'none';
        company__mobile.children[0].src = '/images/icon-arrow-down.svg';


    } else {
        company__mobile_nav.style.display = 'block';
        company__mobile.children[0].src="/images/icon-arrow-up.svg";
    }
}
