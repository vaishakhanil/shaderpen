import React from 'react';
import './styles/App.css';

import {Controls, MeshContextSet} from './components';

import {MeshContextProvider} from './context/mesh_context';

const App = () => {
 
  return(
    <>
    <div className="mobile-wrapper">VIEW ON DESKTOP</div>
    <MeshContextProvider>
        <MeshContextSet/>
        <Controls/>
        <a href="https://vaishakhanil.github.io/" rel="noreferrer" target="_blank">Made by with React, ThreeJS & R3F</a>
    </MeshContextProvider>
    </>
  )
}

export default App;