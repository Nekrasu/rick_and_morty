import { NavLink,useNavigate  } from 'react-router-dom'
import SearchBar from "../SearchBar/SearchBar"
import About from '../About/About'
import style from '../Nav/Nav.module.css'


export default function Nav ({onSearch,setAccess}){

    const navigate = useNavigate()


    function handleLogOut (){

        setAccess(false)

        navigate('/')

    }



    return (

        <div >

            <button className={style.button}>

                <NavLink className={style.nav} to={"/about"}>About</NavLink>

            </button>

            <button className={style.button} >

                <NavLink className={style.nav} to={"/home"}>Home</NavLink>

            </button>

            <button onClick={handleLogOut}>Log Out</button>


            <SearchBar onSearch={onSearch}/>

        </div>

    )
}