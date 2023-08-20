const $ = (selector, parent = document) => parent.querySelector(selector)

const navbarToggleBtn = $('.navbar-btns .toggle-btn')
const mobileMenu = $('.mobile-menu')
const mobileMenuCloseBtn = $('.mobile-menu .close-btn')

const masonry = new MiniMasonry({
    container: '.blogs-container',
    gutter: 32,
    ultimateGutter: 32,
    surroundingGutter: false,
    baseWidth: 300,
    wedge: true
})


navbarToggleBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active')
})
mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
})
