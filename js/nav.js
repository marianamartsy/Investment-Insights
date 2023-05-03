const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const navMobileLinks = document.querySelectorAll('.nav-mobile .nav__link')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
}

const hideNav = () => {
	navMobile.classList.remove('nav-mobile--active')
}

navBtn.addEventListener('click', handleNav)
navMobileLinks.forEach(link => {
	link.addEventListener('click', hideNav)
})
