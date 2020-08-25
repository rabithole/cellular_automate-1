import React, { useRef } from 'react';

const Canvas_lambda = (props) => {
    const canvasRef = useRef(null)

    // ...

    /**
     * Render the canvas
     */
    
    return (
    	<canvas ref={canvasRef} width={props.width} height={props.height} />
    );
}

export default Canvas_lambda;