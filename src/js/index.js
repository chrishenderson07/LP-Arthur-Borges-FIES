// Accordion Starts
document.querySelectorAll('.title').forEach(function (el) {
	el.addEventListener('click', function (evt) {
		let chevron = el.lastElementChild.classList,
			body = el.nextElementSibling

		chevron.contains('rotate-180')
			? chevron.remove('rotate-180')
			: chevron.add('rotate-180')

		if (body.classList.contains('h-0')) {
			el.classList.add('text-brandRed')
			body.style.height = Number(body.scrollHeight) + 'px'
			body.firstElementChild.style.paddingTop = '1rem'
			body.classList.remove('h-0', 'invisible')
		} else {
			body.style.height = '0'
			body.firstElementChild.style.paddingTop = '2rem'
			body.classList.add('h-0', 'invisible')
			el.classList.remove('text-brandRed')
		}
	})
})

// Testimonial Starts

var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},
	spaceBetween: 30,
	autoplay: {
		delay: 5000,
	},
	loop: true,
	pauseOnMouseEnter: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})

// Animations with ScrollReveal
window.sr = ScrollReveal()

const defaultAnimationUp = {
	distance: '50px',
	origin: 'bottom',
	opacity: 0,
	duration: 1500,
	delay: 150,
	reset: true,
}

sr.reveal('.scroll-reveal-default', defaultAnimationUp)

const headlineElements = [...document.querySelectorAll('.scroll-reveal-left')]
const casesElements = [...document.querySelectorAll('.scroll-reveal-up')]
const helpElements = [...document.querySelectorAll('.scroll-reveal-new-left')]
const iconsElements = [...document.querySelectorAll('.scroll-reveal-icons')]
const accordionElements = [
	...document.querySelectorAll('.scroll-reveal-accordion-up'),
]
const boxElements = [...document.querySelectorAll('.boxElements')]

function cascadeAnimation(elementos, atrasoPadrao) {
	elementos.forEach((elemento, indice) => {
		ScrollReveal().reveal(elemento, {
			delay: atrasoPadrao * indice, // Atraso multiplicado pelo índice do elemento
			distance: '50px', // Distância de deslocamento do elemento
			easing: 'ease-out', // Tipo de animação
			duration: 700,
			origin: 'left', // Origem da animação
			reset: true, // Resetar animações quando os elementos estiverem fora da visualização
		})
	})
}
cascadeAnimation(headlineElements, 150)
cascadeAnimation(helpElements, 150)

function cascadeAnimationUp(elements, defaultDelay) {
	elements.forEach((element, index) => {
		sr.reveal(element, {
			delay: defaultDelay * index,
			distance: '100px',
			easing: 'ease-out',
			duration: 1000,
			origin: 'bottom',
			reset: true,
		})
	})
}

cascadeAnimationUp(boxElements, 200)
cascadeAnimationUp(casesElements, 200)
cascadeAnimationUp(iconsElements, 200)
cascadeAnimationUp(accordionElements, 200)
