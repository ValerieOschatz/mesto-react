import { useState, useEffect, useContext } from 'react';
import api from '../utils/Api';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const [cards,  setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards()
    .then((cardData) => {
      setCards(cardData);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <main className="main">
      <section className="profile">
        <a className="profile__avatar" href="#" onClick={onEditAvatar} style={{ backgroundImage: `url(${currentUser.avatar})` }}></a>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" aria-label="Открыть настройки профиля" onClick={onEditProfile}></button>
          </div>
          <p className="profile__profession">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Открыть настройки фото" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id}
            card={card}
            onCardClick={onCardClick}
            currentUser={currentUser}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;