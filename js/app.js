'use strict';

let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;

//clears out all the images
function reset(){
  $(sliderImages).fadeOut(1);
}

//initalizes the slider
function startSlide(){
  reset();
  $(sliderImages[0]).fadeIn();
}

//show previous - left arrow
function slideLeft(){
  reset();
  $(sliderImages[current - 1]).fadeIn();
  current--;
}

//show next - right arrow
function slideRight(){
  reset();
  $(sliderImages[current + 1]).fadeIn();
  current++;
}

// left arrow click
arrowLeft.addEventListener('click', function(){
  if(current === 0){
    current = sliderImages.length;
  }
  slideLeft();
});

// right arrow click
arrowRight.addEventListener('click', function(){
  if(current === sliderImages.length-1){
    current = -1;
  }
  slideRight();
});

startSlide();
