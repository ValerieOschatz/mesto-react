import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  } 

  return (
    <li className="element">
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <button className="element__delete-button" type="button" aria-label="Удалить"></button>
      <div className="element__image-title-container">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like-button" type="button" aria-label="Нравится"></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;