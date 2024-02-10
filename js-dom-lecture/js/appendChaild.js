const placesList = document.getElementById("places-list");
// console.log(placesList);
const li = document.createElement("li");
li.innerText = "PahartoliBan";
placesList.appendChild(li);

// step : 01 where to add
const mainContainer = document.getElementById("main-container");
// step : 03 What to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My foods list";
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Beriyani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Kacci";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Salad";
ul.appendChild(li3);

const li4 = document.createElement("li");
li4.innerText = "Cold Drink";
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);

// Set innerHTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
    <h1>My Dress Section</h1>
    <ul>
        <li>T-Shirt</li>
        <li>Formal Shirt</li>
        <li>Jeans Pant</li>
        <li>Half Pant</li>
        <li>Sendo genji</li>
    </ul>
`;

mainContainer.appendChild(sectionDress);
