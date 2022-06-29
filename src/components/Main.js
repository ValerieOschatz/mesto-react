import React from 'react';

function Main(props) {

  return (
    <main className="main">
      <section className="profile">
        <a className="profile__avatar" href="#" onClick={props.onEditAvatar}></a>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" type="button" aria-label="Открыть настройки профиля" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__profession">Исследователь океана</p>
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