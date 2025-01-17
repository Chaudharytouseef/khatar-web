document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Navbar animation
  // gsap.from(".navbar", {
  //   opacity: 0,
  //   y: -150,
  //   duration: 0.8,
  //   ease: "power2.out",
  //   immediateRender: false
  // });

  // Other animations

 gsap.from(".blog-first-tab-row-container", {
    opacity: 0,
    y: 150,
    delay: 0.2 ,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".content-circle-animation", {
    rotation: 360, // 360 degrees rotation
    duration: 12, // Duration of 12 seconds
    ease: "linear", // Smooth linear animation
    scrollTrigger: {
      trigger: ".main-content",
      start: "top 100%", // Trigger when top of the element is at 80% of the viewport height
      once: true // Animation will play only once
    }
  });
  gsap.registerPlugin(ScrollTrigger);

  // Create a timeline
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-content",
      start: "top 100%",
      toggleActions: "play none none none"
    }
  });

  // First animation for show-index-service-2
  tl.from(".show-index-service-2", {
    opacity: 0,
    duration: 0.5,
    delay: 1.5
  });

  // Second animation for show-index-service-3
  tl.from(".show-index-service-3", {
    opacity: 0,
    duration: 0.5,
    delay: .8
  });

  tl.from(".show-index-service-4", {
    opacity: 0,
    duration: 0.5,
    delay: .8
  });
  tl.from(".show-index-service-5", {
    opacity: 0,
    duration: 0.5,
    delay: 3
  });
  tl.from(".show-index-service-6", {
    opacity: 0,
    duration: 0.5,
    delay: .9
  });
  tl.from(".show-index-service-7", {
    opacity: 0,
    duration: 0.5,
    delay: .8
  });

  gsap.from(".up-animation", {
    opacity: 0,
    y: 500,
    duration: 1,
    ease: "power2.out",
    immediateRender: false

  });

  gsap.from(".button-container-index", {
    opacity: 0,
    y: 200,
    duration: 1,
    ease: "power2.out",
    immediateRender: false
  });

  gsap.from(".index-animated-first-img", {
    opacity: 0,
    x: 600,
    duration: 2,
    rotation: 45,
    ease: "power2.out",
    onComplete: function () {
      gsap.to(".index-animated-first-img", {
        y: "-=10",
        duration: 0.9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  });

  gsap.from(".index-hero-fouth-heading-first", {
    opacity: 1,
    x: 500,
    duration: 1.5,
    delay: 3,
    ease: "power2.out"
  });

  gsap.from(".index-hero-fouth-heading-second", {
    opacity: 1,
    x: 500,
    duration: 1.3,
    delay: 3,
    ease: "power2.out"
  });

  gsap.from(".index-hero-fouth-heading-third", {
    opacity: 1,
    x: 500,
    duration: 1.1,
    delay: 3,
    ease: "power2.out"
  });


  gsap.from(".about-third-heading-container", {
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-third-heading-container",
      start: "top 100%",
    }
  });
  gsap.from(".contact-second-section-animation", {
    y: 100,
    opacity: 0,
    duration: 1.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-second-section-animation",
      start: "top 100%",
    }
  });  gsap.from(".about-first-img-container", {
    y: 100,
    opacity: 0,
    duration: 1.4,
    ease: "power2.out",
   
  });
  gsap.from(".contact-second-section-animation-map", {
    y: 100,
    x: 100,
    opacity: 0,
    duration: 1.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-second-section-animation",
      start: "top 100%",
    }
  });
  gsap.from(".contact-third-section-animation-paragraph", {
    y: 150,

    opacity: 0,
    duration: 1.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-third-section-animation-paragraph",
      start: "top 100%",
    }
  });
  gsap.from(".contact-third-section-animation-card-1-3", {
    y: 120,

    opacity: 1,
    duration: 1.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-third-section-animation-paragraph",
      start: "top 100%",
    }
  });
  gsap.from(".contact-third-section-animation-card-2", {
    y: 50,
    opacity: 1,
    duration: 1.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-third-section-animation-paragraph",
      start: "top 100%",
    }
  });
  gsap.from(".about-second-row-container", {
    y: 500,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-second-row-container",
      end: "bottom 100%",
    }
  });
  gsap.from(".about-us-fourth-contianer", {
    y: 500,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-us-fourth-contianer",
      end: "bottom 100%",
    }
  });
 // Select all elements
const elements = gsap.utils.toArray(".blog-second-row-col");

// Find the center index
const centerIndex = Math.floor((elements.length - 1) / 2);

// Create a timeline
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".blog-second-row-col",
    start: "top 75%",
    end: "bottom 25%",
    toggleActions: "play none none none",
  },
});

// Animate the center element first
timeline.from(elements[centerIndex], {
  y: -250,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

// Animate the elements on the left
for (let i = centerIndex - 1; i >= 0; i--) {
  timeline.from(
    elements[i],
    {
      y: -250,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.8" // Overlap the animations slightly
  );
}

// Animate the elements on the right
for (let i = centerIndex + 1; i < elements.length; i++) {
  timeline.from(
    elements[i],
    {
      y: -250,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.8" // Overlap the animations slightly
  );
}

  gsap.from(".sas-project-card-contianer", {
    y: 250,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".sas-project-card-contianer",
      start: "top 50%",
      end: "bottom 50%",
    },
  });
  gsap.from(".blog-second-up-animaiton", {
    y: 250,
    opacity: 0,
    duration: 1.5 ,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".blog-second-up-animaiton",
      end: "bottom 100%",

    },
  });
  gsap.from(".blog-second-up-animaiton-second", {
    y: 250,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".blog-second-up-animaiton-second",
      end: "bottom 100%",

    },
  });

  gsap.from(".services-first-content-animation", {
    y: 250,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,

  });
  gsap.from(".services-second-content-animation", {
    x: 250,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,

  });
  gsap.from(".blog-details-first-animation", {
    y: -350,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.3,

  });

  gsap.from(".services-third-content-animation", {
    y: -150,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".services-third-content-animation",
      end: "bottom center ",
    },

  });
  gsap.from(".services-fourth-content-animation", {
    y: 250,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".services-fourth-content-animation",
      end: "bottom 100%",

    },
  });
  gsap.from(".footer-fourth-content-animation", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".footer-fourth-content-animation",
      start: "top 80%", // When the top of the container hits 80% of the viewport
      end: "top 50%", // Optional end point
      toggleActions: "play none none none", // Animation triggers

    },
  });
  gsap.from(".footer-first-content-animation", {
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".footer-first-content-animation",
      start: "top 80%", // When the top of the container hits 80% of the viewport
      end: "top 50%", // Optional end point
      toggleActions: "play none none none", // Animation triggers

    },
  });
  gsap.from(".flip-element", {
    scrollTrigger: {
      trigger: ".flip-element", // Element that triggers the animation
      start: "top 80%", // When the top of the container hits 80% of the viewport
      end: "top 50%", // Optional end point
      toggleActions: "play none none none", // Animation triggers
    },
    duration: 2, // Animation duration
    opacity: 0, // Start from invisible
    rotateX: -80, // Start from -80 degrees
    ease: "power1.out", // Smooth easing
  });
});


// document.addEventListener('scroll', function () {
//   const backgroundImage = document.querySelector('.background-image');
//   const sectionEnd = backgroundImage.offsetHeight;
//   const scrollPosition = window.scrollY + window.innerHeight;

//   if (scrollPosition >= sectionEnd) {
//     backgroundImage.style.position = 'fixed';
//     backgroundImage.style.top = '0';
//   } else {

//     backgroundImage.style.position = 'relative';
//   }
// });

document.querySelectorAll('.collapse-service').forEach(service => {
  service.addEventListener('click', function () {
    const container = this.closest('.collapse-service-container');
    const collapseContent = container.querySelector('.collapse');

    // Close all other dropdowns
    document.querySelectorAll('.collapse-service-container').forEach(el => {
      if (el !== container) {
        el.classList.remove('show');
        el.querySelector('.collapse').classList.remove('show');
      }
    });

    // Toggle the clicked dropdown
    if (!container.classList.contains('show')) {
      container.classList.add('show');
      collapseContent.classList.add('show');
    } else {
      container.classList.remove('show');
      collapseContent.classList.remove('show');
    }
  });
});

// start card index slider


const cards = document.querySelectorAll('.testimonial-card');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateSlider() {
  // Reset all classes on cards
  cards.forEach((card, index) => {
    card.classList.remove('active', 'behind-1', 'behind-2', 'behind-3', 'hidden');

    if (index === currentIndex) {
      card.classList.add('active');
    } else if (index === currentIndex - 1) {
      card.classList.add('behind-1');
    } else if (index === currentIndex - 2) {
      card.classList.add('behind-2');
    } else if (index === currentIndex - 3) {
      card.classList.add('behind-3');
    } else {
      card.classList.add('hidden'); // Cards beyond the 4th position are hidden
    }

  });

  // Disable buttons at bounds
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex >= cards.length - 1;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

// Initialize slider
updateSlider();
const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);


// end card index slider

// meet our team

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      990: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
});



// meet our team

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".demo-section", {
    backgroundSize: "100%", // Animate background size to cover the section
    duration: 1.5, // Animation duration
    ease: "power3.out", // Smooth easing
    scrollTrigger: {
      trigger: ".demo-section", // Trigger animation when this section comes into view
      start: "top 80%", // When the section's top is 80% inside the viewport
      toggleActions: "play none none none", // Play the animation once
    },
  });
});
