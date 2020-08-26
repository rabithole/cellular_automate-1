import React, { useState } from 'react';


function Speed(props) {
  const [speed, setRate] = useState()

  const handleChange = e => {
    setRate({speed, 
        [e.target.name]: e.target.value,
    })
  }

  return (
    <div id='speed'>
      <h1>Speed:</h1>
      <input
        type='number'
        name='speed'
        placeholder='Speed in seconds'
        value={speed}
      />
    </div>
  );
}

export default Speed;
