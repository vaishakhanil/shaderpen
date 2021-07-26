import React from 'react';
import RenderScreen from '../RenderScreen/RenderScreen';
import {RenderSettings} from '../RenderSettings/RenderSettings';

export const MeshControls = (size) => {
    return(
        <div>
            <RenderScreen value={size}>
                <RenderSettings/>
            </RenderScreen>  
        </div>
    )
}
