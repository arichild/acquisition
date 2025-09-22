document.addEventListener("DOMContentLoaded", (event) => {
  const allBlocks = document.querySelectorAll(".stages-block")
  if(allBlocks.length) {
    gsap.registerPlugin(ScrollTrigger);

    allBlocks.forEach((block, index) => {
      const step = block.querySelector(".stages-block-step");

      ScrollTrigger.create({
        trigger: block,
        start: "50% 50%", // когда верх блока доходит до центра экрана
        // end: "60% 60%",
        toggleActions: "play reverse play reverse",
        // markers: true,
        toggleClass: 'active',
      });
    });
  }
});