let countDownDate = new Date("Jul 19, 2022 19:37:25").getTime();

let f = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  days.toString().length == 1 ? (days = "0" + days) : null;
  hours.toString().length == 1 ? (hours = "0" + hours) : null;
  minutes.toString().length == 1 ? (minutes = "0" + minutes) : null;
  seconds.toString().length == 1 ? (seconds = "0" + seconds) : null;

  document.getElementById("timer").innerHTML =
    days + " | " + hours + " | " + minutes + " | " + seconds;

  if (distance < 0) {
    clearInterval(f);
    document.getElementById("hidetimer").style.display = "none";
  }
}, 1000);
document.getElementById("light").onclick = function () {
  document.getElementById("mode").style.backgroundColor = "#ffffff";
  document.getElementById("title").style.color = "#222222";
  document.getElementById("subtitle").style.color = "#222222";
  document.getElementById("text").style.color = "#222222";
  document.getElementById("info").innerHTML = "light";
  document.getElementById("light").style.filter =
    "brightness(0) saturate(100%) invert(77%) sepia(56%) saturate(5071%) hue-rotate(353deg) brightness(101%) contrast(103%)";
  document.getElementById("dark").style.filter =
    "invert(10%) sepia(0%) saturate(0%) hue-rotate(353deg) brightness(100%) contrast(92%)";
};
document.getElementById("dark").onclick = function () {
  document.getElementById("mode").style.backgroundColor = "#222222";
  document.getElementById("title").style.color = "#ffffff";
  document.getElementById("subtitle").style.color = "#ffffff";
  document.getElementById("text").style.color = "#ffffff";
  document.getElementById("info").innerHTML = "dark";
  document.getElementById("light").style.filter =
    "invert(10%) sepia(0%) saturate(0%) hue-rotate(353deg) brightness(100%) contrast(92%)";
  document.getElementById("dark").style.filter =
    "brightness(0) saturate(100%) invert(77%) sepia(56%) saturate(5071%) hue-rotate(353deg) brightness(101%) contrast(103%)";
};
