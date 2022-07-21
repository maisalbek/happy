let target = new Date("Jul 21, 2022 21:37:25").getTime();
let f = setInterval(function () {
  let now = new Date().getTime();
  let distance = target - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  days.toString().length == 1 ? (days = "0" + days) : null;
  hours.toString().length == 1 ? (hours = "0" + hours) : null;
  minutes.toString().length == 1 ? (minutes = "0" + minutes) : null;
  seconds.toString().length == 1 ? (seconds = "0" + seconds) : null;

  document.getElementById("day").innerText = days + " | ";
  document.getElementById("hour").innerText = hours + " | ";
  document.getElementById("minutes").innerText = minutes + " | ";
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(f);
    document.getElementById("hidetimer").style.display = "none";
  }
}, 1000);

// document.getElementById("light").onclick = function () {
//   document.getElementById("mode").style.backgroundColor = "#ffffff";
//   document.getElementById("title").style.color = "#222222";
//   document.getElementById("subtitle").style.color = "#222222";
//   document.getElementById("text").style.color = "#222222";
//   document.getElementById("info").innerHTML = "light";
//   document.getElementById("light").style.filter =
//     "brightness(0) saturate(100%) invert(77%) sepia(56%) saturate(5071%) hue-rotate(353deg) brightness(101%) contrast(103%)";
//   document.getElementById("dark").style.filter =
//     "invert(10%) sepia(0%) saturate(0%) hue-rotate(353deg) brightness(100%) contrast(92%)";
// };

// document.getElementById("dark").onclick = function () {
//   document.getElementById("mode").style.backgroundColor = "#222222";
//   document.getElementById("title").style.color = "#ffffff";
//   document.getElementById("subtitle").style.color = "#ffffff";
//   document.getElementById("text").style.color = "#ffffff";
//   document.getElementById("info").innerHTML = "dark";
//   document.getElementById("light").style.filter =
//     "invert(10%) sepia(0%) saturate(0%) hue-rotate(353deg) brightness(100%) contrast(92%)";
//   document.getElementById("dark").style.filter =
//     "brightness(0) saturate(100%) invert(77%) sepia(56%) saturate(5071%) hue-rotate(353deg) brightness(101%) contrast(103%)";
// };

// let buttons = document.querySelectorAll(".modal-btns");
// buttons.forEach((but, index) => {
//   but.addEventListener("click", function () {
//     buttons.forEach((btn, ind) => {
//       btn.classList.remove("active");
//       btn.style.backgroundColor = "#fafafa";
//       if (ind == 0) {
//         btn.style.color = "#0278ed";
//       } else if (ind == 1) {
//         btn.style.color = "#ff5437";
//       } else if (ind == 2) {
//         btn.style.color = "#ff9209";
//       }
//     });
//     this.classList.add("active");
//     switch (index) {
//       case 0:
//         this.style.backgroundColor = "#0278ed";
//         this.style.color = "#ffffff";
//         document.querySelectorAll(".modal")[0].classList.remove("red");
//         document.querySelectorAll(".modal")[0].classList.remove("orange");
//         document.querySelectorAll(".modal")[0].classList.add("blue");
//         break;
//       case 1:
//         this.style.backgroundColor = "#ff5437";
//         this.style.color = "#ffffff";
//         document.querySelectorAll(".modal")[0].classList.remove("blue");
//         document.querySelectorAll(".modal")[0].classList.remove("orange");
//         document.querySelectorAll(".modal")[0].classList.add("red");
//         break;
//       case 2:
//         this.style.backgroundColor = "#ff9209";
//         this.style.color = "#ffffff";
//         document.querySelectorAll(".modal")[0].classList.remove("red");
//         document.querySelectorAll(".modal")[0].classList.remove("blue");
//         document.querySelectorAll(".modal")[0].classList.add("orange");
//         break;
//       default:
//         return;
//     }
//   });
// });

// function firstActive() {
//   document.querySelectorAll(".modal")[0].classList.add("blue");
//   document.querySelectorAll(".modal")[0].classList.remove("red");
//   document.querySelectorAll(".modal")[0].classList.remove("orange");
//   document.querySelectorAll(".modal-btns")[0].style.backgroundColor = "#0278ed";
//   document.querySelectorAll(".modal-btns")[0].style.color = "#ffffff";
//   document.querySelector(".modal").style.display = "block";
//   document.body.style.overflowY = "hidden";
// }

// function secondActive() {
//   document.querySelectorAll(".modal")[0].classList.remove("blue");
//   document.querySelectorAll(".modal")[0].classList.remove("orange");
//   document.querySelectorAll(".modal-btns")[1].style.backgroundColor = "#ff5437";
//   document.querySelectorAll(".modal-btns")[1].style.color = "#ffffff";
//   document.querySelectorAll(".modal")[0].classList.add("red");
//   document.querySelector(".modal").style.display = "block";
//   document.body.style.overflowY = "hidden";
// }

// function thirdActive() {
//   document.querySelectorAll(".modal")[0].classList.remove("blue");
//   document.querySelectorAll(".modal")[0].classList.remove("red");
//   document.querySelectorAll(".modal-btns")[2].style.backgroundColor = "#ff9209";
//   document.querySelectorAll(".modal-btns")[2].style.color = "#ffffff";
//   document.querySelectorAll(".modal")[0].classList.add("orange");
//   document.querySelector(".modal").style.display = "block";
//   document.body.style.overflowY = "hidden";
// }

// function setToDefault() {
//   let buttons = document.querySelectorAll(".modal-btns");
//   buttons.forEach((btn, i) => {
//     btn.classList.remove("active");
//     btn.style.backgroundColor = "#fafafa";
//     i == 0 ? (btn.style.color = "#0278ed") : null;
//     i == 1 ? (btn.style.color = "#ff5437") : null;
//     i == 2 ? (btn.style.color = "#ff9209") : null;
//   });
// }

// document.querySelector(".first-btn").onclick = function () {
//   firstActive();
// };

// document.querySelector(".second-btn").onclick = function () {
//   secondActive();
// };

// document.querySelector(".third-btn").onclick = function () {
//   thirdActive();
// };

// document.querySelector(".close").onclick = function () {
//   setToDefault();
//   document.querySelector(".modal").style.display = "none";
//   document.body.style.overflowY = "auto";
// };

// document.querySelector(".send-btn").onclick = function () {
//   document.querySelector(".loading").style.display = "flex";
//   let dots = document.querySelectorAll(".dots");
//   dots.forEach((btn) => {
//     btn.classList.add("dot");
//   });
//   let element = document.querySelector(".modal-content");
//   element.scrollTop = element.scrollHeight;
//   setTimeout(() => {
//     document.querySelector(".loading").style.display = "none";
//     document.querySelector(".modal").style.display = "none";
//     document.body.style.overflowY = "auto";
//   }, "2000");
//   setToDefault();
// };

// document.querySelectorAll(".about-btns")[0].onclick = function () {
//   document.querySelector(".modal").style.display = "block";
//   document.body.style.overflowY = "hidden";
//   thirdActive();
// };

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function closeMenu() {
  document.querySelector(".closebtn").style.display = "none";
  document.querySelector(".burger").style.display = "block";
  document.getElementById("mySidenav").style.width = "0px";
}

document.querySelector(".burger").onclick = function () {
  document.querySelector(".burger").style.display = "none";
  document.getElementById("mySidenav").style.width = "320px";
  document.querySelector(".closebtn").style.display = "block";
};

document.querySelector(".closebtn").onclick = function () {
  closeMenu();
};
let mobBtns = document.querySelectorAll(".mobile-btns");
document.querySelector(".mobile").onclick = function () {
  closeMenu();
};
mobBtns.forEach((i) => {
  i.onclick = function () {
    closeMenu();
  };
});
