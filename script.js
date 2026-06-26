/* ==========================================
   VELOURA SALON - SCRIPT.JS
   GSAP ANIMATIONS
========================================== */

gsap.registerPlugin(ScrollTrigger);

/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    gsap.to(loader, {
      opacity: 0,
      duration: 1,
      delay: 1,
      onComplete: () => {
        loader.style.display = "none";
      }
    });
  }
});

/* ===========================
   HERO CONTENT ANIMATION
=========================== */

gsap.from(".hero-content p", {
  opacity: 0,
  y: 40,
  duration: 1
});

gsap.from(".hero-content h1", {
  opacity: 0,
  y: 70,
  duration: 1.2,
  delay: 0.3
});

gsap.from(".hero-content span", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.6
});

gsap.from(".hero-content button", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.9
});

/* ===========================
   NAVBAR BACKGROUND
=========================== */

window.addEventListener("scroll", () => {

  const nav = document.querySelector("nav");

  if (!nav) return;

  if (window.scrollY > 80) {

    nav.style.background = "rgba(58,48,43,0.85)";
    nav.style.backdropFilter = "blur(18px)";

  } else {

    nav.style.background = "rgba(255,255,255,0.08)";
    nav.style.backdropFilter = "blur(18px)";

  }

});

/* ===========================
   SECTION FADE UP
=========================== */

gsap.utils.toArray("section").forEach((section) => {

  gsap.from(section, {

    scrollTrigger: {
      trigger: section,
      start: "top 85%"
    },

    opacity: 0,
    y: 70,
    duration: 1,
    ease: "power3.out"

  });

});

/* ===========================
   SERVICE CARDS
=========================== */

gsap.from(".services .card", {

  scrollTrigger: {

    trigger: ".services",
    start: "top 80%"

  },

  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 0.8

});

/* ===========================
   TEAM CARDS
=========================== */

gsap.from(".team .card", {

  scrollTrigger: {

    trigger: ".team",
    start: "top 80%"

  },

  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 0.8

});

/* ===========================
   GALLERY IMAGES
=========================== */

gsap.from(".gallery img", {

  scrollTrigger: {

    trigger: ".gallery",
    start: "top 80%"

  },

  opacity: 0,
  scale: 0.9,
  stagger: 0.15,
  duration: 0.8

});

/* ===========================
   CTA
=========================== */

gsap.from(".cta", {

  scrollTrigger: {

    trigger: ".cta",
    start: "top 85%"

  },

  opacity: 0,
  scale: 0.95,
  duration: 1

});

/* ===========================
   FLOATING CARD EFFECT
=========================== */

document.querySelectorAll(".card").forEach((card, index) => {

  gsap.to(card, {

    y: -8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    duration: 2 + (index * 0.2)

  });

});

/* ===========================
   BUTTON HOVER
=========================== */

document.querySelectorAll("button").forEach((button) => {

  button.addEventListener("mouseenter", () => {

    gsap.to(button, {

      scale: 1.05,
      duration: 0.25

    });

  });

  button.addEventListener("mouseleave", () => {

    gsap.to(button, {

      scale: 1,
      duration: 0.25

    });

  });

});

/* ===========================
   HERO PARALLAX
=========================== */

const heroVideo = document.querySelector(".hero video");

document.addEventListener("mousemove", (e) => {

  if (!heroVideo) return;

  const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

  gsap.to(heroVideo, {

    x: moveX,
    y: moveY,
    duration: 1.5,
    ease: "power2.out"

  });

});

/* ===========================
   SCROLL PROGRESS BAR
=========================== */

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.width = "0%";
progressBar.style.height = "4px";
progressBar.style.background = "#C6A58B";
progressBar.style.zIndex = "999999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress =
    (window.scrollY / totalHeight) * 100;

  progressBar.style.width = progress + "%";

});