import { useState } from "react";
import {data} from "./data";

import imageOne from './Mounteen.jpg';
import './App.css';


function App() {
  const [foto, setFoto]=useState(0);
 
  const {image, travel} =data[foto];

  const previousFoto =(i) => {
    setFoto((foto => {
      foto --;
      if(foto < 0){
        foto = data.length -1;
      }
      return foto;
    }))
  }
  
  const nextFoto =() => {
    setFoto((foto => {
      foto ++;
      if(foto > data.length -1) {
      foto = 0;
      }
      return foto;
    }))

  
  
  }

  return (
<div>
     <div className='container'>  
        <div className='box'>
          <h1>Live & travel with Super Voyage!</h1>
          <h3>The most popular travel agency in Europe. </h3>
        </div>  
     </div>

<div className='containerTwo'>
<div className='quoteBox'>  
   <h2>“Keep your face always toward the sunshine – and shadows will fall behind you.” </h2>
   <p className='author'>~ Walt Whitman</p>
   </div>
   <img className='foto' src={imageOne} alt="mounteen"  />
</div>



<div className='containerDestinations'>
<h4 > The most exclusive destinations </h4>
<div>
  <h5>{travel}</h5>
</div>
<div className="containerButtons">  
<button className="btnOne" onClick={previousFoto}>BACK</button>
<img src={image} width= "500px" height="400px" alt= "foto"/>

  <button className="btnTwo" onClick={nextFoto}>NEXT</button>
</div>
</div>


{/* Remove countries */}



    </div>
  );
}

export default App;
