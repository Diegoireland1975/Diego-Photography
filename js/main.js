$('[data-fancybox="gallery"]').fancybox({
  loop: true,
  transitionEffect: "zoom-in-out",
  animationDuration: 366,
  transitionDuration: 1000,
  buttons: ["zoom", "slideShow", "fullScreen", "thumbs", "close"],
});

// ####lazy loading images on scroll####
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.6;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
