// ========== CURRENT DATE & TIME ==========
function updateDateTime() {
    const now = new Date();
    const display = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const el = document.getElementById('current-datetime');
    if (el) el.textContent = display;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// ========== WELCOME MESSAGE (Time-Based) ==========
window.addEventListener('load', () => {
    const hour = new Date().getHours();
    let welcome = '';
    if (hour < 12) welcome = 'Good Morning! ☀️';
    else if (hour < 18) welcome = 'Good Afternoon! 🌤️';
    else welcome = 'Good Evening! 🌙';
    
    const greetingEl = document.getElementById('greeting');
    if (greetingEl) {
        greetingEl.textContent = `${welcome} Welcome to my digital portfolio!`;
    }
});

// ========== READ MORE / SHOW HIDE ==========
const readMoreBtn = document.getElementById('read-more-btn');
const extraInfo = document.getElementById('extra-info');
if (readMoreBtn && extraInfo) {
    readMoreBtn.addEventListener('click', () => {
        extraInfo.classList.toggle('hidden');
        readMoreBtn.textContent = extraInfo.classList.contains('hidden')
            ? 'Read More'
            : 'Read Less';
    });
}

// ========== DARK / LIGHT MODE ==========
const themeToggle = document.getElementById('theme-toggle');
themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode')
        ? '☀️ Toggle Light Mode'
        : '🌙 Toggle Dark Mode';
});

// ========== ALERT ON PROJECT CLICK ==========
function showAlert() {
    alert('Opening project details... 📂');
}

// ========== BACK-TO-TOP BUTTON ==========
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Round Slider Music Control =====
const musicSwitch = document.getElementById('musicSwitch');
const bgMusic = document.getElementById('bgMusic');

musicSwitch.addEventListener('change', function() {
    if (this.checked) {
        bgMusic.play().catch(function(error) {
            console.log("Play failed:", error);
            alert("Click again to play music! 🎵");
        });
    } else {
        bgMusic.pause();
    }
});