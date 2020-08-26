import React, { useState } from 'react';


function Speed(props) {
  const [speed, setRate] = useState(0)

  const handleChange = e => {
    setRate(
        e.target.value
    )
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(speed)
    props.setSpeed(speed)
  }

  return (
    <form onSubmit={handleSubmit} id='speed'>
      <h1>Speed:</h1>
      <input
        type='number'
        name='speed'
        placeholder='Speed in seconds'
        // value={speed}
        onChange={handleChange}
      />
    </form>
  );
}

export default Speed;
