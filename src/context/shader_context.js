import React, {useState,createContext} from 'react';

export const ShaderContext = createContext();

export const ShaderContextProvider = props => {
    const [shader,setShader] = useState({
        vertexShader: `uniform float time;
        varying vec3 vUv; 
        void main(void) {
        vec3 nPos = position;
          vUv = position; 
          nPos.x += sin(nPos.y * 0.15 + time * 3.0) * 6.0;
          nPos.y += sin(nPos.x * 0.15 + time * 2.0) * 3.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(nPos, 1.0);
        }`,
        fragmentShader: ` varying vec3 vUv;
        void main() {
          gl_FragColor = vec4(
            tan(vUv.x+vUv.y),
            tan(vUv.x+vUv.y),
            tan(vUv.x+vUv.y), 
            0.8);
        }`
    })

    return(
        <ShaderContext.Provider value={[shader,setShader]}>
            {props.children}
        </ShaderContext.Provider>
    )
}