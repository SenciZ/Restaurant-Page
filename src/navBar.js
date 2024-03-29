import { welcomeMsg } from "./home";
import { about } from "./aboutus";
import { contact } from "./contact";
import { menu } from "./menu"


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
        if(container.lastChild){
                container.removeChild(container.lastChild);
                container.appendChild(navBar);

        }
        welcomeMsg();
    })
    let liAbout = document.createElement("li");
    liAbout.textContent = "About Us";
    liAbout.addEventListener("click", function(){
        if(container.lastChild){
                container.removeChild(container.lastChild);
                container.appendChild(navBar);
        }
        about();
    })


    let rightLinks = document.createElement("ul");
    rightLinks.classList.add("rightNavLinks");
    let liMenu = document.createElement("li");
    liMenu.textContent = "Menu";
    liMenu.addEventListener("click", function(){
        if(container.lastChild){
                container.removeChild(container.lastChild);
                container.appendChild(navBar);

        }
        menu();
    })
    let liContact = document.createElement("li");
    liContact.textContent = "Contact Us";
    liContact.addEventListener("click", function(){
        if(container.lastChild){
                container.removeChild(container.lastChild);
                container.appendChild(navBar);

        }
        contact();
    })


    navBar.appendChild(left);
    navBar.appendChild(logoHolder);
    navBar.appendChild(right);
    left.appendChild(leftLinks)
    right.appendChild(rightLinks)
    leftLinks.appendChild(liHome);
    leftLinks.appendChild(liAbout);
    rightLinks.appendChild(liMenu);
    rightLinks.appendChild(liContact);
    logoHolder.appendChild(logoImg);
    container.appendChild(navBar);

};

export default navBar