import React, {useContext} from 'react';
import {MeshContext} from '../../context/mesh_context';

const MeshContextSet = () => {
    const [,setMeshType] = useContext(MeshContext);

    const change_mesh = (e) => {
        e.preventDefault()
        setMeshType(e.target.value);
    }

    return(
        <div>
            <button value="cube" onClick={change_mesh}>Cube</button>
            <button value="sphere" onClick={change_mesh}>Sphere</button>
            <button value="cone" onClick={change_mesh}>Cone</button>
            <button value="cylinder" onClick={change_mesh}>Cylinder</button>
            <button value="icosahedron" onClick={change_mesh}>Icosahedron</button>
        </div>
    )
}

export default MeshContextSet;