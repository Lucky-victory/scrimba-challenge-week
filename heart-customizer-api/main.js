import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';



export default function App(){
const [heartColor,setHeartColor]=useState('#2B283A');
const fetchColors= async()=>{
 const response = await fetch('./colors.json');
 const { colors } = await response.json();
 const randomColor = colors[Math.floor(Math.random() * colors.length)];
 console.log(heartColor);
 setHeartColor(randomColor);  
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