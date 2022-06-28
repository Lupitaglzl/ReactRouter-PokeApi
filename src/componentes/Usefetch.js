import React, {useState,useEffect} from "react";

export const Usefetch =(url) =>{
    const[resultado,setResultado]=useState({cargando:true,data:null})
    useEffect(() =>{ 
        getDatos(url)
    },[url])
    async function getDatos(url){
        try{
        setResultado({cargando:true,data:null})
        const respuesta=await fetch(url)
        const data=await respuesta.json()
        setResultado({cargando:false,data})
        }
        catch(e){
            console.log(e)
        }
    }
    return resultado
} 