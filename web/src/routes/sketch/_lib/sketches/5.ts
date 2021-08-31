import type p5 from 'p5';

export const title = 'Circle packing experiment #1';
export const description = 'Based on a tutorial at generativeartistry.com';

const minRadius = 2;
const maxRadius = 20;
const createCircleAttempts = 100;
const totalCircles = 9999;
const spacing = 10;

const palette = [
	{
		name: 'Navy Blue',
		hex: '03045e',
		rgb: [3, 4, 94],
		cmyk: [97, 96, 0, 63],
		hsb: [239, 97, 37],
		hsl: [239, 94, 19],
		lab: [8, 36, -50]
	},
	{
		name: 'Dark Cornflower Blue',
		hex: '023e8a',
		rgb: [2, 62, 138],
		cmyk: [99, 55, 0, 46],
		hsb: [214, 99, 54],
		hsl: [214, 97, 27],
		lab: [28, 15, -47]
	},
	{
		name: 'Star Command Blue',
		hex: '0077b6',
		rgb: [0, 119, 182],
		cmyk: [100, 35, 0, 29],
		hsb: [201, 100, 71],
		hsl: [201, 100, 36],
		lab: [48, -4, -41]
	},
	{
		name: 'Blue Green',
		hex: '0096c7',
		rgb: [0, 150, 199],
		cmyk: [100, 25, 0, 22],
		hsb: [195, 100, 78],
		hsl: [195, 100, 39],
		lab: [58, -16, -35]
	},
	{
		name: 'Cerulean Crayola',
		hex: '00b4d8',
		rgb: [0, 180, 216],
		cmyk: [100, 17, 0, 15],
		hsb: [190, 100, 85],
		hsl: [190, 100, 42],
		lab: [68, -25, -29]
	},
	{
		name: 'Sky Blue Crayola',
		hex: '48cae4',
		rgb: [72, 202, 228],
		cmyk: [68, 11, 0, 11],
		hsb: [190, 68, 89],
		hsl: [190, 74, 59],
		lab: [76, -27, -23]
	},
	{
		name: 'Sky Blue Crayola',
		hex: '90e0ef',
		rgb: [144, 224, 239],
		cmyk: [40, 6, 0, 6],
		hsb: [189, 40, 94],
		hsl: [189, 75, 75],
		lab: [85, -21, -15]
	},
	{
		name: 'Blizzard Blue',
		hex: 'ade8f4',
		rgb: [173, 232, 244],
		cmyk: [29, 5, 0, 4],
		hsb: [190, 29, 96],
		hsl: [190, 76, 82],
		lab: [89, -16, -12]
	},
	{
		name: 'Powder Blue',
		hex: 'caf0f8',
		rgb: [202, 240, 248],
		cmyk: [19, 3, 0, 3],
		hsb: [190, 19, 97],
		hsl: [190, 77, 88],
		lab: [92, -11, -8]
	}
];

export const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(400, 400);
		p.noStroke();
		p.noLoop();
	};

	p.draw = () => {
		const circles = [];

		p.background(0);

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
			p.fill(rgb[0], rgb[1], rgb[2], p.random(100, 200));
			p.ellipse(n.x, n.y, n.d * 2);
		}

		console.log(circles);
	};
};
