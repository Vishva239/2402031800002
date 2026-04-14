window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    el.classList.add("show");
  });

  document.querySelector(".zoom-in").classList.add("show");
});

function slide(direction) {
  const slider = document.getElementById("slider");
  const scrollAmount = 300;
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}
window.addEventListener("load", () => {
  const images = document.querySelectorAll(".img");

  images.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add("show");
    }, index * 300);
  });
});
// Fade-in effect
window.addEventListener("load", () => {
  const right = document.querySelector(".right");

  right.style.opacity = "0";
  right.style.transform = "translateX(30px)";

  setTimeout(() => {
    right.style.transition = "0.8s";
    right.style.opacity = "1";
    right.style.transform = "translateX(0)";
  }, 200);
});

// Fade-in effect
window.addEventListener("load", () => {
  const right = document.querySelector(".right");

  right.style.opacity = "0";
  right.style.transform = "translateX(30px)";

  setTimeout(() => {
    right.style.transition = "0.8s";
    right.style.opacity = "1";
    right.style.transform = "translateX(0)";
  }, 200);
});

window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.transition = "0.5s";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
});

// Fade-in animation
window.addEventListener("load", () => {
  const left = document.querySelector(".left");

  left.style.opacity = "0";
  left.style.transform = "translateX(-30px)";

  setTimeout(() => {
    left.style.transition = "0.8s";
    left.style.opacity = "1";
    left.style.transform = "translateX(0)";
  }, 200);
});

// Fade-in footer
window.addEventListener("load", () => {
  const footer = document.querySelector(".footer");

  footer.style.opacity = "0";
  footer.style.transform = "translateY(30px)";

  setTimeout(() => {
    footer.style.transition = "0.6s";
    footer.style.opacity = "1";
    footer.style.transform = "translateY(0)";
  }, 200);
});

