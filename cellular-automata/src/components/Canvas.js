import React, { useEffect } from 'react';

function Canvas(props) {

	useEffect(() => {
		draw()
	})

	function draw() {
		console.log('draw')

		const canvas = document.getElementById('canvas');
		console.log(canvas)
		if (canvas.getContext) {
			const ctx = canvas.getContext('2d');

			ctx.fillStyle = 'rgb(200, 0, 0)';
			ctx.fillRect(10, 10, 50, 50);

			ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
			ctx.fillRect(30, 30, 50, 50);
		}
    }

	return (
	    
	   <canvas id="canvas"></canvas>
	);
}

export default Canvas;