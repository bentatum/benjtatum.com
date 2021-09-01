import type p5 from 'p5';
import { randomColorVNumber, randomNumber } from '../utils/number-utils';
// import { randomNumber } from '../utils/number-utils';

export const title = 'Kids blanket';
export const description =
	'I used to have a blanket set with primary colors and squares. I used circles here, but this reminds me of that.';

const palette = [
	{
		name: 'Sizzling Red',
		hex: 'ff595e',
		rgb: [255, 89, 94],
		cmyk: [0, 65, 63, 0],
		hsb: [358, 65, 100],
		hsl: [358, 100, 67],
		lab: [61, 63, 32]
	},
	{
		name: 'Sunglow',
		hex: 'ffca3a',
		rgb: [255, 202, 58],
		cmyk: [0, 21, 77, 0],
		hsb: [44, 77, 100],
		hsl: [44, 100, 61],
		lab: [84, 6, 74]
	},
	{
		name: 'Yellow Green',
		hex: '8ac926',
		rgb: [138, 201, 38],
		cmyk: [31, 0, 81, 21],
		hsb: [83, 81, 79],
		hsl: [83, 68, 47],
		lab: [74, -43, 68]
	},
	{
		name: 'Green Blue Crayola',
		hex: '1982c4',
		rgb: [25, 130, 196],
		cmyk: [87, 34, 0, 23],
		hsb: [203, 87, 77],
		hsl: [203, 77, 43],
		lab: [52, -4, -42]
	},
	{
		name: 'Royal Purple',
		hex: '6a4c93',
		rgb: [106, 76, 147],
		cmyk: [28, 48, 0, 42],
		hsb: [265, 48, 58],
		hsl: [265, 32, 44],
		lab: [38, 28, -35]
	}
];

export const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(400, 400);
		p.noStroke();
		p.noLoop();
	};

	p.draw = () => {
		p.background(255);
		let percent, alpha;
		for (let x = p.height; x > 0; x--) {
			percent = x / p.width;
			alpha = Math.max(percent * 30, 100);
			const { rgb } = palette[randomNumber(palette.length - 1)];
			p.stroke(255, Math.max(alpha, 50));
			p.strokeWeight(randomNumber(25));
			p.fill(rgb[0], rgb[1], rgb[2]);
			p.circle(
				p.width / randomNumber(10),
				p.height / randomNumber(10),
				percent * randomNumber(7800)
			);
		}
	};
};
