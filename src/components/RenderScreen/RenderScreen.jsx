import React, {useState,useEffect,useContext} from 'react';
import {Canvas} from '@react-three/fiber';
import MeshComponent from '../MeshComponent/MeshComponent';

import {MeshContext} from '../../context/mesh_context'


const RenderScreen = (props ) => {
    const [meshType] = useContext(MeshContext);
    const [geometry, setGeometry] = useState();
    const dimensions = props.value.size;
    useEffect(() => {
        switch(meshType){
            case "cube": {
                            setGeometry(<boxGeometry args={[dimensions.width,dimensions.height,dimensions.depth]}/>);
                            break;
                        }

            case "sphere": {
                            setGeometry(<sphereGeometry args={[dimensions.radius,dimensions.widthSegments,dimensions.heightSegments]}/>);
                            break;
                        }

            case "cone": {
                            setGeometry(<coneGeometry args={[dimensions.radius,dimensions.height,dimensions.radialSegments,dimensions.heightSegments]}/>);
                            break;
                        }

            case "cylinder": {
                            setGeometry(<cylinderGeometry args={[dimensions.radius,dimensions.radius,dimensions.height,dimensions.radialSegments,dimensions.heightSegments]}/>);
                            break;
                        }

            case "icosahedron": {
                            setGeometry(<icosahedronGeometry args={[dimensions.radius,0]}/>);
                            break;
                        }
            default: setGeometry(<boxGeometry args={[1,1,1]}/>);
        }
        // console.log(props.value)
    },[meshType,dimensions])

    return(
        <>
            <div className="App">
                <Canvas camera={{position: [0,0,50]}}>
                    <color attach="background" args={["#f2f2f2"]} />
                    {props.children}
                    <MeshComponent geometry={geometry}/>
                </Canvas>
            </div>
        </>
    )
}

export default RenderScreen;