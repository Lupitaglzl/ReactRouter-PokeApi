import React from "react";
import{Usefetch} from '../Usefetch';

export const Pokecard =({url}) =>{
    const estado =Usefetch(url)
    const{cargando,data}=estado
  
    return(
        <div>
            {
             cargando 
                ? 
                <h1>cargando</h1>

                :
                <div className="cards">
                    <div className="card-header">
                        <h4 className="card-title">{data.id}</h4>
                    </div>
                    <div className="card-body">
                        <img src={data.sprites.front_default} alt="pokemon"/>
                    </div>
                    <div className="card-footer">
                        <p className="card-text">{data.forms[0].name}</p>                   
                     </div>
                </div> 
            }
        </div>
    )
}