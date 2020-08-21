import React, { useEffect } from 'react';

function Canvas(props) {

	useEffect(() => {
		draw()
	})

	function draw() {
		console.log('draw')

		const canvas = document.getElementById('canvas');
		let ch = 700;
		let cw = 700;
		canvas.height = ch;
		canvas.width = cw;

		// if (canvas.getContext) {
			const ctx = canvas.getContext('2d');

			ctx.fillStyle = 'rgb(200, 0, 0)';
			ctx.fillRect(100, 100, 50, 50); // Relative to the size of the canvas. 

			ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
			ctx.fillRect(30, 30, 50, 50);
		// }
    }

	return (
	    
	   <canvas id="canvas"></canvas>
	);
}

export default Canvas;