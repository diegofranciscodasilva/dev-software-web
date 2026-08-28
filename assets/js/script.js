// ===== MENU MOBILE =====
function atualizarAnoFooter() {
    const footerYear = document.getElementById('footer-year')

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear()
    }
}

atualizarAnoFooter()

const animatedSections = document.querySelectorAll('.challenges__block, .faq__item, .commitment')

if ('IntersectionObserver' in window) {
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return

            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
        })
    }, { threshold: 0.15 })

    animatedSections.forEach((element) => animationObserver.observe(element))
} else {
    animatedSections.forEach((element) => element.classList.add('is-visible'))
}

const menuToggle = document.getElementById('menu-toggle')
const nav = document.getElementById('nav')

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open')
        menuToggle.setAttribute('aria-expanded', String(isOpen))
        menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu')
    })

    // Fecha o menu ao clicar em um link
    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('open')
            menuToggle.setAttribute('aria-expanded', 'false')
            menuToggle.setAttribute('aria-label', 'Abrir menu')
        })
    })
}

// ===== FAQ (ACORDEÃO) =====
const faqItems = document.querySelectorAll('.faq__item')

function atualizarAlturaResposta(item) {
    const answer = item.querySelector('.faq__answer')

    if (answer && item.classList.contains('active')) {
        answer.style.maxHeight = 'none'
        answer.style.maxHeight = answer.scrollHeight + 'px'
    }
}

faqItems.forEach((item) => {
    const question = item.querySelector('.faq__question')
    const answer = item.querySelector('.faq__answer')

    if (!question || !answer) return

    question.setAttribute('aria-expanded', 'false')
    answer.setAttribute('aria-hidden', 'true')

    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Fecha todos
        faqItems.forEach((i) => {
            i.classList.remove('active')
            const button = i.querySelector('.faq__question')
            if (button) button.setAttribute('aria-expanded', 'false')
            const ans = i.querySelector('.faq__answer')
            if (ans) {
                ans.style.maxHeight = null
                ans.setAttribute('aria-hidden', 'true')
            }
        })

        // Abre o clicado se estava fechado
        if (!isOpen) {
            item.classList.add('active')
            question.setAttribute('aria-expanded', 'true')
            answer.setAttribute('aria-hidden', 'false')
            atualizarAlturaResposta(item)
        }
    })
})

// Expande a primeira FAQ por padrão (opcional)
if (faqItems[0]) {
    faqItems[0].classList.add('active')
    faqItems[0].querySelector('.faq__question')?.setAttribute('aria-expanded', 'true')
    faqItems[0].querySelector('.faq__answer')?.setAttribute('aria-hidden', 'false')
    atualizarAlturaResposta(faqItems[0])
}

window.addEventListener('resize', () => {
    window.requestAnimationFrame(() => {
        faqItems.forEach(atualizarAlturaResposta)
    })
})

// ===== BOTAO VOLTAR AO TOPO =====
const scrollUp = document.getElementById('scroll-up')

if (scrollUp) {
    const updateScrollButton = () => {
        scrollUp.classList.toggle('visible', window.scrollY > 360)
    }

    window.addEventListener('scroll', updateScrollButton, { passive: true })
    updateScrollButton()

    scrollUp.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
}
