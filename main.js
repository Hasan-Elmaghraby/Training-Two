
// Start MegaMenu
let header = document.querySelector('.header')
let navElement = document.querySelector('.nav')
let mainNav = document.querySelector('#main-nav') 
let activeBtn = document.querySelector('#active-btn') 
let notifications = document.querySelector('#notifications') 
let overLay = document.querySelector('#myOverlay')
let close = document.querySelector('#close')
let magaMenu = document.createElement('div') 
magaMenu.classList.add("mega-menu")
magaMenu.style.opacity = "0";
magaMenu.style.width = "0";
let subNav =document.createElement('div')

navElement.addEventListener("click", function open(e) {
magaMenu.style.opacity = "1";
magaMenu.style.width = "70%";
header.append(magaMenu)
subNav.style.display ="flex"
subNav.style.justifyContent ="space-between"
subNav.style.padding ="20px"
magaMenu.append(close)
magaMenu.append(subNav)
subNav.append(notifications)
subNav.append(activeBtn)
magaMenu.append(mainNav)
overLay.style.display ="block"
})
close.addEventListener("click", function close() {
    magaMenu.style.opacity = "0";
    overLay.style.display ="none"
})
window.onclick = function (e) {
  if (e.target == overLay) {
    overLay.style.display = "none"
    magaMenu.style.opacity = "0";
  }
}
  //End MegaMenu

// Start Slider
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("image-slide");
  let bullets = document.querySelectorAll(".bullet li");
  console.log(slides)
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < bullets.length; i++) {
    bullets[i].className = bullets[i].className.replace("active-bullets", "");
  }
  slides[slideIndex - 1].style.display = "block";
  bullets[slideIndex - 1].className += " active-bullets";
}
// End Slider
  
// Start log out
// let logout = document.querySelector("#log-out")
// let popupLogout = document.querySelector(".logout")  
// let cancel = document.querySelector(".cancel")  
// logout.addEventListener("click", function display() {
//   popupLogout.style.display = "block"
// })
// cancel.addEventListener("click", function () {
//   popupLogout.style.display = "none"
// })
// window.addEventListener("click", function (e) {
//   if (e.target == overLay) {
//     popupLogout.style.display = "none"
//   }
// })
// End log out
// End Header Actions
// Start Active Button
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
  };

  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });

  document.documentElement.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
      toggleDropdown();
    }
  });
// End Active Button

// Start Quick code to add class to formatting conversation dynimic in conversation page
  let conversationElement = document.querySelectorAll(".text-me .row p")
  for (let i = 0; i < conversationElement.length; i++) {
    const targetElement = conversationElement[i];
    if (i % 2 == 0) {
      targetElement.classList.add("left-text")
    }else{
      targetElement.classList.add("right-text")
    }
  }
  let conversationEnd = document.querySelectorAll(".text-me .row div")
  for (let i = 0; i < conversationEnd.length; i++) {
    const targetElement = conversationEnd[i];
    if (i % 2 !== 0) {
      targetElement.classList.add("text-end")
    }
  }
  // End Quick code in conversation page

// Start sticky Header
window.addEventListener('scroll', function () {
  let headerElement = document.getElementById("myHeader");

  if (document.documentElement.scrollTop > 800) {
    headerElement.classList.add("sticky");
    document.body.style.marginTop = "157px"
  }
  else {
    headerElement.classList.remove("sticky");
    document.body.style.marginTop="0"
}
})
// End sticky Header

//Start Making time to conversation
let time = document.querySelectorAll(".time")
let d = new Date()
let currentTime = d.getHours() - 12 + ":" + d.getMinutes() + "Pm";
for (let i = 0; i < time.length; i++) {
  const timeTarregt = time[i];
  timeTarregt.append(currentTime)
}
//End Making time to conversation

// Start test

// Start Sub Button
const subdropdownBtn = document.getElementById("sub-btn");
const subdropdownMenu = document.getElementById("sub-dropdown");
const subtoggleArrow = document.getElementById("sub-arrow");

const subtoggleDropdown = function () {
    subdropdownMenu.classList.toggle("show");
    subtoggleArrow.classList.toggle("arrow");
  };

  subdropdownBtn.addEventListener("click", function (ele) {
    ele.stopPropagation();
    subtoggleDropdown();
  });

  document.documentElement.addEventListener("click", function () {
    if (subdropdownMenu.classList.contains("show")) {
      subtoggleDropdown();
    }
  });
  // End Sub Button




