import { welcomeMsg } from "./home";


const navBar = function(){

    let container = document.querySelector("#content");
    let navBar = document.createElement("nav");
    navBar.classList.add("navBar")


    let left = document.createElement("div");
    left.classList.add("leftNavHolder");


    let logoHolder = document.createElement("div");
    logoHolder.classList.add("logoHolder");

    let logoImg = document.createElement("img");
    logoImg.classList.add("logoImg");
    logoImg.src="./images/french_kitchen.svg";

    let right = document.createElement("div");
    right.classList.add("rightNavHolder");

    let leftLinks = document.createElement("ul");
    leftLinks.classList.add("leftNavLinks")
    let liHome = document.createElement("li");
    liHome.textContent = "Home";

    liHome.addEventListener("click", function(){
        if(container.firstChild){
            while (container.firstChild) {
                container.removeChild(container.firstChild);
              }
        }
        welcomeMsg();
    })
    let liAbout = document.createElement("li");
    liAbout.textContent = "About Us";
    liAbout.addEventListener("click", function(){
        if(container.firstChild){
            while (container.firstChild) {
                container.removeChild(container.firstChild);
              }
        }
        welcomeMsg();
    })


    let rightLinks = document.createElement("ul");
    rightLinks.classList.add("rightNavLinks");
    let liMenu = document.createElement("li");
    liMenu.textContent = "Menu";
    liMenu.addEventListener("click", function(){
        if(container.firstChild){
            while (container.firstChild) {
                container.removeChild(container.firstChild);
              }
        }
        welcomeMsg();
    })
    let liContact = document.createElement("li");
    liContact.textContent = "Contact Us";
    liContact.addEventListener("click", function(){
        if(container.firstChild){
            while (container.firstChild) {
                container.removeChild(container.firstChild);
              }
        }
        welcomeMsg();
    })


    navBar.appendChild(left);
    navBar.appendChild(logoHolder);
    navBar.appendChild(right);
    left.appendChild(leftLinks)
    right.appendChild(rightLinks)
    leftLinks.appendChild(liHome);
    leftLinks.appendChild(liMenu);
    rightLinks.appendChild(liAbout);
    rightLinks.appendChild(liContact);
    logoHolder.appendChild(logoImg);
    container.appendChild(navBar);

};

export default navBar