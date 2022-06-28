import React from 'react';

function Main() {
  function handleEditAvatarClick() {
    const popupEditAvatar = document.querySelector('.popup_type_change-avatar');
    popupEditAvatar.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const popupEditProfile = document.querySelector('.popup_type_edit');
    popupEditProfile.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const popupAddPlace = document.querySelector('.popup_type_add');
    popupAddPlace.classList.add('popup_opened');
  }

  return (
    <main className="main">
      <section className="profile">
        <a className="profile__avatar" href="#" onClick={handleEditAvatarClick}></a>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" type="button" aria-label="Открыть настройки профиля" onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile__profession">Исследователь океана</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Открыть настройки фото" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">

        </ul>
      </section>
    </main>
  );
}
  
export default Main;