dcg.profile = {
    showLogs: false,
    cacheRender: true,
    screen: {
      mode: 2,
      custom: function(el) {
        gsap.to(el, {
          duration: 0.3, opacity: 0,
          onComplete: function() {
            el.parentNode.removeChild(el);
            window.dispatchEvent(new CustomEvent('GSAP'));
          }
        });
      }
    }
};