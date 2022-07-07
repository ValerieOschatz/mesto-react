import React from 'react';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  } 

  return (
    <li className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <button className="element__delete-button" type="button" aria-label="Удалить"></button>
      <div className="element__image-title-container">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button className="element__like-button" type="button" aria-label="Нравится"></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;