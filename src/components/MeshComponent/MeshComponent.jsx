import React,{useState, useEffect, useRef, useContext} from 'react';
import {useFrame} from '@react-three/fiber'
let a = 1

const MeshComponent = ({geometry,shaders}) => {
    const [geo,setGeo] = useState();
    const myMesh = useRef(null);
   

    const [shaderObject, setShaderObject] = useState({
        fragmentShader: `varying vec3 vUv;
        void main() {
          gl_FragColor = vec4(
              tan(vUv.x+vUv.y),
              tan(vUv.x+vUv.y),
              tan(vUv.x+vUv.y),
               0.8);
        }`,
        vertexShader : ` uniform float time;
    varying vec3 vUv; 
        void main(void) {
          vec3 nPos = position;
          vUv = position; 
          nPos.x += sin(nPos.y * 0.15 + time * 3.0) * 6.0;
          nPos.y += sin(nPos.x * 0.15 + time * 2.0) * 3.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(nPos, 1.0);
        }`

    })

    useEffect(() => {
        setShaderObject({
            fragmentShader: shaders.fragmentShader,
            vertexShader: shaders.vertexShader
        })
        a++;
        console.log(shaders);
    },[shaders])

    useEffect(() =>{setGeo(geometry);},[geometry]);
    useFrame(({ clock }) => {
        myMesh.current.rotation.y = clock.getElapsedTime();
    })

    
    return(
        <mesh ref={myMesh}>
            {geo}
            {/* <meshStandardMaterial/> */}
            <shaderMaterial key={a} attach="material" args={[shaderObject]}/>
        </mesh>
    )
}

export default MeshComponent;