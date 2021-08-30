import type p5 from 'p5';
import { randomColorVNumber, randomNumber } from '../utils/number-utils';
// import { randomNumber } from '../utils/number-utils';

export const title = 'A light beam';
export const description = 'An experiment with rgba randomness.';

export const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(400, 400);
		p.noStroke();
		p.noLoop();
	};

	p.draw = () => {
		p.background(255);
		let percent, alpha;
		for (let x = p.width; x > 0; x--) {
			percent = x / p.width;
			alpha = Math.max(percent * 30, 50);
			p.fill(255, randomColorVNumber(), randomColorVNumber(), alpha);
			p.circle(p.width / 2, x + x, percent * randomNumber(500));
		}
	};
};
