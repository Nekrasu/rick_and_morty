import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../Redux/Action';
import style from '../Card/Card.module.css'
import { useState,useEffect } from 'react';

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

function Card({id,name,status,species,gender,origin,image,onClose,addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false)

   function handleFavorite (){
      if(isFav){
         setIsFav (false)
         removeFav(id)
      }
      else{
         setIsFav (true)
         addFav({id,name,status,species,gender,origin,image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         <button onClick={() => onClose(id)}>X</button>

         <h2>Numero De ID:{id}</h2>
         <img className={style.CardContainer}  src={image} alt="" /> 
         
         <Link to={`/detail/${id}`} >
            <h2>{name}</h2>
         </Link>

         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
      </div>
   );
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
