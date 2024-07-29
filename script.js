function headerSlider() {
  let scrollContainer = document.querySelector(".h-btm");
  let backBtn = document.querySelector("#leftBtn");
  let nextBtn = document.querySelector("#rightBtn");

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });

  nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft += 500;
  });
  backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 500;
  });
}

function sectionAnimation() {
  let container = document.querySelector(".sec-btm");
  let back_Btn = document.querySelector("#backBtn");
  let next_Btn = document.querySelector("#nxtBtn");

  container.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    container.scrollLeft += evt.deltaY;
  });

  next_Btn.addEventListener("click", () => {
    container.style.scrollBehaviour = "Smooth";
    container.scrollLeft += 500;
    // alert();
  });
  back_Btn.addEventListener("click", () => {
    container.scrollLeft -= 500;
    //   alert();
  });
}

function humbargour() {
  let hB = document.querySelector("#bar");
  let menuBar = document.querySelector(".menu-bar");

  hB.addEventListener("click", () => {
    if (menuBar.style.display === "block") {
      menuBar.style.display = "none";
    } else {
      menuBar.style.display = "block";
    }
  });
}
headerSlider();
sectionAnimation();
humbargour();
