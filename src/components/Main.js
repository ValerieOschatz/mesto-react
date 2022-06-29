import React from 'react';
import api from '../utils/Api';

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    // Promise.all([api.getUserInfo(), api.getInitialCards()])
    // .then(([userData, cardData]) => {
    //   profileInfo.setUserInfo(userData);
    //   cardList.renderItems(cardData.reverse());
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
    api.getUserInfo()
    .then(({ name, about, avatar }) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
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

        </ul>
      </section>
    </main>
  );
}

export default Main;