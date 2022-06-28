import React from 'react';
import logo from './images/Logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page">
        <header className="header">
          <img className="header__logo" src={logo} alt="Логотип Место" />
        </header>

        <main className="main">
          <section className="profile">
            <a className="profile__avatar" href="#"></a>
            <div className="profile__info">
              <div className="profile__name-container">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button className="profile__edit-button" type="button" aria-label="Открыть настройки профиля"></button>
              </div>
              <p className="profile__profession">Исследователь океана</p>
            </div>
            <button className="profile__add-button" type="button" aria-label="Открыть настройки фото"></button>
          </section>

          <section className="elements">
            <ul className="elements__list">

            </ul>
          </section>
        </main>

        <footer className="footer">
          <p className="footer__content">&copy; 2022 Mesto Russia</p>
        </footer>

        <div className="popup popup_type_edit">
          <div className="popup__container">
            <form className="popup__form" name="edit-form" novalidate>
              <h2 className="popup__title">Редактировать профиль</h2>
              <label className="popup__form-field">
                <input className="popup__input" type="text" id="profileName" name="name" placeholder="Имя" required minlength="2" maxlength="40" />
                <span className='popup__input-error profileName-error'></span>
              </label>
              <label className="popup__form-field">
                <input className="popup__input" type="text" id="profileInfo" name="about" placeholder="О себе" required minlength="2" maxlength="200" />
                <span className='popup__input-error profileInfo-error'></span>
              </label>
              <button className="popup__submit-button" type="submit">Сохранить</button>
            </form>
            <button className="popup__close-button" type="button" aria-label="Закрыть окно настроек"></button>
          </div>
        </div>

        <div className="popup popup_type_add">
          <div className="popup__container">
            <form className="popup__form" name="add-form" novalidate>
              <h2 className="popup__title">Новое место</h2>
              <label className="popup__form-field">
                <input className="popup__input" type="text" id="name" name="name" placeholder="Название" required minlength="2" maxlength="30" />
                <span className='popup__input-error name-error'></span>
              </label>
              <label className="popup__form-field">
                <input className="popup__input" type="url" id="link" name="link" placeholder="Ссылка на картинку" required />
                <span className='popup__input-error link-error'></span>
              </label>
              <button className="popup__submit-button" type="submit">Создать</button>
            </form>
            <button className="popup__close-button" type="button" aria-label="Закрыть окно настроек"></button>
          </div>
        </div>

        <div className="popup popup_type_full-image">
          <div className="popup__container popup__container_image">
            <figure className="popup__figure">
              <img className="popup__image" src="#" alt="" />
              <figcaption className="popup__image-title"></figcaption>
            </figure>
            <button className="popup__close-button" type="button" aria-label="Закрыть окно настроек"></button>
          </div>
        </div>

        <div className="popup popup_type_delete-card">
          <div className="popup__container">
            <form className="popup__form" name="delete-form">
              <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
              <button className="popup__submit-button" type="submit">Да</button>
            </form>
            <button className="popup__close-button" type="button" aria-label="Закрыть окно настроек"></button>
          </div>
        </div>

        <div className="popup popup_type_change-avatar">
          <div className="popup__container">
            <form className="popup__form" name="avatar-form" novalidate>
              <h2 className="popup__title">Обновить аватар</h2>
              <label className="popup__form-field">
                <input className="popup__input" type="url" id="avatar" name="avatar" placeholder="Ссылка на картинку" required />
                <span className='popup__input-error avatar-error'></span>
              </label>
              <button className="popup__submit-button" type="submit">Сохранить</button>
            </form>
            <button className="popup__close-button" type="button" aria-label="Закрыть окно настроек"></button>
          </div>
        </div>

        <template className="element-template">
          <li className="element">
            <img className="element__image" src="#" alt="" />
            <button className="element__delete-button" type="button" aria-label="Удалить"></button>
            <div className="element__image-title-container">
              <h2 className="element__title"></h2>
              <div className="element__like-container">
                <button className="element__like-button" type="button" aria-label="Нравится"></button>
                <p className="element__like-counter"></p>
              </div>
            </div>
          </li>
        </template>
      </div>
    </div>
  );
}

export default App;
