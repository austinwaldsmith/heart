gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });
ScrollTrigger.defaults({
  toggleActions: "restart none play reverse",
  //markers: true,
});

const tl = gsap.timeline({ defaults: { duration: 3, yoyo: true } });

tl.to("#blue-face", {
  scale: ".95",
  y: 10,
  x: 10,
  repeat: -1,
});

gsap.to("#intro-message", {
  scrollTrigger: {
    trigger: "#intro-message",
    start: "top 50%",
    end: "bottom 45%",
    scrub: 1,
    //markers: true,
  },
  opacity: 0,
  y: -100,
  duration: 1,
});

gsap.from(".text", {
  scrollTrigger: {
    trigger: "#red-man",
    //start: "top bottom",
    //start: "20px 80%",
    start: "top 50%",
    //end: "50% 50%",
    //scrub: true,
    //scrub: 1,
    //pin: true,
    //true means it assumes the trigger, can write anything there, like "#s2"
    //pin: ".hero",
    //markers: true,
    //Default is toggleActions: "play none none none"
    //toggleActions: "restart pause play reverse",
  },
  x: 400,
  duration: 1,
  opacity: 0,
});

gsap.from("#red-man", {
  scrollTrigger: {
    trigger: "#red-man",
    start: "top 50%",
  },
  x: -400,
  duration: 1,
  opacity: 0,
});

gsap.from("#dates", {
  scrollTrigger: {
    trigger: "#tour",
    start: "top 50%",
  },
  x: -100,
  y: 50,
  duration: 1.5,
  opacity: 0,
  ease: "back",
});

//White Screen Fade Out

$(document).ready(function () {
  $("#load-fade").animate(
    {
      opacity: 0,
    },
    800,
    function () {
      $("#load-fade").hide().delay(500);
    }
  );
});
