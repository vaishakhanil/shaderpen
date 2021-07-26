import React, {useState} from 'react';

import Editor from 'react-simple-code-editor';
import {highlight, languages} from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import "prismjs/themes/prism.css";
import {ReactComponent as Run} from '../../assets/svg/run.svg'
require('prismjs/components/prism-jsx');



const CodeEditor = () => {
    const [frag, setFrag] = useState(`
    varying vec3 vUv;
    void main() {
      gl_FragColor = vec4(
        tan(vUv.x+vUv.y),
        tan(vUv.x+vUv.y),
        tan(vUv.x+vUv.y), 
        0.8);
    }
    `)

    const [vect, setVect] = useState(` 
    //uniform float time;
    varying vec3 vUv; 
    void main(void) {
    vec3 nPos = position;
      vUv = position; 
      nPos.x += sin(nPos.y * 0.15 + 1 * 3.0) * 6.0;
      nPos.y += sin(nPos.x * 0.15 + 1 * 2.0) * 3.0;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(nPos, 1.0);
    }`)
    
    return(
      <div>
        <Editor
              placeholder="VERTEX SHADER CODE ...."
              value={vect}
              onValueChange={vect => setVect( vect )}
              highlight={vect => highlight(vect, languages.js, 'js')}
              padding={10}
              style={{
                fontFamily: '"Roboto", "Fira Mono"',
                fontSize: 15,
                fontWeight: 'normal',
                letterSpacing: 2,
                lineHeight: 2
              }}
              className="container__editor"
            />

            <Editor
              placeholder="FRAGMENT SHADER CODE ...."
              value={frag}
              onValueChange={frag => setFrag( frag )}
              highlight={frag => highlight(frag, languages.js, 'js')}
              padding={10}
              style={{
                fontFamily: '"Roboto", "Fira Mono"',
                fontSize: 15,
                fontWeight: 'normal',
                letterSpacing: 2,
                lineHeight: 2
              }}
              className="container__editor"
            />
            <div className="runButton">
                <button>RUN <Run/></button>
            </div>
      </div>
    )
}

export default CodeEditor;