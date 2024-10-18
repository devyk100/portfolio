const createParticles = () => {
    const container = document.getElementById('particles-container');
    const particles = [];


    
    for (let i = 0; i < ((window.innerWidth > 900) ? 70: 33); i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.classList.add('-z-10');
        particle.style.width = `${Math.random() * 10 + ((window.innerWidth> 900) ? 5: 3)}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 40%)`;

        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 130}vh`;

        container.appendChild(particle);
        particles.push(particle); 

        gsap.to(particle, {
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            duration: 2 + Math.random() * 3,
            repeat: -1,
            ease: "power1.inOut",
            yoyo: true
        });
    }
};

createParticles();

const projectNav = document.getElementById("projectNav")
const homeNav = document.getElementById("homeNav")
const experienceNav = document.getElementById("experienceNav")
const aboutNav = document.getElementById("aboutNav")
const navul = document.getElementById("navul")

function navbarHover(){
    if((window.scrollY/window.innerHeight) < 0.85){
        homeNav.classList.add("text-violet-400")
    } else {
        homeNav.classList.remove("text-violet-400")
    }
    if((window.scrollY/window.innerHeight) < 1.85 && (window.scrollY/window.innerHeight) > 0.85){
        projectNav.classList.add("text-violet-400")
        // navul.classList.remove("backdrop-blur-sm")
    } else {
        projectNav.classList.remove("text-violet-400")
        // navul.classList.add("backdrop-blur-sm")
    }
    if((window.scrollY/window.innerHeight) < 2.85 && (window.scrollY/window.innerHeight) > 1.85){
        experienceNav.classList.add("text-violet-400")
    } else {
        experienceNav.classList.remove("text-violet-400")
    }
    if((window.scrollY/window.innerHeight) > 2.85){
        aboutNav.classList.add("text-violet-400")
    } else {
        aboutNav.classList.remove("text-violet-400")
    }
}

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    navbarHover()
})

navbarHover()



gsap.set('.cursor-dot', {scale: 0.1})
gsap.set('.cursor-outline', {scale: 0.5})

document.addEventListener("mousemove", mouseMove);

let xCTo = gsap.quickTo(".cursor-outline", "left", {
  duration: 0.2,
  ease: "power3"
});
let yCTo = gsap.quickTo(".cursor-outline", "top", {
  duration: 0.2,
  ease: "power3"
});

let xDTo = gsap.quickTo(".cursor-dot", "left", {
  duration: 0.6,
  ease: "power3"
});
let yDTo = gsap.quickTo(".cursor-dot", "top", {
  duration: 0.6,
  ease: "power3"
});

let isVisible = false;

function mouseMove(e) {
  if (!isVisible) {
    gsap.set(".cursor-outline, .cursor-dot", { opacity: 1 });
    isVisible = true;
  }

  const cursorPosition = {
    left: e.pageX,
    top: e.pageY
  };

  xCTo(cursorPosition.left);
  yCTo(cursorPosition.top);
  xDTo(cursorPosition.left);
  yDTo(cursorPosition.top);
}

let targets = gsap.utils.toArray(".target");

let scaleAnim = gsap.timeline({paused: true});

scaleAnim
  .to(".cursor-outline", {
    scale: 1
  })
  .to(
    ".cursor-dot",
    {
      scale: 1,
      duration: 0.35
    },
    0
  );

targets.forEach((target) => {
  target.addEventListener("mouseenter", (e) => {
    console.log('play')
    scaleAnim.play();
  });

  target.addEventListener("mouseleave", (e) => {
    console.log('reverse')
    scaleAnim.reverse();
  });
});

document.addEventListener("mousedown", () => scaleAnim.play());
document.addEventListener("mouseup", () => scaleAnim.reverse());