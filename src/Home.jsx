import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { Button } from 'antd';
function Home() {
  const [img,setImg]=useState([])
  const [counter,setCounter]=useState(0);
  const loading=useRef(null);
  const apiKey="https://dog.ceo/api/breeds/image/random";
  useEffect(()=>{
    fetchApi();

  },[counter])
  
   async function fetchApi(){
  try{
loading.current.style.display='block';
    const res=await fetch(apiKey);
  const Data=await res.json();
// console.log(Data.message)  
setImg(Data.message);
loading.current.style.display='none';

}
  catch(e){
    console.log("server down"+e)
  }
  }
  const add={
    border:'5px solid black',
    backGround:'blue',
    width:'300px',
    height:'100px'
  }
  function handleClick(){

console.log("click-count",setCounter(counter+1));
  }
  return (
   <div className='container'>
  <h1 className='heading'>
    Pet-Image-Generator
  </h1>
  <p className='heading subheading'>
    Our mission is to provide a platform that connects animal lovers with pets
  </p>
  <div ref={loading} className='loading-icn'>

  </div>
    <img className='img' style={{add}} src={img} alt="title" />
    <Button type='primary' className="primary-btn" onClick={handleClick}>Next</Button>
   </div>
  )
}

export default Home