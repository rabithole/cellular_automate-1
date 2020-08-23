import React, { useEffect } from 'react';

function Canvas(props) {

	useEffect(() => {
		draw()
	})

	function draw() {

		const canvas = document.getElementById('canvas');
		const canText = canvas.getContext('2d');
		// canText.font = '20px Arial';
		// canText.fillText('Cellular Automata', 5, 0)
		
		// canvas.height = window.innerWidth;
		// canvas.width = window.innerHeight;

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
			
			let x = 100; // horizontal coordinate in pixels
			let y = 75; // vertical coordinate in pixels
			let velocity = 2;
			let radius = 20
			function animate() {
				requestAnimationFrame(animate);
				instance.clearRect(0, 0, canvas.width, canvas.height);
				
				// Text in the canvas. 
				instance.fillStyle = 'black';
				instance.font = '20px Arial';
				instance.fillText('Cellular Automata', 10, 20)

				// Animation of the circle. 
				instance.beginPath();
				instance.arc(x, y, radius, 0, Math.PI * 2, false);
				instance.strokeStyle = 'green';
				instance.stroke();

				if (x + radius > canvas.width || x - radius < 0) {
					velocity = -velocity;
				}
				x += velocity;
			}

			animate()
			

			console.log(canvas.getContext)
		// }
    }

	return (
	    
	   <canvas id="canvas"></canvas>
	);
}

export default Canvas;