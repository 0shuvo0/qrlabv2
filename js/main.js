const $ = (selector, parent = document) => parent.querySelector(selector)

const navbarToggleBtn = $('.navbar-btns .toggle-btn')
const mobileMenu = $('.mobile-menu')
const mobileMenuCloseBtn = $('.mobile-menu .close-btn')

const blogsContainer = $('.blogs-container')
if(blogsContainer){
    new MiniMasonry({
        container: blogsContainer,
        gutter: 32,
        ultimateGutter: 32,
        surroundingGutter: false,
        baseWidth: 300,
        wedge: true
    })
}


navbarToggleBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active')
})
mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
})
