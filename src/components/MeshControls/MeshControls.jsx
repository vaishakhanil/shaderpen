import React,{useContext} from 'react';
import RenderScreen from '../RenderScreen/RenderScreen';
import {RenderSettings} from '../RenderSettings/RenderSettings';

import {ShaderContext} from '../../context/shader_context'

export const MeshControls = (size) => {
    const [shader] = useContext(ShaderContext)
    return(
        <div>
            <RenderScreen value={size} shaders={shader}>
                <RenderSettings/>
            </RenderScreen>  
        </div>
    )
}
