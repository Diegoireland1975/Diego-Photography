$('[data-fancybox="gallery"]').fancybox({
  loop: true,
  transitionEffect: "zoom-in-out",
  animationDuration: 366,
  transitionDuration: 1000,
  buttons: ["zoom", "slideShow", "fullScreen", "thumbs", "close"],
});

// #################################
// ####loading images on scroll####
// #################################

// getting all the boxes class
const boxes = document.querySelectorAll(".box");
// getting all the caption class
const captions = document.querySelectorAll(".caption");
// add even listener on scroll
window.addEventListener("scroll", checkBoxes);
window.addEventListener("scroll", checkCaptions);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  // for each loop for the box class
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
