import React from 'react';
import Canvas from './components/Canvas';

import AnimationTiming from './components/AnimationTiming';
import './App.css';

function App() {


  return (
    <div className="App">
    	<header id='App-header'>Cellular Automata</header>
        <Canvas/>
        {/*<AnimationTiming/>*/}
    </div>
  );
}

export default App;
