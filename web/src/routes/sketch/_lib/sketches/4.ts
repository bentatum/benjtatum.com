import type p5 from 'p5';

export const title = 'Circle packing experiment #1';
export const description = 'Based on a tutorial at generativeartistry.com';

const palette = [
	{
		name: 'Flickr Pink',
		hex: 'f72585',
		rgb: [247, 37, 133],
		cmyk: [0, 85, 46, 3],
		hsb: [333, 85, 97],
		hsl: [333, 93, 56],
		lab: [55, 79, 1]
	},
	{
		name: 'Byzantine',
		hex: 'b5179e',
		rgb: [181, 23, 158],
		cmyk: [0, 87, 13, 29],
		hsb: [309, 87, 71],
		hsl: [309, 77, 40],
		lab: [43, 70, -34]
	},
	{
		name: 'Purple',
		hex: '7209b7',
		rgb: [114, 9, 183],
		cmyk: [38, 95, 0, 28],
		hsb: [276, 95, 72],
		hsl: [276, 91, 38],
		lab: [32, 66, -66]
	},
	{
		name: 'Purple',
		hex: '560bad',
		rgb: [86, 11, 173],
		cmyk: [50, 94, 0, 32],
		hsb: [268, 94, 68],
		hsl: [268, 88, 36],
		lab: [27, 60, -68]
	},
	{
		name: 'Trypan Blue',
		hex: '480ca8',
		rgb: [72, 12, 168],
		cmyk: [57, 93, 0, 34],
		hsb: [263, 93, 66],
		hsl: [263, 87, 35],
		lab: [25, 58, -69]
	},
	{
		name: 'Trypan Blue',
		hex: '3a0ca3',
		rgb: [58, 12, 163],
		cmyk: [64, 93, 0, 36],
		hsb: [258, 93, 64],
		hsl: [258, 86, 34],
		lab: [23, 55, -70]
	},
	{
		name: 'Persian Blue',
		hex: '3f37c9',
		rgb: [63, 55, 201],
		cmyk: [69, 73, 0, 21],
		hsb: [243, 73, 79],
		hsl: [243, 57, 50],
		lab: [34, 48, -74]
	},
	{
		name: 'Ultramarine Blue',
		hex: '4361ee',
		rgb: [67, 97, 238],
		cmyk: [72, 59, 0, 7],
		hsb: [229, 72, 93],
		hsl: [229, 83, 60],
		lab: [47, 36, -74]
	},
	{
		name: 'Dodger Blue',
		hex: '4895ef',
		rgb: [72, 149, 239],
		cmyk: [70, 38, 0, 6],
		hsb: [212, 70, 94],
		hsl: [212, 84, 61],
		lab: [61, 5, -52]
	},
	{
		name: 'Vivid Sky Blue',
		hex: '4cc9f0',
		rgb: [76, 201, 240],
		cmyk: [68, 16, 0, 6],
		hsb: [194, 68, 94],
		hsl: [194, 85, 62],
		lab: [76, -22, -29]
	}
];

const minRadius = 1;
const maxRadius = 200;
const createCircleAttempts = 9999;
const totalCircles = 9999;
const spacing = 1;

export const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(400, 400);
		p.noStroke();
		p.noLoop();
	};

	p.draw = () => {
		const circles = [];

		p.background(255);

		const doesCircleHaveACollision = (c1) => {
			let c2, d;

			for (let i = 0; i < circles.length; i++) {
				c2 = circles[i];
				d = p.dist(c1.x, c1.y, c2.x, c2.y);
				if (d < c1.d + c2.d + spacing) {
					return true;
				}
			}

			// if (c1.x + c1.d >= p.width || c1.x - c1.d <= 0) {
			// 	return true;
			// }

			// if (c1.y + c1.d >= p.width || c1.y - c1.d <= 0) {
			// 	return true;
			// }

			return false;
		};

		for (let i = 0; i < totalCircles; i++) {
			let n;
			let safeToDraw = false;

			for (let tries = 0; tries < createCircleAttempts; tries++) {
				n = {
					x: p.random(1, p.width),
					y: p.random(1, p.height),
					d: minRadius
				};
				if (doesCircleHaveACollision(n)) {
					continue;
				} else {
					safeToDraw = true;
					break;
				}
			}

			if (!safeToDraw) return;

			for (let d = 0; d < maxRadius; d++) {
				n.d = d;
				if (doesCircleHaveACollision(n)) {
					n.d--;
					break;
				}
			}
			circles.push(n);
			const { rgb } = palette[Math.floor(p.random(0, palette.length - 1))];
			p.fill(rgb[0], rgb[1], rgb[2], p.random(0, 255));
			p.ellipse(n.x, n.y, n.d * 2);
		}

		console.log(circles);
	};
};
