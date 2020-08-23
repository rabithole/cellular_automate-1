import React, { useEffect } from 'react';

function Canvas(props) {

	useEffect(() => {
		draw()
	})

	function draw() {
		function Circle(x, y, horVelocity, vertVelocity, radius) {
		this.x = x;
		this.y = y;
		this.horVelocity = horVelocity;
		this.vertVelocity = vertVelocity;
		this.radius = radius;

		this.draw = function() {
			// Text in the canvas. 
			instance.fillStyle = 'black';
			instance.font = '20px Arial';
			instance.fillText('Cellular Automata', 10, 20)
			
			instance.beginPath();
			instance.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			instance.strokeStyle = 'green';
			instance.stroke();
		}

		this.update = function() {
			if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
					this.horVelocity = -this.horVelocity;
				}

				if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
					this.vertVelocity = -this.vertVelocity;
				}
				this.x += this.horVelocity;
				this.y += this.vertVelocity;

				this.draw();
		}
	}

	let circle = new Circle(100, 100, 7, 10, 20);

		const canvas = document.getElementById('canvas');
		const canText = canvas.getContext('2d');
		
		// Creates the instance of a 2d context. 
			const instance = canvas.getContext('2d');

	// Animation of a circle in the canvas. 
			let x = Math.random() * canvas.width; // horizontal coordinate in pixels
			let y = Math.random() * canvas.height; // vertical coordinate in pixels
			let horVelocity = (Math.random() - 0.5) * 7;
			let vertVelocity = (Math.random() - 0.5) * 20;
			// let velocity = Math.random*10 < canvas.width && canvas.height;
			let radius = 20
			function animate() {
				requestAnimationFrame(animate);
				instance.clearRect(0, 0, canvas.width, canvas.height); // Clears previously animated objects for animation. 
				
				circle.update()
				Text in the canvas. 
				instance.fillStyle = 'black';
				instance.font = '20px Arial';
				instance.fillText('Cellular Automata', 10, 20)

				// Animation of the circle. 
				instance.beginPath();
				instance.arc(x, y, radius, 0, Math.PI * 2, false);
				instance.strokeStyle = 'green';
				instance.stroke();

				if(x + radius > canvas.width || x - radius < 0) {
					horVelocity = -horVelocity;
				}

				if(y + radius > canvas.height || y - radius < 0) {
					vertVelocity = -vertVelocity;
				}
				x += horVelocity;
				y += vertVelocity;
			}

			// animate()			
    }

	return (
	    
	   <canvas id="canvas"></canvas>
	);
}

export default Canvas;


// Canvas square creation. 
			// let square = 50;

			// // Square
			// instance.fillStyle = 'rgb(200, 0, 0)';
			// instance.fillRect(100, 100, 50, square); // Relative to the size of the canvas. 

			// // ANother square
			// instance.fillStyle = 'rgba(0, 0, 200, 0.5)';
			// instance.fillRect(30, 30, 50, 50);

			// // Line
			// instance.beginPath();
			// instance.moveTo(50, 100);
			// instance.lineTo(300, 100);
			// instance.lineTo(401, 201);
			// instance.strokeStyle = 'pink';
			// instance.stroke();