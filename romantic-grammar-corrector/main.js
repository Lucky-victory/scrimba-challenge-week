import React,{useRef,useState} from 'react';
import ReactDOM from 'react-dom';

export default function App(){
   const [broken,setBroken]=useState(true);
   const paraGraph=useRef();
   const button=useRef();
   const brokenWords=["vAlEntINe's!","VAleNtiNe's!","hapPY vAlEntINe DaY"];
   const randomWord=brokenWords[Math.floor(Math.random() * brokenWords.length)];
   const [text,setText]=useState(randomWord);
   

   
   const correctOrBreakGrammar=()=>{
      paraGraph.current.classList.add('animate');
         
     if(broken){
      window.setTimeout(()=>{
      button.current.textContent='break grammar';
     const textToTransform=text;
    // get the first letter
      let firstLetter = textToTransform.split('').shift();
      // turn the first letter to uppercase
      firstLetter = firstLetter.toUpperCase();
      // get the remaining letters
      const remainingLetters = textToTransform.split('').slice(1);
   // transform the remaining letters to lowerCase
      const lowercaseLetters =remainingLetters.map((letter) => letter.charAt(0).toLowerCase() + letter.slice(1)).join('');
   
   // set the transformed text
    setText(`${firstLetter}${lowercaseLetters}`);
    setBroken(false);
    
    
      },2500);
      return
     }
     window.setTimeout(()=>{
        
          button.current.textContent='correct grammar';
 setBroken(true);
     setText(randomWord);
     },2500);
     
   }
   
   const removeClassName=()=>{
      paraGraph.current.classList.remove('animate')
   }
   return (
   
              <div className="container">
            <h1>Romantic Grammar Corrector 💝</h1>
      <p className="paragraph" onAnimationEnd={removeClassName} ref={paraGraph}>{text}</p>
            <button id="btn" type="button"  onClick={correctOrBreakGrammar} ref={button}>Correct Grammar</button>
        </div>

      
      )
}



ReactDOM.render(<App />,document.getElementById('root'))