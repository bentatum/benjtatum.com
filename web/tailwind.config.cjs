module.exports = {
	purge: ['./src/**/*.svelte'],
	mode: 'jit',
	darkMode: 'media',
	theme: {
		extend: {
			fontFamily: {
				display: ['"Single Day"', 'cursive']
			},
			fontSize: {
				xs: '1.2rem',
				sm: '1.3rem',
				base: '1.4rem',
				lg: '1.8rem',
				xl: '2rem',
				'2xl': '4rem',
				'3xl': '7rem',
				'4xl': '9rem',
				'5xl': '13rem',
				'6xl': '17rem',
				'7xl': '23rem'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
