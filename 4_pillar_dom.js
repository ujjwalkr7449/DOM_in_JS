//Pillar 1: Selecting elements
//Find the HTML element you want to work with.
const title = document.querySelector("h1");

//Pillar 2: Changing content

//Change text or HTML inside an element.
title.textContent = "New Title";

//Pillar 3: Changing styles

//Change how an element looks.
title.style.color = "blue";

//Pillar 4: Event handling

//Make something happen when a user interacts with the page.
button.addEventListener("click", () => {
    title.textContent = "Button Clicked!";
});