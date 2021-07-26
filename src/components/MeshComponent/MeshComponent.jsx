import React,{useState, useEffect, useRef} from 'react';
import {useFrame} from '@react-three/fiber'

const MeshComponent = ({geometry}) => {
    const [geo,setGeo] = useState();
    const myMesh = useRef(null);

    useEffect(() =>{setGeo(geometry)},[geometry]);
    useFrame(({ clock }) => {
        myMesh.current.rotation.y = clock.getElapsedTime()
    })

    return(
        <mesh ref={myMesh}>
            {geo}
            <meshStandardMaterial/>
        </mesh>
    )
}

export default MeshComponent;