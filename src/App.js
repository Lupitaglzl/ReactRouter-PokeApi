import React,{useState} from "react";
import { Usefetch } from "./componentes/Usefetch";
import { Card } from "./componentes/card/Card";
import './App.css';
 
const App=()=>{
  const[url,setUrl]=useState(' https://pokeapi.co/api/v2/pokemon/')
  const estado =Usefetch(url)
  const{cargando,data}=estado
  cargando? console.log('cargando'):console.log(data.results)
  return (
      <div>
          <h1>Lista de Pokemons</h1>

          {
              cargando
              ?
              <h1>Cargando...</h1>
              :
              <div className="caja">
              <Card results = {data.results} />

                  <div className="container ">
                      <button onClick={()=>setUrl(data.previous)} className="btn">Anterior</button>
                      <button onClick={()=>setUrl(data.next)} className="btn">Next</button>
                  </div>

              </div>
          }
      </div>
  )
}

export default App;
