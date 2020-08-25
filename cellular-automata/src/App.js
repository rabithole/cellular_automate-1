import React from 'react';
import Canvas from './components/Canvas';
import FrameAnimation from './components/OnAnimateFrame';

import './App.css';

function App() {


  return (
    <div className="App">
    	<header id='App-header'>Cellular Automata</header>
        <Canvas/>
        {/*<AnimationTiming/>*/}
        <FrameAnimation/>
    </div>
  );
}

export default App;
