let features = document.querySelector('.features');
let company = document.querySelector('.company');

let arrow = document.querySelector('.arrow');
let features__nav = document.querySelector('.features__nav');
let company__nav = document.querySelector('.company__nav');


features.addEventListener('click', () => {
    renderFeatures();
}
);

company.addEventListener('click', () => {
    renderCompany();
}
);






let arrowUp = `<img class="arrow" src="/images/icon-arrow-up.svg" alt="">`;
let arrowDown = `<img class="arrow" src="/images/icon-arrow-down.svg" alt="">`;


function renderFeatures() {


    if (company__nav.style.display === 'block'){
        company__nav.style.display = 'none';
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
    }

    if (company__nav.style.display==='block') {
        company__nav.style.display = 'none';
        company.children[0].src = '/images/icon-arrow-down.svg';


    } else {
        company__nav.style.display = 'block';
        company.children[0].src="/images/icon-arrow-up.svg";
    }
}


// if (window.addEventListener('click'), () => {
//     if (features__nav.style.display === 'block') {
//         features__nav.style.display = 'none';
//     }
//     if (company__nav.style.display === 'block') {
//         company__nav.style.display = 'none';
//     }
// })
