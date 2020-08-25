import React from 'react';
// import Canvas from './components/Canvas';
import FrameAnimation from './components/FrameAnimation';
import Buttons from './components/Buttons';

import './App.css';

function App(props) {

  return (
    <div className="App">
    	<header id='App-header'>Cellular Automata</header>
    
        {/*<Canvas/>*/}
        {/*<AnimationTiming/>*/}
        {<FrameAnimation/>}
        <Buttons/>
    </div>
  );
}

export default App;
