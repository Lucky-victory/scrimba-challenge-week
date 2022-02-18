import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';



export default function App(){
const [heartColor,setHeartColor]=useState('#2B283A');
const fetchColors= async()=>{
 const response = await fetch('https://apis.scrimba.com/hexcolors?count=1');
 const { colors } = await response.json();
 setHeartColor(colors[0].value);  
}

useEffect( ()=>{
  fetchColors()
},[])

return (
  <div className='container'>
    <div id="heart" class="heart" style={{backgroundColor:heartColor}}></div>
        <button id="btn" onClick={fetchColors}>Change</button>
     
  </div> 
   )   
}



ReactDOM.render(<App />,document.getElementById('root'))