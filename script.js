/* TOGGLE MENU */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* MODAL POPUPS */
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Close the modal when the user clicks on the close button or outside the modal content
window.onclick = function (event) {
  var modals = document.getElementsByClassName("modal");
  for (var i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      modals[i].style.display = "none";
    }
  }
};

/* CHANGES ICONS */
const body = document.body;
const toggleButton = document.getElementById("dark-mode-toggle");
const linkedinIcon = document.getElementById("linkedin-icon");
const githubIcon = document.getElementById("github-icon");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");
  linkedinIcon.src = isDarkMode
    ? "./images/linkedin-white.png"
    : "./images/linkedinlogo.png";
  githubIcon.src = isDarkMode
    ? "./images/github-white.png"
    : "./images/github.png";
});

/* EASTER EGGS */
let pressedKeys = "";

window.addEventListener("keyup", (e) => {
  // Append the pressed key to the pressedKeys string
  pressedKeys += e.key;

  // Check if the end of the pressedKeys string matches "1337"
  if (pressedKeys.endsWith(1337)) {
    alert("Du vinner en miljon bitcoin!");
    // Optionally, reset pressedKeys after a successful match
    pressedKeys = "";
  }

  console.log(pressedKeys);
});

let pKeys = "";

window.addEventListener("keyup", (e) => {
  // Append the pressed key to the pressedKeys string
  pKeys += e.key;

  // Check if the end of the pressedKeys string matches "aldor"
  if (pKeys.endsWith("aldor")) {
    alert("Du är en fin stolle!");
    // Optionally, reset pressedKeys after a successful match
    pKeys = "";
  }

  console.log(pKeys);
});

let prKeys = "";

window.addEventListener("keyup", (e) => {
  // Append the pressed key to the pressedKeys string
  prKeys += e.key;

  // Check if the end of the pressedKeys string matches "fady"
  if (prKeys.endsWith("arnar")) {
    alert("Du är en fin stolle!");
    // Optionally, reset pressedKeys after a successful match
    pKeys = "";
  }

  console.log(prKeys);
});