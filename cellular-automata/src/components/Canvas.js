import React, { useEffect } from 'react';

function Canvas(props) {

	useEffect(() => {
		draw()
	})

	function draw() {

		const canvas = document.getElementById('canvas');
		
		canvas.height = window.innerWidth;
		canvas.width = window.innerHeight;

		// if (canvas.getContext) {
			const instance = canvas.getContext('2d');
			let square = 50;

			// Square
			instance.fillStyle = 'rgb(200, 0, 0)';
			instance.fillRect(100, 100, 50, square); // Relative to the size of the canvas. 

			// ANother square
			instance.fillStyle = 'rgba(0, 0, 200, 0.5)';
			instance.fillRect(30, 30, 50, 50);

			// Line
			instance.beginPath();
			instance.moveTo(50, 100);
			instance.lineTo(300, 100);
			instance.lineTo(401, 201);
			instance.strokeStyle = 'pink';
			instance.stroke();

			// Arc / Circle
			// for (var i = 0; i < 10; i++) {
			// 	let x = Math.random() * window.innerWidth;
			// 	let y = Math.random() * window.innerHeight;
			// 	instance.beginPath(); // Without this, a line will be drawn from the last object to the cirlce. Test it by commenting it out. 
			// 	instance.arc(x, y, 100, 0, Math.PI * 2, false);
			// 	instance.stroke()
			// }
			
			let x = 200;
			let velocity = 5;
			let radius = 30
			function animate() {
				requestAnimationFrame(animate);
				instance.clearRect(0, 0, window.innerWidth, window.innerHeight);

				instance.beginPath();
				instance.arc(x, 200, radius, 0, Math.PI * 2, false);
				instance.strokeStyle = 'green';
				instance.stroke();

				if (x + radius > window.innerWidth || x - radius < 0) {
					velocity = -velocity;
				}
				x += velocity;
			}

			// animate()
			

			console.log(canvas.getContext)
		// }
    }

	return (
	    
	   <canvas id="canvas"></canvas>
	);
}

export default Canvas;