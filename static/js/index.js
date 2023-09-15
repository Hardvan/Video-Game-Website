// * Hacked Text Effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.getElementById("title").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};

// * ScrollReveal
// Common reveal options to create reveal animations
ScrollReveal({
  // reset: true,
  distance: "60px",
  duration: 1250,
  delay: 200,
});

ScrollReveal().reveal(".game-card", {
  delay: 300,
  origin: "bottom",
});

// * Author Text Effect
const letters2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval2 = null;

const screen = document.querySelector(".screen"),
  name = document.querySelector(".name");

screen.onmouseenter = (event) => {
  let iteration = 0;

  clearInterval(interval2);

  interval2 = setInterval(() => {
    name.innerText = name.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return name.dataset.value[index];
        }

        return letters2[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= name.dataset.value.length) {
      clearInterval(interval2);
    }

    iteration += 1 / 3;
  }, 30);
};

// * Back to Top button
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // Display the button when the user scrolls down 20px from the top of the document
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// * Play audio
function playAudio(id) {
  let audio = document.getElementById(id + "Audio");
  audio.play();
}
