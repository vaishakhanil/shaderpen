import React, {useState,createContext} from 'react';


export const MeshContext = createContext();

export const MeshContextProvider = props => {
    const [meshType, setMeshType] = useState('cube');
    return(
        <MeshContext.Provider value={[meshType,setMeshType]}>
            {props.children}
        </MeshContext.Provider>
    )
}