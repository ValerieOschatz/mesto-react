import React from 'react';
import api from '../utils/Api';

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([{ name, about, avatar }, cardData]) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
      setCards(cardData);
    })
    .catch((err) => {
      console.log(err);
    })
  });

  return (
    <main className="main">
      <section className="profile">
        <a className="profile__avatar" href="#" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></a>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" aria-label="Открыть настройки профиля" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Открыть настройки фото" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <li className="element" key={card._id}>
              <img className="element__image" src={card.link} alt={card.name} />
              <button className="element__delete-button" type="button" aria-label="Удалить"></button>
              <div className="element__image-title-container">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-container">
                  <button className="element__like-button" type="button" aria-label="Нравится"></button>
                  <p className="element__like-counter">{card.likes.length}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;