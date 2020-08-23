### Python GUI pygame
### Can use whatever library I want. 
### Due date: Thursday August 27th
### UPER 
- Understand 
- Plan 
- Execute
- Reflect

# Rules for the Game of Life!
### Each function is a pure function of the preceding one. 
1. Two possible states. 
	a. Alive or dead. 
	b. Or populated or unpopulated respectively. 
2. Each cell interacts with it's eight neighbors. 

Alive of Dead...
1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

- These rules, which compare the behavior of the automaton to real life, can be condensed into the following:
1. Any live cell with two or three live neighbours survives.
2. Any dead cell with three live neighbours becomes a live cell.
3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.

# To Do: 
- 	Go over clone files and read me's. 
- 	Make notes on read me for clone project. 
-	Research 'Conways Game of Life'. Describe the rules of the game of life. 
- 	Research screen buffer, buffer, Canvas, RGB and double buffering.  
-	Cellular automation (plural automata)
	- 
-	The notion of 'Turing Completeness'. Correctly analyze the 'Turing Completeness'
-	?? Main entry point????? What does this mean?

# Readme notes
### Objectives
- Student should be able to create a unique, high-quality project that can be added to a professional portfolio

- Student should be able to describe the rules of Conway’s “Game of Life”

- Student should be able to explain what cellular automata are and describe how they are useful in real life

- Student should be able to correctly analyze the ‘Turing Completeness’ of Conway’s “Game of Life”

- Student should be able to implement a visualization of Conway’s “Game of Life” using technologies related to their specific track.

- Student should be able to utilize "double buffering" to implement the game

# Design Specs
- Grid of cells
	- Grid at least 25x25. Go as big as wanted. 

	- Cell 'Properties'
1. State of cell: Alive or Dead
2. current state
3. Clickable/Tappable<br>
	a. Clicked for users to set up intial cell configuration.<br>
	b. Not clickable when simulation is running.  
4. Begaviors: Toggle state functionality.<br>
	a. Manual toggle alive or dead before sim running.<br>
	b. Sim running and rules of life caused cell to change state. (alive or dead)
5. Appropriate data structure
6. Display the current generation in number format. 
7. Use a timeout function to control the generations of cells and update the generation. 
8. Start and stop buttons. 
9. Button to clear the grid. 

# Write an algorithm that:
### Implements the following basic steps:
- For each cell in the current generation's grid:
	1. Examine state of all eight neighbors (it's up to you whether you want cells to wrap around the grid and consider cells on the other side or not)
	2. Apply rules of life to determine if this cell will change states
	3. When main loop completes:<br>
		a. Swap current and next grids<br>
		b. Repeat until simulation stopped
### Breaks down above steps into appropriate sub-tasks implemented with helper functions to improve readability

### Uses double buffering to update grid with next generation.

### Does something well-documented with the edge of the grid. (e.g. wrap around to the far side--most fun!--or assumes all edge cells are permanently dead.)