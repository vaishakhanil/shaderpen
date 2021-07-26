import React, {useState, useEffect, useContext} from 'react';
import RenderScreen from '../RenderScreen/RenderScreen';
import {RenderSettings} from '../RenderSettings/RenderSettings'

import {MeshContext} from '../../context/mesh_context'

const MeshControls = () => {
    const [meshType] = useContext(MeshContext);
    const [size,setSize] = useState(1);
    const handle_change = (e) => {
        setSize(e.target.value)
    }

    useEffect(() => {
        console.log(meshType);
    }, [meshType])

    return(
        <>
        <RenderScreen size={size}>
            <RenderSettings/>
        </RenderScreen>
            <div>
                <input type="range" min="1" max="11" onChange={handle_change}/>
            </div>
        </>
    )
}

export default MeshControls