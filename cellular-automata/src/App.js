import React from 'react';
import CanvasLambda from './components/Canvas_lambda';
import FrameAnimation from './components/FrameAnimation';
import Buttons from './components/Buttons';
import Timing from './components/timing_test';

import './App.css';

function App(props) {

  return (
    <div className="App">
    	<header id='App-header'>Cellular Automata</header>
    	<Timing/>
    
        <CanvasLambda/>
        {/*<AnimationTiming/>*/}
       	{/*<FrameAnimation/>*/}
        <Buttons/>
    </div>
  );
}

export default App;
