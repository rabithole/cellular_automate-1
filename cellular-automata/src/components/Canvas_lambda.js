import React, { useRef, useEffect, useState, useContext } from 'react';
import { Context } from '../context/Context';
import Gens from './Gens';
import Speed from './speed';

const CanvasLambda = (props) => {
    const canvasReference = useRef()
    let [gen, setGen] = useState(0);
    const [speed, setSpeed] = useState(500)
    const { animation } = useContext(Context);
    // console.log(animation)

    useEffect(() => {
     	// if(animation){
     		requestAnimationFrame(draw)
     	// }
    }, [animation])

    function draw() {
    	const canvas = canvasReference.current;
    	const context = canvas.getContext('2d');
    	canvas.addEventListener('click', function(){
    		console.log('Clicked')
    		context.fillStyle = 'black'
    	})

    	const resolution = 10;
    	canvas.width = 800;
    	canvas.height = 800;

    	const COLS = canvas.width / resolution; // Creates specified number of cells in columns. 
    	const ROWS = canvas.height / resolution; // Creates speicified number of cells in row. 

    	function buildGrid() {
        return new Array(COLS).fill(null)
            .map(() => new Array(ROWS).fill(null)) // interates over the columns array and creates ROWS of null
                // .map(() => Math.floor(Math.random() * 2))); // Randomly chooses 1 or 0 to place in the 2d array. 
	    }

	     function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

	    canvas.addEventListener('click', function(evt) {
        let mousePos = getMousePos(canvas, evt);
        let message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        console.log(mousePos)
        mousePos = context.fillStyle = 'black';
      }, false);

	    let grid = buildGrid();
	    console.log(grid)
    	render(grid);
console.log('38', animation)
    	// Calls back update to get it going. 
 
   		let run;
   		if(animation) {
   			console.log('start')
    		requestAnimationFrame(update)
    	} else {
    		console.log('stop')
    		clearTimeout(run)
    		cancelAnimationFrame(run)
    	}
    	let counter = 0;
        function update() {
        	// console.log(counter += 1)
        	setGen(gen += 1);
        	grid = nextGen(grid);
        	render(grid);
        	run = setTimeout(update, 1000);
        }

    	function nextGen(grid) {
            const nextGen = grid.map(arr => [...arr]); // buffer

       	// Repopulates the next generation of 1's and 0's...
            for(let col = 0; col < grid.length; col++) {
                for(let row = 0; row < grid[col].length; row++) {
                    const cell = grid[col][row];
                    let numNeighbors = 0;
                    for(let i = -1; i < 2; i++) {
                        for(let j = -1; j < 2; j++) {
                            if(i === 0 && j === 0) {
                                continue;
                            }
                    // 
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

        // Populates grid with 0's or 1's...
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
    
    return (
    	<div>
    		<Gens 
    			gen={gen}
    		/>
    		<Speed
    			setSpeed={setSpeed}
    		/>
	    	<canvas 
	    		ref={canvasReference}
	    	/>
    	</div>
    );
}

export default CanvasLambda;