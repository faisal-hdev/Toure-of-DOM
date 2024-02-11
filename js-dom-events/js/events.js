// console.log("This is Separate js file");

// option: 2
// important [we will use this]
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option: 3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option: 3 another
const makePurpleBUton = document.getElementById("make-purple");
makePurpleBUton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option: 4
const pinkButton = document.getElementById("make-pink");
console.log(pinkButton);
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option: 4 another
const makeGreen = document.getElementById("make-green");
makeGreen.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option: 5
// important Final [We will use this some time]
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function makeGoldenRod() {
    document.body.style.backgroundColor = "goldenrod";
  });
