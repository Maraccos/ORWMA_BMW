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