import type p5 from 'p5';
import { randomColorVNumber } from '../utils/number-utils';

export const title = 'Randomness';
export const description = 'An experiment with rgba randomness.';

export const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(400, 400);
		p.noStroke();
		p.noLoop();
	};

	p.draw = () => {
		p.background(0);
		const s = p.height / 66;
		for (let y = 0; y < p.height; y++) {
			for (let x = 0; x < p.width; x++) {
				p.fill(
					randomColorVNumber(),
					randomColorVNumber(),
					randomColorVNumber(),
					randomColorVNumber()
				);
				p.square(x * s, y * s, s);
			}
		}
		// p.saveCanvas();
	};
};
