import React, {useState,useEffect, useContext} from 'react';
import {MeshContext} from '../../context/mesh_context';
import {MeshControls} from './MeshControls';


const Controls = () => {
    const [meshType] = useContext(MeshContext);
    const [fields, setFields] = useState({
        width: 1,
        height: 1,
        depth: 1,
        radius: 1,
        widthSegments: 32,
        heightSegments: 32,
        radialSegments: 32,
        detail: 0,
    });

    useEffect(() => {
        console.log(meshType);
    }, [meshType])

    const handle_controller_type = (type) => {

        const handle_change = (event) => {
            setFields({
                ...fields,
                [event.target.name]: event.target.value
            })
        }

        switch(type){
            case "cube": {
                return(
                    <form>
                        <div>
                            <input type="range" name="width" id="width" min="1" max="5" onChange={handle_change}/> 
                            <input type="number" name="width" id="width" value={fields.width} onChange={handle_change} />
                        </div>
                        
                        <input type="range" name="height" id="height" min="1" max="5" onChange={handle_change}/> 
                        <input type="range" name="depth" id="depth" min="1" max="5" onChange={handle_change}/>
                    </form>
                );
            }
            case "sphere": {
                return(
                    <form>
                        <input type="range" name="radius" id="radius" min="2" max="10" onChange={handle_change}/>
                        <input type="range" name="widthSegments" id="widthSegments" min="1" max="20" onChange={handle_change}/>
                        <input type="range" name="heightSegments" id="heightSegments" min="1" max="20" onChange={handle_change}/>
                    </form>
                );
            }
            case "cone": {
                return(
                    <form>
                        <input type="range" name="radius" id="radius" min="1" max="5" onChange={handle_change}/>
                        <input type="range" name="height" id="height" min="1" max="5" onChange={handle_change}/>
                        <input type="range" name="radialSegments" id="radialSegments" min="4" max="20" onChange={handle_change}/>
                        <input type="range" name="heightSegments" id="heightSegments" min="3" max="20" onChange={handle_change}/>
                    </form>
                )
            }
            case "cylinder": {
                return(
                    <form>
                        <input type="range" name="radius" id="radius" min="1" max="5" onChange={handle_change}/>
                        <input type="range" name="height" id="height" min="1" max="5" onChange={handle_change}/>
                        <input type="range" name="radialSegments" id="radialSegments" min="5" max="20" onChange={handle_change}/>
                        <input type="range" name="heightSegments" id="heightSegments" min="2" max="20" onChange={handle_change}/>
                    </form>
                )
            }
            case "icosahedron":{
                return(
                    <form>
                        <input type="range" name="radius" id="radius" min="1" max="5" onChange={handle_change}/>
                    </form>
                )
            }
        }
    }

    return(
        <>
            <MeshControls size={fields}/>

            {handle_controller_type(meshType)}
        </>
    )
}

export default Controls