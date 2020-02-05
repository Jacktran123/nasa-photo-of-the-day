import React,{useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";

function App() {
  const [photoURL, setPhoto]=useState('');
  const [title, settitle]=useState();
  const [date, setDate]=useState();
  const [explan, setExplan]=useState();

  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=c9FUZSJs97qAEIBGr0Q5aHoS7BdLVt3rIezUtj5e')
    .then(res=>{
      settitle(res.data.title);
      console.log(res);
      setExplan(res.data.explanation);
      setDate(res.data.date);
      setPhoto(res.data.url)})
    .catch(error=> console.log(error))
    }, []);
    

  return (
    
    <div className="App">
       <h1> Title: {title} </h1>
       <h2> Date: {date} </h2>
       <p> Explanation: </p>
       <img src= {photoURL}  alt='This is image from NASA'/>
   
    </div>
  );
}

export default App;
