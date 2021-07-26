import React from 'react';
import './styles/App.css';

import {MeshControls, MeshContextSet} from './components';

import {MeshContextProvider} from './context/mesh_context'

const App = () => {
  
  return(
    <>
    <MeshContextProvider>
      <MeshControls/>
      <MeshContextSet/>
    </MeshContextProvider>
    </>
  )
}

export default App;