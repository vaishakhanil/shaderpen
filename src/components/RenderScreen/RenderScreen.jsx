import React, {useState,useEffect,useContext} from 'react';
import {Canvas} from '@react-three/fiber';
import MeshComponent from '../MeshComponent/MeshComponent';

import {MeshContext} from '../../context/mesh_context'


const RenderScreen = (props ) => {
    const [meshType] = useContext(MeshContext);
    const [geometry, setGeometry] = useState(<boxGeometry args={[1,1,1]}/>)
    
    useEffect(() => {
        switch(meshType){
            case "cube": {
                            setGeometry(<boxGeometry args={[props.value.size.width,1,1]}/>);
                            break;
                        }

            case "sphere": {
                            setGeometry(<sphereGeometry args={[1,5,5]}/>);
                            break;
                        }

            case "cone": {
                            setGeometry(<coneGeometry args={[1,3,3]}/>);
                            break;
                        }

            case "cylinder": {
                            setGeometry(<cylinderGeometry args={[1,1,4,4]}/>);
                            break;
                        }

            case "icosahedron": {
                            setGeometry(<icosahedronGeometry args={[1,0]}/>);
                            break;
                        }
            default: setGeometry(<boxGeometry args={[1,1,1]}/>);
        }
        console.log(props.value.size)
    },[meshType,props.value])

    return(
        <>
            <div className="App">
                <Canvas>
                    {props.children}
                    <MeshComponent geometry={geometry}/>
                </Canvas>
            </div>
        </>
    )
}

export default RenderScreen;