import React from 'react';


export const RenderSettings = () => {
    return(
        <>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
        </>
    )
}
