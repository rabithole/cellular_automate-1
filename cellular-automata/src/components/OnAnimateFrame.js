import React from 'react';
import Canvas_lambda from './Canvas_lambda';


function FrameAnimation() {
    let prevTimestamp = null;

    function OnAnimFrame(timestamp) {

        // Request another animation frame for the future
        requestAnimationFrame(OnAnimFrame);

        // If we haven't yet stored the previous time, fake it
        if (prevTimestamp === null) {
            prevTimestamp = timestamp - 30; // milliseconds
        }

        // Compute how long it took between frames
        const elapsed = timestamp - prevTimestamp

        // Remember this for next frame
        prevTimestamp = timestamp;

        console.log(`Current time: ${timestamp} ms, frame time: ${elapsed} ms`);

        // TODO: Do animation stuff to the canvas
    }

// Request the first animation frame to kick things off
    requestAnimationFrame(OnAnimFrame);

return (
        <div>
            <Canvas_lambda/>
        </div>
    );
}
    

export default FrameAnimation;