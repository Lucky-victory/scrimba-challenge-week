import React,{useState,useRef} from 'react';
import ReactDOM from 'react-dom';

export default function App() {
   const paraGraph=useRef();
const [uniques,setUniques]=useState([]);

const emojis = [
    "💘","💘","🌞","🧡","🍇",
    "🧁","🤗","💝","🐱","💘",
    "🧡","💫","🤣","🍓","💜","⚡️",
    "⚡️","🤗","🐶","💘","🍇","🐱",
    "💘","💫","🍓","💜","💕",
    "⚡️","🤫","💘","🌞","🐱","💘",
    "💫","🍓","💜","⚡️","🧡","🤫",
    "💕","🍇","💘","🤣"
    ];
function filterDuplicates() {
    
let uniqueEmojis=new Set(emojis);
uniqueEmojis=[...uniqueEmojis.values()];



    // 1. Filter out all duplicate emojis, leaving only one of each emoji.
    // 2. Render the unique emojis in uniqueEmojisP.
    
    // Just for fun: Replace them with your favourite emojis! 😃 
    setUniques(uniqueEmojis);
}

   
   return (
     <div class="flex container">
           <h1>Filter Duplicate emojis 💜</h1>
           <p class="all-emojis-p" id="all-emojis-p">{emojis.map((emo)=> emo)}</p>
           <p class="unique-emojis-p" id="unique-emojis-p" ref={paraGraph}>
           {uniques.map((unique,i)=>{
            return(  <span className='emoji' key={i} style={{'--delay':i}}>{unique}</span>)
           })}
           </p>
           <button id="btn" type="button" onClick={filterDuplicates}>Filter duplicates</button>
        </div> 
      )
}



ReactDOM.render(<App />,document.getElementById('root'));