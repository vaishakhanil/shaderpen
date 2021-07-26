import React, {useContext} from 'react';
import {MeshContext} from '../../context/mesh_context';

import {ReactComponent as Cube} from '../../assets/svg/cube.svg'
import {ReactComponent as Sphere} from '../../assets/svg/sphere.svg'
import {ReactComponent as Cone} from '../../assets/svg/cone.svg'
import {ReactComponent as Cylinder} from '../../assets/svg/cylinder.svg'
import {ReactComponent as Poly} from '../../assets/svg/poly.svg'


const MeshContextSet = () => {
    const [,setMeshType] = useContext(MeshContext);

    const change_mesh = (e) => {
        e.preventDefault()
        setMeshType(e.target.value);
    }

    return(
        <nav>
            <div className="shapes">
                <button value="cube" onClick={change_mesh}>CUBE <Cube/></button>
                <button value="sphere" onClick={change_mesh}>SPHERE <Sphere/></button>
                <button value="cone" onClick={change_mesh}>CONE <Cone/></button>
                <button value="cylinder" onClick={change_mesh}>CYLINDER <Cylinder/></button>
                <button value="icosahedron" onClick={change_mesh}>ICOSAHEDRON <Poly/></button>
            </div>
        </nav>
    )
}

export default MeshContextSet;