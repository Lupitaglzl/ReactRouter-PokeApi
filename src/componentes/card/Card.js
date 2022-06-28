import React from "react";
import { Pokecard } from "./Pokecard";
import '../card/Card.css'
 
export const Card =({results}) =>{
    return(
        <div className="container">
            <ul className="cards">
                {
                    results.map(p=>(
                        <li className="card-item" key={p.name}>
                            <Pokecard url={p.url}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )   
}