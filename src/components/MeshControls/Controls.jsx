import React, {useState, useContext} from 'react';
import {MeshContext} from '../../context/mesh_context';
import {MeshControls} from './MeshControls';
import CodeEditor from '../CodeEditor/CodeEditor'

import {ShaderContextProvider} from '../../context/shader_context';


const Controls = () => {
    const [meshType] = useContext(MeshContext);
    const [fields, setFields] = useState({
        width: 30,
        height: 20,
        depth: 20,
        radius: 20,
        widthSegments: 32,
        heightSegments: 32,
        radialSegments: 32,
        detail: 0,
    });

    const handle_controller_type = (type) => {
        const handle_change = (event) => {
            const key = event.target.name
            const value = event.target.value 
            setFields({
                ...fields,
                [key]: value
            })
        }

        switch(type){
            case "cube": {
                return(
                    <>  
                        <div>
                            <label>Width</label>
                            <input type="range" name="width" id="width" min="10" max="50" onChange={handle_change}/> 
                            <input type="number" name="width" id="widthNum" value={fields.width} onChange={handle_change} />
                        </div>
                        <div>
                            <label>Height</label>
                            <input type="range" name="height" id="height" min="10" max="50" onChange={handle_change}/>
                            <input type="number" name="height" id="heightNum" value={fields.height} onChange={handle_change} /> 
                        </div>
                        <div>
                            <label>Depth</label>
                            <input type="range" name="depth" id="depth" min="10" max="50" onChange={handle_change}/>
                            <input type="number" name="depth" id="depthNum" value={fields.depth} onChange={handle_change} />
                        </div>
                    </>
                );
            }
            case "sphere": {
                return(
                    <>
                        <div>
                            <label>Radius</label>
                            <input type="range" name="radius" id="radius" min="10" max="30" onChange={handle_change}/>
                            <input type="number" name="radius" id="radiusNum" value={fields.radius} onChange={handle_change} />
                        </div>
                        <div>
                            <label>Width Segments</label>
                            <input type="range" name="widthSegments" id="widthSegments" min="10" max="50" onChange={handle_change}/>
                            <input type="number" name="widthSegments" id="widthSegmentNum" value={fields.widthSegments} onChange={handle_change} />
                        </div>
                        <div>
                            <label>Height Segments</label>
                            <input type="range" name="heightSegments" id="heightSegments" min="10" max="50" onChange={handle_change}/>
                            <input type="number" name="heightSegments" id="heightSegmentsNum" value={fields.heightSegments} onChange={handle_change} />
                        </div>
                    </>
                );
            }
            case "cone": {
                return(
                    <>
                        <div>
                            <label>Radius</label>
                            <input type="range" name="radius" id="radius" min="10" max="50" onChange={handle_change}/>
                            <input type="number" name="radius" id="radiusNum1" value={fields.radius} onChange={handle_change} />
                        </div>
                        <div>
                            <label>Height</label>
                            <input type="range" name="height" id="height" min="10" max="50" onChange={handle_change}/>
                            <input type="number" name="height" id="heightNum" value={fields.height} onChange={handle_change} />
                        </div>
                        <div>
                            <label>Radial Segment</label>
                            <input type="range" name="radialSegments" id="radialSegments" min="4" max="20" onChange={handle_change}/>
                            <input type="number" name="radialSegments" id="radialNum" value={fields.radialSegments} onChange={handle_change} />
                        </div>
                        <div>
                            <label>Height Segments</label>
                            <input type="range" name="heightSegments" id="heightSegments" min="3" max="20" onChange={handle_change}/>
                            <input type="number" name="heightSegments" id="heightSegmentsNum" value={fields.heightSegments} onChange={handle_change} />
                        </div>
                    </>
                )
            }
            case "cylinder": {
                return(
                    <>
                        <div>
                            <label>Radius</label>
                            <input type="range" name="radius" id="radius" min="10" max="50" onChange={handle_change}/>
                            <input type="number" name="radius" id="radiusNum" value={fields.radius} onChange={handle_change} />
                        </div>
                        <div>
                            <label>Height</label>
                            <input type="range" name="height" id="height" min="10" max="50" onChange={handle_change}/>
                            <input type="number" name="height" id="heightNum" value={fields.height} onChange={handle_change} />
                        </div>
                        <div>
                            <label>Radial Segments</label>
                            <input type="range" name="radialSegments" id="radialSegments" min="5" max="20" onChange={handle_change}/>
                            <input type="number" name="radialSegments" id="radialSegmentsNum" value={fields.radialSegments} onChange={handle_change} />
                        </div>
                        <div>
                            <label>Height Segments</label>
                            <input type="range" name="heightSegments" id="heightSegments" min="2" max="20" onChange={handle_change}/>
                            <input type="number" name="heightSegments" id="heightSegmentsNum" value={fields.heightSegments} onChange={handle_change} />
                        </div>
                    </>
                )
            }
            case "icosahedron":{
                return(
                    <div>
                        <label>Radius</label>
                        <input type="range" name="radius" id="radius" min="10" max="50" onChange={handle_change}/>
                        <input type="number" name="radius" id="radiusNum" value={fields.radius} onChange={handle_change} />
                    </div>
                )
            }
            default: return("");
        }
    }

    return(
        <div className="renderView">
            <ShaderContextProvider>
                <CodeEditor/>
            <div className="renderRegion">
                <MeshControls size={fields}/>
                <form>
                    <h2>{(meshType).toUpperCase()}</h2>
                    {handle_controller_type(meshType)}
                </form>
            </div>
            </ShaderContextProvider>
        </div>
    )
}

export default Controls