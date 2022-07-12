function Card({ card, onCardClick, currentUser, onCardLike, onCardDelete }) {
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__delete-button ${!isOwn && 'element__delete-button_hidden'}`;

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like-button ${isLiked && 'element__like-button_active'}`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить" onClick={handleDeleteClick}></button>
      <div className="element__image-title-container">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} type="button" aria-label="Нравится" onClick={handleLikeClick}></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;