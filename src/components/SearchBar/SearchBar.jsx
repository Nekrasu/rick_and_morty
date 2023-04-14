import { useState } from "react";
import style from '../SearchBar/SearchBar.module.css'

export default function SearchBar({onSearch}) {

   const [id,setId] = useState("")

   function handleChange(event){
      setId(event.target.value);
   }

   return (
      <div >
         
         <input className={style.Input} type='search' value={id}  onChange={handleChange}/>
         
         <button className={style.Boton} onClick={() => onSearch(id)}>Agregar</button> 

      </div>
   );
}
