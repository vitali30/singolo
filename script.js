const MENU = document.getElementById("menu");



MENU.addEventListener('click', (event)=>{
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});
// ---------------------------------------

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
  
// ------------------------------------

const slides = [`
                    <div class = "image__vertical">
                        <div class = "iphoneVertical"></div>
                        <div class = "iphoneVerticalActiveScreen opacity"></div>
                        <div class = "iphoneVerticalActiveZone opacity"></div>
                    </div>
                    <div class="image__horizontal">
                        <div class = "iphoneHorizontal"></div>
                        <div class = "iphoneHorizontalScreen opacity" ></div>
                        <div class = "iphoneHorizontalActiveZone opacity"></div>
                        
                    </div>`, 
  `<div></div>`
]


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
// ---------------------------------------
const mainZone = document.querySelector('.slider__mainZone');
const leftBar = document.querySelector('.leftBar');
const rightBar = document.querySelector('.rightBar');
const bottomLine = document.querySelector('.slider__bottom');
let curentSlide = 0;
let BAR1 = document.querySelectorAll('.bar');



BAR1.forEach( each => each.addEventListener("click", (event) => {
  some.innerHTML = "";
  curentSlide++;
    if (curentSlide > 1){curentSlide = 0}
    if(curentSlide == 0){
        some.innerHTML = slides[0];
        mainZone.classList.remove('slide2');
        leftBar.classList.remove('leftBar2');
        rightBar.classList.remove('rightBar2');
        bottomLine.classList.remove('opacity');
        activeScreen();
    }
    else if (curentSlide == 1){
        some.innerHTML = slides[1];
        mainZone.classList.add('slide2');
        leftBar.classList.add('leftBar2');
        rightBar.classList.add('rightBar2');
        bottomLine.classList.add('opacity');
    }
   
}))
// ------------------------------------


const MENU2 = document.getElementById('menu2');
let array = document.querySelector('.portfolio__flex');

MENU2.addEventListener('click', (event)=>{
  MENU2.querySelectorAll('p').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');

  let newArray = [...array.querySelectorAll(".img")];

  newArray.unshift(newArray.pop());
  newArray.forEach( pic => array.append(pic) );
});

let borderValue = 0;

array.addEventListener("click", (event) => {
  if (event.target.classList.contains("portfolio__flex")){}
  else if ( event.target.classList.contains("bordered")){event.target.classList.remove("bordered");}
  else {array.querySelectorAll('.img').forEach(el => el.classList.remove('bordered'));
  event.target.classList.add('bordered');}
});

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


CLOSEBUTTON.addEventListener('click', ()=>{
  document.getElementById('topic').innerText = '';
  document.getElementById('result').innerText = '';
  document.getElementById('messageBlock').classList.add('hiden')
  event.preventDefault();

});

