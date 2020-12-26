
const menuContainerElement = document.querySelector(".menu-container");
const buttonContainerElement = document.querySelector(".menu-container .menu-mobile");
const ulElement = document.querySelector(".menu-container ul");
const linksElements = document.querySelectorAll(".menu-container a");

let scrollBody = true;

function handleMenu() {
  //pra evitar scroll quando estiver com o menu open
  document.body.style.overflow = scrollBody ? "hidden" : "initial";

  menuContainerElement.classList.toggle("on", scrollBody);
  ulElement.classList.toggle("active", scrollBody);

  scrollBody = !scrollBody;
}

buttonContainerElement.addEventListener("click", handleMenu);

linksElements.forEach( link => {
  link.addEventListener("click", handleMenu);
});

const imgElement = document.querySelector("main section .img-container img");
const backgroundImg = document.querySelector(".img-container .circle");

function changeImg(source) {
  imgElement.setAttribute("src", source);
}

function changeBgImg(color) {
  backgroundImg.style.background = color;
}
