gsap.utils.toArray("section").forEach((section, i) => {
  if(section.id == "title-screen"){
  section.bg = section.querySelector(".bg"); 
  section.bg.style.backgroundImage = `url(jason-mowry-y1c0oEjTfkw-unsplash.jpg)`;
  section.bg.style.backgroundPosition = "50% 0px"; 
  gsap.to(section.bg, {
    backgroundPosition: `50% ${-innerHeight / 2}px`,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top", 
      end: "bottom top",
      scrub: true
    }
  });
}
});

gsap.utils.toArray("nav a").forEach(function(a) {
  a.addEventListener("click", function(e) {
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo: e.target.getAttribute("href")});
  });
});