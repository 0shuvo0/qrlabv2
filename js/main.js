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
        baseWidth: 250,
        wedge: true
    })

    const items = blogsContainer.querySelectorAll('.blog-card')
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('active')
            const t = item.style.transform
            item.style.transform = t ? t + ' scale(1.04)' : 'scale(1.04)'
        })
        item.addEventListener('mouseleave', () => {
            const t = item.style.transform
            item.style.transform = t ? t.replace('scale(1.04)', '') : ''
        })
    })
}


navbarToggleBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active')
})
mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
})
