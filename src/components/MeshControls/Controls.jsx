import React, {useState,useEffect, useContext} from 'react';
import {MeshContext} from '../../context/mesh_context';
import {MeshControls} from './MeshControls';

const Controls = () => {
    const [meshType] = useContext(MeshContext);
    const [s,setS] = useState({
        width: 1,
        height: 1,
        depth: 1
    });

    const handle_change = (e) => {
        setS({
            width: e.target.value,
            height: 1,
            depth: 1
        })
    }
    useEffect(() => {
        console.log(meshType);
    }, [meshType])

    return(
        <>
            <MeshControls size={s}/>
            <div>
                <input type="range" min={1} max={11} onChange={handle_change}/>
            </div>
        </>
    )
}

export default Controls