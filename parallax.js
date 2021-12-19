let moon = document.getElementById("moon"),
  stars = document.getElementById("stars"),
  mountainFront = document.getElementById("mountains_front"),
  mountainBack = document.getElementById("mountainsBehind"),
  text = document.getElementById("text"),
  btn = document.getElementById("btn");
let header = document.querySelector('header');

window.addEventListener("scroll", function () {
 
 
    let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 0.5 + "px";
  mountainBack.style.top = value * 0.5 + "px";
  mountainFront.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 0.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  header.style.top = value * 0.5 + "px";

});
