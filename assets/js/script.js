// ===== MENU MOBILE =====
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Fecha o menu ao clicar em um link
    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => nav.classList.remove('open'));
    });
}

// ===== TEMA CLARO / ESCURO =====
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const BODY_CLASS_LIGHT = 'light';
const THEME_STORAGE_KEY = 'devsw-theme';

// Aplica tema salvo
const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
if (savedTheme === 'light') {
    document.body.classList.add(BODY_CLASS_LIGHT);
    if (themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Alternância de tema
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isLight = document.body.classList.toggle(BODY_CLASS_LIGHT);
        localStorage.setItem(THEME_STORAGE_KEY, isLight ? 'light' : 'dark');

        if (themeIcon) {
            if (isLight) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
    });
}

// ===== FAQ (ACORDEÃO) =====
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');

    if (!question || !answer) return;

    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Fecha todos
        faqItems.forEach((i) => {
            i.classList.remove('active');
            const ans = i.querySelector('.faq__answer');
            if (ans) ans.style.maxHeight = null;
        });

        // Abre o clicado se estava fechado
        if (!isOpen) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// Expande a primeira FAQ por padrão (opcional)
if (faqItems[0]) {
    const firstAnswer = faqItems[0].querySelector('.faq__answer');
    faqItems[0].classList.add('active');
    if (firstAnswer) {
        firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
    }
}
