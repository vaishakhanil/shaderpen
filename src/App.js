import React from 'react';
import './styles/App.css';

import {Controls, MeshContextSet} from './components';

import {MeshContextProvider} from './context/mesh_context'

const App = () => {
  
  return(
    <>
    <MeshContextProvider>
        <Controls/>
        <MeshContextSet/>
    </MeshContextProvider>
    </>
  )
}

export default App;