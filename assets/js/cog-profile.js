cog.cacheRender = true;
document.addEventListener("COGAfterRender", function () {
  document.body.classList.remove("overflow-hidden");
  gsap.to(".gsap-screen", {
      duration: 0.3, opacity: 0,
      onComplete: function() {
        this.targets()[0].parentNode.removeChild(this.targets()[0]);
        window.dispatchEvent(new CustomEvent('GSAP'));
      }
  });
});