const main = () => {
  gsap.to(".line", { delay: 0.5, duration: 0.8, height: window.screen.availHeight / 3 });
  gsap.to(".line", { delay: 1, duration: 0.8, width: 10, stagger: 0.1 });
  gsap.to(".line", { delay: 2, duration: 0.5, y: "200%", stagger: 0.1 });
  gsap.to(".loader", {
    duration: 3,
    backgroundColor: "#caf0f8",
    display: "none",
    onComplete: () => {
      anime
        .timeline()
        .add({
          targets: ".ml15 .word",
          scale: [14, 1],
          opacity: [0, 1],
          easing: "easeOutCirc",
          duration: 800,
          delay: (el, i) => 800 * i,
        })
        .add({
          targets: ".ml15",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    },
  });
};

window.onload = main;
