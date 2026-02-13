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

// Preload Images
movies.forEach(movie => {
    const img = new Image();
    img.src = movie.bg;
});

function updateHero() {
    const movie = movies[currentIndex];
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(15px)';

    setTimeout(() => {
        hero.style.backgroundImage = `url('${movie.bg}')`;
        heroTitle.innerText = movie.title;
        heroDesc.innerText = movie.desc;
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 1000); 

    currentIndex = (currentIndex + 1) % movies.length;
}

setInterval(updateHero, 7000); 
updateHero();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) navbar.classList.add('nav__black');
    else navbar.classList.remove('nav__black');
});

// --- RECTIFIED: Horizontal Scroll via Mouse Wheel ---
const scrollContainers = document.querySelectorAll('.row__posters');

scrollContainers.forEach((container) => {
    container.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        // Adjust scrollLeft based on vertical wheel movement (deltaY)
        container.scrollLeft += evt.deltaY;
    }, { passive: false });
});