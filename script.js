const MENU = document.getElementById('menu');


const slides = [`<div class = "iphoneVertical"></div>
<div class = "iphoneHorizontal"></div>
<div class = "iphoneVerticalActiveScreen opacity"></div>
<div class = "iphoneVerticalActiveZone opacity"></div>
<div class = "iphoneHorizontalActiveZone opacity"></div>
<div class = "iphoneHorizontalScreen opacity" ></div>`
  , `<img class = "slide2" src="../singolo/assets/images/slide-2.svg" alt="iPhone Vertical">`
]

let some = document.querySelector('#some');


MENU.addEventListener('click', (event)=>{
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

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

let curentSlide = 0;
const BAR1 = document.querySelectorAll('.bar');

BAR1.forEach( each => each.addEventListener('click', (event) => {
  some.innerHTML = "";
  curentSlide++;
  if(curentSlide ==2){
    curentSlide = 0;
  }
  else if(curentSlide == -1){
    curentSlide = 1
  }
  some.innerHTML = slides[curentSlide];
  if (curentSlide == 0) {activeScreen()};
}))

const MENU2 = document.getElementById('menu2');
let array = document.querySelector('.imagesStack');

MENU2.addEventListener('click', (event)=>{
  MENU2.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');

  let newArray = [...array.querySelectorAll(".img")];

  newArray.unshift(newArray.pop());
  newArray.forEach( pic => array.append(pic) );
});

let borderValue = 0;

array.addEventListener("click", (event) => {
  if (event.target.classList.contains("flexContainer")){}
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

