gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "play none none reverse"
})


gsap.to('.img-container', {
    scale: 52,
    ease: "ease",
    scrollTrigger: {
        trigger: '.video-section',
        scrub: 1,
        start: "top top",
        end: "bottom",
        pin: true
    }
})

gsap.to('.heroWrapper .right', {
    autoAlpha: 0,
    x: 500,
    duration: 1.5,
    scrollTrigger: {
        start: 1
    }
})
gsap.to('.heroWrapper .left', {
    autoAlpha: 0,
    x: -500,
    duration: 1.5,
    scrollTrigger: {
        start: 1
    }
})


gsap.to('.heroWrapper .txt-bottom', {
    autoAlpha: 0,
    letterSpacing: -10,
    duration: 2,
    scrollTrigger: {
        start: 2
    }
})


const tl = gsap.timeline();

tl.from('.heroWrapper .left-side div', {
    y: 150,
    opacity: 0,
    stagger: {
        amount: .4
    },
    delay: .5
}).from('.heroWrapper .right-side', { opacity: 0, duration: 2 }, .5)
    .to('.heroWrapper', { x: -window.innerWidth })



ScrollTrigger.create({
    animation: tl,
    trigger: '.heroWrapper',
    start: "top top",
    end: "+=600px",
    scrub: 1,
    pin: true,
    ease: "ease"
})

const timeline = gsap.timeline();

timeline.from('.heroWrapper .title span', {
    y: 150,
    skewY: 7,
    duration: 3
}).from('.txt-bottom', {
    letterSpacing: -10,
    opacity: 0,
    duration: 3
})

