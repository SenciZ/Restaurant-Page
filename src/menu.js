
const menu = function(){
  let mainContainer = document.createElement("main");
  mainContainer.classList.add("mainContainer");
  mainContainer.innerHTML=`<div class="menuDiv"><div class="menuItem">
  <h3 class="title">Seasonal Raw Oysters</h3>
  <h4 class="price">Doz 36/Half 18/ea 3</h4>
  <p class="itemdescription">Served with horseradish, cocktail and mignonette sauces.</p>
</div>
<div class="menuItem">
  <h3 class="title">Classic Shrimp Cocktail</h3>
  <h4 class="price">12.99</h4>
  <p class="itemdescription">Poached shrimp served chilled with house cocktail sauce and lemon.</p>
</div>
<div class="menuItem">
  <h3 class="title">Fried Calamari</h3>
  <h4 class="price">13.99</h4>
  <p class="itemdescription">Peppadew peppers, rouille and cocktail sauce</p>
</div>
<div class="menuItem">
  <h3 class="title">Poutine</h3>
  <h4 class="price">15.99</h4>
  <p class="itemdescription">Braised beef, caramelized onion, mushrooms, Milton Creamery cheese curds and demi-glace over hand-cut French fries</p>
</div></div>`
  let content = document.querySelector("#content");
  content.appendChild(mainContainer);
};

export  { menu };

