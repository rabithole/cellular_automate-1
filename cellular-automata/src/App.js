import React from 'react';
// import Canvas from './components/Canvas';
import FrameAnimation from './components/FrameAnimation';
import Buttons from './components/Buttons';
import Gens from './components/Gens';

import './App.css';

function App() {


  return (
    <div className="App">
    	<header id='App-header'>Cellular Automata</header>
    	<Gens/>
        {/*<Canvas/>*/}
        {/*<AnimationTiming/>*/}
        {<FrameAnimation/>}
        <Buttons/>
    </div>
  );
}

export default App;
