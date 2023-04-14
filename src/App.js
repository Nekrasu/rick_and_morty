import './App.css';
import { useState , useEffect} from 'react';
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Titulo from './components/Titulo/Titulo';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites';


function App() {
  const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
  const API_KEY = 'e0b3cfe9a62e.e018131049d277983854';
  
  const [characters , setCharacters] = useState([])

  const location = useLocation()

  const isRoot = location.pathname === "/"

  const navigate = useNavigate()

  const [access ,setAccess] = useState(false)

  const email = "tuUwUsabroso@gmail.com"

  const password = "Otaku69"

  function onSearch (id) {
    axios.get(`${URL_BASE}/${id}?key=${API_KEY}`)
       .then(response => response.data)
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('¡No hay personajes con este ID!');
          }
       });
 }

  function onClose(id){

      const charactersFiltered = characters.filter(character => character.id !== Number(id));

      setCharacters(charactersFiltered)
  }

  function login(userData){

    if(userData.email === email && userData.password === password){
      setAccess(true)
      navigate("/home")
    }

  }

  useEffect(() =>{
    !access && navigate("/")
  },[access, navigate])

  return (
      <div className='App'>
        <Titulo/>
        {!isRoot && <Nav onSearch={onSearch} access={access} setAccess={setAccess}/>}

        <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>} />
        </Routes>
      </div>
  );
}

export default App;
