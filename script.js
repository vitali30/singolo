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
  
  activeVertical.addEventListener('click', (event)=>{
    if (screenVertical.classList.contains("opacity")){
      screenVertical.classList.remove("opacity")
    }
    else screenVertical.classList.add('opacity');
  });
  
  const activeHorizontal = document.querySelector('.iphoneHorizontalActiveZone');
  const screenHorizontal = document.querySelector('.iphoneHorizontalScreen');
  
  activeHorizontal.addEventListener('click', (event)=>{
    if (screenHorizontal.classList.contains("opacity")){
      screenHorizontal.classList.remove("opacity")
    }
    else screenHorizontal.classList.add('opacity');
  });
  };
  activeScreen();



const BAR1 = document.querySelector('.rightBar');
let curentSlide = 0;
BAR1.addEventListener('click', (event)=>{
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
 
})

const BAR = document.querySelector('.leftBar');

BAR.addEventListener('click', (event)=>{
  some.innerHTML = "";
  curentSlide--;
  if(curentSlide ==2){
    curentSlide = 0;
  }
  else if(curentSlide == -1){
    curentSlide = 1
  }
  some.innerHTML = slides[curentSlide];
  
  if (curentSlide == 0) {activeScreen()};
});








const MENU2 = document.getElementById('menu2');
let array = document.querySelector('.imagesStack');




MENU2.addEventListener('click', (event)=>{
    
    MENU2.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');



   
      let newArray = [...array.querySelectorAll(".img")];
      newArray.unshift(newArray.pop());
      newArray.forEach( pic => array.append(pic) );
    
    


});



array.addEventListener("click", (event) => {
  if ( event.target.classList.contains("bordered") ) {
  
    event.target.classList.remove("bordered");}
    else if (event.target.classList.contains("flexContainer")){}
  
  else event.target.classList.add("bordered");

});

