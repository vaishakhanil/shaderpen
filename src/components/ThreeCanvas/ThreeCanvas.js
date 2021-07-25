import React, {useState,useEffect, useRef} from 'react';
import {Canvas} from '@react-three/fiber'
import {useFrame} from '@react-three/fiber';


/**
 * ThreeCanvas
 * @param {Array} size - Array of numbers 
 * @returns mesh
 */
const ThreeCanvas  = ({dimension}) =>{
    const [size, setSize] = useState([2,2,2]);
    const myMesh = React.useRef(null)

    useEffect(() => {
      setSize(dimension);
    }, [dimension])

    useEffect(() => {
      myMesh.current.rotation.x = 20;
      myMesh.current.rotation.z = 10;
    }, [])


    return(
          <mesh ref={myMesh}>
            <boxGeometry args={size}/>
            <meshStandardMaterial />
          </mesh>
    )
}

export default ThreeCanvas;