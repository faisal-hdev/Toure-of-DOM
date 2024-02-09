const sections = document.querySelectorAll("section");
// console.log(sections);
for (const section of sections) {
  // console.log(section);
  section.style.border = "2px solid red";
  section.style.marginBottom = "20px";
  section.style.borderRadius = "10px";
  section.style.padding = "10px";
  section.style.backgroundColor = "lightGray";
}

// const placesContainer = document.getElementById("places-container");
// placesContainer.style.backgroundColor = "yellow";

const placesContainer = document.getElementById("places-container");
placesContainer.classList.add("text-center");
placesContainer.classList.remove("large-text");
