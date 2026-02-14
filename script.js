const movies = [
    {
        title: "Interstellar",
        desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        bg: "images/IN.jpg"
    },
    {
        title: "Stranger Things",
        desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments and supernatural forces.",
        bg: "images/ST3.jpg"
    },
    {
        title: "The Dark Knight",
        desc: "Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and District Attorney Harvey Dent.",
        bg: "images/DK3.jpg"
    }
];

let currentIndex = 0;
const hero = document.getElementById('hero');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const heroContent = document.querySelector('.hero__contents');

const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function waitForDecode(img) {
    if (!img) return Promise.resolve();
    if (typeof img.decode === 'function') {
        return img.decode().catch(() => undefined);
    }
    return new Promise((resolve) => {
        if (img.complete) return resolve();
        img.addEventListener('load', () => resolve(), { once: true });
        img.addEventListener('error', () => resolve(), { once: true });
    });
}

// Preload Images
movies.forEach(movie => {
    const img = new Image();
    img.src = movie.bg;
});

async function updateHero() {
    const movie = movies[currentIndex];

    if (hero && heroContent) {
        hero.classList.add('hero--loading');
        heroContent.classList.remove('is-ready');
    }

    const img = new Image();
    img.src = movie.bg;
    await waitForDecode(img);

    if (hero) hero.style.backgroundImage = `url('${movie.bg}')`;
    if (heroTitle) heroTitle.innerText = movie.title;
    if (heroDesc) heroDesc.innerText = movie.desc;

    if (!prefersReducedMotion) {
        requestAnimationFrame(() => {
            if (hero) hero.classList.remove('hero--loading');
            if (heroContent) heroContent.classList.add('is-ready');
        });
    } else {
        if (hero) hero.classList.remove('hero--loading');
        if (heroContent) heroContent.classList.add('is-ready');
    }

    currentIndex = (currentIndex + 1) % movies.length;
}

setInterval(updateHero, 7000); 
updateHero();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;
let ticking = false;

function onScroll() {
    const y = window.scrollY;
    const goingDown = y > lastScrollY;

    if (navbar) {
        if (y > 24) navbar.classList.add('nav--scrolled');
        else navbar.classList.remove('nav--scrolled');

        if (y > 150) navbar.classList.add('nav__black');
        else navbar.classList.remove('nav__black');

        if (y > 200 && goingDown) navbar.classList.add('nav--hidden');
        else navbar.classList.remove('nav--hidden');
    }

    lastScrollY = y;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
    }
}, { passive: true });

onScroll();

// Reveal on scroll
const revealTargets = document.querySelectorAll('.row, .row__title, .row__posters');
revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
            }
        });
    }, { root: null, threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

    revealTargets.forEach((el) => io.observe(el));
} else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
}

// --- RECTIFIED: Horizontal Scroll via Mouse Wheel ---
const scrollContainers = document.querySelectorAll('.row__posters');

scrollContainers.forEach((container) => {
    const canScrollHorizontally = () => (container.scrollWidth - container.clientWidth) > 2;

    container.addEventListener('wheel', (evt) => {
        if (!canScrollHorizontally()) return;

        const absX = Math.abs(evt.deltaX);
        const absY = Math.abs(evt.deltaY);
        const delta = absX > absY ? evt.deltaX : evt.deltaY;

        // Prevent vertical page scroll only when we can actually scroll this row.
        evt.preventDefault();
        container.scrollLeft += delta;
    }, { passive: false });

    // Drag to scroll (Netflix-like)
    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;

    container.addEventListener('pointerdown', (e) => {
        if (!canScrollHorizontally()) return;
        isDown = true;
        startX = e.clientX;
        startScrollLeft = container.scrollLeft;
        container.setPointerCapture(e.pointerId);
    });

    container.addEventListener('pointermove', (e) => {
        if (!isDown) return;
        const dx = e.clientX - startX;
        container.scrollLeft = startScrollLeft - dx;
    });

    const endDrag = () => { isDown = false; };
    container.addEventListener('pointerup', endDrag);
    container.addEventListener('pointercancel', endDrag);
    container.addEventListener('pointerleave', endDrag);
});

// Poster 3D tilt (subtle, performance-friendly)
const posters = document.querySelectorAll('.row__poster');
const tiltEnabled = !prefersReducedMotion;

function clearTilt(el) {
    el.style.transform = '';
    el.style.filter = '';
    el.classList.remove('is-tilting');
}

if (tiltEnabled) {
    posters.forEach((poster) => {
        let raf = 0;

        poster.addEventListener('pointermove', (e) => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const rect = poster.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const tiltX = (0.5 - y) * 6;
                const tiltY = (x - 0.5) * 8;

                poster.classList.add('is-tilting');
                poster.style.transform = `translateY(-14px) scale(1.09) perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
                poster.style.filter = 'brightness(1.1)';
            });
        });

        poster.addEventListener('pointerleave', () => {
            if (raf) cancelAnimationFrame(raf);
            clearTilt(poster);
        });

        poster.addEventListener('blur', () => clearTilt(poster));
    });
}