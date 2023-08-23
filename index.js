const logo=document.querySelector('.logo');
const navul=document.querySelector('#ul-d');
const navBtn=document.querySelector('.nav-btn');
const burgerShow=document.querySelector('.burger-menu');
const popcard=document.querySelector('.pop-up');
const overlay = document.querySelector('.overlay');
const body=document.querySelector('body');
const cancel=document.querySelector('.pop-up-row');
const slDiv = document.querySelector('.sl-div-third');
const slpop = document.querySelector('.sl-pop');


const burger=(x)=>{
    if (x.matches){
        navul.setAttribute('id','d-none')
        navBtn.classList.add('d-none');
        burgerShow.classList.remove('d-none');
    }else{
        burgerShow.classList.add('d-none');
        navBtn.classList.remove('d-none');
        navul.setAttribute('id','ul-d')


    }
}

const x = window.matchMedia("(max-width: 739px)");
burger(x); // Call listener function at run time

x.addListener(burger);


burgerShow.addEventListener('click', () => {
    overlay.style.display = 'block';
    popcard.style.transform = 'translateY(0)';
    popcard.style.transition = '0.5s';
    console.log("clicked");
});

cancel.addEventListener('click', () => {
    overlay.style.display = 'none';
    popcard.style.transform = 'translateY(-300%)';
});




// slDiv.addEventListener('click', () => {
//     console.log('clicked');
//     slpop.style.display='block';
//     slpop.style.transform = 'translateY(-70px)';
//     slpop.style.zIndex = '3';
//     slpop.style.transition = '1s';
// });

let isSlpopVisible = false;

slDiv.addEventListener('click', () => {
    if (!isSlpopVisible) {
        slpop.style.display = 'block';
        slpop.style.transform = 'translateY(-60px)';
        slpop.style.zIndex = '3';
        isSlpopVisible = true;
    } else {
        slpop.style.display = 'none';
        slpop.style.zIndex = '-3';
        isSlpopVisible = false;
    }
});







const nextrButton = document.querySelector('.nextr');
const nextlButton = document.querySelector('.nextl');
const consultCards = document.querySelector('.consult-cards');
const ccardthree=document.querySelector('.ccard3');
const ccardtwo=document.querySelector('.ccard2');

const cardWidth = consultCards.querySelector('.ccard').offsetWidth;
let currentIndex = 0;

nextrButton.addEventListener('click', () => {
    if (currentIndex < 2) {
        currentIndex++;
        consultCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        ccardthree.style.opacity="1";
        ccardtwo.style.opacity="0.5";
    }
    
});

nextlButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        consultCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        ccardthree.style.opacity="0.5";
        ccardtwo.style.opacity="1";


    }
});


// const nextrButton = document.querySelector('.nextr');
// const nextlButton = document.querySelector('.nextl');
// const consultCards = document.querySelector('.consult-cards');
// const ccardthree = document.querySelector('.ccard3');
// const ccardtwo = document.querySelector('.ccard2');

// const cardWidth = consultCards.querySelector('.ccard').offsetWidth;
// let currentIndex = 0;

// nextrButton.addEventListener('click', () => {
//     if (currentIndex < 2) {
//         currentIndex++;
//     }
//     updateSlider();
// });

// nextlButton.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//     }
//     updateSlider();
// });

// function updateSlider() {
//     consultCards.style.transform = `translateX(calc(-${currentIndex * cardWidth}px + ${currentIndex * 20}px))`;

//     // Update card opacities based on currentIndex
//     if (currentIndex === 0) {
//         ccardthree.style.opacity = "1";
//         ccardtwo.style.opacity = "0.5";
//     } else if (currentIndex === 2) {
//         ccardthree.style.opacity = "0.5";
//         ccardtwo.style.opacity = "1";
//     } else {
//         ccardthree.style.opacity = "0.5";
//         ccardtwo.style.opacity = "0.5";
//     }
// }



const c1Cards = document.querySelectorAll('.c1');
let currentCardIndex = 0;

function slideInCardsSequentially(index) {
    if (index < c1Cards.length) {
        c1Cards[index].classList.add('slide-in');
        setTimeout(() => {
            c1Cards[index].classList.remove('slide-in');
            slideInCardsSequentially((index + 1) % c1Cards.length);
        }, 2000); // Adjust the delay as needed
    }
}

slideInCardsSequentially(currentCardIndex);
