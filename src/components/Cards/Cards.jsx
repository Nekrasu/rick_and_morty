import Card from '../Card/Card';
import style from '../Cards/Cards.module.css';

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.Cards}>
      {characters.map(({ id, name, status, species, gender, origin, image }) => {
        return (
          <div key={id} className={style.CardContainer}>
            <Card
              image={image}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              onClose={onClose}
            />
          </div>
        );
      })}
    </div>
  );
}
