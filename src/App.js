import { useState } from "react";
import {data} from "./data";
import {dataTwo} from "./dataTwo";
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

    const [country, setCountry] = useState(dataTwo);
    

console.log(country)

    const removeCountry = (id) => {
    let newCountry= country.filter(element => element.id !==id);
    setCountry(newCountry);
  }
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

<div>

<div> 
<h6> Promo {country.length}  </h6>
console.log(country)
</div>

{country.map((elem => {
  const {id, paese, photo} = elem;
  return(
    <div key={id}>
    <div>
      <h2>{id} - {paese}</h2>
    </div>

    <div>
      <img src={photo} width="400px" alt="country"/>
    </div>
    <div>
      <button on Click={()=>removeCountry(id)}>Remove</button>
    </div>

    </div>
  )
}))}
<div>
  <button onClick={()=> setCountry([])}>Delete all</button>
</div>

</div>

    </div>
  );
}

export default App;
