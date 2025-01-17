gsap.registerPlugin(ScrollTrigger);
gsap.to(".img-branding-first-section-animation", { 
    clipPath: "inset(20% 0 0 0)", // Reveal the full image
  
    duration: 2, 
    delay:1,
    ease: "power2.out"
  });
  gsap.from('.first-branding-animation-heading' ,{
    y: 100,
    duration: 2, 
    delay:1,
    ease: "power2.out"
  })
  gsap.from('.vido-design-second-section-animation' ,{
    y: "-20%",
    duration: 2, 
    delay:1,
    ease: "power2.out",
  })
  gsap.from('.third-section-branding-animation-taamin' ,{
    y: 200,
    duration: 1.5, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".third-section-branding-animation-taamin",
        start: "top 100%", // Trigger when top of the element is at 80% of the viewport height
        once: true // Animation will play only once
      }
  })
  gsap.from('.third-section-branding-animation-winnie' ,{
    y: 200,
    duration: 1.5, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".third-section-branding-animation-winnie",
        start: "top 100%", // Trigger when top of the element is at 80% of the viewport height
        once: true // Animation will play only once
      }
  })
  gsap.from('.fourth-section-branding-animation-eleysa' ,{
   opacity:0,
    duration: 1.5, 
    delay:.1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".fourth-section-branding-animation-eleysa",
        start: "top 60%", 
        once: true, 
      }
  })

  gsap.from('.sixth-section-branding-animation-eleysa-image' ,{
   opacity:0,
    duration: 1.5, 
    delay:.1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".sixth-section-branding-animation-eleysa-image",
        start: "top 60%", 
        once: true, 
      }
  })
  gsap.from('.fifth-section-branding-animation-eleysa' ,{
   opacity:0,
   y: 150,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".fifth-section-branding-animation-eleysa",
        start: "top 60%", 
        once: true, 
      }
  })
  gsap.from('.design-third-section-animation' ,{
   opacity:0,
   y: 100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".design-third-section-animation",
        start: "top 60%", 
        once: true, 
      }
  })
  gsap.from('.sixth-section-branding-animation-eleysa-heading' ,{
   opacity:0,
   y: 250,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".sixth-section-branding-animation-eleysa-image",
        start: "top 60%", 
        once: true, 
      }
  })
  gsap.from('.last-section-branding-animation-earthvitality-image' ,{
   opacity:0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".last-section-branding-animation-earthvitality-image",
        start: "top 60%", 
        once: true, 
      }
  })
  gsap.from('.last-section-branding-animation-earthvitality-heading' ,{
   opacity:0,
   y: -50,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".last-section-branding-animation-earthvitality-image",
        start: "top 60%", 
        once: true, 
      }
  })
  gsap.from('.fifth-image1-wimmie-animation' ,{
   opacity:0,
   x: -200,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".fifth-image1-wimmie-animation",
        start: "top 60%", 
        once: true, 
      }
  })
  gsap.from('.fifth-image2-wimmie-animation' ,{
   opacity:0,
   x: 200,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".fifth-image1-wimmie-animation",
        start: "top 60%", 
        once: true, 
      }
  })