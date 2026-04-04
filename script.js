// Theme toggle
(function () {
    var toggle = document.getElementById('theme-toggle');
    var root = document.documentElement;

    var saved = localStorage.getItem('theme');
    if (saved) {
        root.setAttribute('data-theme', saved);
    }
    // Default is light (set in HTML), no system preference override needed

    toggle.addEventListener('click', function () {
        var current = root.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
})();

// Nav scroll effect
(function () {
    var nav = document.getElementById('nav');
    window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });
})();

// Mobile menu
(function () {
    document.getElementById('menuBtn').addEventListener('click', function () {
        document.getElementById('navLinks').classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach(function (a) {
        a.addEventListener('click', function () {
            document.getElementById('navLinks').classList.remove('open');
        });
    });
})();

// Fade-in on scroll
(function () {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(function (el) {
        observer.observe(el);
    });
})();
