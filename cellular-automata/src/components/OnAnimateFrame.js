import React from 'react';
import Canvas_lambda from './Canvas_lambda';


function FrameAnimation() {
    let prevTimestamp = null;

    function OnAnimFrame(timestamp) {

        // Request another animation frame for the future
        requestAnimationFrame(OnAnimFrame);

        // If we haven't yet stored the previous time, fake it
        if (prevTimestamp === null) {
            prevTimestamp = timestamp - 30; // milliseconds
        }

        // Compute how long it took between frames
        const elapsed = timestamp - prevTimestamp

        // Remember this for next frame
        prevTimestamp = timestamp;

        console.log(`Current time: ${timestamp} ms, Elapsed: ${elapsed} ms`);


        // Canvas animation...........................................
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        // Sets the size of the canvas. 
        const resolution = 10;
        canvas.width = 800;
        canvas.height = 800;
        const cols = canvas.width / resolution;
        const rows = canvas.height / resolution; 
        // console.log(new Array(cols).fill('W'))

        // Builds two arrays named cols and row. This is used to build grid matrix in the for loop below.  
        function buildGrid() {
            // console.log('buildGrid')
            return new Array(cols).fill(null)
                .map(() => new Array(rows).fill(null)
                    .map(() => Math.floor(Math.random() * 2)));
        }


        let grid = buildGrid();
        // console.log(grid)
        render(grid);

        function update() {
            console.log('update')
            grid = nextGen(grid);
            requestAnimationFrame(update);
        }
       

        function nextGen(grid) {
            console.log('grid')
            const nextGen = grid.map(arr => [...arr]);

            for(let col = 0; col < grid.length; col++) {
                    for(let row = 0; row < grid[col].length; row++) {
                        const cell = grid[col][row];
                        let numNeighbors = 0;
                        for(let i = -1; i < 2; i++) {
                            for(let j = -1; j < 2; j++) {
                                if(i === 0 && j === 0) {
                                    continue;
                                }
                                const x_cell = col + i;
                                const y_cell = row + j;

                                if(x_cell >= 0 && y_cell >= 0 && x_cell < col && y_cell < row) {
                                    const currentNeighbor = grid[col + i][row + j];
                                    numNeighbors += currentNeighbor;
                                }
                        }
                    }
                    // rules of life
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

        function render(grid) {
            for(let col = 0; col < grid.length; col++) {
                for(let row = 0; row < grid[col].length; row++) {
                    const cell = grid[col][row]; // grid[][] creates a 2d array or matrix with rows and columns. 

                    ctx.beginPath();
                    ctx.rect(col * resolution, row * resolution, resolution, resolution);
                    ctx.fillStyle = cell ? 'darkred' : 'lightblue';
                    ctx.fill();
                    ctx.stroke();
                }
            }
        }


    }

// Request the first animation frame to kick things off
    requestAnimationFrame(OnAnimFrame);

return (
        <div>
            <Canvas_lambda/>
        </div>
    );
}
    

export default FrameAnimation;