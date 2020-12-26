const menuContainerElement = document.querySelector(".menu-container");
const ulElement = document.querySelector(".menu-container ul");

let scrollBody = true;

menuContainerElement.addEventListener("click", () => {
  //pra evitar scroll quando estiver com o menu open
  document.body.style.overflow = scrollBody ? "hidden" : "initial";

  menuContainerElement.classList.toggle("on", scrollBody);
  ulElement.classList.toggle("active", scrollBody);

  scrollBody = !scrollBody;
});
