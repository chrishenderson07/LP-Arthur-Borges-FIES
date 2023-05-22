/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-background': "url('./src/assets/Banner-topo-1.webp')",
				'hero-mobile-background': "url('./src/assets/banner-mobile-1.webp')",
				'second-background': "url('./src/assets/segundo-banner.webp')",
				'second-main-background': "url('./src/assets/banner-2-menor.webp')",
				'second-mobile-main-background': "url('./src/assets/mobile2-1.webp')",
			},

			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},

			colors: {
				green: '#058C0A',
				greenHover: '#07b00d',
				whatsappGreen: '#25d366',
				brandRed: '#DB0D15',
				brandBlack: '#101010',
				brandBlackBlue: '#001928',
			},
		},
	},
	plugins: [],
}
