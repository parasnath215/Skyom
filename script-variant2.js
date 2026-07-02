/* =====================================================
   SKYOM — Homepage Variant 2 JS
   Theme: Bold Editorial & High-Tech Interactive
   ===================================================== */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        initPreloader();
    }

    /* =================================================
       PRELOADER
       ================================================= */
    function initPreloader() {
        const preloader = document.getElementById('preloader');
        
        const startApp = () => {
            setTimeout(() => {
                preloader.classList.add('hidden');
                document.body.style.overflow = '';
                initApp();
            }, 2000);
        };

        if (document.readyState === 'complete') {
            startApp();
        } else {
            window.addEventListener('load', startApp);
        }
    }

    /* =================================================
       MAIN APP INIT
       ================================================= */
    function initApp() {
        initLenis();
        initCustomCursor();
        initNavigation();
        initGSAPAnimations();
        initMagneticButtons();
        initContactForm();
    }

    /* =================================================
       LENIS SMOOTH SCROLL
       ================================================= */
    let lenisInstance;

    function initLenis() {
        lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisInstance.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenisInstance.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Smooth anchors
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href && href !== '#') {
                    e.preventDefault();
                    try {
                        const target = document.querySelector(href);
                        if (target) {
                            lenisInstance.scrollTo(target, { offset: -40, duration: 1.5 });
                        }
                    } catch (err) {
                        console.error('Invalid selector:', href);
                    }
                }
                closeMobileMenu();
            });
        });
    }

    /* =================================================
       CUSTOM CURSOR
       ================================================= */
    function initCustomCursor() {
        if ('ontouchstart' in window) return;

        const cursor = document.getElementById('cursor');
        const follower = document.getElementById('cursor-follower');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            followerX += (mouseX - followerX) * 0.08;
            followerY += (mouseY - followerY) * 0.08;
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover expansions with text
        const interactiveElements = document.querySelectorAll('a, button, .project-hover-trigger');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                let cursorText = 'GO';
                if (el.classList.contains('project-hover-trigger') || el.closest('.projects-split-section')) {
                    cursorText = 'VIEW';
                }
                follower.innerText = cursorText;
            });
            el.addEventListener('mouseleave', () => {
                follower.innerText = '';
            });
        });
    }

    /* =================================================
       NAVIGATION
       ================================================= */
    function initNavigation() {
        const navbar = document.getElementById('navbar');
        const toggle = document.getElementById('nav-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        ScrollTrigger.create({
            start: 'top -80',
            end: 99999,
            onUpdate: (self) => {
                if (self.direction === 1 && self.scroll() > 80) {
                    navbar.classList.add('scrolled');
                } else if (self.scroll() <= 80) {
                    navbar.classList.remove('scrolled');
                }
            }
        });

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            if (mobileMenu.classList.contains('active')) {
                lenisInstance.stop();
            } else {
                lenisInstance.start();
            }
        });
    }

    function closeMobileMenu() {
        const toggle = document.getElementById('nav-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        if (toggle) toggle.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (lenisInstance) lenisInstance.start();
    }

    /* =================================================
       GSAP ANIMATIONS
       ================================================= */
    function initGSAPAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        animateHeroScale();
        animateHorizontalTimeline();
        initInteractiveProjectHoverList();
        init3DCardTilt();
        animateVisionMarquee();
        animateContactFields();
    }

    /* ---- Hero Scales Video to 100% on Scroll ---- */
    function animateHeroScale() {
        if (!document.querySelector('.hero-video-container')) return;

        // Scale centered video container to fill viewport on scroll
        gsap.to('.hero-video-container', {
            width: '100vw',
            borderRadius: '0px',
            scrollTrigger: {
                trigger: '.hero-section',
                start: '50% top',
                end: 'bottom top',
                scrub: 1.2,
                pin: true,
                pinSpacing: true
            }
        });
    }

    /* ---- Horizontal Scrolling Timeline ---- */
    function animateHorizontalTimeline() {
        const wrapper = document.querySelector('.timeline-horizontal-wrapper');
        if (!wrapper) return;

        // Check window width: only run desktop horizontal scroll above mobile width (1024px)
        if (window.innerWidth > 1024) {
            const slides = gsap.utils.toArray('.timeline-horizontal-slide');
            const totalScrollWidth = wrapper.scrollWidth - window.innerWidth;

            gsap.to(wrapper, {
                x: -totalScrollWidth,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.timeline-section',
                    pin: true,
                    scrub: 1,
                    start: 'top top',
                    end: () => `+=${wrapper.scrollWidth}`,
                    onUpdate: (self) => {
                        const progressFill = document.querySelector('.timeline-scroll-progress-fill');
                        if (progressFill) {
                            progressFill.style.width = `${self.progress * 100}%`;
                        }
                    }
                }
            });
        }
    }

    /* ---- Split Screen Hover Gallery ---- */
    function initInteractiveProjectHoverList() {
        const hoverItems = document.querySelectorAll('.project-hover-item');
        const previews = document.querySelectorAll('.project-preview-media');

        hoverItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const targetProject = item.getAttribute('data-project');
                
                previews.forEach(preview => {
                    if (preview.getAttribute('data-project') === targetProject) {
                        preview.classList.add('active');
                    } else {
                        preview.classList.remove('active');
                    }
                });
            });
        });
    }

    /* ---- About Cards 3D Mouse Tilt ---- */
    function init3DCardTilt() {
        if ('ontouchstart' in window) return;

        const cards = document.querySelectorAll('.about-card-3d');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const bound = card.getBoundingClientRect();
                const mouseX = e.clientX - bound.left;
                const mouseY = e.clientY - bound.top;
                
                const xPct = mouseX / bound.width;
                const yPct = mouseY / bound.height;

                // Max rotation degrees
                const maxRot = 12;
                const rotX = (0.5 - yPct) * maxRot;
                const rotY = (xPct - 0.5) * maxRot;

                gsap.to(card, {
                    rotateX: rotX,
                    rotateY: rotY,
                    transformPerspective: 800,
                    ease: 'power2.out',
                    duration: 0.3
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    ease: 'power3.out',
                    duration: 0.6
                });
            });
        });
    }

    /* ---- Vision Scroll Marquee ---- */
    function animateVisionMarquee() {
        if (!document.querySelector('.vision-section')) return;

        // Move row 1 left, row 2 right on scroll
        gsap.to('.marquee-row-1', {
            x: -250,
            scrollTrigger: {
                trigger: '.vision-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        gsap.to('.marquee-row-2', {
            x: 250,
            scrollTrigger: {
                trigger: '.vision-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    /* ---- Contact Fields Reveal ---- */
    function animateContactFields() {
        if (!document.querySelector('.contact-section')) return;

        gsap.from('.contact-info > *', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top 75%',
            }
        });

        gsap.from('.contact-form .form-group, .contact-form .form-group-full', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 70%',
            }
        });
    }

    /* =================================================
       MAGNETIC INTERACTIONS & SUBMITS
       ================================================= */
    function initMagneticButtons() {
        const magneticElements = document.querySelectorAll('.magnetic-btn, .nav-cta-btn, .form-submit');
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const bound = el.getBoundingClientRect();
                const x = e.clientX - bound.left - (bound.width / 2);
                const y = e.clientY - bound.top - (bound.height / 2);
                
                gsap.to(el, {
                    x: x * 0.35,
                    y: y * 0.35,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            el.addEventListener('mouseleave', () => {
                gsap.to(el, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.3)'
                });
            });
        });
    }

    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('.form-submit');
            const submitText = submitBtn.querySelector('span') || submitBtn;
            
            submitText.textContent = 'Sending...';
            submitBtn.style.pointerEvents = 'none';

            setTimeout(() => {
                submitText.textContent = 'Message Sent';
                form.reset();
                setTimeout(() => {
                    submitText.textContent = 'Send Message';
                    submitBtn.style.pointerEvents = 'all';
                }, 3000);
            }, 1500);
        });
    }

})();
