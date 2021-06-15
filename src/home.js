
const welcomeMsg = function() {
  let mainContainer = document.createElement("main");
  mainContainer.classList.add("mainContainer");
  let content = document.querySelector("#content");
  let welcome = document.createElement("h1");
  welcome.classList.add("welcomeText");
  welcome.textContent = "Welcome to The French Kitchen!";
  content.appendChild(mainContainer);
  mainContainer.appendChild(welcome);
  let description = document.createElement("p");
  description.classList.add("description");
  description.textContent =
    "The French Kitchen is a comfortable, brasserie-style restaurant offering everything you love about French cuisine without the attitude. Classic French dishes such as Steak Frites and Bouillabaisse are served alongside a wide selection of fresh salads, omelets and juicy hamburgers made with house ground beef. At the heart of The French Kitchen is an interactive chef station featuring fresh seafood and artisan cheese plates.";
  mainContainer.appendChild(description);
  return {
    mainContainer,
    content,
  };
};

export { welcomeMsg };
