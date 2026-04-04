// Theme toggle
(function () {
    const toggle = document.getElementById('theme-toggle');
    const root = document.documentElement;

    // Check saved preference or system preference
    const saved = localStorage.getItem('theme');
    if (saved) {
        root.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.setAttribute('data-theme', 'dark');
    }

    toggle.addEventListener('click', function () {
        const current = root.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
})();

// Mobile menu toggle
(function () {
    const btn = document.getElementById('mobile-toggle');
    const links = document.querySelector('.nav-links');

    btn.addEventListener('click', function () {
        links.classList.toggle('active');
    });

    // Close menu when a link is clicked
    links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
            links.classList.remove('active');
        });
    });
})();

// Navbar background on scroll
(function () {
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
})();

// Smooth reveal on scroll
(function () {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item, .conf-card, .skill-card, .about-card, .contact-item').forEach(function (el) {
        el.classList.add('reveal');
        observer.observe(el);
    });
})();
