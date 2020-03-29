// Смена жекорации пунктов меню при нажатии
const MENU = document.getElementById("menu");

MENU.addEventListener('click', (event)=>{
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});
// Смена декорации пунктов меню при скродде
const menu = document.querySelector("nav ul");
const menuLinks = document.querySelectorAll("nav ul li a");

document.addEventListener("scroll", activateLink);
window.onload = activateLink();
function activateLink(event) {
  const positionY = window.scrollY;// нужно отслеживать текущее положение экрана
  const anchors = document.querySelectorAll('[id]');// создаем массив со всеми id (нас интересуют секции, именно так мы можем их перебрать)

  anchors.forEach( anchor => {//и для каждого id  проверяем условие
      if (anchor.offsetTop - 89 <= positionY && //верхнее значение секции с якорем меньше текущего положения экрана
         (anchor.offsetTop + anchor.offsetHeight) - 89 > positionY) {// верхнее значение секции с якорем плюс высота секции больше текущего положения экрана
        menuLinks.forEach( link => {// проверяем все элементы обьекта menuLinks 
          link.classList.remove("active");// со всех снимаем класс active
          if(anchor.getAttribute("id") === link.getAttribute("href").substring(1)) { // и каждый проверяем на соответствие с id  активной секции
            link.classList.add("active");// если совпали вешаем класс active
          }
        });
      }
    });
};
// Активация экранов телефонов
function activeScreen() {
  const activeVertical = document.querySelector('.iphoneVerticalActiveZone');
  const screenVertical = document.querySelector('.iphoneVerticalActiveScreen');
  const activeHorizontal = document.querySelector('.iphoneHorizontalActiveZone');
  const screenHorizontal = document.querySelector('.iphoneHorizontalScreen');
  activeVertical.addEventListener('click', (event)=>{
    screenVertical.classList.contains("opacity")?screenVertical.classList.remove("opacity"):screenVertical.classList.add('opacity');
    });
  activeHorizontal.addEventListener('click', (event)=>{
    screenHorizontal.classList.contains("opacity")?screenHorizontal.classList.remove("opacity"): screenHorizontal.classList.add('opacity');
    });
};
activeScreen();
// Смена слайдов
// const slides = [`
//                     <div class = "image__vertical">
//                         <div class = "iphoneVertical"></div>
//                         <div class = "iphoneVerticalActiveScreen opacity"></div>
//                         <div class = "iphoneVerticalActiveZone opacity"></div>
//                     </div>
//                     <div class="image__horizontal">
//                         <div class = "iphoneHorizontal"></div>
//                         <div class = "iphoneHorizontalScreen opacity" ></div>
//                         <div class = "iphoneHorizontalActiveZone opacity"></div>
                        
//                     </div>`, 
//   `<div></div>`
// ]
// const mainZone = document.querySelector('.slider__mainZone');
// const leftBar = document.querySelector('.leftBar');
// const rightBar = document.querySelector('.rightBar');
// const bottomLine = document.querySelector('.slider__bottom');
// let curentSlide = 0;
// let BAR1 = document.querySelectorAll('.bar');
// const some = document.querySelector(".mainZone__image");

// BAR1.forEach( each => each.addEventListener("click", (event) => {
//   some.innerHTML = "";
//   curentSlide++;
//     if (curentSlide > 1){curentSlide = 0}
//     if(curentSlide == 0){
//         some.innerHTML = slides[0];
//         mainZone.classList.remove('slide2');
//         leftBar.classList.remove('leftBar2');
//         rightBar.classList.remove('rightBar2');
//         bottomLine.classList.remove('opacity');
//         activeScreen();
//     }
//     else if (curentSlide == 1){
//         some.innerHTML = slides[1];
//         mainZone.classList.add('slide2');
//         leftBar.classList.add('leftBar2');
//         rightBar.classList.add('rightBar2');
//         bottomLine.classList.add('opacity');
//     }
// }))
// Смена активности меню портфолио
const MENU2 = document.querySelector(".portfolio__menu");
let array = document.querySelector('.portfolio__flex');

MENU2.addEventListener('click', (event)=>{
  MENU2.querySelectorAll('li').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  let newArray = [...array.querySelectorAll(".img")];
  newArray.unshift(newArray.pop());
  newArray.forEach( pic => array.append(pic) );
});
// Установка границ картинок в портфолион
let borderValue = 0;

array.addEventListener("click", (event) => {
  if (event.target.classList.contains("portfolio__flex")){}
  else if ( event.target.classList.contains("bordered")){event.target.classList.remove("bordered");}
  else {array.querySelectorAll('.img').forEach(el => el.classList.remove('bordered'));
  event.target.classList.add('bordered');}
});
// Формирования письма с темой
const BUTTON = document.getElementById('button');
const CLOSEBUTTON = document.getElementById('closeButton');

BUTTON.addEventListener('click', ()=>{
  let requiredFields = [...document.querySelectorAll("[required]")];
  let isValid = node => node.checkValidity();
  let topic = document.getElementById('id3').value.toString();
  let textArea = document.getElementById('id4').value.toString();

  if ( requiredFields.every(isValid) ) {
    event.preventDefault();
      if(topic == ''){
        topic = 'Без темы';
        document.getElementById('topic').innerText = topic;
      }
      else{
        document.getElementById('topic').innerText ='Тема: ' + topic;
      };

      if (textArea == '') {textArea = 'Без описания';
        document.getElementById('result').innerText = textArea;
      }
      else{
        document.getElementById('result').innerText ='Описание : ' + textArea;
      };
    document.getElementById('messageBlock').classList.remove('hiden');
  };
  
});
// Закрытие окна письма
CLOSEBUTTON.addEventListener('click', ()=>{
  document.getElementById('topic').innerText = '';
  document.getElementById('result').innerText = '';
  document.getElementById('messageBlock').classList.add('hiden');
  event.preventDefault();
  document.forms[0].reset();
});
// Смена header при 375px
const header = document.querySelector(".header");
const headerSlides = [
    `<div class="header__logotype">
    <h1>SINGOLO<span class="header__star">*</span></h1>
  </div>
  <nav class = "header__menu" id="menu">
    <ul>
        <li><a href="#slider" class = "activeg">HOME</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#aboutus">ABOUT</a></li>
        <li><a href="#getAQuote">CONTACT</a></li>
    </ul>
  </nav>`, 
  `<div class = "hamburger"></div>
  <div class="header__logotype">
    <h1>SINGOLO<span class="header__star">*</span></h1>
  </div>`
]


 //Бургер меню
const burger = document.querySelector('.menu-btn');
const burgerSlide = document.querySelector('.burgtr__allMenu');
const burgerButton = document.querySelector('.menu-btn');
const logotipe = document.querySelector('.header__logotype1');

burger.addEventListener('click', ()=>{
  if(burgerSlide.classList.contains('not_display')){
    burgerSlide.classList.remove('not_display');
    burgerButton.classList.add('rotate');
    logotipe.classList.add('moved');
  }
  else {burgerSlide.classList.add('not_display');
  burgerButton.classList.remove('rotate');
  logotipe.classList.remove('moved');
  }
  activateLink();
});
// Смена декорации пунктов меню при скролле
let backGround1 = document.getElementById('slider');
document.querySelector('.leftBar').onclick = sliderLeft;
let backGround2 = document.querySelector('.slider__bottom');

function sliderLeft(){
    let polosa = document.querySelector('.polosa');
    
    if (polosa.classList.contains('left')){
      polosa.classList.remove('left');
      backGround1.style.backgroundColor = "#F06C64";
      backGround2.style.backgroundColor =  "#EA676B";
    }

    else {polosa.classList.add('left');
      backGround1.style.backgroundColor = "#648BF0";
      backGround2.style.backgroundColor =  "rgb(53, 96, 161)";
      }

    
}

document.querySelector('.rightBar').onclick = sliderRight;
// let left = 0;

function sliderRight(){
    let polosa = document.querySelector('.polosa');
    
    if (polosa.classList.contains('left')){
      polosa.classList.remove('left');
      backGround1.style.backgroundColor = "#F06C64";
      backGround2.style.backgroundColor =  "#EA676B";
    }

    else {polosa.classList.add('left');
    backGround1.style.backgroundColor = "#648BF0";
    backGround2.style.backgroundColor =  "rgb(53, 96, 161)";
  }
    
}