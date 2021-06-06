import { welcomeMsg } from "./home.js";

const about = (function(){
  let mainContainer = document.createElement("main");
  mainContainer.classList.add("mainContainer");
  let content = document.querySelector("#content");
  let aboutUs = document.createElement("h1");
  aboutUs.classList.add("aboutText");
  aboutUs.textContent = "About Us"
  content.appendChild(mainContainer);
  mainContainer.appendChild(aboutUs);
})();

export default { about };
