const menuContainerElement = document.querySelector(".menu-container");
const ulElement = document.querySelector(".menu-container ul");

let scrollBody = true;

menuContainerElement.addEventListener("click", (event) => {
  //pra evitar scroll quando estiver com o menu open
  document.body.style.overflow = scrollBody ? "hidden" : "initial";

  menuContainerElement.classList.toggle("on", scrollBody);
  ulElement.classList.toggle("active", scrollBody);

  scrollBody = !scrollBody;
});


const imgElement = document.querySelector("main section .img-container img");
const backgroundImg = document.querySelector(".img-container .circle");

function changeImg(source) {
  imgElement.setAttribute("src", source);
}

function changeBgImg(color) {
  backgroundImg.style.background = color;
}
