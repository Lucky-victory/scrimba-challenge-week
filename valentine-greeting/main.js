import React,{useState} from 'react'
import ReactDOM from 'react-dom';

export default function App(){
   const cardOptions=[{className:'box',image:'./images/bg1.jpg'},{className:'bottom',image:'./images/bg2.jpg'},
   {className:'left',image:'./images/bg3.jpg'},
   {className:'left',image:'./images/bg4.jpg'}];
   const [card,setCard]=useState({className:'left',image:'./images/bg4.jpg'});
   const [sender,setSender]=useState('');
   const [receiver,setReceiver]=useState('');
   const [greeting,setGreeting]=useState('');
   const [hidden,setHidden]=useState(true);
   const receiverName =(evt)=>{
      setReceiver(evt.target.value)
   }
   
   const senderName =(evt)=>{
      setSender(evt.target.value)
   }
   const generateCard=()=>{
     const randomCard=cardOptions[Math.floor(Math.random() * cardOptions.length)];
     setCard(randomCard);
     if((greeting && sender && receiver) !==''){
        
     setHidden(false);
     }
   }
   const selectGreeting=(evt)=>{
      setGreeting(evt.target.value);
   }
   
   return (
    <div className='container'>
    
            <div className={hidden ? 'card hide':'card'} id="card">
            <div className={'card-content '+card.className}>
            <div className='sender'>
            <span><b>From:</b> {sender}</span>
            </div>
            <p className="greeting">{greeting}</p>
             <div className='receiver'>
            <span><b>To:</b> {receiver} </span>
            </div>
    
            </div>
            <img src={card.image} alt='' />
            
        </div>
    {hidden ? <p className='info'>Fill out the inputs to show the card </p> : ''}
        <form id="form">
            <label for="recipient-input">To:</label>
            <input type="text" id="recipient-input" name="recipient-input" onChange={receiverName} value={receiver}/>
            <br />
            <label for="greeting-select">Select greeting:</label>
            <select id="greeting-select" onChange={selectGreeting}>
                <option value="">--Select greeting--</option>
                <option value="I choo choo choose you! 🚂">"I choo choo choose you! 🚂"</option>
                <option value='I love you more than a pizza🥧'>I love you more than a pizza🥧</option>
                <option value="You're the Pam to my Jim">"You're the Pam to my Jim"</option>
                <option value="You are my sunshine! 🌞">"You are my sunshine! 🌞"</option>
                <option value="Happy Valentine's! 💘">"Happy Valentine's! 💘",</option>
            </select>
            <br />
            <label for="sender-input">From:</label>
            <input type="text" id="sender-input" name="sender-input" onChange={senderName} value={sender}/>
    <button type='button' className='button' onClick={generateCard}>generate card</button>
        </form>

    </div>  
      )
}






ReactDOM.render(<App />,document.getElementById('root'));