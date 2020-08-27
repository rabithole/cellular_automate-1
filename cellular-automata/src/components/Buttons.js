import React, { useState, useContext } from 'react';
import { Context } from '../context/Context';

function Buttons(props) {
	const { setAnimation } = useContext(Context);

	function Start() {
		setAnimation(true);
	}

	function Stop() {
		console.log('Stop')
		setAnimation(false);
	}

	return (
	<div className="buttons">
		<button onClick={Start}>START</button>
		<button onClick={Stop}>STOP</button>
		<button>PAUSE</button>
	</div>
	);
}

export default Buttons;
