import React, { useRef, useState, useEffect } from 'react';
import Gens from './Gens';

function FrameAnimation() {
    // let [gen, setGen] = useState(0) 
    let generation = useRef(0);
    console.log(generation.current)
    // const canvasRef = useRef(null);
    useEffect(() => {
        
    }, [])
    // let generation = 0;
    // let [gen, setGen] = useState(0) 
    // const generation = useRef(0)
    // const canvasRef = useRef(null)
    // console.log(canvasRef)
    function OnAnimFrame(timestamp) {  

        // Canvas animation...........................................
        const canvas = document.querySelector('canvas');
        // const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Sets the size of the canvas. 
        const resolution = 10;
        canvas.width = 800;
        canvas.height = 800;
        const COLS = canvas.width / resolution; // Creates specified number of cells in columns. 
        const ROWS = canvas.height / resolution; // Creates speicified number of cells in row. 
        // 2d array is build by buildGrid
        // Builds two arrays named COLS and row. This is used to build grid matrix in the for loop below.  
        function buildGrid() {
            // console.log('buildGrid')
            return new Array(COLS).fill(null)
                .map(() => new Array(ROWS).fill(null) // interates over the columns array and creates ROWS of null
                    .map(() => Math.floor(Math.random() * 2))); // Randomly chooses 1 or 0 to place in the 2d array. 
        }
        // console.log('Math floor random test', Math.floor(Math.random() * 2));
        // console.log('Array test', new Array(COLS).fill(null).map(() => new Array(ROWS).fill(null)));

        let grid = buildGrid();
        // grid = nextGen(grid);
        render(grid);
       
// requestAnimationFrame(update);        

        function update() {
            // setGen(gen += 1);
            generation.current += 1;
            console.log(generation.current)
            grid = nextGen(grid);
            render(grid);
            requestAnimationFrame(update);
        }

        function nextGen(grid) {
            // console.log('grid')
            const nextGen = grid.map(arr => [...arr]); // buffer
            // console.log('Next Gen', nextGen)

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

                                if(x_cell >= 0 && y_cell >= 0 && x_cell < COLS && y_cell < ROWS) {
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

        // Renders the grid using the 2d array created by buildGrid. 
        function render(grid) {
            for(let col = 0; col < grid.length; col++) {
                for(let row = 0; row < grid[col].length; row++) {
                    const cell = grid[col][row]; // grid[][] creates a 2d array or matrix with ROWS and columns. 

                    context.beginPath();
                    context.rect(col * resolution, row * resolution, resolution, resolution); // (x, y, width, height)
                    context.fillStyle = cell ? 'darkred' : 'lightblue';
                    context.fill();
                    context.stroke();
                }
            }
        }
    }

// Request the first animation frame to kick things off
    requestAnimationFrame(OnAnimFrame)

return (
        <div>
            <Gens
                gen={generation}
            />
            <canvas></canvas>
            
        </div>
    );
}
    

export default FrameAnimation;