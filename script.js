/* =====================================================
   SKYOM — Premium Builder Company
   Animation & Interaction Script
   GSAP + ScrollTrigger + Lenis
   ===================================================== */

(function () {
    'use strict';

    // ---- Wait for DOM ----
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        initPreloader();
    }

    /* =================================================
       PRELOADER
       ================================================= */
    function initPreloader() {
        const preloader = document.getElementById('preloader');
        
        // Wait for all critical images to load
        const heroImg = document.querySelector('.hero-bg-img');
        
        const startApp = () => {
            setTimeout(() => {
                preloader.classList.add('hidden');
                document.body.style.overflow = '';
                initApp();
            }, 2800); // Let the progress bar complete
        };

        if (heroImg && heroImg.complete) {
            startApp();
        } else if (heroImg) {
            heroImg.addEventListener('load', startApp);
            heroImg.addEventListener('error', startApp);
            // Fallback timeout
            setTimeout(startApp, 4000);
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
        initFloorPlans();
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

        // Sync Lenis with GSAP ScrollTrigger
        lenisInstance.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenisInstance.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Handle anchor links
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
                // Close mobile menu if open
                closeMobileMenu();
            });
        });
    }

    /* =================================================
       CUSTOM CURSOR
       ================================================= */
    function initCustomCursor() {
        // Skip on touch devices
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

        // Smooth follow animation
        function animateCursor() {
            // Cursor follows instantly
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            // Follower with more delay
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

        // Scroll detection for glassmorphism
        ScrollTrigger.create({
            start: 'top -100',
            end: 99999,
            onUpdate: (self) => {
                if (self.direction === 1 && self.scroll() > 100) {
                    navbar.classList.add('scrolled');
                } else if (self.scroll() <= 100) {
                    navbar.classList.remove('scrolled');
                }
            }
        });

        // Mobile toggle
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
        toggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        if (lenisInstance) lenisInstance.start();
    }

    /* =================================================
       GSAP ANIMATIONS
       ================================================= */
    function initGSAPAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        animateHero();
        animateTimeline();
        animateProjects();
        animateAbout();
        animateVision();
        animateContact();
    }

    /* ---- Hero Section ---- */
    function animateHero() {
        if (!document.querySelector('.hero-section')) return;
        const tl = gsap.timeline({ delay: 0.3 });

        // Hero background parallax
        const heroBg = document.querySelector('.hero-bg-img') || document.querySelector('.hero-bg-video');
        if (heroBg) {
            gsap.to(heroBg, {
                y: '20%',
                scale: 1,
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                }
            });
        }

        // Staggered word reveal
        tl.to('.hero-title-word', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.12,
        })
        .to('.hero-subtitle', {
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
        }, '-=0.5')
        .to('.hero-description', {
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
        }, '-=0.4')
        .to('.hero-cta', {
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
        }, '-=0.3')
        .to('.hero-scroll-indicator', {
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
        }, '-=0.2');

        // Fade hero content on scroll
        gsap.to('.hero-content', {
            opacity: 0,
            y: -50,
            scrollTrigger: {
                trigger: '.hero-section',
                start: '60% top',
                end: 'bottom top',
                scrub: 1,
            }
        });
    }

    /* ---- Timeline Section ---- */
    function animateTimeline() {
        if (!document.querySelector('.timeline-section')) return;
        
        // Header animation
        gsap.from('.timeline-header .section-tag', {
            opacity: 0,
            x: -30,
            scrollTrigger: {
                trigger: '.timeline-header',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            duration: 0.8,
            ease: 'power3.out',
        });

        gsap.from('.timeline-header .section-title', {
            opacity: 0,
            y: 40,
            scrollTrigger: {
                trigger: '.timeline-header',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            duration: 1,
            ease: 'power3.out',
            delay: 0.2,
        });

        // Cards stagger in
        gsap.to('.timeline-card', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.timeline-track',
                start: 'top 75%',
                toggleActions: 'play none none reverse',
            }
        });

        // Progress bar fill
        gsap.to('.timeline-progress-fill', {
            width: '100%',
            scrollTrigger: {
                trigger: '.timeline-section',
                start: 'top 60%',
                end: 'bottom 40%',
                scrub: 1,
            }
        });
    }

    /* ---- Projects Showcase ---- */
    function animateProjects() {
        if (!document.querySelector('.projects-section')) return;
        const panels = document.querySelectorAll('.project-panel');

        panels.forEach((panel, index) => {
            const img = panel.querySelector('.project-bg-img') || panel.querySelector('.project-bg-video');
            const number = panel.querySelector('.project-number');
            const badge = panel.querySelector('.project-status-badge');
            const title = panel.querySelector('.project-title');
            const desc = panel.querySelector('.project-description');
            const details = panel.querySelector('.project-details');
            const cta = panel.querySelector('.project-cta');

            // Image/Video parallax
            if (img) {
                gsap.to(img, {
                    y: '15%',
                    scrollTrigger: {
                        trigger: panel,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.5,
                    }
                });
            }

            // Content reveal timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: panel,
                    start: 'top 60%',
                    toggleActions: 'play none none reverse',
                }
            });

            tl.to(number, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
            })
            .to(badge, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
            }, '-=0.3')
            .to(title, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power4.out',
            }, '-=0.3')
            .to(desc, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
            }, '-=0.5')
            .to(details, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
            }, '-=0.4')
            .to(cta, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
            }, '-=0.3');
        });
    }

    /* ---- About Section ---- */
    function animateAbout() {
        if (!document.querySelector('.about-section')) return;

        // Image mask reveal
        gsap.to('.about-image-mask', {
            scaleY: 0,
            duration: 1.5,
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 60%',
                toggleActions: 'play none none reverse',
            }
        });

        // Text content stagger
        const aboutElements = [
            '.about-text-col .section-tag',
            '.about-title',
            '.about-description',
            '.about-stats',
        ];

        aboutElements.forEach((selector, i) => {
            gsap.from(selector, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.1 * i,
                scrollTrigger: {
                    trigger: '.about-text-col',
                    start: 'top 70%',
                    toggleActions: 'play none none reverse',
                }
            });
        });

        // Counter animation
        const counters = document.querySelectorAll('.stat-number[data-target]');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            
            ScrollTrigger.create({
                trigger: counter,
                start: 'top 85%',
                onEnter: () => {
                    gsap.to({ val: 0 }, {
                        val: target,
                        duration: 2,
                        ease: 'power2.out',
                        onUpdate: function () {
                            counter.textContent = Math.round(this.targets()[0].val);
                        }
                    });
                },
                once: true,
            });
        });

        // About image slow zoom
        gsap.to('.about-image', {
            scale: 1,
            scrollTrigger: {
                trigger: '.about-image-wrapper',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 2,
            }
        });
    }

    /* ---- Vision Section ---- */
    function animateVision() {
        if (!document.querySelector('.vision-section')) return;

        // Parallax background
        gsap.to('.vision-bg-img', {
            y: '15%',
            scrollTrigger: {
                trigger: '.vision-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            }
        });

        // Quote words stagger
        gsap.to('.quote-word', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: {
                trigger: '.vision-quote',
                start: 'top 75%',
                toggleActions: 'play none none reverse',
            }
        });

        // Vision footer
        gsap.to('.vision-footer', {
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.vision-footer',
                start: 'top 90%',
                toggleActions: 'play none none reverse',
            }
        });
    }

    /* ---- Contact Section ---- */
    function animateContact() {
        if (!document.querySelector('.contact-section')) return;

        // Contact info animation
        gsap.from('.contact-info', {
            opacity: 0,
            x: -40,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            }
        });

        // Form animation
        gsap.from('.contact-form-wrapper', {
            opacity: 0,
            x: 40,
            duration: 1,
            ease: 'power3.out',
            delay: 0.2,
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            }
        });

        // Form groups stagger
        gsap.from('.form-group', {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.1,
            delay: 0.4,
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            }
        });
    }

    /* =================================================
       MAGNETIC BUTTONS
       ================================================= */
    function initMagneticButtons() {
        // Skip on touch devices
        if ('ontouchstart' in window) return;

        const magneticBtns = document.querySelectorAll('.magnetic-btn');

        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(btn, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.4,
                    ease: 'power2.out',
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: 'elastic.out(1, 0.5)',
                });
            });
        });
    }

    /* =================================================
       CONTACT FORM
       ================================================= */
    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        // Handle placeholder trick for floating labels
        const inputs = form.querySelectorAll('.form-input');
        inputs.forEach(input => {
            // Set initial placeholder to space for :not(:placeholder-shown)
            if (input.tagName !== 'SELECT') {
                input.setAttribute('placeholder', ' ');
            }
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = form.querySelector('.form-submit');
            const originalText = btn.querySelector('span').textContent;
            
            // Animate submission
            gsap.to(btn, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    btn.querySelector('span').textContent = 'Message Sent ✓';
                    btn.style.background = 'rgba(74, 222, 128, 0.2)';
                    btn.style.borderColor = '#4ade80';
                    btn.style.color = '#4ade80';

                    setTimeout(() => {
                        btn.querySelector('span').textContent = originalText;
                        btn.style.background = '';
                        btn.style.borderColor = '';
                        btn.style.color = '';
                        form.reset();
                    }, 3000);
                }
            });
        });
    }

    /* =================================================
       FLOOR PLAN INTERACTIVE SWITCHER
       ================================================= */
    function initFloorPlans() {
        const tabs = document.querySelectorAll('.floorplan-tab');
        const contents = document.querySelectorAll('.floorplan-content-item');
        if (!tabs.length || !contents.length) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');

                // Deactivate all tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Hide all contents
                contents.forEach(c => c.classList.remove('active'));

                // Activate clicked tab
                tab.classList.add('active');
                
                // Show matching content
                const activeContent = document.getElementById(`floorplan-${target}`);
                if (activeContent) {
                    activeContent.classList.add('active');
                    // Fade in smoothly using GSAP
                    gsap.fromTo(activeContent, 
                        { opacity: 0, y: 15 },
                        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
                    );
                }
            });
        });
    }

})();
