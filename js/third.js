// console.log("third js");

const mainContainer = document.getElementById("main-container");

const section = document.createElement("section");
const sectionTitle = document.createElement("h2");
sectionTitle.innerText = "My dynamic title-4";
section.appendChild(sectionTitle);

const createUl = document.createElement("ul");
const createLi = document.createElement("li");
createLi.innerText = "Dynamic list item";
createUl.appendChild(createLi);

section.appendChild(createUl);
mainContainer.appendChild(section);

const section1 = document.createElement("section");
section1.innerHTML = `
    <h2>My dynamic title-5</h2>
    <p></p>
    <ul>
        <li>Dynamic list item-1</li>
        <li>Dynamic list item-2</li>
        <li>Dynamic list item-3</li>
        <li>Dynamic list item-4</li>
    </ul>
`;

mainContainer.appendChild(section1);
