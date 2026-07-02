/* =====================================================
   SKYOM — Homepage Variant 1 JS
   Theme: Minimalist Light & Asymmetrical Modern
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
        const heroVideo = document.querySelector('.hero-media-container video');
        
        const startApp = () => {
            setTimeout(() => {
                preloader.classList.add('hidden');
                document.body.style.overflow = '';
                initApp();
            }, 2500); // Allow progress bar to finish
        };

        if (heroVideo) {
            heroVideo.addEventListener('loadeddata', startApp);
            // Fallback timeout
            setTimeout(startApp, 3500);
        } else {
            startApp();
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

        // Sync with GSAP ScrollTrigger
        lenisInstance.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenisInstance.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Anchor links smooth navigation
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

        animateHero();
        animateStickyTimeline();
        animateAsymmetricalProjects();
        animateAboutSection();
        animateVisionSection();
        animateContactSection();
    }

    /* ---- Hero Variant 1 ---- */
    function animateHero() {
        const tl = gsap.timeline({ delay: 0.2 });

        // Stagger words in
        tl.to('.hero-title-word', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power4.out',
            stagger: 0.1,
        })
        .to('.hero-subtitle', {
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
        }, '-=0.8')
        .to('.hero-description', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
        }, '-=0.6')
        .to('.hero-cta', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
        }, '-=0.5')
        .to('.hero-scroll-indicator', {
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
        }, '-=0.4');

        // Clip-path reveal for the right video frame
        gsap.to('.hero-media-container', {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.6,
            ease: 'power4.inOut',
            delay: 0.4
        });

        // Slow parallax scroll on video
        gsap.to('.hero-media-container video', {
            y: '10%',
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    /* ---- Sticky Timeline Variant 1 ---- */
    function animateStickyTimeline() {
        const timelineItems = gsap.utils.toArray('.timeline-item');
        const yearSlider = document.querySelector('.timeline-active-year-slider');

        timelineItems.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: 'top 55%',
                end: 'bottom 55%',
                onEnter: () => {
                    updateActiveState(index);
                },
                onEnterBack: () => {
                    updateActiveState(index);
                }
            });
        });

        function updateActiveState(activeIndex) {
            timelineItems.forEach((item, idx) => {
                if (idx === activeIndex) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            if (yearSlider) {
                // translate vertically based on index
                gsap.to(yearSlider, {
                    y: `-${activeIndex * 33.333}%`,
                    duration: 0.6,
                    ease: 'power3.out'
                });
            }
        }
    }

    /* ---- Asymmetrical Projects Grid ---- */
    function animateAsymmetricalProjects() {
        const panels = gsap.utils.toArray('.project-panel');

        panels.forEach((panel) => {
            const bg = panel.querySelector('.project-bg');
            const img = panel.querySelector('.project-bg-img') || panel.querySelector('.project-bg-video');
            const contentElements = panel.querySelectorAll('.project-meta, .project-title, .project-description, .project-details, .project-cta');

            // Image clipping path reveal
            gsap.fromTo(bg, 
                { clipPath: 'inset(0 100% 0 0)' },
                {
                    clipPath: 'inset(0 0% 0 0)',
                    duration: 1.4,
                    ease: 'power4.inOut',
                    scrollTrigger: {
                        trigger: panel,
                        start: 'top 70%',
                    }
                }
            );

            // Stagger reveal text elements
            gsap.fromTo(contentElements,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: panel,
                        start: 'top 65%',
                    }
                }
            );
        });
    }

    /* ---- About Section Variant 1 ---- */
    function animateAboutSection() {
        if (!document.querySelector('.about-section')) return;

        gsap.from('.about-image-wrapper', {
            scale: 1.15,
            duration: 1.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 75%',
            }
        });

        gsap.from('.about-text-col > *', {
            opacity: 0,
            y: 35,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.about-text-col',
                start: 'top 70%',
            }
        });

        // Count up stats
        const statItems = document.querySelectorAll('.stat-number');
        statItems.forEach(item => {
            const targetVal = parseInt(item.getAttribute('data-target'), 10);
            ScrollTrigger.create({
                trigger: item,
                start: 'top 85%',
                onEnter: () => {
                    let countObj = { val: 0 };
                    gsap.to(countObj, {
                        val: targetVal,
                        duration: 2,
                        ease: 'power2.out',
                        onUpdate: () => {
                            item.innerText = Math.floor(countObj.val);
                        }
                    });
                }
            });
        });
    }

    /* ---- Vision Section Parallax ---- */
    function animateVisionSection() {
        if (!document.querySelector('.vision-section')) return;

        // Collage image parallax offsets
        gsap.to('.collage-img.img-1', {
            y: -50,
            ease: 'none',
            scrollTrigger: {
                trigger: '.vision-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        gsap.to('.collage-img.img-2', {
            y: 50,
            ease: 'none',
            scrollTrigger: {
                trigger: '.vision-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        gsap.from('.vision-content > *', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.vision-content',
                start: 'top 75%',
            }
        });
    }

    /* ---- Contact Section Reveal ---- */
    function animateContactSection() {
        if (!document.querySelector('.contact-section')) return;

        gsap.from('.contact-info > *', {
            opacity: 0,
            x: -30,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top 75%',
            }
        });

        gsap.from('.contact-form .form-group', {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 70%',
            }
        });
    }

    /* =================================================
       MAGNETIC BUTTONS & FORMS
       ================================================= */
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.magnetic-btn, .nav-cta-btn');
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const bound = btn.getBoundingClientRect();
                const x = e.clientX - bound.left - (bound.width / 2);
                const y = e.clientY - bound.top - (bound.height / 2);
                
                gsap.to(btn, {
                    x: x * 0.35,
                    y: y * 0.35,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
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

            // Simulate form submission
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
