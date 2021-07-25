import React,{useState,useRef} from 'react';
import './styles/App.css';
import {Canvas} from '@react-three/fiber';

import ThreeCanvas from './components/ThreeCanvas/ThreeCanvas';

const App = () => {
  const [width,setWidth] = useState(1);
  const [height,setHeight] = useState(1);
  const [depth,setDepth] = useState(1);

  const handleWidth = (e) => {
    setWidth(e.target.value)
  }
  
  const handleHeight = (e) => {
    setHeight(e.target.value)
  }
  
  const handleDepth = (e) => {
    setDepth(e.target.value)
  }

  return(
   <div>
     <div className="App">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <ThreeCanvas dimension={[width,height,depth]}/>
        </Canvas>
      </div>

    <form>
      <label>Width</label>
      <input type="range" id="volume" name="volume" min="1" max="11"  onChange={handleWidth}/>
      
      <label>Height</label>
      <input type="range" id="volume" name="volume" min="1" max="11"  onChange={handleHeight}/>
      
      
      <label>Depth</label>
      <input type="range" id="volume" name="volume" min="1" max="11"  onChange={handleDepth}/>
    </form>
   </div>
  )
}

export default App;