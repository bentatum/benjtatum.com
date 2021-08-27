import type p5 from 'p5';

export const polygon = (p: p5, radius: number, npoints: number, fill: p5.Color) => {
	let angle = p.TWO_PI / npoints;
	p.beginShape();
	for (let a = 0; a < p.TWO_PI; a += angle) {
		let sx = p.cos(a) * radius;
		let sy = p.sin(a) * radius;
		p.vertex(sx, sy);
	}
	p.fill(fill);
	p.endShape(p.CLOSE);
};

export default polygon;
