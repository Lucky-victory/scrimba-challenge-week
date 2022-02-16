import React,{useRef,useState} from 'react';
import ReactDOM from 'react-dom';

export default function App(){
   
   const [text,setText]=useState("vAlEntINe's!")
   const correctGrammar=()=>{
      
   }
   return (
   
              <div className="container">
            <h1>Romantic Grammar Corrector 💝</h1>
      <p className="paragraph" >{text}</p>
            <button id="btn" type="button"  onClick={correctGrammar}>Correct Grammar</button>
        </div>

      
      )
}



ReactDOM.render(<App />,document.getElementById('root'))