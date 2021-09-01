import type p5 from 'p5';

export const title = 'Circle packing experiment #1';
export const description = 'Based on a tutorial at generativeartistry.com';

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
	const step = 20;

	const drawLines = (x, y, w, h, positions) => {
		p.push();
		p.translate(x + w / 2, y + h / 2);
		p.rotate(p.random(-1, 1));
		p.translate(-w / 2, -h / 2);
		for (let i = 0; i <= positions.length; i++) {
			const x2 = positions[i] * w;
			p.line(x2, 0, x2, h);
		}
		p.pop();
	};

	p.setup = () => {
		p.createCanvas(400, 400);
		p.strokeCap(p.ROUND);
		p.strokeWeight(4);
		p.stroke(0);
		p.background(255);
		p.noLoop();
	};

	p.draw = () => {
		const size = p.width;
		const aThirdSize = size / 3;
		for (let y = step; y < size - step; y += step) {
			for (let x = step; x < size - step; x += step) {
				if (y < aThirdSize) {
					drawLines(x, y, step, step, [0.5]);
				} else if (y < aThirdSize * 2) {
					drawLines(x, y, step, step, [0.2, 0.8]);
				} else {
					drawLines(x, y, step, step, [0.1, 0.5, 0.9]);
				}
			}
		}
	};
};
