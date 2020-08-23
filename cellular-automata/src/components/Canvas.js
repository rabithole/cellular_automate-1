import React, { useEffect } from 'react';

function Canvas(props) {

	useEffect(() => {
		draw();
	})

	function draw() {
		const canvas = document.querySelector('canvas');
		const ctx = canvas.getContext('2d');

		const resolution = 10;
		canvas.width = 800;
		canvas.height = 800;
		const cols = canvas.width / resolution;
		const rows = canvas.height / resolution; 

		function buildGrid() {
			return new Array(cols).fill(null)
				.map(() => new Array(rows).fill(null)
					.map(() => Math.floor(Math.random() * 2)));
		}

		// Screen buffer per MVP. 
		let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		let screenBuffer = imageData.data;

		let grid = buildGrid();

		requestAnimationFrame(update);

		function update() {
			grid = nextGen(grid);
			requestAnimationFrame(update);
		}

		function nextGen(grid) {
			const nextGen = grid.map(arr => [...arr]);

			for(let col = 0; col < grid.length; col++) {
					for(let row = 0; row < grid[col].length; row++) {
						const cell = grid[col][row];
						const numNeighbors = 0;
						for(let i = -1; i < 2; i++) {
							for(let j = -1; j < 2; j++) {
								if(i === 0 && j === 0) {
									continue;
								}
								
					// Stopped at 13:11
							const currentNeighbor = grid[col + i][row + j];
							numNeighbors += currentNeighbor;
						}
					}
					// rules
					if(cell === 1 && numNeighbors < 2) {
						nextGen[col][row] = 0;
					} else if (cell === 1 && numNeighbors > 3) {
						nextGen[col][row] = 0;
					} else if (cell === 0 && numNeighbors === 3) {
						nextGen[col][row] = 1;
					}

				}
			}
			return nextGen;
		}

		// nextGen(grid)

		for(let col = 0; col < grid.length; col++) {
			for(let row = 0; row < grid[col].length; row++) {
				const cell = grid[col][row];

				ctx.beginPath();
				ctx.rect(col * resolution, row * resolution, resolution, resolution);
				ctx.fillStyle = cell ? 'black' : 'white';
				ctx.fill();
				ctx.stroke();
			}
		}
	}
	

	return (
		<div>
			<header id='App-header'>Cellular Automata</header>
			<canvas></canvas>
		</div>
	);
}

export default Canvas;