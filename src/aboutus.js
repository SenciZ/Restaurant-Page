import { welcomeMsg } from "./home.js";

const about = (function(){
  welcomeMsg.mainContainer.classList.add("mainContainer");
  let aboutUs = document.createElement("h1");
  aboutUs.classList.add("aboutText");
  welcome.textContent = "All About The French Kitchen!";
  content.appendChild(mainContainer);
  welcomeMsg.mainContainer.appendChild(aboutUs);
})();

export default { about };
