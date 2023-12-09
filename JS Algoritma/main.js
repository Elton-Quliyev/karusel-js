var slides = document.querySelectorAll(".slide")
var nextBtn = document.querySelector(".btn-next")
var prevBtn = document.querySelector(".btn-prev")

var currentIndex = 0;
var maxNumber = slides.length - 1;
    
function moveSlide(buttonlar) {
    if (buttonlar === "next") {
      currentIndex = currentIndex === maxNumber ? 0 : currentIndex + 1;
    } else {
      currentIndex = currentIndex === 0 ? maxNumber : currentIndex - 1;
    }
  
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
  }
  
  nextBtn.addEventListener("click", function () {
    moveSlide("next");
  });
  
  prevBtn.addEventListener("click", function () {
    moveSlide("prev");
  });


