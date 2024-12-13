document.addEventListener("DOMContentLoaded", () => {
  const animatedSvg = document.querySelector(".animated-svg");
  if (animatedSvg) {
      animatedSvg.addEventListener("animationiteration", () => {
          console.log("SVG animation pulsed.");
      });
  }
});