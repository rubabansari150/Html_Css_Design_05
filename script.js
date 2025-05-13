gsap.from("#img_1 ", {
  opacity: 0,
  duration: 1,
  delay: 0.4,
  y: 60,
});
gsap.from("#img_2 ", {
  opacity: 0,
  duration: 1,
  delay: 0.4,
  x: 60,
});
gsap.from("#img_3 ", {
  opacity: 0,
  duration: 1,
  delay: 0.4,
  y: -60,
});
gsap.from("#main h1 ", {
  opacity: 0,
  duration: 1,
  delay: 0.4,
});


gsap.from("#page_2 h5, #page_2 h1, #page_2 aboutUs", {
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#page_2 h5",
    scroller: "body",
    start: "top 60%",
  },
});
