import React, { useState, useContext } from 'react';
import CanvasLambda from './components/Canvas_lambda';
import FrameAnimation from './components/FrameAnimation';
import Buttons from './components/Buttons';
import Timing from './components/timing_test';
import { Context } from './context/Context';
import './App.css';

function App(props) {
	const [animation, setAnimation] = useState(false)
	console.log(animation)

	return (
		<div className="App">
			<header id='App-header'>Cellular Automata</header>
			<Timing/>
			<Context.Provider value={{ animation, setAnimation }}>
				<CanvasLambda

				/>
				{/*<AnimationTiming/>*/}
				{/*<FrameAnimation/>*/}
				<Buttons

				/>
			</Context.Provider>
		</div>
	);
}

export default App;
