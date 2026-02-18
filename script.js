/* ─────────────────────────────────────────
   DATA — Hero uses YOUR original local images
───────────────────────────────────────── */
const HERO_MOVIES = [
    {
        id: 1,
        title: "Interstellar",
        desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. A visually stunning, emotionally charged sci-fi epic from Christopher Nolan.",
        bg: "images/IN.jpg",
        year: "2014", rating: "PG-13", genres: ["Sci-Fi", "Drama", "Adventure"], match: 97
    },
    {
        id: 2,
        title: "Stranger Things",
        desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        bg: "images/ST3.jpg",
        year: "2016", rating: "TV-14", genres: ["Sci-Fi Horror", "Drama", "Mystery"], match: 98
    },
    {
        id: 3,
        title: "The Dark Knight",
        desc: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and DA Harvey Dent, he sets out to dismantle the remaining criminal organizations that plague Gotham.",
        bg: "images/DK3.jpg",
        year: "2008", rating: "PG-13", genres: ["Action", "Crime", "Drama"], match: 99
    }
];

const TRENDING = [
    { id: 101, title: "Oppenheimer",       thumb: "https://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", bg: "https://image.tmdb.org/t/p/w1280/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",  year: "2023", match: 97, genres: ["Biography","Drama","History"],       desc: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II." },
    { id: 102, title: "Dune: Part Two",    thumb: "https://image.tmdb.org/t/p/w342/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg", bg: "https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",  year: "2024", match: 96, genres: ["Sci-Fi","Adventure"],                desc: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family." },
    { id: 103, title: "Wednesday",         thumb: "https://image.tmdb.org/t/p/w342/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", bg: "https://image.tmdb.org/t/p/w1280/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",  year: "2022", match: 93, genres: ["Comedy","Mystery","Horror"],          desc: "Wednesday Addams investigates a murder mystery while making new friends at Nevermore Academy." },
    { id: 104, title: "Alien: Romulus",    thumb: "https://image.tmdb.org/t/p/w342/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg", bg: "https://image.tmdb.org/t/p/w1280/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",  year: "2024", match: 90, genres: ["Horror","Sci-Fi"],                   desc: "A group of young colonists come face to face with the most terrifying life form in the universe." },
    { id: 105, title: "Deadpool & Wolverine", thumb: "https://image.tmdb.org/t/p/w342/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", bg: "https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg", year: "2024", match: 94, genres: ["Action","Comedy","Superhero"],     desc: "Wolverine is recovering from his wounds when he crosses paths with Deadpool, who has traveled back in time." },
    { id: 106, title: "Inside Out 2",      thumb: "https://image.tmdb.org/t/p/w342/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", bg: "https://image.tmdb.org/t/p/w1280/wlRoR0cAGAl3La9yRCNBQl4FMor.jpg",  year: "2024", match: 95, genres: ["Animation","Family","Comedy"],        desc: "Riley is now a teenager. Joy, Sadness, Anger, Fear and Disgust must make room for a new emotion: Anxiety." },
    { id: 107, title: "A Quiet Place: Day One", thumb: "https://image.tmdb.org/t/p/w342/yrpPYKijwdMHyTGIOd1iK1h0Wo6.jpg", bg: "https://image.tmdb.org/t/p/w1280/Aq7xHHBMqSBqSJxF7qzBVYyCfqF.jpg", year: "2024", match: 89, genres: ["Horror","Drama","Sci-Fi"],       desc: "A woman named Samira finds herself trapped in New York City as it falls under attack from creatures that hunt by sound." },
    { id: 108, title: "Twisters",          thumb: "https://image.tmdb.org/t/p/w342/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg", bg: "https://image.tmdb.org/t/p/w1280/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",  year: "2024", match: 88, genres: ["Action","Thriller"],                 desc: "Kate Carter teams up with an outlaw storm chaser as they cross paths in the open plains of Oklahoma." },
];

const CONTINUE_WATCHING = [
    { id: 201, title: "Stranger Things S4", thumb: "https://image.tmdb.org/t/p/w780/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", bg: "https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg", year: "2022", match: 98, genres: ["Sci-Fi","Horror"], desc: "Eleven and the Hawkins gang face a terrifying new threat from the Upside Down.", progress: 65 },
    { id: 202, title: "Breaking Bad",       thumb: "https://image.tmdb.org/t/p/w780/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",  bg: "https://image.tmdb.org/t/p/w1280/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg", year: "2008", match: 99, genres: ["Crime","Drama","Thriller"],    desc: "A chemistry teacher diagnosed with inoperable lung cancer turns to making and selling methamphetamine.", progress: 32 },
    { id: 203, title: "Squid Game S2",     thumb: "https://image.tmdb.org/t/p/w780/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", bg: "https://image.tmdb.org/t/p/w1280/sYp5KFoUn7e3Ufgp5J5NFJDK3U1.jpg", year: "2024", match: 96, genres: ["Thriller","Drama"],           desc: "Seong Gi-hun returns to the deadly game after three years of failure to track down the Frontman.", progress: 80 },
    { id: 204, title: "The Crown S6",      thumb: "https://image.tmdb.org/t/p/w780/18VS9T37UJFsG1bFMmfJGRUEqxE.jpg", bg: "https://image.tmdb.org/t/p/w1280/6VB1aPB1yCYNDmUB7dRJ2gMQIkL.jpg", year: "2023", match: 91, genres: ["Drama","History"],            desc: "The final series of the award-winning drama follows the Royal Family in the late 1990s.", progress: 45 },
    { id: 205, title: "Wednesday",         thumb: "https://image.tmdb.org/t/p/w780/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", bg: "https://image.tmdb.org/t/p/w1280/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg", year: "2022", match: 93, genres: ["Mystery","Horror"],          desc: "Wednesday Addams investigates a murder mystery while making new friends at Nevermore Academy.", progress: 10 },
];

const TOP10 = [
    { id: 301, title: "Pushpa 2",           thumb: "https://image.tmdb.org/t/p/w342/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg", bg: "https://image.tmdb.org/t/p/w1280/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg", year: "2024", match: 94, genres: ["Action","Drama"] },
    { id: 302, title: "Devara",             thumb: "https://image.tmdb.org/t/p/w342/uIk6TFLPuFpGwBBIMiPu4BivSoL.jpg", bg: "https://image.tmdb.org/t/p/w1280/uIk6TFLPuFpGwBBIMiPu4BivSoL.jpg", year: "2024", match: 89, genres: ["Action","Drama"] },
    { id: 303, title: "Oppenheimer",        thumb: "https://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", bg: "https://image.tmdb.org/t/p/w1280/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",  year: "2023", match: 97, genres: ["Biography","Drama"] },
    { id: 304, title: "Wednesday",         thumb: "https://image.tmdb.org/t/p/w342/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", bg: "https://image.tmdb.org/t/p/w1280/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",  year: "2022", match: 93, genres: ["Mystery","Horror"] },
    { id: 305, title: "Squid Game S2",     thumb: "https://image.tmdb.org/t/p/w342/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", bg: "https://image.tmdb.org/t/p/w1280/sYp5KFoUn7e3Ufgp5J5NFJDK3U1.jpg", year: "2024", match: 96, genres: ["Thriller","Drama"] },
    { id: 306, title: "Dune: Part Two",    thumb: "https://image.tmdb.org/t/p/w342/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg", bg: "https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",  year: "2024", match: 96, genres: ["Sci-Fi","Adventure"] },
    { id: 307, title: "Deadpool & Wolverine", thumb: "https://image.tmdb.org/t/p/w342/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", bg: "https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg", year: "2024", match: 94, genres: ["Action","Superhero"] },
];

const RECOMMENDED = [TRENDING[2],TRENDING[5],TRENDING[0],TRENDING[7],TRENDING[3],TRENDING[1],TRENDING[6],TRENDING[4]];
const MY_LIST_DEFAULT = [TRENDING[0], TRENDING[2], CONTINUE_WATCHING[1], CONTINUE_WATCHING[3]];

/* ─── STATE ─── */
let myListIds = new Set(MY_LIST_DEFAULT.map(m => m.id));
let heroIndex = 0;
let heroTimer = null;
const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

/* ─── HELPERS ─── */
function createSVG(path, fill='none', stroke='currentColor') {
    return `<svg viewBox="0 0 24 24" fill="${fill}" stroke="${stroke}" stroke-width="2">${path}</svg>`;
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
async function updateHero(instant = false) {
    const movie = HERO_MOVIES[heroIndex];
    const heroBg       = document.getElementById('hero-bg');
    const heroContents = document.getElementById('hero-contents');
    const heroTitle    = document.getElementById('hero-title');
    const heroDesc     = document.getElementById('hero-desc');
    const heroYear     = document.getElementById('hero-year');
    const heroRatingLbl= document.getElementById('hero-rating-label');
    const heroMatch    = document.querySelector('.hero__match');

    if (!instant) {
        heroContents?.classList.remove('is-ready');
        await new Promise(r => setTimeout(r, 400));
    }

    if (heroBg)        heroBg.style.backgroundImage  = `url('${movie.bg}')`;
    if (heroTitle)     heroTitle.textContent           = movie.title;
    if (heroDesc)      heroDesc.textContent            = movie.desc;
    if (heroYear)      heroYear.textContent            = movie.year;
    if (heroRatingLbl) heroRatingLbl.textContent       = movie.rating;
    if (heroMatch)     heroMatch.textContent           = `${movie.match}% Match`;

    updateHeroDots();
    requestAnimationFrame(() => heroContents?.classList.add('is-ready'));
    heroIndex = (heroIndex + 1) % HERO_MOVIES.length;
}

function updateHeroDots() {
    const dotsContainer = document.getElementById('hero-dots');
    if (!dotsContainer) return;
    const activeIdx = (heroIndex - 1 + HERO_MOVIES.length) % HERO_MOVIES.length;
    dotsContainer.innerHTML = HERO_MOVIES.map((_, i) =>
        `<div class="hero__dot${i===activeIdx?' hero__dot--active':''}" data-idx="${i}"></div>`
    ).join('');
    dotsContainer.querySelectorAll('.hero__dot').forEach(dot => {
        dot.addEventListener('click', () => {
            heroIndex = parseInt(dot.dataset.idx);
            clearInterval(heroTimer);
            updateHero();
            startHeroTimer();
        });
    });
}

function startHeroTimer() {
    if (!prefersReducedMotion) heroTimer = setInterval(() => updateHero(), 8000);
}

updateHero(true);
startHeroTimer();

/* ─────────────────────────────────────────
   CARD FACTORY
───────────────────────────────────────── */
function makeCard(movie, opts = {}) {
    const { wide=false, top10=false, rank=0 } = opts;
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.movieId = movie.id;

    const inList = myListIds.has(movie.id);
    const listSVG = inList
        ? createSVG('<polyline points="20 6 9 17 4 12"/>')
        : createSVG('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>');

    const hoverPanel = `
        <div class="card__hover">
            <div class="card__actions">
                <button class="card__action-btn card__action-btn--play" title="Play">${createSVG('<polygon points="5 3 19 12 5 21 5 3"/>','currentColor')}</button>
                <button class="card__action-btn card__action-btn--mylist${inList?' in-list':''}" title="${inList?'Remove from List':'Add to List'}" data-id="${movie.id}">${listSVG}</button>
                <button class="card__action-btn card__action-btn--like" title="Like">${createSVG('<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>')}</button>
                <button class="card__action-btn card__action-btn--info" title="More Info" data-id="${movie.id}">${createSVG('<circle cx="12" cy="12" r="10"/><polyline points="8 12 12 16 16 12"/>')}</button>
            </div>
            <div class="card__name">${movie.title}</div>
            <div class="card__meta"><span class="card__match">${movie.match||90}% Match</span>${movie.year?`<span class="card__age">${movie.year}</span>`:''}</div>
            <div class="card__genres">${(movie.genres||[]).slice(0,3).join('<span class="card__genre-dot">•</span>')}</div>
        </div>`;

    if (top10) {
        card.innerHTML = `<div class="card__rank-num">${rank}</div><img class="card__thumb" src="${movie.thumb}" alt="${movie.title}" loading="lazy">${hoverPanel}`;
    } else if (wide) {
        card.innerHTML = `<img class="card__thumb" src="${movie.thumb}" alt="${movie.title}" loading="lazy">${movie.progress?`<div class="card__progress-bar"><div class="card__progress-fill" style="width:${movie.progress}%"></div></div>`:''} ${hoverPanel}`;
    } else {
        card.innerHTML = `<img class="card__thumb" src="${movie.thumb}" alt="${movie.title}" loading="lazy">${hoverPanel}`;
    }

    card.querySelectorAll('.card__action-btn--info').forEach(btn =>
        btn.addEventListener('click', e => { e.stopPropagation(); openModal(movie); })
    );
    card.querySelectorAll('.card__action-btn--mylist').forEach(btn =>
        btn.addEventListener('click', e => { e.stopPropagation(); toggleMyList(parseInt(btn.dataset.id)); })
    );
    return card;
}

/* ─────────────────────────────────────────
   POPULATE ROWS
───────────────────────────────────────── */
function populateRow(containerId, movies, opts = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    movies.forEach((movie, i) => container.appendChild(makeCard(movie, { ...opts, rank: i+1 })));
    enableHorizontalScroll(container);
}

populateRow('posters-trending',    TRENDING);
populateRow('posters-continue',    CONTINUE_WATCHING, { wide: true });
populateRow('posters-top10',       TOP10,             { top10: true });
populateRow('posters-recommended', RECOMMENDED);
populateRow('posters-mylist',      MY_LIST_DEFAULT);

/* ─────────────────────────────────────────
   MY LIST TOGGLE
───────────────────────────────────────── */
function toggleMyList(id) {
    myListIds.has(id) ? myListIds.delete(id) : myListIds.add(id);
    const allMovies  = [...TRENDING, ...CONTINUE_WATCHING, ...TOP10, ...RECOMMENDED];
    const seen       = new Set();
    const listMovies = allMovies.filter(m => { if (myListIds.has(m.id) && !seen.has(m.id)) { seen.add(m.id); return true; } return false; });
    populateRow('posters-mylist', listMovies);
    document.querySelectorAll('.card__action-btn--mylist').forEach(btn => {
        if (parseInt(btn.dataset.id) !== id) return;
        const isIn = myListIds.has(id);
        btn.classList.toggle('in-list', isIn);
        btn.title = isIn ? 'Remove from List' : 'Add to List';
        btn.innerHTML = isIn ? createSVG('<polyline points="20 6 9 17 4 12"/>') : createSVG('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>');
    });
}

/* ─────────────────────────────────────────
   HORIZONTAL SCROLL — FIXED
   Uses overflow: clip auto so Y is clipped
   (no scroll container) and X auto scrolls.
   This allows card hover panels to overflow
   downward without being clipped.
───────────────────────────────────────── */
function enableHorizontalScroll(container) {
    container.addEventListener('wheel', e => {
        if (container.scrollWidth <= container.clientWidth + 2) return;
        e.preventDefault();
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        container.scrollLeft += delta * 1.5;
    }, { passive: false });

    let isDown = false, startX = 0, startScroll = 0;
    container.addEventListener('pointerdown', e => {
        isDown = true; startX = e.clientX; startScroll = container.scrollLeft;
        container.setPointerCapture(e.pointerId);
        container.style.cursor = 'grabbing';
    });
    container.addEventListener('pointermove', e => {
        if (!isDown) return;
        container.scrollLeft = startScroll - (e.clientX - startX);
    });
    const endDrag = () => { isDown = false; container.style.cursor = ''; };
    container.addEventListener('pointerup',     endDrag);
    container.addEventListener('pointercancel', endDrag);
}

/* ─────────────────────────────────────────
   MODAL
───────────────────────────────────────── */
const modal    = document.getElementById('modal');
const backdrop = document.getElementById('modal-backdrop');

function openModal(movie) {
    const allMovies = [...TRENDING, ...CONTINUE_WATCHING, ...TOP10];
    const similar   = allMovies.filter(m => m.id !== movie.id).slice(0, 3);

    const heroBg = document.getElementById('modal-hero-bg');
    if (heroBg) heroBg.style.backgroundImage = `url('${movie.bg||movie.thumb}')`;

    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-meta').innerHTML    = `<span class="modal__match">${movie.match||95}% Match</span><span class="modal__season">${movie.year||'2024'}</span><span class="modal__hd">HD</span>`;
    document.getElementById('modal-desc').textContent  = movie.desc || 'No description available.';
    document.getElementById('modal-genres').innerHTML  = `<span style="color:#fff;font-weight:600">Genres:</span> ${(movie.genres||['Drama']).join(', ')}`;
    document.getElementById('modal-cast').innerHTML    = `<span style="color:#fff;font-weight:600">Cast:</span> Various Artists`;

    const addBtn = document.getElementById('modal-add');
    if (addBtn) {
        const inList = myListIds.has(movie.id);
        addBtn.classList.toggle('in-list', inList);
        addBtn.innerHTML = inList ? createSVG('<polyline points="20 6 9 17 4 12"/>') : createSVG('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>');
        addBtn.onclick = () => toggleMyList(movie.id);
    }

    const simContainer = document.getElementById('modal-similar');
    simContainer.innerHTML = '';
    similar.forEach(m => {
        const div = document.createElement('div');
        div.className = 'modal__similar-card';
        div.innerHTML = `<img src="${m.thumb}" alt="${m.title}" loading="lazy"><div class="modal__similar-info"><div class="modal__similar-meta"><span class="modal__similar-match">${m.match||90}% Match</span><span class="modal__similar-year">${m.year||'2024'}</span></div><div class="modal__similar-desc">${(m.desc||'').slice(0,90)}…</div></div>`;
        div.addEventListener('click', () => openModal(m));
        simContainer.appendChild(div);
    });

    backdrop?.classList.add('is-open');
    modal?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    backdrop?.classList.remove('is-open');
    modal?.classList.remove('is-open');
    document.body.style.overflow = '';
}
document.getElementById('modal-close')?.addEventListener('click', closeModal);
backdrop?.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ─────────────────────────────────────────
   NAVBAR SCROLL
───────────────────────────────────────── */
const navbar = document.getElementById('navbar');
let lastScrollY = 0, navTicking = false;

function handleNavScroll() {
    const y = window.scrollY;
    if (navbar) {
        navbar.classList.toggle('nav--solid',  y > 60);
        navbar.classList.toggle('nav--hidden', y > 300 && y > lastScrollY);
    }
    lastScrollY = y; navTicking = false;
}
window.addEventListener('scroll', () => {
    if (!navTicking) { requestAnimationFrame(handleNavScroll); navTicking = true; }
}, { passive: true });

/* ─────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    revealEls.forEach(el => io.observe(el));
} else {
    revealEls.forEach(el => el.classList.add('is-visible'));
}

/* ─────────────────────────────────────────
   POSTER 3D TILT
───────────────────────────────────────── */
if (!prefersReducedMotion) {
    document.addEventListener('pointermove', e => {
        const card = e.target.closest?.('.card');
        if (!card) return;
        requestAnimationFrame(() => {
            const rect  = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top)  / rect.height;
            const thumb = card.querySelector('.card__thumb');
            if (thumb) thumb.style.transform = `perspective(700px) rotateX(${(0.5-y)*8}deg) rotateY(${(x-0.5)*10}deg)`;
        });
    });
    document.addEventListener('pointerleave', e => {
        const card = e.target.closest?.('.card');
        if (!card) return;
        const thumb = card.querySelector('.card__thumb');
        if (thumb) thumb.style.transform = '';
    }, true);
}