import React, { useRef, useEffect } from 'react';

const CanvasLambda = (props) => {
    const canvasReference = useRef(null)

    useEffect(() => {
    	// const canvas = document.querySelector('canvas')
    	// const canvas = canvasReference.current;
    	// const context = canvas.getContext('2d');
    }, [])


    
    return (
    	<div>
	    	<canvas 
	    		ref={canvasReference}
	    	/>
    	</div>
    );
}

export default CanvasLambda;