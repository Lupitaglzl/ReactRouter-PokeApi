import React,{useState} from "react";
import { Usefetch } from "./componentes/Usefetch";
import { Card } from "./componentes/card/Card";
import Main from './Components/Main';
import './App.css';
import './Components/style.css';
import { Route,Link,BrowserRouter,Routes } from 'react-router-dom';


const Home = () => <h1>Escoja que opción ver</h1>
const Pokemons = () => {
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
                    <div className="conten ">
                        <button onClick={()=>setUrl(data.previous)} className="btn">Anterior</button>
                        <button onClick={()=>setUrl(data.next)} className="btn">Next</button>
                    </div>
                </div>
            }
        </div>
    )
}
function Pokemon(){
    return(
    <div className="App">
        <Main />
    </div>
)
} 



const Matricula = () =>{
    return(
        <div>
            <h1 className='matricula'> Mi informacion es la siguiente</h1>
            <br/>
            <hr/>
            <br/>
            <p className='matricula'>Mi matricula es: 180707</p>
            <br/>
            <p className='matricula'>Mi nombre es: Gudalupe del Rocio Gonzalez Limon</p>
            <br/>
            <p className='matricula'>Mi carrera es: IDGS </p>
            <br/>
            <p className='matricula'>Mi Grupo es: 8-B </p>
        </div>
)
}


 

const App = () => {
    return(
      <BrowserRouter>
        <header>
            <nav>
                <Link to='/' className='nav-bar'>
                    Home
                </Link>
                <Link to='/Pokemons' className='nav-bar'>
                    Pokemons
                </Link>
                <Link to='/Pokemon' className='nav-bar'>
                    Pokemon
                </Link>
                <Link to='/Matricula' className='nav-bar'>
                    Matricula
                </Link>
            </nav>
        </header>
  
      <Routes> 
      <Route exact path='/' element={<Home />} >
      </Route>

      <Route path='/Pokemons'  element={<Pokemons />}>
      </Route>
  
      <Route path='/Pokemon'  element={<Pokemon />}>
      </Route>
  
      <Route path='/Matricula'  element={<Matricula />}>
      </Route> 
      </Routes>
      </BrowserRouter>
      )
  }

  export default App;