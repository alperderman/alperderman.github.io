var gsapElement = {};
gsap.config({nullTargetWarn:false});
gsap.registerPlugin(ScrollTrigger);

//LANDING
gsapElement['landing-bg'] = gsap.utils.toArray('.gsap-landing-bg');
gsapElement['landing-letter'] = gsap.utils.toArray('.gsap-landing-letter');
gsapElement['landing-title'] = gsap.utils.toArray('.gsap-landing-title');

gsap.set(gsapElement['landing-letter'], {y: -400, opacity: 0});
gsap.set(gsapElement['landing-title'], {opacity: 0, y: 400});
window.addEventListener('GSAP', function () {
    gsap.to(gsapElement['landing-bg'], {duration: 1.7, backgroundPosition:'50% 100%'});
    gsap.to(gsapElement['landing-title'], {duration: 1.7, opacity: 1, y: 0});
    gsap.to(gsapElement['landing-letter'], {duration: 1.5, y: 0, opacity: 1,
        ease:CustomEase.create("custom", "M0,0,C0.14,0,0.242,0.438,0.272,0.561,0.313,0.728,0.354,0.963,0.362,1,0.37,0.985,0.396,0.942,0.45,0.89,0.522,0.819,0.596,0.836,0.634,0.878,0.696,0.947,0.719,0.981,0.726,0.998,0.788,0.914,0.84,0.936,0.859,0.95,0.878,0.964,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1"),
        stagger: 0.05,
        onComplete: function () {
            gsap.set(this.targets(), {clearProps: "all"});
        }
    });
});

//NAVBAR
gsapElement['navbar'] = gsap.utils.toArray('.gsap-navbar')[0];
ScrollTrigger.create({
    trigger: gsapElement['navbar'],
    start: "top+=1 top",
    end: "top top",
    onUpdate: function (self) {
      if (self.direction == 1) {
        gsapElement['navbar'].classList.remove("absolute");
        gsapElement['navbar'].classList.add("fixed");
        gsapElement['navbar'].classList.add("top-0");
      } else {
        gsapElement['navbar'].classList.remove("fixed");
        gsapElement['navbar'].classList.remove("top-0");
        gsapElement['navbar'].classList.add("absolute");
      }
    }
});

//SKILLS
gsap.set(".gsap-skill", {opacity: 0, y: 50});
gsapElement['skills'] = gsap.utils.toArray('.gsap-skill');
for (var i = 0; i < gsapElement['skills'].length; i++) {
    gsap.to(gsapElement['skills'][i], {
        duration: 0.3, opacity: 1, y: 0,
        scrollTrigger: {
            trigger: gsapElement['skills'][i],
            start: "top bottom-=50"
        }
    });
}

//AVATAR
gsap.set(".gsap-avatar", {opacity: 0, scale: 0.1});
window.addEventListener('GSAP', function () {
    gsap.to(".gsap-avatar", {duration: 0.75, opacity: 1, scale: 1});
});


//IMGS
gsap.set(".gsap-img", {opacity: 0, y:100});
gsapElement['imgs'] = gsap.utils.toArray('.gsap-img');
for (var i = 0; i < gsapElement['imgs'].length; i++) {
    gsap.to(gsapElement['imgs'][i], {
        duration: 0.5, opacity: 1, y:0,
        scrollTrigger: {
            trigger: gsapElement['imgs'][i],
            start: "top bottom-=100"
        }
    });
}

//GALLERY
gsap.set(".gsap-gallery-mask", {width: 0, height:0, borderRadius: '100%'});
gsapElement['gallery-mask'] = gsap.utils.toArray('.gsap-gallery-mask')[0];
gsapElement['gallery-items'] = gsap.utils.toArray('.gsap-gallery-item');
if (gsapElement['gallery-mask']) {
    gsapElement['gallery-mask'].addEventListener("click", function(){
        gsap.to(gsapElement['gallery-mask'], {duration: 0.5, width: 0, height: 0, borderRadius: '100%'});
    });
}
for (var i = 0; i < gsapElement['gallery-items'].length; i++) {
    gsapElement['gallery-items'][i].addEventListener("click", function(event){
        gsap.utils.selector(gsapElement['gallery-mask'])('img')[0].setAttribute('src', event.target.getAttribute("data-gallery"));
        gsap.to(gsapElement['gallery-mask'], {duration: 0.5, width: '100%', height: '100%', borderRadius: 0});
    });
}