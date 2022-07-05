//for mobile menu
function showMenu() {
  document.querySelector(".navigation").classList.toggle("active");
  document.querySelector(".menu-icon").classList.toggle("hide");
  document.querySelector(".close-icon").classList.toggle("show");
}

//for slider
//first Slide
let counter1 = 0;

function controller1(x) {
  counter1 = counter1 + x;
  slideShow1(counter1);
}

slideShow1(counter1);

function slideShow1(num) {
  const slides = document.getElementsByClassName("content-1");
  if (num == slides.length) {
    counter1 = 0;
    num = 0;
  }

  if (num < 0) {
    counter1 = slides.length - 1;
    num = slides.length - 1;
  }

  for (let i of slides) {
    i.style.display = "none";
  }

  slides[num].style.display = "block";
}

//second Slide
let counter2 = 0;

function controller2(x) {
  counter2 = counter2 + x;
  slideShow2(counter2);
}

slideShow2(counter2);

function slideShow2(num) {
  const slides = document.getElementsByClassName("content-2");
  if (num == slides.length) {
    counter2 = 0;
    num = 0;
  }

  if (num < 0) {
    counter2 = slides.length - 1;
    num = slides.length - 1;
  }

  for (let i of slides) {
    i.style.display = "none";
  }

  slides[num].style.display = "block";
}

//third Slide
let counter3 = 0;

function controller3(x) {
  counter3 = counter3 + x;
  slideShow3(counter3);
}

slideShow3(counter3);

function slideShow3(num) {
  const slides = document.getElementsByClassName("content-3");
  if (num == slides.length) {
    counter3 = 0;
    num = 0;
  }

  if (num < 0) {
    counter3 = slides.length - 1;
    num = slides.length - 1;
  }

  for (let i of slides) {
    i.style.display = "none";
  }

  slides[num].style.display = "block";
}
