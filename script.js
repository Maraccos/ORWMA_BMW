const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
          entry.target.classList.add('show');
      } else{
        entry.target.classList.remove('show');
      }
    });
  });
  
const textElements = document.querySelectorAll('.text');
textElements.forEach((el) => observer.observe(el));

function openInfoWindow(){
    document.getElementById("infoWindow").style.display = "block";
}

function closeInfoWindow(){
    document.getElementById("infoWindow").style.display = "none";
}

function changeBg(){
  var navbar = document.getElementById('navbar');
  var scrollValue = window.scrollY;
  if(scrollValue < 150){
    navbar.classList.remove('bgColor')
  }else{
    navbar.classList.add('bgColor');
  }
}

window.addEventListener('scroll', changeBg);

document.addEventListener('DOMContentLoaded', function () {
  const sliderNavLinks = document.querySelectorAll('.slider-nav a');

  sliderNavLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
      });
  });
});


const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const img = ["specifikacije1.jpg", "specifikacije2.jpg", "specifikacije3.jpg", "specifikacije4.jpg"];

let id = 0;

function slide(id){
  slider.style.backgroundImage = `url(images/${img[id]})`;
  slider.classList.add('image-fade');
  setTimeout(() => {
    slider.classList.remove('image-fade');
  }, 550);
}

arrLeft.addEventListener('click', () => {
  id--;
  if(id < 0){
    id = img.length - 1;
  }
  slide(id);
});

arrRight.addEventListener('click', () => {
  id++;
  if(id > img.length -1){
    id = 0;
  }
  slide(id);
});

function openPopup(imageSrc) {
  var popupContainer = document.getElementById('popup-container');
  var popupImage = document.querySelector('#popup-content img');

  var tempImage = new Image();
  tempImage.src = imageSrc;

  var maxWidth = window.innerWidth * 0.8;
  var maxHeight = window.innerHeight * 0.8;

  var aspectRatio = tempImage.width / tempImage.height;

  var newWidth = Math.min(tempImage.width, maxWidth);
  var newHeight = newWidth / aspectRatio;

  if (newHeight > maxHeight) {
    newHeight = maxHeight;
    newWidth = newHeight * aspectRatio;
  }

  popupImage.style.width = newWidth + 'px';
  popupImage.style.height = newHeight + 'px';

  popupImage.src = imageSrc;

  popupContainer.style.display = 'flex';

  popupContainer.onclick = function () {
    popupContainer.style.display = 'none';
  };
}



