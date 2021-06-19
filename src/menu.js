
const menu = function(){
  let bgCover = document.createElement("div");
  bgCover.style.width = "100vw";
  bgCover.style.height = "100vh";
  bgCover.classList.add("bgCover");
  let mainContainer = document.createElement("main");
  mainContainer.classList.add("mainContainer");
  let content = document.querySelector("#content");
  let aboutUs = document.createElement("h1");
  aboutUs.classList.add("aboutText");
  aboutUs.textContent = "Menu";
  content.appendChild(bgCover);
  bgCover.appendChild(mainContainer);
  mainContainer.appendChild(aboutUs);

};

export  { menu };
